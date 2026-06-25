# bechoHub Frontend - Architecture Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Overall Architecture](#overall-architecture)
4. [Project Structure](#project-structure)
5. [Component Hierarchy](#component-hierarchy)
6. [Data Flow & Authentication](#data-flow--authentication)
7. [API Routes](#api-routes)
8. [Services & Utilities](#services--utilities)
9. [Page Routes](#page-routes)
10. [Styling & UI](#styling--ui)
11. [Analytics & Monitoring](#analytics--monitoring)
12. [Performance & Optimization](#performance--optimization)
13. [Security](#security)
14. [Deployment](#deployment)

---

## Project Overview

**bechoHub** is a **B2B Marketplace** platform connecting verified manufacturers with high-intent buyers in India. The frontend is built with **Next.js 16** (App Router) and provides user-friendly interfaces for:

- Buyers: Sourcing smarter from verified suppliers
- Sellers: Listing products and managing offers
- Admins: Managing platform content and user accounts

---

## Technology Stack

### Frontend Framework

- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **React DOM 19.2.3** - DOM rendering

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS 4** - CSS transformations
- **Lucide React 0.562.0** - Icon library
- **Framer Motion 12.23.26** - Animation library
- **Lenis 1.3.19** - Smooth scrolling library

### Backend & Database

- **Supabase JS 2.95.3** - Backend-as-a-Service (PostgreSQL)
- **Supabase SSR 0.8.0** - Server-side rendering support

### Utilities & Tools

- **clsx 2.1.1** - Conditional CSS class utilities
- **jsPDF 4.1.0** - PDF generation
- **jsPDF-autotable 5.0.7** - PDF table generation
- **Tailwind Merge 3.4.0** - Merge Tailwind classes intelligently

### Analytics & Monitoring

- **PostHog JS 1.364.1** - Product analytics
- **Vercel Analytics 1.6.1** - Web vitals monitoring

### Development Tools

- **TypeScript 5** - Type safety
- **ESLint 9** - Code linting
- **Prettier 3.8.1** - Code formatting
- **Husky 9.1.7** - Git hooks
- **Lint-staged 16.4.0** - Pre-commit linting

---

## Overall Architecture

### High-Level System Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client Browser                          │
└──────────────────────┬──────────────────────────────────────────┘
                       │
                       │ HTTP/HTTPS
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                 Next.js Frontend (App Router)                   │
│                                                                 │
│  ┌──────────────────┐  ┌──────────────────┐  ┌────────────────┐ │
│  │   Pages & Routes │  │   API Routes     │  │   Components   │ │
│  ├──────────────────┤  ├──────────────────┤  ├────────────────┤ │
│  │ • Auth           │  │ • /api/bids      │  │ • Navbar       │ │
│  │ • Browse         │  │ • /api/products  │  │ • Footer       │ │
│  │ • RFQ            │  │ • /api/rfqs      │  │ • Forms        │ │
│  │ • Admin          │  │                  │  │ • Animations   │ │
│  │ • Profile        │  │                  │  │ • UI Utils     │ │
│  └──────────────────┘  └──────────────────┘  └────────────────┘ │
│                                                                 │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │              Providers & Context                           │ │
│  ├────────────────────────────────────────────────────────────┤ │
│  │ • PostHog Provider (Analytics)                            │ │
│  │ • Custom Providers                                         │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │              Services & Utils                              │ │
│  ├────────────────────────────────────────────────────────────┤ │
│  │ • Supabase Client (Browser)                               │ │
│  │ • Utilities & Helpers                                      │ │
│  │ • Constants & Industry Data                                │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │              Styling & Global CSS                          │ │
│  ├────────────────────────────────────────────────────────────┤ │
│  │ • Tailwind CSS v4                                          │ │
│  │ • Global Styles                                            │ │
│  │ • Font Variables (Inter, Outfit, Space Grotesk)            │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
    ┌────────────┐ ┌────────────┐ ┌──────────────┐
    │ Supabase   │ │ PostHog    │ │ Vercel       │
    │ PostgreSQL │ │ Analytics  │ │ Web Vitals   │
    │ Database   │ │ Service    │ │ Monitoring   │
    └────────────┘ └────────────┘ └──────────────┘
```

---

## Project Structure

```
bechohub_frontend/
│
├── app/                           # Next.js App Router
│   ├── layout.tsx                 # Root layout wrapper
│   ├── page.tsx                   # Home page
│   ├── error.tsx                  # Error boundary
│   ├── not-found.tsx              # 404 page
│   ├── globals.css                # Global styles
│   ├── providers.tsx              # Context providers (PostHog)
│   ├── PostHogPageview.tsx        # Analytics pageview tracker
│   ├── manifest.ts                # PWA manifest
│   ├── robots.ts                  # SEO robots config
│   ├── sitemap.ts                 # SEO sitemap
│   │
│   ├── components/                # Reusable components
│   │   ├── Navbar.tsx             # Navigation bar
│   │   ├── Footer.tsx             # Footer component
│   │   ├── FormSuccess.tsx        # Success message component
│   │   ├── RFQForm.tsx            # RFQ submission form
│   │   ├── SmoothScroll.tsx       # Smooth scrolling wrapper
│   │   ├── Preloader.tsx          # Loading spinner
│   │   └── Animators.tsx          # Animation utilities
│   │
│   ├── actions/                   # Server actions
│   │   ├── auth.ts               # Authentication actions
│   │   └── loginWithRoles.ts     # Role-based login
│   │
│   ├── api/                       # API routes (Backend endpoints)
│   │   ├── bids/
│   │   │   └── route.ts          # Bid management endpoints
│   │   ├── products/
│   │   │   └── route.ts          # Product management endpoints
│   │   └── rfqs/
│   │       └── route.ts          # RFQ management endpoints
│   │
│   ├── auth/                      # Authentication pages
│   │   └── callback/
│   │       └── route.ts          # OAuth callback handler
│   │
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── browse/
│   │   └── page.tsx              # Browse products/suppliers
│   ├── categories/
│   │   └── page.tsx              # Industry categories page
│   ├── login/
│   │   └── page.tsx              # Login page
│   ├── signup/
│   │   └── page.tsx              # Signup page
│   ├── privacy/
│   │   └── page.tsx              # Privacy policy
│   ├── terms/
│   │   └── page.tsx              # Terms of service
│   ├── profile/
│   │   └── page.tsx              # User profile
│   ├── rfq/
│   │   └── page.tsx              # RFQ creation/management
│   ├── seller/
│   │   └── [id]/
│   │       └── page.tsx          # Dynamic seller profile
│   ├── role-selection/
│   │   └── page.tsx              # Role selection during signup
│   ├── admin/
│   │   └── page.tsx              # Admin dashboard
│   ├── dev-browse/
│   │   └── page.tsx              # Dev/demo browse page
│   └── dev-welcome/
│       └── page.tsx              # Dev/demo welcome page
│
├── utils/                         # Utility functions
│   ├── supabase/
│   │   ├── client.ts             # Supabase browser client
│   │   ├── server.ts             # Supabase server client
│   │   └── middleware.ts         # Auth middleware
│   └── utils.ts                   # General utilities
│
├── constants/
│   └── index.ts                   # App constants (categories, config)
│
├── types/
│   └── index.ts                   # TypeScript type definitions
│
├── lib/
│   ├── mock-data.ts              # Mock data for development
│   └── utils.ts                   # Library utilities
│
├── public/
│   └── images/                    # Static images
│
├── config/
│   ├── next.config.ts            # Next.js configuration
│   ├── tailwind.config.ts        # Tailwind CSS config
│   ├── postcss.config.mjs        # PostCSS config
│   ├── eslint.config.mjs         # ESLint configuration
│   ├── tsconfig.json             # TypeScript config
│   └── middleware.ts             # Global middleware
│
├── .env                           # Environment variables
├── .env.local                     # Local environment override
├── package.json                   # NPM dependencies
├── README.md                      # Project documentation
└── production_setup.sql          # Database schema
```

---

## Component Hierarchy

### Root Layout Structure

```
html (lang="en")
└── PHProvider (PostHog Provider)
    └── body (with Tailwind utilities)
        ├── PostHogPageview (Analytics tracker)
        └── SmoothScroll (Smooth scroll provider)
            ├── Preloader (Loading state)
            ├── {children}
            │   ├── Navbar
            │   ├── Page Content
            │   │   ├── Hero sections
            │   │   ├── Forms
            │   │   ├── Cards
            │   │   ├── Grids
            │   │   └── etc.
            │   └── Footer
            └── Analytics (Vercel Web Vitals)
```

### Key Component Relationships

```
App Layer
├── Layout
│   ├── Navbar
│   │   ├── Navigation Links
│   │   ├── Auth Status
│   │   └── User Menu
│   ├── Main Content
│   │   ├── Page Component
│   │   │   ├── RFQForm (on RFQ page)
│   │   │   ├── ProductGrid (on browse)
│   │   │   ├── SellerProfile (on seller page)
│   │   │   └── etc.
│   │   └── Dynamic [id] Routes
│   └── Footer
│       ├── Links
│       ├── Contact Info
│       └── Social Links

Utility Components
├── FormSuccess
├── Preloader
├── SmoothScroll
└── Animators
```

---

## Data Flow & Authentication

### Authentication Flow

```
User Browser
    │
    ├─────────────► /login or /signup page
    │
    ├─────────────► Submit credentials
    │                    │
    │                    ▼
    │           [loginWithRoles.ts]
    │           (Server Action)
    │                    │
    │                    ▼
    │           Supabase Auth API
    │           (Create user/session)
    │                    │
    │                    ▼
    │           /auth/callback/route.ts
    │           (OAuth callback handler)
    │                    │
    │                    ▼
    │           Verify & Store JWT
    │           in HTTP-only cookies
    │                    │
    │                    ▼
    │           Redirect to dashboard
    │                    │
    │                    ▼
    └◄────────── Request with Auth Token
```

### Data Fetching Flow

```
Component/Page
    │
    ├─ Client-side (Browser)
    │   └─► utils/supabase/client.ts
    │       └─► Supabase Browser Client
    │           └─► PostgreSQL Database
    │
    └─ Server-side (API Routes)
        └─► /api/products, /api/bids, /api/rfqs
            └─► utils/supabase/server.ts
                └─► Supabase Server Client
                    └─► PostgreSQL Database
```

---

## API Routes

### RESTful Endpoints

#### Products API

```
POST /api/products
  - Create new product listing
  - Body: { name, description, category, price, ... }
  - Auth: Required (Seller/Admin)

GET /api/products
  - Fetch all products with filters
  - Query: ?category=textile&sort=latest&limit=20
  - Auth: Optional

GET /api/products/[id]
  - Fetch single product details
```

#### RFQ (Request For Quote) API

```
POST /api/rfqs
  - Create new RFQ
  - Body: { title, description, category, quantity, ... }
  - Auth: Required (Buyer)

GET /api/rfqs
  - List RFQs for user
  - Query: ?status=open&sort=date

GET /api/rfqs/[id]
  - Get RFQ details & responses
```

#### Bids API

```
POST /api/bids
  - Submit bid on RFQ
  - Body: { rfq_id, price, delivery_time, ... }
  - Auth: Required (Seller)

GET /api/bids
  - List bids for RFQs or products
  - Query: ?rfq_id=xyz&status=pending

PUT /api/bids/[id]
  - Update bid status (accept/reject)
  - Auth: Required (Buyer/Admin)
```

#### Authentication API

```
POST /auth/callback
  - OAuth callback handler
  - Processes third-party auth responses
```

---

## Services & Utilities

### Supabase Services

#### `utils/supabase/client.ts`

```typescript
// Browser client for client-side data fetching
export function createClient()
  └─ Creates Supabase browser client
     └─ Uses PUBLIC environment variables
     └─ Used in React components
```

#### `utils/supabase/server.ts`

```typescript
// Server client for server-side operations
export function createClient(cookieStore)
  └─ Creates Supabase server client
     └─ Accesses private environment variables
     └─ Used in API routes & server actions
```

#### `utils/supabase/middleware.ts`

```typescript
// Authentication middleware
  └─ Validates JWT tokens
  └─ Refreshes expired tokens
  └─ Protects routes
```

### Server Actions

#### `app/actions/auth.ts`

```typescript
export async function login(email, password);
export async function logout();
export async function signup(email, password, userData);
```

#### `app/actions/loginWithRoles.ts`

```typescript
export async function loginWithRoles(email, password, role)
  └─ Authenticates user
  └─ Assigns role (buyer/seller/admin)
  └─ Stores in session
```

### Utilities

#### `utils/utils.ts`

```typescript
// General purpose utilities
  ├─ formatters (dates, currency, etc.)
  ├─ validators (email, phone, etc.)
  ├─ transformers (data shape conversion)
  └─ helpers (common operations)
```

#### `constants/index.ts`

```typescript
export const INDUSTRY_CATEGORIES = [
  { id: "textiles", name: "Textiles & Apparel", icon: "Users2" },
  { id: "electronics", name: "Electronics & Electrical", icon: "Zap" },
  { id: "industrial", name: "Industrial Machinery", icon: "Factory" },
  // ... more categories
]

export const getIndustryIcon(iconName)
  └─ Maps icon strings to Lucide components
```

---

## Page Routes

### Public Pages

| Route         | Component                 | Purpose                   |
| ------------- | ------------------------- | ------------------------- |
| `/`           | `page.tsx`                | Home/landing page         |
| `/about`      | `app/about/page.tsx`      | About bechoHub            |
| `/browse`     | `app/browse/page.tsx`     | Browse products/suppliers |
| `/categories` | `app/categories/page.tsx` | Industry categories       |
| `/privacy`    | `app/privacy/page.tsx`    | Privacy policy            |
| `/terms`      | `app/terms/page.tsx`      | Terms of service          |

### Authentication Pages

| Route             | Component                     | Purpose                         |
| ----------------- | ----------------------------- | ------------------------------- |
| `/login`          | `app/login/page.tsx`          | User login                      |
| `/signup`         | `app/signup/page.tsx`         | New user registration           |
| `/role-selection` | `app/role-selection/page.tsx` | Select user role (buyer/seller) |
| `/auth/callback`  | `app/auth/callback/route.ts`  | OAuth callback handler          |

### User Pages (Protected)

| Route      | Component              | Purpose                 |
| ---------- | ---------------------- | ----------------------- |
| `/profile` | `app/profile/page.tsx` | User profile & settings |
| `/rfq`     | `app/rfq/page.tsx`     | Create/manage RFQs      |

### Seller Pages (Protected)

| Route          | Component                  | Purpose                |
| -------------- | -------------------------- | ---------------------- |
| `/seller/[id]` | `app/seller/[id]/page.tsx` | Dynamic seller profile |

### Admin Pages (Protected)

| Route    | Component            | Purpose         |
| -------- | -------------------- | --------------- |
| `/admin` | `app/admin/page.tsx` | Admin dashboard |

### Dev/Demo Pages

| Route          | Component                  | Purpose          |
| -------------- | -------------------------- | ---------------- |
| `/dev-welcome` | `app/dev-welcome/page.tsx` | Dev landing page |
| `/dev-browse`  | `app/dev-browse/page.tsx`  | Dev browse demo  |

### Error Handling

| Route        | Component           | Purpose        |
| ------------ | ------------------- | -------------- |
| `/not-found` | `app/not-found.tsx` | 404 error page |
| `/error`     | `app/error.tsx`     | Error boundary |

---

## Styling & UI

### CSS Architecture

```
Global Styles
├── Tailwind CSS v4 (Utility-first)
│   ├── Color Palette
│   │   ├── Primary: Cyan-600 (#06B6D4)
│   │   ├── Background: Zinc-950 (#09090B)
│   │   ├── Text: #f0f0fa
│   │   └── Selection: Cyan-600/30
│   │
│   ├── Typography
│   │   ├── Font-sans: Inter
│   │   ├── Font-outfit: Outfit
│   │   └── Font-space: Space Grotesk
│   │
│   └── Layout
│       ├── Grid utilities
│       ├── Flexbox utilities
│       └── Responsive utilities
│
├── globals.css
│   └── Custom CSS variables & overrides
│
└── Component Styles (Inline Tailwind classes)
    └── All components use `className` with Tailwind utilities
```

### Font Variables

```html
<html>
    <body
        class="
      ${inter.variable}         /* --font-inter */
      ${outfit.variable}        /* --font-outfit */
      ${spaceGrotesk.variable}  /* --font-space */
      antialiased font-sans
      bg-zinc-950 text-[#f0f0fa]
    "
    ></body>
</html>
```

### Animation Library

- **Framer Motion**: Used for component animations & transitions
- **Lenis**: Smooth scrolling experience
- **CSS Transitions**: Tailwind CSS transition utilities

---

## Analytics & Monitoring

### PostHog Integration

```
PostHog Setup Chain:
└── app/providers.tsx (PHProvider)
    └── Initializes PostHog client
    │   ├── API Key: NEXT_PUBLIC_POSTHOG_KEY
    │   ├── Host: NEXT_PUBLIC_POSTHOG_HOST
    │   └── Config: person_profiles, capture_pageview
    │
    └── PostHogProvider wraps entire app
        └── app/PostHogPageview.tsx
            └── usePostHog() hook
                └── Tracks page views
                └── Tracks custom events
                └── User identification
```

### Vercel Web Vitals

```
Analytics Component:
└── <Analytics /> (Vercel/analytics/react)
    └── Tracks Core Web Vitals
        ├── LCP: Largest Contentful Paint
        ├── FID: First Input Delay
        ├── CLS: Cumulative Layout Shift
        └── Sends to Vercel Analytics Dashboard
```

---

## Performance & Optimization

### Image Optimization

```
Next.js Image Optimization:
├── Remote image sources (whitelist)
│   ├── images.unsplash.com
│   ├── images.pexel.com
│   └── plus.unsplash.com
│
└── Benefits:
    ├── Automatic sizing
    ├── Format conversion (WebP)
    ├── Lazy loading
    └── Responsive images
```

### Code Splitting

```
App Router Benefits:
├── Per-route code splitting
├── Automatic dynamic imports
├── Lazy-loaded components
└── Optimized bundle sizes
```

### CSS Optimization

- **Tailwind CSS**: Only includes used styles
- **PostCSS**: Minifies and optimizes CSS
- **Merge Utility**: `tailwind-merge` prevents style conflicts

---

## Security

### Security Headers

```
HTTP Headers Configuration:
├── X-DNS-Prefetch-Control: on
│   └─ Enables DNS prefetching for external links
├── Strict-Transport-Security (HSTS)
│   └─ max-age: 63072000 (2 years)
│   └─ Forces HTTPS connections
├── X-XSS-Protection: 1; mode=block
│   └─ Blocks reflected XSS attacks
├── X-Frame-Options: SAMEORIGIN
│   └─ Prevents clickjacking/iframe embedding
├── X-Content-Type-Options: nosniff
│   └─ Prevents MIME-sniffing
└── Referrer-Policy: origin-when-cross-origin
    └─ Controls referrer information
```

### Authentication Security

```
JWT in HTTP-only Cookies:
├── Stored in HTTP-only cookies (XSS protection)
├── Secure flag (HTTPS only)
├── SameSite policy
└── Automatic refresh via middleware

Supabase Auth:
├── Uses Row-Level Security (RLS)
├── Secure API key management
└── Automatic session handling
```

### Privacy & SEO

```
robots.ts
├── Allows: Google Bot, etc.
└── Disallows: Private admin paths

sitemap.ts
├── Lists all public routes
├── Sets update frequency
└── Helps search engine indexing
```

---

## Deployment

### Build Configuration

```
next.config.ts Configuration:
├── Image Optimization
│   └─ Remote pattern whitelist
├── Security Headers
│   └─ All major protection headers
├── poweredByHeader: false
│   └─ Hides Next.js version
└── Custom headers for all routes
```

### Environment Variables

```
.env file structure:
├── NEXT_PUBLIC_SUPABASE_URL
│   └─ Public Supabase endpoint
├── NEXT_PUBLIC_SUPABASE_ANON_KEY
│   └─ Public auth key
├── NEXT_PUBLIC_POSTHOG_KEY
│   └─ PostHog project key
├── NEXT_PUBLIC_POSTHOG_HOST
│   └─ PostHog server URL
└── Private keys (for server-side only)
```

### Build & Deployment

```
npm scripts:
├── npm run dev
│   └─ Start development server (localhost:3000)
├── npm run build
│   └─ Create production build
├── npm run start
│   └─ Start production server
└── npm run lint
    └─ Run ESLint checks

Deployment platforms:
├── Vercel (Recommended)
│   └─ Built for Next.js
├── Docker (production_setup.sql included)
└── Any Node.js-compatible host
```

---

## Development Workflow

### Code Quality

```
Husky + Lint-staged:
├── Pre-commit hooks
│   └─ Runs linting on staged files
├── Prettier formatting
│   └─ Auto-formats code
├── ESLint validation
│   └─ Checks for errors & warnings
└── Prevents commits of broken code
```

### TypeScript

```
Type Safety:
├── tsconfig.json strict mode
├── Generated types from Supabase
├── Component prop types
└── Full IDE autocomplete support
```

---

## Summary

The **bechoHub Frontend** follows **modern web development best practices**:

✅ **Next.js App Router** - Latest React server/client components  
✅ **TypeScript** - Type-safe development  
✅ **Tailwind CSS** - Scalable styling  
✅ **Supabase** - Real-time database & auth  
✅ **PostHog** - Product analytics  
✅ **Security First** - Headers, HTTPS, auth middleware  
✅ **Performance** - Image optimization, code splitting  
✅ **SEO** - Sitemaps, robots, metadata  
✅ **Animations** - Framer Motion & Lenis  
✅ **Monitoring** - Vercel Web Vitals

This architecture supports **scalable growth** for India's leading B2B marketplace platform.
