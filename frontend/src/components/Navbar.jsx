import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Home as HomeIcon } from "lucide-react";
import { CLINIC, telLink } from "@/data/clinic";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`sticky top-0 z-40 glass transition-shadow ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          <Link to="/" data-testid="nav-logo" className="flex items-center gap-3 shrink-0">
            <img
              src={CLINIC.logo}
              alt="Mita Physio Cure Logo — Physiotherapy Clinic in Bagnan"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              width="48" height="48" loading="eager"
            />
            <div className="leading-tight">
              <div className="font-[Outfit] font-bold text-slate-900 text-base sm:text-lg">Mita Physio Cure</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.14em] text-emerald-700 font-semibold">Bagnan · Howrah</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm font-medium transition ${
                    isActive
                      ? "text-blue-800 bg-blue-50"
                      : "text-slate-700 hover:text-blue-800 hover:bg-blue-50/60"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={telLink}
              data-testid="nav-call-now"
              className="inline-flex items-center gap-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 text-sm font-semibold shine-hover"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <Link
              to="/appointment"
              data-testid="nav-book-appointment"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 text-sm font-semibold shine-hover"
            >
              <HomeIcon className="h-4 w-4" /> Book Visit
            </Link>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium ${
                    isActive ? "bg-blue-50 text-blue-800" : "text-slate-800 hover:bg-slate-50"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href={telLink} data-testid="mobile-call-now" className="rounded-xl bg-blue-700 text-white px-4 py-3 text-sm font-semibold text-center">Call Now</a>
              <Link to="/appointment" data-testid="mobile-book-appointment" className="rounded-xl bg-emerald-500 text-white px-4 py-3 text-sm font-semibold text-center">Book Visit</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
