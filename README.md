# شبکه هوشمند ابتکار ویستا — Next.js + Tailwind (RTL)

## اجرا
```bash
npm i
npm run dev
# http://localhost:3000
```

## فونت
- فایل مجوزدار **IranSans** را در مسیر زیر قرار دهید:
```
public/fonts/IRANSans.woff2
```
(در غیر این صورت از فونت fallback استفاده می‌شود)

## ساختار
- `/app` — App Router با صفحات RTL
- `/data/projects.ts` — داده‌های همه پروژه‌ها (عنوان، خلاصه، HTML کامل)
- `/public/images` — تصاویر JPG هر پروژه (۳ تصویر مینیمال برای کروسل)
- `/components` — Header, Footer, ProjectCard, Carousel, Modal

## نکات
- مودال «پیش‌نمایش» در صفحهٔ خانه، هدر/فوتر ثابت و بدنهٔ اسکرولی دارد.
- صفحهٔ جزئیات هر پروژه دارای کروسل تصاویر و متن کامل (بدون خلاصه‌سازی) است.
