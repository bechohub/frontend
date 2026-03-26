-- PRODUCTION READY SCHEMA SETUP
-- Run this script to finalize the database, secure it, and enable all fields.

-- 1. Ensure Table Structure is Complete (Add missing columns if they don't exist)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text,
  first_name text,
  last_name text,
  company_name text,
  role text,
  category text, 
  business_scale text,
  gst_number text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add columns safely if they missed the creation above (idempotent)
do $$
begin
  if not exists (select 1 from information_schema.columns where table_name='profiles' and column_name='category') then
    alter table public.profiles add column category text;
  end if;
  if not exists (select 1 from information_schema.columns where table_name='profiles' and column_name='business_scale') then
    alter table public.profiles add column business_scale text;
  end if;
  if not exists (select 1 from information_schema.columns where table_name='profiles' and column_name='gst_number') then
    alter table public.profiles add column gst_number text;
  end if;
end $$;

-- 2. SECURITY: Enable Row Level Security (RLS)
alter table public.profiles enable row level security;

-- 3. RESET POLICIES (Start Fresh/Secure)
drop policy if exists "Enable read access for all users" on public.profiles;
drop policy if exists "Enable insert for authenticated users only" on public.profiles;
drop policy if exists "Enable update for users based on email" on public.profiles;
drop policy if exists "Public profiles are viewable by everyone." on public.profiles;
drop policy if exists "Users can insert their own profile." on public.profiles;
drop policy if exists "Users can update own profile." on public.profiles;

-- 4. APPLY PRODUCTION POLICIES
drop policy if exists "Public Read Access" on public.profiles;
drop policy if exists "Self Insert" on public.profiles;
drop policy if exists "Self Update" on public.profiles;

-- Read: Allowed for everyone (Marketplace Directory)
create policy "Public Read Access" on public.profiles
  for select using (true);

-- Insert: Allowed for Authenticated Users (Self-Registration)
create policy "Self Insert" on public.profiles
  for insert with check (auth.uid() = id);

-- Update: Allowed ONLY for the Owner
create policy "Self Update" on public.profiles
  for update using (auth.uid() = id);

-- 5. TRIGGER SETUP (For Auth -> Profile Sync)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (
    id, email, first_name, last_name, company_name, role, category, business_scale, gst_number
  )
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'first_name',
    new.raw_user_meta_data->>'last_name',
    new.raw_user_meta_data->>'company_name',
    new.raw_user_meta_data->>'role',
    new.raw_user_meta_data->>'category',
    new.raw_user_meta_data->>'business_scale',
    new.raw_user_meta_data->>'gst_number'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Re-attach trigger
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 6. GRANT PERMISSIONS (Fix "Permission Denied" errors)
grant usage on schema public to anon, authenticated, service_role;
grant all on public.profiles to anon, authenticated, service_role;
