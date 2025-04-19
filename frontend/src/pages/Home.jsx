import { Link } from "react-router-dom"
import { ArrowRight, Calendar, Shield, Clock, Star } from "lucide-react"
import groupProfiles from "../assets/group_profiles.png";
import headerImg from "../assets/header_img.png";
import { specialityData } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const {doctors} = useContext(AppContext);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-10 bg-center bg-cover"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 ">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Your Health, Our Priority</h1>
                <p className="mt-4 text-xl text-white/90">
                  Book appointments with trusted doctors in your area. Fast, secure, and convenient healthcare
                  scheduling.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/doctors"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-white hover:bg-gray-50 shadow-md transition duration-150 ease-in-out"
                >
                  Find a Doctor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-800/30 hover:bg-teal-800/40 backdrop-blur-sm transition duration-150 ease-in-out"
                >
                  Create an Account
                </Link>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <img
                      src={groupProfiles}
                      alt="Group Profiles"
                    />
                  </div>
                  <span className="ml-3 text-sm text-white">Join 10,000+ satisfied patients</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-300" />
                  <Star className="h-5 w-5 text-yellow-300" />
                  <Star className="h-5 w-5 text-yellow-300" />
                  <Star className="h-5 w-5 text-yellow-300" />
                  <Star className="h-5 w-5 text-yellow-300" />
                  <span className="ml-2 text-sm text-white">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block relative">
              <img
                src={headerImg}
                alt="Doctors team"
                className="rounded-lg w-full md:absolute -bottom-64 h-min transform rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose MediConnect?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We make healthcare accessible, convenient, and personalized for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 mb-6">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Scheduling</h3>
              <p className="text-gray-600">
                Book appointments with just a few clicks. Choose your preferred doctor and time slot.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Doctors</h3>
              <p className="text-gray-600">
                All healthcare professionals on our platform are verified and highly qualified.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Our customer support team is available around the clock to assist you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Find by Specialty</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Browse doctors by their medical specialties</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {specialityData.map((item, index) => (
              <Link
                key={index}
                to={`/doctors/${item.speciality}`}
                className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
              >
                <img src={item.image} alt={item.speciality} className="h-16 w-16 mb-3" />
                <h3 className="text-sm font-medium text-gray-900">{item.speciality}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Doctors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Top Doctors</h2>
              <p className="mt-4 text-xl text-gray-600">Highly rated healthcare professionals</p>
            </div>
            <Link to="/doctors" className="text-teal-600 hover:text-teal-700 font-medium flex items-center">
              View all
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <Link
                key={doctor.id}
                to={`/appointment/${doctor._id}`}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                      {doctor.name}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Available
                    </span>
                  </div>
                  <p className="text-gray-600">{doctor.speciality}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Ready to prioritize your health?</h2>
              <p className="mt-4 text-xl text-white/90">
                Join thousands of patients who trust MediConnect for their healthcare needs.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-white hover:bg-gray-50 shadow-md transition duration-150 ease-in-out"
              >
                Create an Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
