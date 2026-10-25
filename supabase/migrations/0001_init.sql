create extension if not exists "uuid-ossp";

create table if not exists profiles (
  id uuid primary key default uuid_generate_v4(),
  name text,
  email text unique not null,
  avatar_url text,
  created_at timestamptz not null default now()
);

create table if not exists posts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references profiles(id) on delete cascade,
  title text not null,
  content text,
  created_at timestamptz not null default now()
);

create index if not exists idx_posts_user_id
  on posts (user_id);
