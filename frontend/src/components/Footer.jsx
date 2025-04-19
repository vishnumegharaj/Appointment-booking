import { Link } from "react-router-dom"
import Logo from "./Logo"
import { Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-500">
              MediConnect is your trusted partner for healthcare appointments. We connect patients with qualified
              healthcare professionals.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-teal-700">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-teal-700">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-teal-700">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-teal-700">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/doctors" className="text-sm text-gray-600 hover:text-teal-700">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-sm text-gray-600 hover:text-teal-700">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/specialties" className="text-sm text-gray-600 hover:text-teal-700">
                  Medical Specialties
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-sm text-gray-600 hover:text-teal-700">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Get in touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">Suite 350, Washington, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">+1 (212) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">contact@mediconnect.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} MediConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
