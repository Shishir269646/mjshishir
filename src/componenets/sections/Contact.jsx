import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faXTwitter, faFacebookF, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';






function Contact() {
    return (
        <div className="p-48" id='contact'>
            <div className='text-center pb-6'>
                <h2 className="text-4xl font-bold text-black mb-2">Contact Us</h2>
                </div>


            <div className=" flex items-center justify-center">
                <div className="w-full max-w-screen-xl flex flex-wrap justify-center items-start">

                    <div className="flex-1 mb-1 md:mb-0">
                        <div className="mb-6 text-lg text-gray-900 flex items-center">
                            <div className="w-14 h-14 bg-[#ab5429] text-white rounded-full flex items-center justify-center mr-4">
                                <FontAwesomeIcon icon={faHouseChimney} />
                            </div>
                            <span>New York, United States</span>
                        </div>
                        <div className="mb-6 text-lg text-gray-900 flex items-center">
                            <div className="w-14 h-14 bg-[#ab5429] text-white rounded-full flex items-center justify-center mr-4">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <span>+0 000 0000000</span>
                        </div>
                        <div className="mb-6 text-lg text-gray-900 flex items-center">
                            <div className="w-14 h-14 bg-[#ab5429] text-white rounded-full flex items-center justify-center mr-4">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <span>email@address.com</span>
                        </div>
                        <div className="mb-6 text-lg text-gray-900 flex items-center">
                            <div className="w-14 h-14 bg-[#ab5429] text-white rounded-full flex items-center justify-center mr-4">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <span>Mon - Fri 8:00 AM to 6:00 PM</span>
                        </div>
                    </div>

                    <form action="" className="flex-1 flex flex-wrap justify-between">
                        <input
                            type="text"
                            className="w-full md:w-[calc(50%-10px)] h-12 p-3 bg-[#ab5429] text-white rounded-md mb-5 focus:outline-none"
                            placeholder="Your Name"
                        />
                        <input
                            type="email"
                            className="w-full md:w-[calc(50%-10px)] h-12 p-3 bg-[#ab5429] text-white rounded-md mb-5 focus:outline-none"
                            placeholder="Your Email"
                        />
                        <textarea
                            className="w-full h-48 p-3 bg-[#ab5429] text-white rounded-md mb-5 resize-y focus:outline-none"
                            placeholder="Your Message"
                        ></textarea>
                        <input
                            type="submit"
                            value="Send"
                            className="w-28 h-10 ml-auto bg-[#ab5429] text-white uppercase cursor-pointer rounded-md border-2 border-[#ab5429] hover:bg-transparent hover:text-[#ab5429] transition"
                        />
                    </form>
                </div>
            </div>

            <div className="sm text-center">
                <a href="#" className=""><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className=""><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="#" className=""><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className=""><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="#" className=""><FontAwesomeIcon icon={faLinkedin} /></a>

                


            </div>





        </div>
    )
}

export default Contact
