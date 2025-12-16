# 🔥 Stunning Todo App (Node.js + Express)

A beautiful and simple **Todo Application** built using **Node.js, Express, EJS, and Bootstrap**.
This app supports full **CRUD operations** (Create, Read, Update, Delete) with a clean glassmorphism UI.

---

## ✨ Features

* ➕ Add new todos
* ✏️ Edit todos using a Bootstrap modal
* 🗑️ Delete todos with confirmation
* 🎨 Stunning glassmorphism UI
* ⚡ Simple Express architecture (Routes, Controllers, Views)
* 🧠 Beginner-friendly code structure

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, Bootstrap 5, HTML, CSS
* **Architecture:** MVC Pattern

---

## 📁 Project Structure

```
project
│
├── server.js
├── routes
│   └── todoRoutes.js
├── controllers
│   └── todoController.js
├── views
│   └── index.ejs
└── assets
    └── js
        └── script.js
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/muskanyadav24/stunning-todo-app.git
```

### 2️⃣ Go to project folder

```bash
cd stunning-todo-app
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the server

```bash
node server.js
```

### 5️⃣ Open in browser

```
http://localhost:3000
```

---

## 🧪 How Update (Edit) Works

* Click **Edit** button on any todo
* A **Bootstrap modal** opens
* Todo text is auto-filled
* On clicking **Update**, the form dynamically sends data to:

```
POST /update/:id
```

This keeps the UI clean while enabling update functionality.

---

## 📌 Notes

* Todos are stored **temporarily in memory** (no database yet)
* Restarting the server will reset the todo list

---

## 🔮 Future Improvements

* ✅ MongoDB / Database integration
* ⚡ AJAX (update without page reload)
* 🔐 User Authentication
* 📱 Mobile responsiveness improvements

---

## 📸 Screenshots
<img width="959" height="413" alt="image" src="https://github.com/user-attachments/assets/55d63f08-fa3e-4ef9-a368-8eef1941f291" />


## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 👩‍💻 Author

Made with ❤️ by **Muskan Yadav** 😎
If you like this project, don’t forget to ⭐ the repo!

---
