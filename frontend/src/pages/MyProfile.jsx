import { useState } from "react"
import { User, Mail, Phone, MapPin, Calendar, Edit2, Save } from "lucide-react"

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    fullName: "Edward Vincent",
    email: "edward.vincent@example.com",
    phone: "+1 123 456 7890",
    address: "57th Cross, Richmond Circle, Church Road, London",
    gender: "Male",
    birthday: "20 July, 1990",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    // Here you would typically save the data to your backend
    console.log("Saving profile data:", userData)
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="h-32 bg-gradient-to-r from-teal-500 to-emerald-600 relative">
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <div className="h-32 w-32 rounded-full border-4 border-white bg-white overflow-hidden">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-2 h-6 w-6 rounded-full bg-green-500 border-2 border-white"></div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 pb-8 px-8">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl font-bold text-gray-900">{userData.fullName}</h1>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </>
                ) : (
                  <>
                    <Edit2 className="h-4 w-4 mr-2" />
                    Edit
                  </>
                )}
              </button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    ) : (
                      <div className="flex items-center text-gray-700">
                        <Mail className="h-5 w-5 text-gray-400 mr-2" />
                        {userData.email}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    ) : (
                      <div className="flex items-center text-gray-700">
                        <Phone className="h-5 w-5 text-gray-400 mr-2" />
                        {userData.phone}
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    ) : (
                      <div className="flex items-center text-gray-700">
                        <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                        {userData.address}
                      </div>
                    )}
                  </div>
                </div>

                <h2 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    {isEditing ? (
                      <select
                        name="gender"
                        value={userData.gender}
                        onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    ) : (
                      <div className="flex items-center text-gray-700">
                        <User className="h-5 w-5 text-gray-400 mr-2" />
                        {userData.gender}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Birthday</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="birthday"
                        value={userData.birthday}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    ) : (
                      <div className="flex items-center text-gray-700">
                        <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                        {userData.birthday}
                      </div>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="mr-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Save Information
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
