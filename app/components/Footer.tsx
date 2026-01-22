import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a3a52] border-t border-white text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-around items-center mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-[#c9a961] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-[#c9a961] transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#programs"
                  className="text-gray-300 hover:text-[#c9a961] transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-[#c9a961] transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#c9a961] mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} />
                info@enforme.com
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} />
                123 Fitness Ave, City
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[#c9a961] mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a961] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a961] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a961] transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; 2026 En Forme. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
