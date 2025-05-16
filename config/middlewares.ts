// path: config/middlewares.js

module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: [
        "http://localhost:5174", // <--- آدرس صحیح فرانت‌اند شما
        "http://localhost:5173", // آدرس قبلی (اگر لازم دارید نگه دارید)
        "http://127.0.0.1:5173", // آدرس قبلی (اگر لازم دارید نگه دارید)
        // در صورت نیاز می‌توانید 127.0.0.1:5174 را هم اضافه کنید،
        // اما معمولا localhost:5174 کافی است.
        // "http://127.0.0.1:5174"
      ],
      // بهتر است methods و credentials را هم مشخص کنید (مانند مثال قبلی)
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
