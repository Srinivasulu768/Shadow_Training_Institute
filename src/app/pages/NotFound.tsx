import { Link } from "react-router";
import { Shield, Home, ArrowRight } from "lucide-react";

const BG   = "rgb(15, 35, 75)";
const GOLD = "rgb(198, 169, 74)";
const TEXT = "rgb(235, 240, 245)";
const BODY = "rgb(185, 195, 210)";
const GOLD_S = "rgba(198,169,74,0.10)";

export function NotFound() {
  return (
    <div
      className="min-h-[80vh] flex items-center justify-center"
      style={{ fontFamily: "'Lato', sans-serif", backgroundColor: BG }}
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative mb-8 inline-block">
          <Shield className="w-24 h-24 mx-auto" style={{ color: "rgba(198,169,74,0.08)" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-6xl font-bold"
              style={{ fontFamily: "'Open Sans', sans-serif", color: GOLD }}
            >
              404
            </span>
          </div>
        </div>

        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}
        >
          Page Not Found
        </h1>
        <p className="text-lg mb-10" style={{ color: BODY }}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded transition-all min-h-[48px]"
            style={{ backgroundColor: GOLD, color: "rgb(20, 30, 48)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgb(176,150,60)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded transition-all min-h-[48px]"
            style={{ border: `1px solid rgba(198,169,74,0.40)`, color: GOLD, backgroundColor: "transparent" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = GOLD_S; e.currentTarget.style.borderColor = GOLD; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(198,169,74,0.40)"; }}
          >
            View Programs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
