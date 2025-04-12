import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

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
          <ScrollLink
            to="bio"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-sm font-semibold text-white px-3 py-2 hover:bg-gray-800 rounded-lg cursor-pointer"
          >
            Biographie
          </ScrollLink>
          <ScrollLink
            to="concert"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-sm font-semibold text-white px-3 py-2 hover:bg-gray-800 rounded-lg cursor-pointer"
          >
            Concerts
          </ScrollLink>
          <ScrollLink
            to="songs"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-sm font-semibold text-white px-3 py-2 hover:bg-gray-800 rounded-lg cursor-pointer"
          >
            Mes chansons
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-sm font-semibold text-white px-3 py-2 hover:bg-gray-800 rounded-lg cursor-pointer"
          >
            Contact
          </ScrollLink>
        </PopoverGroup>
      </nav>

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
                <ScrollLink
                  to="bio"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-white hover:bg-gray-800 block rounded-lg px-3 py-2 cursor-pointer"
                >
                  Biographie
                </ScrollLink>
                <ScrollLink
                  to="concert"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-white hover:bg-gray-800 block rounded-lg px-3 py-2 cursor-pointer"
                >
                  Concerts
                </ScrollLink>
                <ScrollLink
                  to="songs"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-white hover:bg-gray-800 block rounded-lg px-3 py-2 cursor-pointer"
                >
                  Mes chansons
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-white hover:bg-gray-800 block rounded-lg px-3 py-2 cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Navbar;
