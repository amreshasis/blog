
# blog
=======
# Blog Application

This is a full-stack blog application where users can view blogs, sign up, log in, and manage their own blogs.
The application is built with React for the frontend and Node.js with Express for the backend, and it uses MongoDB as the database.

# Technologies Used
# Frontend
React
React Router
CSS
# Backend
Node.js
Express.js
MongoDB
Mongoose
JSON Web Tokens (JWT)
bcrypt (for password hashing)

## Features

### **Frontend**
- Home page displaying all blogs.
- "Read More" button redirects to the login page if the user is not logged in.
- Signup and login functionality.
- My Blogs page for logged-in users to view, edit, and delete their blogs.
- Navbar with dynamic options for login, signup, and sign out.

### **Backend**
- User authentication with JWT (JSON Web Tokens).
- CRUD operations for blogs (Create, Read, Update, Delete).
- Protected routes for managing blogs (requires authentication).
- MongoDB integration for storing user and blog data.

## Installation and Setup

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/blog-app.git
cd blog-app

## Usage
Open the application in your browser at http://localhost:3000.
View blogs on the home page.
Click "Read More" to log in if not authenticated.
Sign up or log in to access the "My Blogs" page.
Create, edit, or delete blogs as a logged-in user.

