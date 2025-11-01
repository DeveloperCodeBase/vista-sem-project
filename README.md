# شبکه هوشمند ابتکار ویستا (Vista Smart Network)

یک لندینگ دوزبانه بر پایه Next.js 14 و TailwindCSS که مطالعات موردی هوش مصنوعی شرکت «شبکه هوشمند ابتکار ویستا» را معرفی می‌کند. رابط کاربری شامل کروسل‌های پروژه، خلاصه‌های مدیریتی ساختارمند، مودال جزئیات و فرم تماس دو زبانه است. تمام دارایی‌های بصری به صورت محلی (SVG) در مخزن نگهداری می‌شوند.

## پیش‌نیازها

| ابزار | حداقل نسخه | توضیحات |
| --- | --- | --- |
| [Node.js](https://nodejs.org/) | 18.17 یا جدیدتر | شامل `npm` و Corepack برای مدیریت Yarn |
| [Yarn](https://yarnpkg.com/) | 1.22 (Classic) | توصیه می‌شود با Corepack فعال شود: `corepack enable && corepack prepare yarn@1.22.22 --activate` |

### حداقل سخت‌افزار توصیه‌شده

| محیط | CPU | RAM | فضای دیسک آزاد |
| --- | --- | --- | --- |
| توسعه محلی | 1 vCPU | 2 گیگابایت | 2 گیگابایت |
| سرور Production | 2 vCPU | 4 گیگابایت | 10 گیگابایت |

> **نکته:** اگر ترجیح می‌دهید از `npm` استفاده کنید، فایل `yarn.lock` را حفظ کنید و فرمان‌ها را به معادل `npm` تبدیل نمایید.

## نصب و اجرای محیط توسعه

```bash
# نصب وابستگی‌ها
corepack enable
yarn install

# اجرای سرور توسعه
yarn dev
# آدرس: http://localhost:3000
```

با اجرای دستور بالا:
- صفحه فارسی در `/` و نسخه انگلیسی در `/en` قابل مشاهده است.
- لینک «مشاهده خلاصه مدیریتی» مودال قابل دسترس با Trap فوکوس را باز می‌کند.
- دکمه‌های منو اسکرول نرم به سکشن‌های صفحه دارند.

## معماری پروژه

- `app/` – ساختار App Router (Next.js) شامل صفحات فارسی و انگلیسی، استایل‌های سراسری و API محلی.
- `components/` – اجزای رابط کاربری (Header، Hero، Carousel، Modal، فرم تماس و ...).
- `data/projects.ts` – ۱۳ مطالعه‌ی موردی با HTML کامل، گالری SVG و متادیتای دو زبانه.
- `lib/` – توابع کمکی از جمله ذخیره‌سازی لوکال درخواست‌های تماس.
- `public/images/` – تمامی تصاویر و لوگوهای SVG مورد استفاده در صفحات.

## ارسال درخواست تماس و ایمیل هشدار

فرم تماس در هر دو زبان به مسیر `POST /api/contact` متصل است. در هنگام ارسال:

1. ورودی‌ها پاک‌سازی و اعتبارسنجی می‌شوند (`name`، `phone`، `project` و `message` اجباری هستند).
2. درخواست در فایل JSON محلی ذخیره می‌شود:
   - مسیر ذخیره‌سازی: `data/contact-submissions.json`
   - ساختار رکورد:
     ```json
     {
       "id": "uuid",
       "name": "نام کاربر",
       "phone": "شماره تماس",
       "email": "ایمیل اختیاری",
       "project": "حوزه مورد نظر",
       "message": "شرح درخواست",
       "createdAt": "2024-01-01T12:34:56.000Z"
     }
     ```
   - برای گزارش‌گیری داخلی می‌توانید همین فایل را بررسی کنید یا از تابع `listContactRequests()` در `lib/contactStore.ts` بهره ببرید.
3. یک ایمیل SMTP به نشانی `devcodebase.dev@gmail.com` (یا آدرس تعیین‌شده در متغیر محیطی) ارسال می‌شود که شامل متن و HTML قالب‌بندی‌شده است.

اگر پیکربندی SMTP ناقص باشد، API با خطای `500` و پیام `EMAIL_CONFIGURATION_MISSING` پاسخ می‌دهد؛ در این صورت ایمیلی ارسال نمی‌شود و فرم کلاینت پیام خطا نمایش می‌دهد.

## ساخت خروجی Production

### ۱. Build و اجرای محلی Production

```bash
# تولید خروجی Production
yarn build

# اجرای سرور Production (با Next.js)
yarn start
# به صورت پیش‌فرض روی http://localhost:3000 اجرا می‌شود
```

### ۲. استقرار روی Windows

1. [نصب Node.js LTS](https://nodejs.org/) (شامل npm و Corepack).
2. ایجاد فایل پیکربندی ایمیل از نمونه و تنظیم متغیرها:
   ```powershell
   Copy-Item .env.example .env.local
   notepad .env.local
   ```
   `EMAIL_USER`، `EMAIL_PASS` (اپ‌پسورد Gmail)، `EMAIL_FROM` (اختیاری) و در صورت نیاز `EMAIL_TO` را مقداردهی کنید.
3. نصب و Build:
   ```powershell
   corepack enable
   yarn install --frozen-lockfile
   yarn build
   yarn start
   ```
4. برای اجرای پایدار از `nssm` یا Task Scheduler استفاده کنید و دستور `yarn start` را پس از بوت اجرا نمایید.
5. در صورت نیاز به Reverse Proxy (مانند IIS یا Nginx روی Windows)، پورت 80 را به `http://127.0.0.1:3000` هدایت کنید.

### ۳. استقرار قدم‌به‌قدم روی Ubuntu 22.04+

1. **آماده‌سازی سیستم:**
   ```bash
   sudo apt update
   sudo apt install -y curl git build-essential ufw
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt install -y nodejs
   sudo corepack enable
   ```
2. **کلون و نصب پروژه:**
   ```bash
   git clone https://github.com/your-org/vista-sem-project.git
   cd vista-sem-project
   cp .env.example .env.local
   nano .env.local  # مقادیر SMTP را وارد کنید
   yarn install --frozen-lockfile
   ```
3. **Build و تست اولیه:**
   ```bash
   yarn build
   yarn start
   ```
   در صورت خطای `EMAIL_CONFIGURATION_MISSING` مقادیر `.env.local` را بررسی کنید.
4. **ایجاد سرویس systemd:**
   ```ini
   # /etc/systemd/system/vista.service
   [Unit]
   Description=Vista Smart Network Website
   After=network.target

   [Service]
   Type=simple
   WorkingDirectory=/opt/vista-sem-project
   ExecStart=/usr/bin/env yarn start
   Restart=always
   EnvironmentFile=/opt/vista-sem-project/.env.local

   [Install]
   WantedBy=multi-user.target
   ```
   ```bash
   sudo mkdir -p /opt
   sudo cp -r ~/vista-sem-project /opt/
   sudo systemctl daemon-reload
   sudo systemctl enable --now vista.service
   ```
5. **پیکربندی دامنه و Nginx:**
   - رکورد `A` دامنه `vista.devcodebase.com` را به IP `130.185.121.1` متصل کنید.
   - نصب Nginx و گواهی SSL:
     ```bash
     sudo apt install -y nginx
     sudo ufw allow 'Nginx Full'
     sudo tee /etc/nginx/sites-available/vista.conf <<'NGINX'
     server {
       listen 80;
       server_name vista.devcodebase.com;

       location / {
         proxy_pass http://127.0.0.1:3000;
         proxy_set_header Host $host;
         proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Forwarded-Proto $scheme;
       }
     }
     NGINX
     sudo ln -s /etc/nginx/sites-available/vista.conf /etc/nginx/sites-enabled/
     sudo nginx -t
     sudo systemctl reload nginx
     sudo snap install core; sudo snap refresh core
     sudo snap install --classic certbot
     sudo certbot --nginx -d vista.devcodebase.com
     ```
   - پس از دریافت گواهی، Nginx به صورت خودکار HTTPS را مدیریت کرده و درخواست‌ها را به برنامه Next.js هدایت می‌کند.
6. **ایمن‌سازی متغیرها:**
   ```bash
   sudo chown root:root /opt/vista-sem-project/.env.local
   sudo chmod 600 /opt/vista-sem-project/.env.local
   ```
   این کار دسترسی فایل کلیدها را محدود می‌کند.

## متغیرهای محیطی و کلیدها

فرم تماس برای ارسال ایمیل نیاز به پیکربندی SMTP دارد. نمونه فایل `.env.example` شامل متغیرهای لازم است؛ کافی است آن را به `.env.local` کپی و مقداردهی کنید.

| متغیر | توضیح | مقدار نمونه |
| --- | --- | --- |
| `EMAIL_HOST` | میزبان SMTP | `smtp.gmail.com` |
| `EMAIL_PORT` | پورت SMTP | `465` برای اتصال امن |
| `EMAIL_SECURE` | استفاده از TLS/SSL (اختیاری) | `true` |
| `EMAIL_USER` | نام کاربری حساب ایمیل | `example@gmail.com` |
| `EMAIL_PASS` | رمز عبور برنامه (App Password) یا رمز SMTP | `abcdabcdabcdabcd` |
| `EMAIL_FROM` | فرستنده‌ای که در ایمیل نمایش داده می‌شود (اختیاری) | `"Vista Smart Network <example@gmail.com>"` |
| `EMAIL_TO` | گیرنده نهایی (اختیاری) | `devcodebase.dev@gmail.com` |
| `EMAIL_HELO_DOMAIN` | دامنه‌ای که در فرمان EHLO معرفی می‌شود (اختیاری) | `vista.devcodebase.com` |

> **راهنمای Gmail:** در بخش «Security» حساب گوگل، گزینه Two-Step Verification را فعال و سپس یک [App Password](https://support.google.com/accounts/answer/185833) با نوع `Mail` و دستگاه `Other (Custom name)` بسازید. مقدار تولیدشده را در `EMAIL_PASS` قرار دهید.

- در محیط Production مسیر `.env.local` به کمک `EnvironmentFile` در سرویس systemd بارگذاری می‌شود. در محیط توسعه می‌توانید همان فایل را در ریشه پروژه نگه دارید.
- فایل `data/contact-submissions.json` همچنان مرجع تمام درخواست‌های ثبت‌شده است و در صورت نیاز برای مانیتورینگ داخلی قابل خواندن می‌باشد (می‌توانید از تابع `listContactRequests()` نیز استفاده کنید).

## تست و کیفیت

- `yarn lint` — اجرای ESLint.
- `yarn test` — (در صورت اضافه شدن تست‌ها) جایگاه اجرای تست‌های واحد/یکپارچه.
- `yarn build` — بررسی نهایی جهت تولید.

> در حال حاضر تست خودکار تعریف نشده است؛ برای انتشار در محیط Production توصیه می‌شود تست دستی صفحات اصلی و ارسال فرم تماس انجام شود.

## سوالات متداول

- **فایل فونت IRANSans لازم است؟** خیر، سیستم از فونت Vazirmatn و فونت‌های سیستم به عنوان fallback استفاده می‌کند. در صورت تمایل می‌توانید فایل فونت دلخواه را در `public/fonts` قرار داده و در `app/globals.css` تعریف کنید.
- **چطور درخواست‌های ذخیره‌شده را پاک کنم؟** فایل `data/contact-submissions.json` را حذف یا محتویات آن را خالی کنید. API در صورت نبود فایل، هنگام اولین ارسال آن را دوباره ایجاد می‌کند.
- **چگونه داده‌های پروژه را به‌روزرسانی کنم؟** ساختار هر پروژه در `data/projects.ts` تعریف شده است. برای افزودن پروژه جدید کافی است یک شیء جدید با فیلدهای هم‌تراز اضافه کنید و در صورت نیاز SVGهای مرتبط را در `public/images/projects/<slug>/` قرار دهید.

## مجوز و استفاده

این مخزن برای نمایش نمونه‌کارهای هوش مصنوعی شبکه هوشمند ابتکار ویستا طراحی شده است. انتشار عمومی با حفظ حقوق مالکیت تصاویر و متون انجام می‌شود. برای همکاری یا سوالات بیشتر از بخش تماس استفاده نمایید.
