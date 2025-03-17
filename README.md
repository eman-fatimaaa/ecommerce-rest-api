# E-commerce REST API

## Overview
This project is an **E-commerce REST API** designed to support an online shopping platform. It provides functionalities for user management, product management, cart and checkout, and order processing. The API follows RESTful principles and ensures security through authentication and authorization mechanisms.

## Technologies Used

### Back-end
- **Node.js** - Runtime environment
- **Express.js** - Web framework for building REST APIs
- **MongoDB** - NoSQL database, managed using Mongoose
- **JWT/OAuth** - Authentication and security
- **Multer** - For handling file uploads (if product images are needed)
- **dotenv** - For environment configuration
- **Postman** - API testing
- **Jest / Mocha & Chai** - Optional unit testing

## Core Features

### User Management
- User registration and login (JWT or OAuth authentication)
- Role-based access control (Admin, Customer, Vendor)
- Profile management

### Product Management
- CRUD operations (Create, Read, Update, Delete) for products
- Categorization and tagging for product filtering

### Cart & Checkout
- Add/remove items from the cart
- Calculate total cost

### Order & Payment System
- Generate invoices and process orders

### API & Security
- RESTful API built with Express.js
- Middleware for authentication and authorization
- Rate limiting and input validation for enhanced security

## Getting Started

### Prerequisites
- Install **Node.js** and **npm**
- Install MongoDB (or use a cloud service like MongoDB Atlas)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ecommerce-api.git
   cd ecommerce-api

