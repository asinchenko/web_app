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
```

## App logic 

This app will try to connect to 
```
http://WEB_APP_URL:WEB_APP_PORT 

to /heath - to chech Backend API connection 
to /db-check - to check PG connection over Backend API.
```

You should better use *Ingress NGINX* to set up the *WEB_APP_URL* routing.

Abstract example: 

```
server mywebsite.local 80;
/ -> to web_app service
/health -> to web_backend service;
/db-check -> to web_backend service;
``` 
