
import { render } from '@react-email/render';
import '../../styles.css'
import { TemplateEmail } from '../emails/TemplateEmail';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
const EmailForm = () => {
  
  const [data,setData] = useState({
    name:"",
    mail:"",
    textarea:"",
  })
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const {name, mail, textarea} = Object.fromEntries(formData)
        const finalHtml = render(<TemplateEmail username={name as string} mail={mail as string} text={textarea as string}/>, {pretty:true,})
        const finalText = render(<TemplateEmail username={name as string} mail={mail as string} text={textarea as string}/>, {plainText:true,})

        if (!isFormValid) {
          Swal.fire({
            title: "ERROR",
            text: "Complete todos los campos del formulario correctamente por favor",
            icon: "error"
          });
          return;
        }
        try{          
                try {
                const res = await fetch('/api/sendEmail.json', {
                  method: 'POST',
                  headers: {
                    'Content-type': 'application-json',
                  },
                  body: JSON.stringify({
                    from: 'Formulario Web <onboarding@resend.dev>',
                    to: ['tu@email.com'],
                    subject: 'Consulta ingresada',
                    html: finalHtml,
                    text: finalText,
                  })
                });
                const data = await res.json()
                Swal.fire({
                  title: "perfecto!",
                  text: "Mensaje enviado con éxito",
                  icon: "success",
                }).then((result) => {
                  if (result.isConfirmed) {
                    location.reload()
                  }})
                
                }catch(e){
                  console.error(e)
                }         
        }catch(e){
            console.error(e)
        }
    }

    const handleInputChange = (e) => {
      const {name,value} = e.target
      setData((prevData) => ({
        ...prevData,
        [name]:value
      }));
      if (name === "mail") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|com.ar|ar)$/;
        setIsValidEmail(emailRegex.test(value));
      }
    }

    useEffect(() => {
      const isNameValid = data.name.trim().length > 0;
      const isMailValid = data.mail.trim().length > 0 && isValidEmail;
      const isMessageValid = data.textarea.trim().length > 0;
      setIsFormValid(isNameValid && isMailValid && isMessageValid);
    }, [data, isValidEmail]);

   
    
    return (
    
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="coolinput">
        <label className="text">Nombre:</label>
        <input type="text" name="name" className="input" autoComplete='off'
        onChange={handleInputChange}/>
      </div>
      <div className="coolinput">
        <label className="text">Mail:</label>
        <input type="text" name="mail" className="input" autoComplete='off'
        onChange={handleInputChange}/>
      </div>
      <div className="coolinput">
        <label className="text">Mensaje:</label>
        <textarea name="textarea" className="textarea" autoComplete='off' rows={4} cols={19} onChange={handleInputChange}
        ></textarea>
      </div>

      <button className="enviar" type="submit">Enviar mensaje</button>
      
    </form> 
  )
}

export default EmailForm