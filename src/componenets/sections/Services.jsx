import svggd from '../../assets/img/design.svg';
import svgmr from '../../assets/img/marketing.svg';
import svgly from '../../assets/img/layer.svg';
import svgap from '../../assets/img/apps.svg';

function Services() {
    return (
        <div className="py-28 bg-[#ede8df] servicebg" id='service'>


            <div className="px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-lg">
                        Our Services</p>
                    <h2 className="text-4xl font-bold text-black mb-4">What Can I Do</h2>
                    <p className="text-base mb-12">
                        Fusce sollicitudin eros id ex maximus gravida non vitae ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.
                    </p>
                    <div className="grid md:grid-cols-4 gap-8">
                        
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <img
                                    src={svgly}
                                    alt="UI/UX Designer"
                                    className="h-12"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-black">UI/UX Designer</h3>
                            <p className="text-[#ab5429] font-semibold mb-2">WORK AT ENVATO</p>
                            <p className="text-sm">
                                Nunc hendrerit, justo vel ultricies eleifend pretium leo, ac finibus nulla eros consect viverra neque rutrum.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <img
                                    src={svggd}
                                    alt="Graphic Design"
                                    className="h-12"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-black">Graphic Design</h3>
                            <p className="text-[#ab5429] font-semibold mb-2">WORK AT FREEPIC</p>
                            <p className="text-sm">
                                Nunc hendrerit, justo vel ultricies eleifend pretium leo, ac finibus nulla eros consect viverra neque rutrum.
                            </p>
                        </div>
                       
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <img
                                    src={svgmr}
                                    alt="Digital Marketing"
                                    className="h-12"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-black">Digital Marketing</h3>
                            <p className="text-[#ab5429] font-medium mb-2">WORK AT FIVERR</p>
                            <p className="text-sm">
                                Nunc hendrerit, justo vel ultricies eleifend pretium leo, ac finibus nulla eros consect viverra neque rutrum.
                            </p>
                        </div>
                       
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <img
                                    src={svgap}
                                    alt="Mobile Application"
                                    className="h-12"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-black">Mobile Application</h3>
                            <p className="text-[#ab5429] font-medium mb-2">WORK AT APPLE</p>
                            <p className="text-sm">
                                Nunc hendrerit, justo vel ultricies eleifend pretium leo, ac finibus nulla eros consect viverra neque rutrum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Services
