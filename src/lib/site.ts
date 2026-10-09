const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = vercelProductionHost
  ? `https://${vercelProductionHost}`
  : "https://taha-nawaz-portfolio.vercel.app";
