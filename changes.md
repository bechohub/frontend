# Changes Made

1. Created a new login page (`app/login/page.tsx`) with a modern, mobile-first UI matching the signup page style.
2. Created a role selection page (`app/role-selection/page.tsx`) for users with both buyer and seller roles.
3. Updated the login page heading to match the signup page font and style, then changed it to display only "Login" in blue.
4. Implemented backend logic (`app/actions/loginWithRoles.ts`) to authenticate users and fetch their roles from the Supabase `profiles` table.
5. Updated the login logic in `app/login/page.tsx` to:
   - Redirect users with a single role directly to their dashboard.
   - Redirect users with both roles to the role selection screen.
   - Store the last selected role in localStorage.
6. Ensured all UI and UX behaviors are consistent and responsive across devices.
