import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-semibold text-navy-950">
              Michael Thomas Architect
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
              Licensed architecture and engineering practice serving clients nationwide. We
              deliver integrated design, structural performance, and building systems with
              precision and accountability.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-800">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/services" className="hover:text-navy-900">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-navy-900">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-navy-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-800">
              Firm
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>United States</li>
              <li>
                <a href="tel:+15555550100" className="hover:text-navy-900">
                  +1 (555) 555-0100
                </a>
              </li>
              <li>
                <a href="mailto:tm@michaelthomasarchitect.com" className="hover:text-navy-900">
                  tm@michaelthomasarchitect.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-slate-200 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Michael Thomas Architect. All rights reserved.</span>
          <span>Licensed professionals. Gallery highlights residential work; imagery representative.</span>
        </div>
      </div>
    </footer>
  );
}
