"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@lib";

export const useReportViewPage = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  useEffect(() => {
    const domain = `${window.location.protocol}//${window.location.hostname}`;
    if (pathname) {
      var url = new URL(`${domain}${pathname}`);
      const keys = params.keys();
      while (true) {
        const { done, value: key } = keys.next();
        if (done) break;
        const values = params.getAll(key);
        for (const value of values) url.searchParams.append(key, value);
      }
      pageview(url);
    }
  }, [pathname, params]);
};
