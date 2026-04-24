import { Link } from "react-router";
import { Shield, Home, ArrowRight } from "lucide-react";

export function NotFound() {
  return (
    <div
      className="min-h-[80vh] flex items-center justify-center bg-[#1A1008]"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative mb-8 inline-block">
          <Shield className="w-24 h-24 text-[#221510] mx-auto" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-6xl font-bold text-[#B8963E]"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              404
            </span>
          </div>
        </div>

        <h1
          className="text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          Page Not Found
        </h1>
        <p className="text-[#CFCFCF] text-lg mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B8963E] text-[#1A1008] font-bold rounded hover:bg-[#a07830] transition-all min-h-[48px]"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#B8963E]/50 text-[#B8963E] font-bold rounded hover:bg-[#221510] hover:border-[#B8963E] transition-all min-h-[48px]"
          >
            View Programs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
