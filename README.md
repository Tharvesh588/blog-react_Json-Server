# 📸 Instagram Clone

A Simple Instagram-inspired web application built with **React**, **Vite**, and a **local JSON server** for mock data handling. This is a front-end focused project designed for UI/UX replication and basic client-side functionality.

## 🔧 Tech Stack

- ⚛️ React (via Vite)
- 💨 Tailwind CSS (optional - assumed)
- 🔗 React Router
- 🗃️ Local JSON Server (for simulating backend)
- 📦 Vite (lightning-fast dev environment)

## 📁 Project Structure

```
Tharvesh_io/
├── DB/                        ## JSON server database
├── node_modules/              ## Dependencies
├── src/                       ## Source code
│   ├── assets/                ## Static assets
│   ├── components/            ## UI components
│   │   ├── Feed/
│   │   ├── Recomend/
│   │   └── Sidebar/
│   └── Default/               ## Default layout and related views
│       ├── components/
│       │   ├── Contact/
│       │   ├── footer/
│       │   ├── Header/
│       │   ├── Home/
│       │   └── Post/
│       └── public/
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/instagram-clone.git
cd instagram-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start JSON Server

Make sure your `db.json` file is in the `DB/` directory. Then run:

```bash
npx json-server --watch DB/db.json --port 1042
```

> This will run the mock API server on `http://localhost:1042`.

### 4. Start the React App

```bash
npm run dev
```

> Vite will serve the app at `http://localhost:5173` by default.

## 📦 Available Scripts

- `npm run dev`: Start development server (Vite)
- `npm run build`: Build the app for production
- `npm run preview`: Preview production build locally

## 🌐 API Endpoints (Example)

Assuming your `db.json` contains something like:

```json
{
  "posts": [
    {
      "id": 1,
      "user": {
        "id": 101,
        "username": "john_doe",
        "profile_pic": "https://i.pravatar.cc/150?img=12"
      },
      "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "caption": "Beautiful sunset 🌅 #Nature",
      "likes": 120,
      "comments": [
        {
          "user": "alice_wonder",
          "comment": "Wow! Amazing shot! 📸"
        },
        {
          "user": "mark_92",
          "comment": "Where is this place?"
        }
      ],
      "timestamp": "2025-02-11T14:30:00Z"
    }
    .... ]
}
```

You can access:

- `http://localhost:1042/posts`
- `http://localhost:1042/profile`
- `http://localhost:1042/suggestion `
- `http://localhost:1042/stories `


## 🖼️ Features

- Home feed with posts
- Sidebar with stories and profile suggestions
- Reusable UI components
- Fake backend integration via JSON Server
- Responsive design (optional)

## 🧑‍💻 Author

Made with ❤️ by [Tharvesh](https://linkedin.com/in/tharvesh2005)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
```
