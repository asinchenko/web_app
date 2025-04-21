# 🌐 React + Vite DevOps Playground

This project is a lightweight frontend application built with **ReactJS** and **Vite**. It's designed to help you test connections between the frontend, backend, and a PostgreSQL database — perfect for DevOps workflows and sandbox environments.

---

## 🚀 Getting Started

### 🔧 Configuration

This app relies on two environment variables:

- `WEB_APP_URL` – the URL where your frontend will be accessible (e.g., `mysite.local`)
- `WEB_APP_PORT` – the port your app will run on (e.g., `80`)

These variables can be injected using [`envsubst`](https://man7.org/linux/man-pages/man1/envsubst.1.html). Use `envsubst` to substitute the variables into your React code, specifically in `src/App.tsx`.

```bash
export WEB_APP_URL=mysite.local
export WEB_APP_PORT=80

envsubst < src/App.template.tsx > src/App.tsx

