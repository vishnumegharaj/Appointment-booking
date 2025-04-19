import { Link } from "react-router-dom"
import { Calendar, MapPin, DollarSign, Award, CheckCircle } from "lucide-react"
import { useParams } from "react-router-dom"
import { useContext, useState, useEffect, use } from "react"
import { AppContext } from "../context/AppContext"

// Sample time slots
const timeSlots = ["8:00 am", "8:30 am", "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am"]

// Sample dates
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

const Appointment = () => {

    const { docId } = useParams()
    const { doctors } = useContext(AppContext);
    const [doctor, setDoctor] = useState(null);
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState("")
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)


    const fetchDoctor = async () => {
        if (!Array.isArray(doctors)) {
            console.warn("Doctors is not an array:", doctors);
            return;
        }
        const docInfo = doctors.find((doc) => doc._id === docId);
        setDoctor(docInfo);
        console.log(docInfo);
    };

    useEffect(() => {
        fetchDoctor()
    }, [doctors, docId])

    const getAvailableSlots = async () => {
        let today = new Date();
        const weekSlots = [];

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            let endTime = new Date(currentDate);
            endTime.setHours(21, 0, 0, 0);

            if (i === 0) {
                // today logic
                const now = new Date();
                currentDate.setHours(now.getHours() > 10 ? now.getHours() + 1 : 10);
                currentDate.setMinutes(now.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10, 0, 0, 0);
            }

            let timeSlots = [];
            while (currentDate < endTime) {
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                });

                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            weekSlots.push(timeSlots);
        }

        setDocSlots(weekSlots); // set once
    }


    useEffect(() => {
        getAvailableSlots()
    }, [doctor])

    useEffect(() => {
        console.log("Doctor slots:", docSlots);
    }, [docSlots])

    const handleBookAppointment = () => {
        if (!selectedDate || !selectedTime) {
            alert("Please select both a date and time")
            return
        }

        // Here you would typically handle the booking process
        console.log("Booking appointment:", {
            doctorId: id,
            date: selectedDate,
            time: selectedTime,
        })
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Doctor profile */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md p-6 sm:p-10 mb-10 transition-all duration-300 hover:shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
                        {/* Image & Badge */}
                        <div className="w-70 h-70 mx-auto md:mx-0">
                            <img
                                src={doctor?.image || "/placeholder.svg"}
                                alt={doctor?.name}
                                className="rounded-2xl object-cover w-full h-full border-2 border-gray-200 shadow-sm"
                            />
                        </div>

                        {/* Doctor Info */}
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h1 className="text-2xl font-bold text-gray-900">{doctor?.name}</h1>

                                <span className="mt-2 sm:mt-0 inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                                    Verified Doctor
                                </span>
                            </div>

                            <p className="text-sm text-gray-500 italic">{doctor?.speciality}</p>

                            <div className="flex items-center space-x-2 text-gray-600">
                                <Award className="w-5 h-5 text-gray-400" />
                                <span>{doctor?.experience} experience</span>
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 mb-1">About</h2>
                                <p className="text-sm text-gray-700 leading-relaxed">{doctor?.about}</p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                <div className="flex items-center text-gray-700">
                                    <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
                                    Appointment Fee: <span className="ml-1 font-medium">${doctor?.fees}</span>
                                </div>
                                <div className="flex items-start text-gray-700">
                                    <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-1" />
                                    <span>{doctor?.address.line1}, {doctor?.address.line2}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Booking section */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6 sm:p-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Booking slots</h2>

                        {/* Date selection */}
                        <div className="mb-8">
                            <div className="grid grid-cols-7 gap-2">
                                {docSlots.length > 0 &&
                                    docSlots.map((item, index) => {
                                        const hasSlot = item.length > 0;
                                        const date = hasSlot ? item[0].datetime : null;

                                        return (
                                            <button
                                                key={index}
                                                onClick={() => hasSlot && setSlotIndex(index)}
                                                disabled={!hasSlot}
                                                className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors duration-200 ${slotIndex === index
                                                        ? "bg-teal-500 text-white"
                                                        : hasSlot
                                                            ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                            : "bg-gray-50 text-gray-400 cursor-not-allowed"
                                                    }`}
                                            >
                                                <span className="text-xs font-medium">
                                                    {hasSlot ? days[date.getDay()] : "N/A"}
                                                </span>
                                                <span className="text-lg font-semibold mt-1">
                                                    {hasSlot ? date.getDate() : "-"}
                                                </span>
                                            </button>
                                        );
                                    })}

                            </div>

                        </div>

                        {/* Time selection */}
                        <div className="mb-8">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                { docSlots.length && docSlots[slotIndex].map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedTime(item.time)}
                                        className={`py-2 px-4 rounded-lg text-center transition-colors duration-200 ${selectedTime === item.time ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        {item.time.toLowerCase()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Book button */}
                        <button
                            onClick={handleBookAppointment}
                            disabled={!slotIndex || !selectedTime}
                            className={`w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${!slotIndex || !selectedTime
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700"
                                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}
                        >
                            <Calendar className="mr-2 h-5 w-5" />
                            Book an appointment
                        </button>
                    </div>
                </div>

                {/* Related doctors */}
                <div className="mt-12">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Related Doctors</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {doctors.filter((doc) => doc.speciality === doctor?.speciality && doc._id !== doctor?._id).map((item, index) => (
                            <Link
                                key={index}
                                to={`/appointment/${item._id}`}
                                onClick={() => scrollTo(0,0)}
                                className="bg-white cursor-pointer rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                                    <img
                                        src={item.image || "/placeholder.svg"}
                                        alt="Doctor"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">{item.speciality}</p>
                                    <div className="mt-2">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Available
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment
