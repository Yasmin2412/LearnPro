# 📘 LearnPro – MERN Stack Learning Management Web App

LearnPro is a full-stack Learning Management System (LMS) built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to explore courses, enroll, take quizzes, and track progress — making it a one-stop solution for online learning.

---


## 🛠️ Tech Stack

### 🧩 Frontend (`learnpro-frontend`)
- React.js
- React Router DOM
- Axios
- Tailwind CSS / Bootstrap / SCSS *(choose your stack)*

### 🧩 Backend (`learnpro-backend`)
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT Authentication
- RESTful API

---

## 📁 Project Structure

LearnPro/
├── learnpro-frontend/ # React Frontend
│ └── ...
├── learnpro-backend/ # Node + Express Backend
│ └── ...
├── .gitignore
├── README.md

yaml

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Yasmin2412/LearnPro.git
cd LearnPro
2. Setup Backend
bash

cd learnpro-backend
npm install
Create a .env file in learnpro-backend/:

env
MONGO_URI=your_mongodb_connection_url
JWT_SECRET=your_secret_key
PORT=5000
Start server:

bash
Copy
Edit
npm run dev
3. Setup Frontend
bash

cd ../learnpro-frontend
npm install
npm start
This will run on: http://localhost:3000

✨ Features
🧑‍🏫 Instructor dashboard

🎓 Course enrollment

📝 Quiz & assessments

🔐 User authentication (JWT)

📊 Progress tracking

🔎 Search & filter courses

📸 Screenshots
Add your screenshots in a /screenshots folder and link them like below:

📚 Home Page : (./screenshots/Screenshot (380).png)

🔐 Login Page : (./screenshots/Screenshot (384).png)

🚀 Deployment (Optional)
Frontend: Vercel / Netlify

Backend: Render / Railway / Cyclic

Database: MongoDB Atlas

🤝 Contribution
Pull requests are welcome!
To contribute:

1.Fork the repo

2.Create a new branch

3.Commit changes

4.Push & raise PR

