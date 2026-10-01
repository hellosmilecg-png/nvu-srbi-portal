# НВУ „Срби у Црној Гори“ — портал

Next.js + Supabase портал са јавним дијелом и основном администрацијом.

## Бесплатан deploy
1. Направите бесплатан Supabase пројекат.
2. У SQL Editor налепите `sql/schema.sql` и покрените га.
3. У Supabase Authentication направите корисника за администратора.
4. Креирајте GitHub репозиторијум и поставите овај пројекат.
5. У Vercel-у Import Project → изаберите GitHub репозиторијум.
6. У Environment Variables унесите `NEXT_PUBLIC_SUPABASE_URL` и `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
7. Deploy.
8. Администрација је на `/admin`.

## Локално
Копирајте `.env.example` у `.env.local`, упишите Supabase вриједности, па:
`npm install`
`npm run dev`

## Напомена
За продукцију треба додати storage bucket за фотографије, напредни rich-text editor, role-based admin права, rate limiting, backup и аналитику. Ова верзија је чиста бесплатна основа спремна за даљи развој.
