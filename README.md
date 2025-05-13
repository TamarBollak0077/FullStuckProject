# RehubCenterProject / FullStuckProject

#Project Description
This project is a Full Stack web application developed using ASP.NET Core (C#) and React, designed as an online platform for a rehabilitation and recovery center. The website serves as a digital gateway for individuals seeking support with addiction recovery, providing access to educational resources, treatment methodologies, and professional guidance.

The system includes the following core features:

Informational Pages – Detailed explanations about various addiction types, available therapies, and the center’s unique approach to recovery.
Professional Team Section – Profiles and credentials of therapists, counselors, and medical staff.
Registration Portal – Allows new users to sign up for programs or schedule consultations.
Personal Dashboard – A secure area where registered users can manage appointments, track progress, and communicate with the support team.

This platform aims to offer a structured, secure, and user-friendly experience for individuals and families seeking meaningful recovery paths.

Key Technologies
Backend:

ASP.NET Core 6

C#

Entity Framework Core

RESTful API

SQL Server

Frontend:

React (with JavaScript)

Axios for HTTP requests

React Router

Bootstrap / Tailwind CSS 

Development Tools:

Visual Studio 2022

Visual Studio Code

SQL Server Management Studio (SSMS)

Main Features
Full CRUD operations via a user-friendly UI

Integration between React and ASP.NET Core Web API

Database interactions using EF Core

Clear separation of concerns (Controllers, Services, Data Access Layers)


Getting Started
Prerequisites
Visual Studio 2022 with ASP.NET and .NET 6+ support

Node.js installed

SQL Server 

Git installed

Setup Instructions
Clone the repository:
git clone https://github.com/yourusername/yourproject.git

Run the Backend:
Open the solution in Visual Studio.
Configure the database connection string in appsettings.json.
Run the following commands in the Package Manager Console:

Add-Migration InitialCreate
Update-Database
Press Start to launch the Web API.

Run the Frontend:
cd ClientApp
npm install
npm run dev
Project Structure

/ProjectRoot
│
├── /RehubCenterReact      # React frontend
├── /Controllers          # Web API controllers
├── /Entities             # Entity models
├── /Data                 # EF DbContext and migrations
├── /Services             # Business logic layer
├── appsettings.json      # Configuration file
└── Program.cs / Startup.cs
Screenshots (Optional)
Add interface screenshots here for better visualization.
