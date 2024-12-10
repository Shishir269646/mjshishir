
import textBg1 from '../../assets/img/flower.png';

function About() {
    return (
        <div id='about'>

            <div className="p-48">
                <div className="flex">



                    <div className="w-1/2">


                        <div className="relative flex items-center justify-center px-6">
                            {/* Decorative Number & Graphics */}
                            <div className="absolute left-10 top-10 flex flex-col items-center">
                                <div className="relative">
                                    <div className="text-[330px] leading-[160px] font-bold text-[#ab5429] pr-12">7</div>
                                    <div className="absolute top-[65px] left-[220px] text-[100px] text-[#ab5429] font-bold">+</div>
                                    {/* Decorative Floral Graphics */}
                                    <div className="absolute left-[-110px] top-[-30px] m-5">
                                        {/* Add SVG or decorative images here */}
                                        <img src={textBg1} alt="Flower" className="w-[200px]" />
                                    </div>
                                </div>
                                <p className="mt-[-50px] text-3xl italic text-[#ab5429]  pl-72">years experience</p>
                            </div>



                        </div>




                    </div>
                    <div className="w-1/2">
                        <p className="mb-5 text-xl">
                            Have A Nice Day!
                        </p>
                        <h3 className="text-3xl text-black font-bold">I am Looking For UX/UI Designer.</h3>
                        <p className="mb-9">
                            With 20 years experience as a professional a graphic designer,
                            I have acquired the skills and knowledge necessary to make your project a success.
                        </p>
                        <div className="w-full flex space-x-1 text-black font-medium">
                            <div className="w-1/3">
                                <progress className="progress w-full h-5" value={90} max="100"></progress>
                                <p>Deb Development 90%</p>

                            </div>
                            <div className="w-1/3">
                                <progress className="progress progress-success w-full h-5" value={75} max="100"></progress>
                                <p>Deb Development 75%</p>

                            </div>
                            <div className="w-1/3">
                                <progress className="progress progress-error w-full h-5" value={80} max="100"></progress>
                                <p>Deb Development 80%</p>

                            </div>

                        </div>

                    </div>



                </div>
            </div>



        </div>
    )
}

export default About
