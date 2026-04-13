import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-300 text-white px-4 md:px-10 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold">FoodApp</h2>
          <p className="text-sm text-black mt-2">
            Discover the best food around you. Fast, reliable, and easy to use.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-black">
            <li className="hover:text-white cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="aboutus">About Us</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="contact">Contact</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="cart">Cart</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm text-black">📧 rohitmourya0012@gmail.com</p>
          <p className="text-sm text-black">📞 +91 9927866974</p>
          <p className="text-sm text-black">📍 India</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-black">
        © {new Date().getFullYear()} FoodApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;