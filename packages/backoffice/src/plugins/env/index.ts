import { Locales } from "@/plugins/i18n/locales";

export const env = {
  node: {
    mode: process.env.NODE_ENV || "development",
    isDevelopment: process.env.NODE_ENV === "development"
  },
  app: {
    admin: {
      email: process.env.VUE_APP_ADMIN_EMAIL || null,
      password: process.env.VUE_APP_ADMIN_PASSWORD || null,
      token: process.env.VUE_APP_ADMIN_TOKEN || null
    }
  },
  i18n: {
    locale: process.env.VUE_APP_I18N_LOCALE || Locales.EN,
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || Locales.EN
  }
};
