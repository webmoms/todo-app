# 📝 To-Do List App

Una moderna applicazione To-Do con autenticazione utente, sviluppata con:

- **React + Vite** (front-end)
- **Node.js + Express + MongoDB** (back-end)
- **JWT** per autenticazione sicura
- **Tailwind CSS** per una UI responsive

---

## 🚀 Funzionalità

- ✅ Registrazione e Login sicuri con JWT
- ✅ Aggiunta, modifica e cancellazione dei task
- ✅ Ogni utente vede solo i propri task
- ✅ UI responsive e moderna con Tailwind
- ✅ Salvataggio dati su MongoDB

---

## 🧠 Tecnologie

| Front-end        | Back-end              | Database    |
|------------------|-----------------------|-------------|
| React, Vite      | Node.js, Express.js   | MongoDB     |
| Tailwind CSS     | JWT, bcrypt           | Mongoose    |
| React Router     | dotenv, cors          |             |

---

## ⚙️ Installazione


```bash
# Clona il repository
git clone https://github.com/webmoms/todo-app.git
cd todo-app
---
Back-end (server)
cd server
cp .env.example .env
npm install
npm run dev
---
Assicurati che MongoDB sia in esecuzione
---
Front-end (client)
Apri un'altra finestra terminale:
cd client
npm install
npm run dev
---
Ora puoi accedere all'app su http://localhost:5173
----
🌐 Deployment
Client → Vercel / Netlify

Server → Render / Railway / Heroku

Database → MongoDB Atlas

📁 Struttura del progetto
todo-app/
├── client/       # Front-end React
├── server/       # Back-end Express
├── .gitignore
├── README.md
---
🙌 Autore
Realizzato da WEBMOMS




