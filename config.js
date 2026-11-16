// تنظیمات مینی‌اپ — فقط این فایل را ویرایش کنید
window.MINIAPP_CONFIG = {
  api: "https://script.google.com/macros/s/AKfycby6XsB8HlCEF2LSn37RetbZl5dmpxb4anKH78lTcCkJP5KkbHEubRaSxxcmHSKnUuuM/exec",   // آدرس /exec صندوق پست
  // banner: "img/banner.jpg",                    // اگر اسم یا مسیر بنر فرق دارد
  support: {
    phone: "",        // مثلاً 09123456789
    telegram: "",     // نام کاربری بدون @
    eitaa: "m_panahi1",        // نام کاربری بدون @
    hours: "15 شنبه تا پنجشنبه، 8 تا "
  },
  // محدودیت سفارش برای هر مشتری در هر بار ثبت سفارش.
  // کلید = «کد کالا» یا «نام دقیق کالا» در برنامه. مقدار = حداکثر تعداد برای هر واحد (ctn کارتن، pack بسته، pc عدد).
  // کالاهایی که اینجا نیستند محدودیت ندارند (فقط به‌اندازه‌ی موجودی).
  limits: {
    // "رب شیشه 750 گرمی نامزد": { ctn: 3 },
    // "1025": { ctn: 2, pc: 24 }
  }
};
