
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
     
        <div>
          <h2 className="text-lg font-semibold mb-3">Lumé</h2>
          <p>Your go-to for authentic skincare. Curated. Trusted. Loved.</p>
        </div>


        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-2">
            <li><Link href="/categories/serums" className="hover:underline">Serums</Link></li>
            <li><Link href="/categories/cleansers" className="hover:underline">Cleansers</Link></li>
            <li><Link href="/categories/moisturizers" className="hover:underline">Moisturizers</Link></li>
            <li><Link href="/categories/sunscreens" className="hover:underline">Sunscreens</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-3">Stay Updated</h3>
          <p className="mb-3">Get product drops and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center text-xs py-6 text-gray-500">
        © {new Date().getFullYear()} Lumé. All rights reserved.
      </div>
    </footer>
  );
}
