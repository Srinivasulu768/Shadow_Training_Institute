import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to let the page render before scrolling
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    } else {
      // Use a small delay to ensure scroll happens after page render
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function Root() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Lato', sans-serif", backgroundColor: "#ffffff" }}>
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
