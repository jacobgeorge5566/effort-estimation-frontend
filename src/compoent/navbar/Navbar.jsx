import Link from "next/link"
import Links from "./links/LInks"


const Navbar = () => {
  return (
    <div className="flex justify-between w-[100%] mt-6">
      <div className="text-2xl font-bold"></div>
      <div>
        <Links></Links>
      </div>
    </div>
  )
}

export default Navbar
