# Interior SB – Full Stack Interior Design Web Application

## 📌 Project Overview

**Interior SB** is a full stack web application built to showcase interior design services through an interactive, multi-page website. It includes essential features such as a responsive layout and a dynamic contact form that stores user inquiries in a MySQL database. The project demonstrates the core concepts of full stack development, including frontend design, form validation, backend processing, and database interaction.

---

## 💡 Features

- Multi-page layout: Home, Pricing, About, and Contact
- Responsive design compatible with desktop, tablet, and mobile
- Contact form with client-side validation using JavaScript
- Backend integration with PHP for server-side form handling
- MySQL database connection to store user queries securely
- Developed and tested using XAMPP (Apache + MySQL)

---

## 🛠️ Technologies Used

### Frontend:
- HTML5  
- CSS3  
- JavaScript  

### Backend:
- PHP  
- MySQL  
- XAMPP (Local Server)  

---

## 🧱 Database Schema

**Database Name:** `interior_sb`  
**Table Name:** `contact`

| Column   | Type         | Description              |
|----------|--------------|--------------------------|
| id       | INT (AUTO_INCREMENT, PRIMARY KEY) | Unique ID for each entry |
| name     | VARCHAR(50)  | User's full name         |
| plan     | VARCHAR(30)  | Selected service plan    |
| email    | VARCHAR(50)  | User's email address     |
| number   | VARCHAR(15)  | Phone number             |
| address  | VARCHAR(100) | Residential address      |
| message  | TEXT         | User's message/query     |
| gender   | VARCHAR(10)  | Selected gender option   |

---

## 🚀 How to Run the Project

1. Download and install **XAMPP** (https://www.apachefriends.org/index.html)
2. Start **Apache** and **MySQL** services from XAMPP control panel
3. Copy the project folder (`Interior_SB`) into `htdocs` directory (inside XAMPP folder)
4. Open **phpMyAdmin** and create a database named `interior_sb`
5. Import or create the `contact` table as per the schema above
6. Open browser and go to: `http://localhost/Interior_SB/contact_us.html`
7. Fill and submit the contact form to test data submission

---

## 📷 Screenshots

*(Add screenshots of your Home, Contact form, and phpMyAdmin page showing inserted data)*

---

## 📌 Limitations

- No admin panel to view or manage contact entries
- No authentication system implemented
- Data not displayed back to the user (only stored)

---

## 📈 Future Enhancements

- Add user login/registration system
- Display submitted contact entries in a dashboard
- Integrate email notifications after form submission
- Deploy online using a real domain and hosting service

---

## 📚 References

- [W3Schools](https://www.w3schools.com/)
- [GeeksforGeeks](https://www.geeksforgeeks.org/)
- [TutorialsPoint](https://www.tutorialspoint.com/)
- [PHP Manual](https://www.php.net/)
- [MySQL Docs](https://dev.mysql.com/doc/)

---

## 👤 Author

**Swaraj Bendke**  
Student | Web Developer | PHP & MySQL Enthusiast

