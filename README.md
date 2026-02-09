# bechoHub | The Future of Indian B2B

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![Next.js](https://img.shields.io/badge/Next.js-16.1-black) ![React](https://img.shields.io/badge/React-19-blue) ![Supabase](https://img.shields.io/badge/Supabase-Database-green) ![License](https://img.shields.io/badge/license-Private-red)

**bechoHub** is India's premier B2B marketplace platform connecting verified manufacturers with global buyers. Built for scale, security, and performance.

## 🚀 Features

### **Core Platform**
- **Dual Role Architecture**: Unique hybrid account system allowing users to operate as both **Buyers** and **Suppliers** from a single persistent identity.
- **Secure Authentication**: Powered by Supabase Auth with Row Level Security (RLS) to ensure strict data isolation.
- **RFQ System**: Real-time Request for Quotation engine for dynamic buyer-supplier negotiations.

### **Admin Console (`/admin`)**.
- **Real-Time Analytics**: Live tracking of User Signups, Active Buyers, and Verified Suppliers.
- **Data Export**: Automated PDF generation for user data exports using `jspdf`.
- **User Management**: Role-based filtering and status monitoring.

### **User Experience**
- **Responsive Design**: Mobile-first architecture using Tailwind CSS v4.
- **Smart Validation**: instant feedback on form inputs (Email, Phone) with visual cues.
- **Performance**: Server-side rendering (SSR) with Next.js 16 App Router for lightning-fast page loads.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database**: [Supabase (PostgreSQL)](https://supabase.com/)
- **Auth**: Supabase Auth + SSR Middleware
- **Motion**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## ⚡ Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/bechohub/frontend.git
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Initialization
Run the SQL scripts provided in `production_setup.sql` in your Supabase SQL Editor to set up:
- `profiles` table with RLS policies.
- Triggers for auto-creating profiles on signup.
- Security policies for role-based access.

### 5. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🔒 Security Architecture

### Row Level Security (RLS)
We employ a "Zero Trust" database policy:
- **Public Read**: Directory data is visible to all.
- **Private Write**: Users can ONLY edit their own data (`auth.uid() = id`).
- **Role Guards**: Admin actions are protected by both frontend gates and backend policies.

### Admin Access
The `/admin` route is protected by a custom credential gate. Access is restricted to authorized personnel only.

---

## 📄 License
Copyright © 2026 bechoHub. All rights reserved.
Proprietary software. Unauthorized copying or distribution is strictly prohibited.
