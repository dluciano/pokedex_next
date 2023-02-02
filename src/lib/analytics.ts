export const pageview = (url: URL) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
    page_path: url,
  });
};

export const gtagEvent = (
  action: Gtag.EventNames,
  params: Gtag.EventParams
) => {
  window.gtag("event", action, params);
};
