**Willeder Coding Assignment** is a simple web application that allows users fetch data from a public API `https://api.instantwebtools.net/v1/passenger?page=0&size=10` and display it using lazy loading. The application is built using ReactJS and uses Firebase for authentication. The application is hosted on Firebase.


live demo: #to be added


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
# to be added


