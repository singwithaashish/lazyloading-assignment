**Willeder Coding Assignment** is a simple web application that allows users fetch data from a public API `https://api.instantwebtools.net/v1/passenger?page=0&size=10` and display it using lazy loading. The application is built using ReactJS and uses Firebase for authentication. The application is hosted on Firebase.


live demo: https://testing-apps-8af7f.web.app/


## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)



## Features
- User can login using Email and Password
- User can Register using Email and Password and a Name
- User can fetch data from the API and display it using lazy loading
- User can logout



## Tech Stack
- ReactJS
- Firebase
- TailwindCSS
- Vite



## Getting Started
- Clone the repository
- Install dependencies using `npm install`
- run `npm run dev` to start the development server
- run `npm run build` to build the project



## Project Structure
```
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── src
│   ├── components
│   │   ├── layout
│   │   │   ├── Header.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── ui
│   │   │   ├── LabeledInput.tsx
│   │   │   └── PassengerCard.tsx
│   ├── firebase
│   │   ├── config.ts
│   │   └── configSecrets.ts # this file is not included in the repository
│   ├── pages
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── ResetPassword.tsx
│   │   └── SignupPage.tsx
|   ├── utils
│   │   ├── authentication.ts
│   │   └── useFirebaseAuthentication.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── typings.d.ts
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Screenshots

![Screenshot 2023-06-24 at 14-10-39 Willeder Page](https://github.com/singwithaashish/lazyloading-assignment/assets/52033403/166cbc31-ea38-4d13-a355-9c80266fdf48)


![Screenshot 2023-06-24 at 14-11-01 Willeder Page](https://github.com/singwithaashish/lazyloading-assignment/assets/52033403/1b8d1597-6851-4565-8820-f8bdaec60372)

![Screenshot 2023-06-24 at 14-11-23 Willeder Page](https://github.com/singwithaashish/lazyloading-assignment/assets/52033403/ad08862e-d747-43df-9c61-81529ea97396)


![Screenshot 2023-06-24 at 14-11-37 Willeder Page](https://github.com/singwithaashish/lazyloading-assignment/assets/52033403/3e563577-fb2b-475c-bf72-1a9852e960db)


![Screen Shot 2023-06-24 at 14 18 02](https://github.com/singwithaashish/lazyloading-assignment/assets/52033403/55b02501-c0e7-45b6-8261-1ea6d6acccbc)


!![Screen Shot 2023-06-24 at 14 18 17](https://github.com/singwithaashish/lazyloading-assignment/assets/52033403/60773ace-450d-414f-bcc4-6500154e7955)



![Screen Shot 2023-06-24 at 14 22 18](https://github.com/singwithaashish/lazyloading-assignment/assets/52033403/5d83f53b-36b0-4457-92b4-af76208f8543)


![Screen Shot 2023-06-24 at 14 22 13](https://github.com/singwithaashish/lazyloading-assignment/assets/52033403/20312a39-bdd0-4a02-a1ff-3cffe860634b)



