import { Link } from "react-router-dom"
import { Calendar, MapPin, CreditCard, CheckCircle, XCircle } from "lucide-react"

// Sample appointment data
const appointments = [
  {
    id: 1,
    doctor: {
      id: 101,
      name: "Dr. Richard James",
      specialty: "General Physician",
      image: "/placeholder.svg?height=100&width=100",
    },
    date: "25 July, 2024",
    time: "8:30 PM",
    address: "57th Cross, Richmond Circle, Church Road, London",
    status: "upcoming",
    isPaid: false,
  },
  {
    id: 2,
    doctor: {
      id: 101,
      name: "Dr. Richard James",
      specialty: "General Physician",
      image: "/placeholder.svg?height=100&width=100",
    },
    date: "25 July, 2024",
    time: "8:30 PM",
    address: "57th Cross, Richmond Circle, Church Road, London",
    status: "upcoming",
    isPaid: false,
  },
  {
    id: 3,
    doctor: {
      id: 101,
      name: "Dr. Richard James",
      specialty: "General Physician",
      image: "/placeholder.svg?height=100&width=100",
    },
    date: "25 July, 2024",
    time: "8:30 PM",
    address: "57th Cross, Richmond Circle, Church Road, London",
    status: "completed",
    isPaid: true,
  },
]

const MyAppointments = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
          <p className="mt-2 text-gray-600">Manage your upcoming and past medical appointments</p>
        </div>

        <div className="space-y-6">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <img
                      src={appointment.doctor.image || "/placeholder.svg"}
                      alt={appointment.doctor.name}
                      className="h-20 w-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">{appointment.doctor.name}</h2>
                        <p className="text-gray-600">{appointment.doctor.specialty}</p>

                        <div className="mt-3 space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                            <span>
                              Date & Time: {appointment.date} | {appointment.time}
                            </span>
                          </div>
                          <div className="flex items-start text-sm text-gray-600">
                            <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                            <span>Address: {appointment.address}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end space-y-3">
                        {appointment.status === "upcoming" ? (
                          <>
                            {!appointment.isPaid && (
                              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                <CreditCard className="h-4 w-4 mr-2" />
                                Pay now
                              </button>
                            )}
                            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                              <XCircle className="h-4 w-4 mr-2 text-red-500" />
                              Cancel appointment
                            </button>
                          </>
                        ) : (
                          <div className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-green-800 bg-green-100">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Completed
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {appointments.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 mb-6">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No appointments yet</h3>
            <p className="text-gray-600 mb-6">You don't have any upcoming or past appointments.</p>
            <Link
              to="/doctors"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Find a doctor
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyAppointments
