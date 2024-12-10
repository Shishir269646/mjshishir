import logoimg from '../../assets/img/m.png'

function Footer() {
    
    return (
        <div className="py-24 bg-[#ede8df]">



            <footer>
                <div className="max-w-6xl mx-auto px-5 flex flex-wrap-reverse justify-between items-center">
                    <div className="w-full md:w-auto text-center md:text-left">
                        <img src={logoimg} alt="Logo" className="w-44 mx-auto md:mx-0" />
                        
                        <p className="mt-3 text-sm text-gray-600">
                            © 2024 Created By Manjirul All Rights Reserved.
                        </p>
                    </div>

                    <div className="w-full md:w-auto text-center">
                        <h1 className="text-2xl font-bold text-black">Our Newsletter</h1>
                        <div className="h-1 w-24 bg-[#ab5429] mx-auto my-3"></div>
                        <p className="text-black">Enter Your Email to get our news and updates.</p>
                        <form className="mt-5 flex flex-col sm:flex-row items-center">
                            <input
                                type="text"
                                className="flex-1 px-8 py-4 text-lg bg-gray-300 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-[#ab5429] min-w-[260px]"
                                placeholder="Enter Your Email"
                            />
                            <button
                                type="submit"
                                className="mt-3 sm:mt-0 sm:ml-4 px-8 py-4 text-lg font-bold text-black bg-[#ab5429] rounded-full hover:opacity-75 transition duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </footer>






        </div>
    )
}

export default Footer
