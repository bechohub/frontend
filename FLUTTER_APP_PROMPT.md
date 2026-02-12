# 📱 Flutter App Prompt for bechoHub

**Objective:**
Build a high-performance, polished B2B Marketplace mobile application using **Flutter** and **Supabase** that mirrors the functionality and aesthetic of the existing Next.js web platform (`bechoHub`).

## 🛠 Tech Stack
- **Framework:** Flutter (Latest Stable)
- **Backend:** Supabase (Auth & Database)
- **State Management:** Riverpod or Provider (Developer's choice for simplicity/scale)
- **UI Kit:** Google Fonts (`Outfit` & `Inter`), Lucid-style icons.

## 🎨 Design Language (Premium B2B)
- **Theme:** Clean, professional, trusted.
- **Colors:**
  - **Backgrounds:** Slate-50 / White.
  - **Primary:** Cyan-600 (for Buyers), Indigo-600 (for Suppliers).
  - **Text:** Slate-900 (Primary), Slate-500 (Secondary).
- **Typography:**
  - Headings: `Outfit` (Bold, Modern).
  - Body: `Inter` (Clean, Readable).

## 🚀 Key Features & Screens

### 1. Splash & Onboarding
- **Splash Screen:** Animated Logo (`bechoHub`) scaling in.
- **Onboarding:** 3-slide carousel explaining "Source Smarter", "Verified Suppliers", "Grow Faster".

### 2. Authentication (Crucial)
- **Login:** Email & Password.
- **Signup:** Multi-step form matching the web:
  - **Role Selection:** "I am a Buyer" vs "I am a Supplier".
  - **Step 1:** Email (Validate format), Password (Min 6 chars, Toggle visibility).
  - **Step 2:** Name, Phone (Validate 10 digits).
  - **Step 3:** Company Name, Category, Business Scale, GST Number.
- **Dual Role Logic:**
  - If a user tries to sign up with an existing email for a *different* role, prompt them to enter their **original password**.
  - If validated, upgrade their `role` in `profiles` table to `'both'`.

### 3. Main Dashboard (Bottom Nav)
- **Home:**
  - Welcome banner ("Hello, [Name]").
  - Stats (Active RFQs, Connections).
  - Quick Actions button grid.
- **Marketplace (Search):**
  - List of Suppliers/Buyers (fetched from `profiles` table).
  - Filter by Category.
  - Search Bar.
- **Post RFQ:**
  - Form to submit a "Request for Quotation".
  - Fields: Item Name, Quantity, Target Price, Description.
- **Profile:**
  - View User Details (Company, GST, etc.).
  - Edit Profile.
  - Logout.

## 🗄 Database Schema (Existing)

The app MUST connect to this existing Supabase schema:

```sql
create table public.profiles (
  id uuid references auth.users primary key,
  email text,
  first_name text,
  last_name text,
  company_name text,
  role text,            -- 'buyer', 'supplier', or 'both'
  category text, 
  business_scale text,
  gst_number text,
  created_at timestamp
);
```

**RLS Policies are already set:**
- Users can only edit *their own* profile.
- Everyone can read *all* profiles (Directory).

## 📝 Implementation Steps for the AI Agent
1.  **Initialize:** `flutter create becho_hub` and add `supabase_flutter`.
2.  **Setup Auth:** Create a `SupabaseAuthRepository` to handle sign-in, sign-up, and role upgrades.
3.  **Build UI:** Create atomic widgets for `CustomTextField`, `PrimaryButton`, `B2BBadge`.
4.  **Connect Data:** Fetch `profiles` for the Directory screen.
5.  **Polishing:** Add loading states and error handling for all async actions.

---
**Instruction to Agent:**
Start by setting up the project structure and the Authentication flow, as that is the core of the secure platform.
