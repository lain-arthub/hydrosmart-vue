# Hydrosmart

Hydrosmart is a Vue 3 + Vite frontend web application for monitoring and managing water systems. It provides dashboards, historical analytics and reporting, settings management, user administration, and authentication (login, create account, and password recovery).

## Authors

- Eullaine Caballero
- Ando Eloisa
- Magsigay Ashley

## Tech Stack

- Vue 3 (`<script setup>` SFCs)
- Vite
- Tailwind CSS
- Chart.js / vue-chartjs
- Vue Router

## Project Structure

- `src/pages` — page-level components (Login, Dashboard, Analytics, Settings, Create Account, Forgot Password, Home Dashboard, Admin User Management)
- `src/components` — reusable components (Dashboard layout, control page, analytics content, dashboard-home content, settings page, admin user management)
- `src/index.js` — application entry point

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs on `http://localhost:5173` by default.

## Features

- User authentication (login, create account, forgot password)
- Home dashboard overview
- Historical analytics & reporting with charts
- Settings and sensor management
- Admin user management (add users, user list)
- Responsive UI with Tailwind CSS

## IDE Support

For the best Vue development experience, use [Vue.js Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension for VS Code and disable Vetur.

Learn more about IDE support in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
