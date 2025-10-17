import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-[#1B2431] text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 
            style={{ fontFamily: '"M PLUS 1", sans-serif' }} // ✅ added font here
            className="text-xl font-bold mb-2">Company Name</h3>
            <p style={{ fontFamily: '"M PLUS 1", sans-serif' }} // ✅ added font here
            className="text-sm text-gray-300">
              Build with Confidence, Create with Excellence.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <ul 
            style={{ fontFamily: '"M PLUS 1", sans-serif' }} // ✅ added font here
            className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#94BD0A] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#94BD0A] transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-[#94BD0A] transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#94BD0A] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-gray-300">Social Media</h4>
            <div className="flex gap-4 text-sm text-gray-300">
              <a href="#" className="hover:text-[#94BD0A] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#94BD0A] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#94BD0A] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#94BD0A] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider and Footer Note */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
