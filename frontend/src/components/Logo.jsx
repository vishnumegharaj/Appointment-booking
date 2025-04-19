import { Stethoscope } from "lucide-react"

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white">
        <Stethoscope className="h-5 w-5" />
      </div>
      <span className="ml-2 text-xl font-bold text-gray-900">MediConnect</span>
    </div>
  )
}

export default Logo
