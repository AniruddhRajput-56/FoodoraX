# 🍽️ FoodoraX

FoodoraX is a modern **React-based food ordering web application** that allows users to explore restaurants and browse menus in real-time using the **Swiggy API**.
The project focuses on **performance, clean UI, and scalable React architecture**.

---

## 🚀 Features

* 🔍 **Smart Search**
  Quickly find restaurants using the powerful search functionality.

* ⭐ **Top Rated Filter**
  Easily filter and explore the highest-rated restaurants.

* 📋 **Restaurant Menu Page**
  View complete restaurant menus with pricing and ratings.

* 🛒 **Cart System**
  Add and manage items in the cart using **Redux state management**.

* ⚡ **Optimized Performance**
  Implemented **Lazy Loading** and **Shimmer UI** for smooth loading.

* 📱 **Responsive Design**
  Works seamlessly on **mobile, tablet, and desktop** devices.

* 🎨 **Modern UI**
  Styled using **Tailwind CSS** for a clean and minimal interface.

---

## 🛠️ Tech Stack

* **React.js**
* **Redux Toolkit**
* **React Router**
* **Tailwind CSS**
* **Swiggy API**
* **Jest + React Testing Library** (for testing)

---

## 🛰️ Swiggy API Proxy (CORS Handling)
FoodoraX uses backend API proxy handlers to access Swiggy's internal APIs without CORS issues.
Browsers block direct requests to Swiggy APIs due to security restrictions, so requests are routed through a server layer that fetches data and safely returns it to the frontend.

**How it works:**
```
Browser → /api handlers → Swiggy API → Server → Browser
```

The proxy layer:
- Prevents CORS blocking
- Performs server-to-server API requests
- Adds required headers to mimic real browser requests
- Ensures reliable restaurant and menu data fetching

---
## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/AniruddhRajput-56/FoodoraX.git
```

Navigate to the project folder:

```bash
cd React-Project
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

---

## 🧪 Running Tests

```bash
npm test
```

---

## 👨‍💻 Developer

**Aniruddh Rajput**

GitHub:
https://github.com/AniruddhRajput-56

---

## ⭐ Support

If you like this project, consider giving it a **star ⭐ on GitHub**!
