import { useState } from "react";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false); // Tutup menu setelah klik
  };

  const menuItems = [
    ["#brand-analysis", "Brand Analysis"],
    ["#movement-analysis", "Movement Analysis"],
    ["#sales-summary", "Sales Summary"],
    ["#branch-comparison", "Branch Comparison"],
    ["#recommendations", "Recommendations"],
  ];

  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-90 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-400">🔍 Analysis Dashboard</span>
            {/* Desktop Menu */}
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                {menuItems.map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleAnchorClick(e, href)}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Username */}
          <div className="hidden md:block">
            <span className="text-sm text-gray-400">Vicky Nanda Ferdianto</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3" id="mobile-menu">
          {menuItems.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleAnchorClick(e, href)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;