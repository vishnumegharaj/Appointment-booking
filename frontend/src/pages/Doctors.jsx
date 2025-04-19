import { use, useState } from "react"
import { Link } from "react-router-dom"
import { Search, Filter, CheckCircle } from "lucide-react"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

// Sample specialties
const specialties = [
  "General Physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Gastroenterologist",
]

const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpeciality, setSelectedSpeciality] = useState(null)
  const [showFilter, setShowFilter] = useState(false)

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpeciality ? doctor.speciality === selectedSpeciality : true
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="bg-gray-50 min-h-screen py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Find Doctors</h1>
          <p className="mt-2 text-gray-600">Browse through our extensive list of trusted doctors</p>
        </div>

        <div className="flex flex-row items-center w-full mb-4 justify-between md:justify-start">
          <form className="w-full md:flex-grow">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="w-full p-3 ps-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Search by doctor's name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
              />
            </div>
          </form>

        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Search and filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <button
              className={`py-1 px-3 border rounded text-sm transition-all sm:hidden  ${showFilter ? "text-white bg-teal-600" : ""
                }`}
              onClick={() => setShowFilter(prev => !prev)}
            > Filters</button>
            <div className={`bg-white rounded-xl shadow-sm p-6 sticky top-6 ${showFilter ? "flex" : "hidden sm:flex"}`}>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-md font-medium text-gray-900">Specialties</h3>
                  <Filter className="h-6 w-6 text-teal-500" />
                </div>
                <div className="m-3 space-y-2">
                  <div
                    className={`flex items-center cursor-pointer ${selectedSpeciality === null ? "text-teal-600 font-medium" : "text-gray-700"
                      }`}
                    onClick={() => setSelectedSpeciality(null)}
                  >
                    <span className="text-sm">All Specialties</span>
                    {selectedSpeciality === null && <CheckCircle className="h-4 w-4 ml-auto" />}
                  </div>
                  {specialties.map((specialty) => (
                    <div
                      key={specialty}
                      className={`flex items-center cursor-pointer ${selectedSpeciality === specialty ? "text-teal-600 font-medium" : "text-gray-700"
                        }`}
                      onClick={() => setSelectedSpeciality(specialty)}
                    >
                      <span className="text-sm">{specialty}</span>
                      {selectedSpeciality === specialty && <CheckCircle className="h-4 w-4 ml-auto" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Doctor list */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <Link
                  key={doctor.id}
                  to={`/appointment/${doctor._id}`}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                    <img
                      src={doctor.image || "/placeholder.svg"}
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

            {filteredDoctors.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 mb-6">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No doctors found</h3>
                <p className="text-gray-600">Try adjusting your search or filter to find available doctors.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors
