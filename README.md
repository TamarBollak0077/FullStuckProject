# **RehubCenterProject / FullStackProject**

---

## **Project Description**

This project is a **Full Stack web application** developed using **ASP.NET Core (C#)** and **React**, designed as an online platform for a **rehabilitation and recovery center**.

The website serves as a digital gateway for individuals seeking support with addiction recovery, providing access to:

- Educational resources  
- Treatment methodologies  
- Professional guidance  

### **Core Features**

- **Informational Pages** – Detailed explanations about various addiction types, available therapies, and the center’s recovery approach.  
- **Professional Team Section** – Profiles and credentials of therapists, counselors, and medical staff.  
- **Registration Portal** – Allows users to sign up for programs or request consultations.  
- **Personal Dashboard** – A secure area for registered users to manage appointments, track recovery progress, and contact the support team.

> This platform aims to deliver a structured, secure, and user-friendly experience for individuals and families on the path to meaningful recovery.

---

## **Key Technologies**

### **Backend**

- ASP.NET Core 6  
- C#  
- Entity Framework Core  
- RESTful API  
- SQL Server  

### **Frontend**

- React (with JavaScript)  
- Axios (for HTTP requests)  
- React Router  
- Bootstrap / Tailwind CSS (optional for styling)  

### **Development Tools**

- Visual Studio 2022  
- Visual Studio Code  
- SQL Server Management Studio (SSMS)  

---

## **Main Features**

- Full CRUD operations via a user-friendly UI  
- Seamless integration between React frontend and ASP.NET Core Web API  
- Database interactions using Entity Framework Core  
- Clear separation of concerns (Controllers, Services, Data Access Layers)  

---

## **Getting Started**

### **Prerequisites**

- Visual Studio 2022 (with .NET 6+ support)  
- Node.js  
- SQL Server  
- Git  

---

## **Setup Instructions**

### **1. Clone the Repository**

```bash
git clone https://github.com/yourusername/yourproject.git

### **2. Run the Backend**

- Open the solution in **Visual Studio**  
- Configure your database connection string inside `appsettings.json`  
- Open the **Package Manager Console** and run:

```bash
Add-Migration InitialCreate
Update-Database

### **3. Run the Frontend**

Navigate to the frontend directory and install dependencies:

```bash
cd ClientApp
npm install
npm run dev

/ProjectRoot
│
├── /RehubCenterReact       # React frontend (ClientApp)
│   ├── /components         # Reusable React components
│   ├── /pages              # Page-level components (e.g., Home, Dashboard, Register)
│   ├── /services           # Axios service wrappers for API calls
│   └── App.jsx             # Main application component
│
├── /Controllers            # ASP.NET Core API controllers
├── /Entities               # EF Core entity models
├── /Data                   # ApplicationDbContext and migrations
├── /Services               # Business logic services
│
├── appsettings.json        # Application configuration (e.g., DB connection string)
├── Program.cs              # Entry point for ASP.NET Core application
└── Startup.cs              # Middleware and service configuration


