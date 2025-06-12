
---

````markdown
# 🛠️ Admin Dashboard Assignment

This project is a **frontend admin dashboard interface** built for a frontend internship assignment. It demonstrates a secure login form, a responsive dashboard layout, and includes modern UI/UX features like dark mode, card components, and sidebar navigation.

---

## 📌 Features

### ✅ Part 1: Login Page
- Clean and responsive layout using **shadcn/ui** + **Tailwind CSS**
- Fields:
  - Email 
  - Password (with show/hide toggle)
- Mock authentication (hardcoded credentials)
- Redirects to `/dashboard` upon successful login

### ✅ Part 2: Admin Dashboard
- Sidebar with navigation links:
  - Dashboard (active)
  - Users
  - Settings (non-functional placeholder links)
- Topbar with app title and **dark/light mode toggle**
- Main content with:
  - Welcome message
  - Cards, avatar, badge, and statistics placeholders
- Fully **responsive** layout for mobile, tablet, and desktop

---

## 🌗 Bonus Features
- ✅ Dark Mode using `next-themes` and `shadcn ThemeProvider`
- ✅ Theme toggle button (sun/moon icons)
- ⏳ Form validation with `react-hook-form` and `zod` (*to be added*)
- ⏳ Sidebar expand/collapse animation (*optional*)

---

## 🧪 Demo

🔗 Live Demo (Hosted on Vercel): *[Coming Soon]*

---

## 🧰 Tech Stack

| Tool            | Use                     |
|-----------------|--------------------------|
| Next.js (App Router) | Framework & Routing     |
| Tailwind CSS    | Styling                  |
| shadcn/ui       | Prebuilt UI Components   |
| React Hooks     | State Management         |
| next-themes     | Dark/Light Mode Support  |

---

## 🔐 Login Credentials

Use the following **hardcoded credentials** to login:

```txt
Email: admin@example.com
Password: admin123
````

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/aviral-pal/admin_assignment.git
cd admin_assignment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```bash
src/
├── app/
│   ├── layout.tsx        # App layout with ThemeProvider
│   ├── page.tsx          # Homepage with admin login
│   ├── login/            # Login page
│   └── dashboard/        # Admin dashboard page
├── components/
│   ├── theme-toggle.tsx  # Dark/light toggle button
│   └── ui/               # shadcn UI components
```

---

## 📦 Deployment

To deploy the app to [Vercel](https://vercel.com/):

```bash
npx vercel
```

Follow the CLI prompts and paste the final deployment URL in your assignment submission.

---

## ✅ Assignment Checklist

* [x] Login page with validation
* [x] Mock authentication
* [x] Dashboard page with sidebar
* [x] Responsive layout
* [x] Use of shadcn/ui
* [x] Dark mode support
* [x] Hosted on GitHub
* [ ] Bonus: Sidebar animation
* [ ] Bonus: react-hook-form + zod validation
* [ ] Live deployment link

---

## 👨‍💻 Author

**Aviral Pal**
🔗 [GitHub](https://github.com/aviral-pal) | 📧 [aviralpal31@gmail.com](mailto:aviralpal31@gmail.com)

---

## 📄 License

This project is for **educational and internship assignment purposes only**.

```
