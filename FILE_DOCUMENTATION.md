# BechoHub Frontend - Complete File Documentation

**Overview**: This document provides a comprehensive guide to every file in the bechoHub frontend project, explaining its purpose and how it fits into the overall architecture.

---

## 📋 Table of Contents

1. [Root Configuration Files](#root-configuration-files)
2. [App Directory Structure](#app-directory-structure)
3. [Constants](#constants)
4. [Types](#types)
5. [Libraries & Utilities](#libraries--utilities)
6. [Public Assets](#public-assets)
7. [Documentation Files](#documentation-files)

---

## 🔧 Root Configuration Files

### **package.json**

- **Purpose**: Defines project metadata, dependencies, and npm scripts
- **Contains**:
    - Project name: `b2b_marketplace`
    - Version and scripts: `dev`, `build`, `start`, `lint`
    - Dependencies: React, Next.js, Supabase, Tailwind, Framer Motion, etc.
    - Dev dependencies: ESLint, Prettier, Husky, TypeScript
    - Pre-commit hooks configuration with `lint-staged`

### **tsconfig.json**

- **Purpose**: TypeScript compiler configuration
- **Key Settings**:
    - Target: `ES2017`
    - Module system: `esnext`
    - JSX mode: `react-jsx`
    - Path aliasing: `@/*` maps to project root
    - Incremental compilation enabled for faster builds

### **next.config.ts**

- **Purpose**: Next.js framework configuration
- **Contains**:
    - Image optimization settings for external image sources (Unsplash, Pexel)
    - Security headers (DNS prefetch, Strict Transport Security)
    - Removed "X-Powered-By" header for privacy

### **tailwind.config.ts**

- **Purpose**: Tailwind CSS utility framework configuration
- **Defines**: Custom theme colors, spacing, typography, and design system rules

### **postcss.config.mjs**

- **Purpose**: PostCSS configuration for CSS processing
- **Handles**: Tailwind CSS v4 compilation and transformations

### **middleware.ts**

- **Purpose**: Next.js middleware for request processing
- **Functionality**:
    - Handles authentication session updates via Supabase middleware
    - Patterns: Excludes static files, images, and favicon from processing
    - Runs on every request (except excluded paths)

### **eslint.config.mjs**

- **Purpose**: ESLint configuration for code quality
- **Enforces**: Code standards, best practices, and Next.js-specific rules

### **README.md**

- **Purpose**: Project documentation and quick start guide
- **Contains**: Features, tech stack, installation instructions, and project overview

### **ARCHITECTURE.md**

- **Purpose**: Detailed architecture documentation
- **Documents**:
    - System architecture and high-level diagrams
    - Technology stack details
    - Project structure explanation
    - Component hierarchy
    - Data flow and authentication
    - API routes documentation
    - Performance and security considerations

### **DESIGN.md** (in `/app`)

- **Purpose**: Design system documentation
- **Defines**:
    - Visual theme: Industrial, minimal, power-focused
    - Color palette: Trade black (#0A0A0A), hard white, Becho red (#FF2C2C)
    - Typography standards
    - Component design principles

### **production_setup.sql**

- **Purpose**: Database initialization script for production deployment
- **Contains**: SQL statements to set up Supabase database schema, tables, and initial data

### **next-env.d.ts**

- **Purpose**: Auto-generated TypeScript type definitions for Next.js
- **Auto-maintained**: Should not be manually edited

### **generate_brand_assets.py**

- **Purpose**: Python script to generate brand assets (logos, icons, images)
- **Usage**: Run during development to create visual assets for the platform

---

## 📱 App Directory Structure

### **Root App Layout & Configuration**

#### **app/layout.tsx**

- **Purpose**: Root layout component for the entire application
- **Functionality**:
    - Imports Google fonts: Inter, Outfit, Space Grotesk
    - Sets up global metadata, SEO, and Open Graph tags
    - Applies font variables for Tailwind CSS
    - Wraps children with global providers
    - Ensures consistent layout across all pages

#### **app/globals.css**

- **Purpose**: Global CSS styles for the entire application
- **Contains**:
    - Font variable definitions
    - Base styling rules
    - Tailwind CSS directives
    - Global animations and transitions

#### **app/providers.tsx**

- **Purpose**: Central provider setup for context and analytics
- **Sets Up**:
    - PostHog analytics provider for product insights
    - Any other global context providers needed
    - Marks as "use client" for client-side functionality

#### **app/page.tsx**

- **Purpose**: Home page (`/` route)
- **Displays**: Landing page content for bechoHub

#### **app/error.tsx**

- **Purpose**: Error boundary component for catching and displaying errors
- **Handles**: Unhandled errors throughout the app

#### **app/not-found.tsx**

- **Purpose**: 404 page when route doesn't exist
- **Displays**: User-friendly "page not found" message

#### **app/PostHogPageview.tsx**

- **Purpose**: PostHog analytics hook for tracking page views
- **Functionality**: Captures page navigation events for analytics

#### **app/manifest.ts**

- **Purpose**: PWA (Progressive Web App) manifest configuration
- **Contains**: App metadata for installation on mobile devices

#### **app/icon.tsx**

- **Purpose**: Dynamic favicon and app icon generation
- **Handles**: Multiple icon sizes for different devices

#### **app/robots.ts**

- **Purpose**: SEO robots.txt configuration
- **Controls**: Search engine crawling permissions

#### **app/sitemap.ts**

- **Purpose**: Dynamic XML sitemap generation
- **Usage**: Helps search engines discover and index all pages

#### **app/opengraph-image.tsx**

- **Purpose**: Dynamic Open Graph image generation
- **Used By**: Social media platforms when sharing links

---

### **Page Routes**

#### **app/about/page.tsx**

- **Purpose**: About page (`/about` route)
- **Displays**: Information about bechoHub, mission, and vision

#### **app/login/page.tsx**

- **Purpose**: User login page (`/login` route)
- **Functionality**: Authentication form for existing users

#### **app/signup/page.tsx**

- **Purpose**: User registration page (`/signup` route)
- **Functionality**: New user onboarding and account creation

#### **app/role-selection/page.tsx**

- **Purpose**: User role selection page (`/role-selection` route)
- **Functionality**: Allows users to choose "Buyer", "Seller", or "Both" roles

#### **app/profile/page.tsx**

- **Purpose**: User profile page (`/profile` route)
- **Functionality**: Displays and allows editing of user profile information

#### **app/browse/page.tsx**

- **Purpose**: Product/supplier browsing page (`/browse` route)
- **Functionality**: Lists all products, suppliers, and enables filtering

#### **app/categories/page.tsx**

- **Purpose**: Product categories page (`/categories` route)
- **Displays**: All industry categories for filtering products

#### **app/rfq/page.tsx**

- **Purpose**: Request for Quotation page (`/rfq` route)
- **Functionality**: Users can create and view RFQs from suppliers

#### **app/seller/[id]/page.tsx**

- **Purpose**: Individual seller/supplier profile (`/seller/[id]` route)
- **Functionality**: Dynamic route showing seller details, products, ratings

#### **app/admin/page.tsx**

- **Purpose**: Admin dashboard (`/admin` route)
- **Functionality**:
    - Real-time analytics (user signups, active buyers)
    - User management
    - PDF data export
    - Platform administration

#### **app/privacy/page.tsx**

- **Purpose**: Privacy policy page (`/privacy` route)
- **Displays**: Legal privacy policy information

#### **app/terms/page.tsx**

- **Purpose**: Terms of service page (`/terms` route)
- **Displays**: Legal terms and conditions

#### **app/dev-welcome/page.tsx**

- **Purpose**: Developer welcome page (`/dev-welcome` route)
- **Note**: Development/test page (not for production)

#### **app/dev-browse/page.tsx**

- **Purpose**: Developer browse page (`/dev-browse` route)
- **Note**: Development/test page for browsing functionality

---

### **Authentication Routes**

#### **app/auth/callback/route.ts**

- **Purpose**: Supabase OAuth callback handler (`/auth/callback` route)
- **Functionality**:
    - Processes authentication responses from OAuth providers
    - Exchanges auth codes for user sessions
    - Redirects user after successful login

---

### **API Routes** (`/api`)

#### **app/api/bids/route.ts**

- **Purpose**: Bid management API endpoint
- **Methods**: GET, POST (depending on implementation)
- **Handles**: Creating, retrieving, and managing bids from suppliers

#### **app/api/products/route.ts**

- **Purpose**: Product management API endpoint
- **Methods**: GET, POST, etc.
- **Handles**: Retrieving products, creating product listings

#### **app/api/rfqs/route.ts**

- **Purpose**: Request for Quotation API endpoint
- **Methods**: GET, POST, etc.
- **Handles**: Creating RFQs, fetching RFQ history

---

### **Server Actions** (`/actions`)

#### **app/actions/auth.ts**

- **Purpose**: Server-side authentication actions
- **Contains**:
    - Login logic
    - Signup logic
    - Session management
    - Uses Supabase server client for secure operations

#### **app/actions/loginWithRoles.ts**

- **Purpose**: Advanced authentication with role selection
- **Functionality**:
    - Handles users logging in with specific roles
    - Manages dual-role account switching
    - Creates role-specific user sessions

---

### **Shared Components** (`/components`)

#### **app/components/Navbar.tsx**

- **Purpose**: Navigation bar component
- **Displays**: Logo, navigation links, user profile menu
- **Used**: On every page via layout

#### **app/components/Footer.tsx**

- **Purpose**: Footer component
- **Displays**: Links, company info, social media
- **Used**: On every page via layout

#### **app/components/Animators.tsx**

- **Purpose**: Reusable animation components
- **Contains**: Framer Motion animation wrappers for UI elements

#### **app/components/SmoothScroll.tsx**

- **Purpose**: Smooth scrolling functionality
- **Uses**: Lenis library for smooth page scrolling

#### **app/components/Preloader.tsx**

- **Purpose**: Loading spinner/animation component
- **Displays**: While content is loading

#### **app/components/FormSuccess.tsx**

- **Purpose**: Success message component
- **Displays**: Confirmation messages after form submission

#### **app/components/RFQForm.tsx**

- **Purpose**: Request for Quotation form component
- **Functionality**: Form for users to create RFQs with validation

---

## 📦 Constants (`/constants`)

#### **constants/index.ts**

- **Purpose**: Centralized constants used throughout the application
- **Contains**:
    - Industry categories (Textiles, Electronics, Industrial, etc.)
    - Lucide icons mapping for categories
    - Helper functions: `getIndustryIcon()`
    - Static data used in filters and forms

---

## 🏷️ Types (`/types`)

#### **types/index.ts**

- **Purpose**: TypeScript type definitions and interfaces
- **Defines**:
    - `UserRole` type: "buyer", "seller", "both", "admin"
    - `IndustryCategory` type: Different industry types
    - `Profile` interface: User profile structure matching Supabase schema
    - Other shared types and interfaces

---

## 🛠️ Libraries & Utilities (`/lib` and `/utils`)

### **lib/utils.ts**

- **Purpose**: Common utility functions
- **Contains**:
    - `cn()`: Merges Tailwind CSS classes intelligently
    - Uses `clsx` and `tailwind-merge` for class handling

### **lib/mock-data.ts**

- **Purpose**: Mock data for development and testing
- **Contains**: Sample products, users, RFQs for UI development

### **utils/supabase/client.ts**

- **Purpose**: Browser-side Supabase client
- **Functionality**:
    - Creates Supabase client for client-side operations
    - Uses `createBrowserClient` from @supabase/ssr
    - Accesses environment variables for API credentials

### **utils/supabase/middleware.ts**

- **Purpose**: Server-side Supabase middleware for authentication
- **Functionality**:
    - Updates user session from request cookies
    - Ensures authentication state persists across requests
    - Used by root middleware.ts

### **utils/supabase/server.ts**

- **Purpose**: Server-side Supabase client
- **Functionality**:
    - Creates secure server client for API routes and actions
    - Uses service role key (or anon key with RLS)
    - Handles server-side database operations

---

## 📁 Public Assets (`/public`)

#### **public/images/**

- **Purpose**: Static image assets
- **Contains**: Logos, brand assets, placeholder images
- **Note**: Ensure all images are optimized for web

---

## 📄 Documentation Files

### **Root Documentation**

1. **README.md** - Project overview and quick start guide
2. **ARCHITECTURE.md** - Complete architecture documentation
3. **FILE_DOCUMENTATION.md** (this file) - File-by-file reference guide
4. **DESIGN.md** - Design system and visual guidelines

---

## 🔄 Project Flow Diagram

```
User Request
    ↓
middleware.ts (Auth update)
    ↓
Next.js App Router
    ↓
├─ Page Routes (pages/*.tsx)
├─ API Routes (api/**/route.ts)
└─ Server Actions (actions/*.ts)
    ↓
├─ Supabase Server Client (utils/supabase/server.ts)
├─ Supabase Browser Client (utils/supabase/client.ts)
└─ Components (components/*.tsx)
    ↓
Response to User
```

---

## 🎯 Quick Navigation Guide

**Looking for...**

- **Authentication logic** → `app/actions/auth.ts`, `app/actions/loginWithRoles.ts`
- **API endpoints** → `app/api/*/route.ts`
- **UI components** → `app/components/*.tsx`
- **Database operations** → `utils/supabase/*.ts`
- **Configuration** → Root config files (`next.config.ts`, `tailwind.config.ts`, etc.)
- **Types** → `types/index.ts`
- **Constants** → `constants/index.ts`
- **Global styles** → `app/globals.css`, `app/layout.tsx`
- **Design system** → `app/DESIGN.md`
- **Architecture details** → `ARCHITECTURE.md`

---

## 📊 File Statistics

- **Total Pages**: 14+ route pages
- **API Routes**: 3 main endpoints
- **Components**: 8+ reusable components
- **Configuration Files**: 7 main configs
- **Utility Files**: 3 Supabase utilities + helpers
- **Documentation Files**: 3 comprehensive guides

---

## 🚀 Key Technologies by File Type

| File Type | Technology            | Examples                               |
| --------- | --------------------- | -------------------------------------- |
| Pages     | Next.js App Router    | `page.tsx`                             |
| API       | Node.js + TypeScript  | `route.ts`                             |
| Styling   | Tailwind CSS v4       | `globals.css`, `tailwind.config.ts`    |
| Database  | Supabase (PostgreSQL) | `utils/supabase/*.ts`                  |
| Auth      | Supabase Auth + OAuth | `app/actions/auth.ts`                  |
| Analytics | PostHog               | `providers.tsx`, `PostHogPageview.tsx` |
| Icons     | Lucide React          | `components/*.tsx`                     |
| Animation | Framer Motion         | `components/Animators.tsx`             |
| Types     | TypeScript            | `types/index.ts`                       |

---

## 🔐 Security Considerations

- **Authentication**: Handled via Supabase Auth with SSR middleware
- **Database**: Protected with Row Level Security (RLS) policies
- **API Keys**: Stored in environment variables (never hardcoded)
- **Cookies**: Managed securely via Supabase SSR
- **Headers**: Security headers configured in `next.config.ts`

---

## 📝 Notes

- **Dual-Role Architecture**: Users can switch between buyer and seller roles
- **Type Safety**: Full TypeScript support across all files
- **Performance**: Server-side rendering with Next.js 16 App Router
- **Analytics**: PostHog integrated for product tracking
- **SEO**: Dynamic metadata, sitemap, and robots.txt
- **Responsive**: Mobile-first design with Tailwind CSS

---

**Last Updated**: 2024
**Project**: bechoHub B2B Marketplace
**Framework**: Next.js 16 + React 19 + TypeScript
