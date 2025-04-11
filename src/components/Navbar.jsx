import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black lg:top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-center p-6 lg:px-8 lg:border-b border-stone-400 xl:sticky"
      >
        <div className="flex lg:hidden absolute right-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="/biographie"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-semibold text-[#EF901E] border-b-2 border-[#EF901E] px-3 py-2"
                : "text-sm font-semibold text-white px-3 py-2 hover:bg-gray-800 rounded-lg"
            }
          >
            Biographie
          </NavLink>
          <NavLink
            to="/concerts"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-semibold text-[#EF901E] border-b-2 border-[#EF901E] px-3 py-2"
                : "text-sm font-semibold text-white px-3 py-2 hover:bg-gray-800 rounded-lg"
            }
          >
            Concerts
          </NavLink>
          <NavLink
            to="/mes-chansons"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-semibold text-[#EF901E] border-b-2 border-[#EF901E] px-3 py-2"
                : "text-sm font-semibold text-white px-3 py-2 hover:bg-gray-800 rounded-lg"
            }
          >
            Mes chansons
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-semibold text-[#EF901E] border-b-2 border-[#EF901E] px-3 py-2"
                : "text-sm font-semibold text-white px-3 py-2 hover:bg-gray-800 rounded-lg"
            }
          >
            Contact
          </NavLink>
        </PopoverGroup>
      </nav>

      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-black/80" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {[
                  { path: "/biographie", label: "Biographie" },
                  { path: "/concerts", label: "Concerts" },
                  { path: "/mes-chansons", label: "Mes chansons" },
                  { path: "/contact", label: "Contact" },
                ].map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-base font-semibold text-[#EF901E] hover:bg-gray-800 block rounded-lg px-3 py-2"
                        : "text-base font-semibold text-white hover:bg-gray-800 block rounded-lg px-3 py-2"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Navbar;
