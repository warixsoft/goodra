# Goodra

AI-powered warehouse management system for inventory ops—receiving, picking, packing, transfers, adjustments, and stock alerts.

This repository is a **Next.js frontend** recreation of the [Goodra SaaS WMS Dashboard UI Kit](https://www.figma.com/design/IHL6QzI5fbYvwGOXjOwvTk/Lite---Goodra---Saas-WMS-Dashboard-UI-Kit), with mock data only (no backend).

## Features

- Auth flows (sign in, password reset)
- Dashboard with operations overview and AI suggestions
- Product & category management
- Low-stock alerts and restock requests
- Warehouse structure (warehouses, zones, racks, bins)
- Inventory transactions (stock in/out, transfer, adjustment, opname)
- Reports and workspace settings
- Responsive layout for desktop and mobile

## Tech stack

- [Next.js](https://nextjs.org/) 15 (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Lucide](https://lucide.dev/) + [Recharts](https://recharts.org/)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Sign-in accepts any credentials and lands on the dashboard.

```bash
npm run build   # production build
npm start       # run production server
```

## License

Private — all rights reserved.
