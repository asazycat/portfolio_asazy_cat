# Portfolio Website

A full-stack developer portfolio built with **TypeScript**, **Express.js**, and **Handlebars**, following an **MVC architecture**. The application retrieves project and qualification data from a **MySQL database** and renders it dynamically on the server.

This project was built to showcase both frontend presentation and backend structure, with an emphasis on maintainability, separation of concerns, and clean data flow.

The application is **hosted using Railway**, with a MySQL database configured for production.

---

## Tech Stack

### Frontend
- Handlebars (server-side templating)
- HTML / CSS
- Client-side JavaScript

### Backend
- Node.js
- Express.js
- TypeScript
- MVC architecture

### Database
- MySQL
- MySQL Workbench
- MySQL command-line tools

### Hosting
- Railway (application and database hosting)

---

## Features

- Server-side rendered pages using Handlebars
- Dynamic data fetched from a MySQL database
- MVC pattern for clear separation of concerns
- Modular routing and controllers
- Reusable layouts and partials
- Projects and qualifications rendered from database records
- Can be run locally or deployed via Railway

---

## Project Architecture

The application follows the **Model–View–Controller (MVC)** pattern:

- **Models**  
  Handle database queries and data logic.

- **Views**  
  Handlebars templates responsible for rendering UI.

- **Controllers**  
  Act as the bridge between models and views, handling requests and responses.

This structure improves scalability, readability, and long-term maintainability.

---

## Prerequisites (Local Development)

Before running the project locally, ensure you have:

- Node.js (v18+ recommended)
- MySQL Server
- MySQL Workbench
- MySQL command-line tools
- npm

---

## Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/asazycat/portfolio_asazy_cat
cd portfolio_asazy_cat
```

### 2. Install dependencies
```bash
npm install
```

### 3. Database setup
- Create a MySQL database using MySQL Workbench or CLI
- Import the provided SQL schema (if applicable)
- Update database credentials in the environment configuration
- Create and .env file in root and put down the following

Example `.env`:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=portfolio_db
```

### 4. Run the project
```bash
npm run dev
```

The application will be available at:
```
http://localhost:5000
```

---

## Scripts

- `npm run dev` – Run the app in development mode
- `npm run build` – Compile TypeScript
- `npm start` – Run compiled production build

---

## Deployment

The project is deployed using **Railway**, which hosts both the Express application and the MySQL database. Environment variables are managed through Railway’s dashboard for secure configuration in production.

---

## Future Improvements

- Authentication for admin-only content updates
- Client-side enhancements (animations)
- Improved error handling and logging
- Additional performance optimizations

---

## Author

**Asad Jawaid**  
Frontend / Full-Stack Web Developer