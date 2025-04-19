import { Shield, Clock, UserCheck } from "lucide-react"
import { assets } from "../assets/assets"

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-500 to-emerald-600 py-16 sm:py-24">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-10 bg-center bg-cover"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to MediConnect</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your trusted partner in managing your healthcare needs conveniently and efficiently. At MediConnect, we
              understand the challenges individuals face when it comes to scheduling doctor appointments and managing
              their health records.
            </p>
            <p className="text-lg text-gray-600">
              MediConnect is committed to excellence in healthcare technology. We continuously strive to enhance our
              platform, integrating the latest advancements to improve user experience and deliver superior service.
              Whether you're booking your first appointment or managing ongoing care, MediConnect is here to support you
              every step of the way.
            </p>
          </div>
          <div className="relative">
            <img
              src={assets.about_image}
              alt="Healthcare professionals"
              className="rounded-lg shadow-xl w-100 h-100 object-cover mx-auto"
            />
          </div>
        </div>

        {/* Our Vision */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Vision</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Our vision at MediConnect is to create a seamless healthcare experience for every user. We aim to bridge the
            gap between patients and healthcare providers, making it easier for you to access the care you need, when
            you need it.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Efficiency</h3>
              <p className="text-gray-600">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Convenience</h3>
              <p className="text-gray-600">Access to a network of trusted healthcare professionals in your area.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 mb-6">
                <UserCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalization</h3>
              <p className="text-gray-600">
                Tailored recommendations and reminders to help you stay on top of your health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
