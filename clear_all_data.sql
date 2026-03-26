-- ⚠️ DANGER: THIS WILL DELETE ALL DATA ACROSS ALL PUBLIC TABLES AND USERS ⚠️
-- Run this script ONLY if you want to completely wipe the database clean 
-- while keeping the actual table structures (schemas) intact.

-- 1. Dynamically truncate all tables in the "public" schema
do $$ 
declare
    r record;
begin
    for r in (select tablename from pg_tables where schemaname = 'public') 
    loop
        execute 'truncate table public.' || quote_ident(r.tablename) || ' cascade';
    end loop;
end $$;

-- 2. Clear out all authentication users (Supabase Auth)
-- This ensures that next time people sign up, they are treated as brand new.
delete from auth.users;

-- 3. Verify results
select count(*) as remaining_auth_users from auth.users;
select count(*) as remaining_profiles from public.profiles;
