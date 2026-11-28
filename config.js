// تنظیمات مینی‌اپ — فقط این فایل را ویرایش کنید
window.MINIAPP_CONFIG = {
  api: "https://script.google.com/macros/s/AKfycby6XsB8HlCEF2LSn37RetbZl5dmpxb4anKH78lTcCkJP5KkbHEubRaSxxcmHSKnUuuM/exec",   // آدرس /exec صندوق پست

  // بنرهای بالای صفحه (اسلایدر). فایل‌ها را در پوشه‌ی img مخزن GitHub بگذارید.
  // هر بنر می‌تواند اختیاری باشد: cat = با لمس بنر فقط آن دسته نشان داده شود، promo = با لمس بنر به بخش تخفیف‌دارها برود.
  // اگر این فهرست را ننویسید، فقط img/banner.jpg نشان داده می‌شود.
  banners: [
    { img: "banner1.jpg" },
    { img: "Banner2.jpg", cat: "ویفر" },
    { img: "Banner3.jpg", cat: "نوشیدنی" },
  ],

  // حالت پیش‌فرض: "super" = بدون گزینه‌ی «عدد» (سوپرمارکت‌ها)، "home" = با گزینه‌ی «عدد» (خانگی).
  defaultMode: "super",
  support: {
    phone: "03133758699",        // مثلاً 09123456789
    telegram: "",     // نام کاربری بدون @
    eitaa: "M_panahi1",        // نام کاربری بدون @
    hours: "شنبه تا پنجشنبه، ۹ تا ۱۸"
  },
  limits: {}
};
