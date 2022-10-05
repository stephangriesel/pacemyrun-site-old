import Link from "next/link";

import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";

const Layout = ({ children }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;

  return (
    <>
      <header className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="md:w-1/3">
              <nav className="flex items-center justify-start space-x-3 md:space-x-6">
                <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                </Link>
              </nav>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Link href="/">
                <a className="flex items-center text-gray-900">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M192,120h27.1a7.9,7.9,0,0,0,7.1-4.4l18.4-36.8a8.1,8.1,0,0,0-3.2-10.6L192,40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M64,120H36.9a7.9,7.9,0,0,1-7.1-4.4L11.4,78.8a8.1,8.1,0,0,1,3.2-10.6L64,40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                  </div>
                  {/* <span className="text-lg font-medium">
                    Headless Dropshipping Starter
                  </span> */}
                </a>
              </Link>
            </div>
            <div className="md:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
              <button
                className="snipcart-customer-signin appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="User login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                </svg>
              </button>
              <Link href="/wishlist">
                <a
                  className="px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 relative transition"
                  aria-label="Wishlist"
                >
                  {hasItems && (
                    <span className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                  </svg>
                </a>
              </Link>
              <button
                className="snipcart-checkout appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="Cart"
              >
                {cartHasItems && (
                  <span className="absolute bg-blue-600 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-6">{children}</div>
      </main>
      <footer className="max-w-6xl mx-auto px-6">
        <div className="py-6 border-t border-gray-100 text-center flex flex-col md:flex-row items-center justify-between">
          <nav className="flex items-center justify-end space-x-3 md:space-x-6">
            <Link href="/about">
              <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
                FAQS
              </a>
            </Link>
            <Link href="/terms-of-sale">
              <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
                Terms of Sale
              </a>
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Layout;
