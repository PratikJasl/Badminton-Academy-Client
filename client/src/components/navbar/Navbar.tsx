import logo from "../../assets/Logo2.png";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <>
            <div className="flex flex-row justify-between items-center fixed top-0 bg-black min-w-screen md:h-15 h-15 p-3 z-10">
                
                <div className="lg:text-2xl">
                   <Link to="/"> <img src={logo} alt="" className="md:h-12 md:w-50 md:mt-2 h-10 w-35" /> </Link>
                </div>

                <div className="flex items-center gap-5 font-semibold">
                    <a href="#Introduce" className="hover:text-green-500  lg:text-xl">Home</a>
                    <a href="#About" className="hover:text-green-500  lg:text-xl">About</a>
                    <a href="#WhyUs" className="hover:text-green-500  lg:text-xl">WhyUs</a>
                    <a href="#Gallery" className="hover:text-green-500  lg:text-xl">Gallery</a>
                    <a href="#Testimonials" className="hover:text-green-500  lg:text-xl">Testimonials</a>
                    <a href="#Contact" className="hover:text-green-500  lg:text-xl">Contact</a>
                </div> 
                    
            </div>
        </>
    )
}

export default Navbar