# Portfolio de fotografía


## Tecnologías Utilizadas
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-16.0%2B-blue)](https://reactjs.org/)
![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
[![Node.js](https://img.shields.io/badge/Node.js-14.0%2B-green)](https://nodejs.org/)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)


## 🚀 Estructura de proyecto

Dentro de mi proyecto de Astro, verás las siguientes carpetas y archivos:

```text
/
├── public/
├── src/
│   └── components/ 
│       └── About.astro
│       └── Card.astro
│       └── EmailForm.tsx
│       └── Footer.astro
│       └── Header.astro
│       └── Social.astro 
│   └── emails/
│       └── TemplateEmail.tsx
│   └── images/
│   └── layouts/
│       └── Layout.astro
│   └── pages/
│       └── index.astro
│       └── bodas.astro
│       └── productos.astro
│       └── corporativos.astro
│       └── api/
│           └── sendEmail.json.ts  
└── package.json
```

Astro mira los archivos `.astro` dentro de `src/pages/`. Cada página expone una ruta basada en el nombre del archivo.

Dentro de `src/components/`, encontramos componentes que reutilicé hechos en `.astro` y `.tsx`.

Los elementos estáticos como algunas imagenes se encuentran en `public/`.

## 🧞 Comandos

Todos los comandos inician desde el root del proyecto, a través de la terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instalar dependencias                            |
| `npm run dev`             | Inicia local dev server en `localhost:4321`      |
| `npm run build`           | Crea el sitio de producción en `./dist/`         |
| `npm run preview`         | previsualiza antes de deployar                   |


## 👀 Quieres ver la web en producción ?

Visita [la web oficial](https://www.dosgecontenidos.com) 
