import heroImg from '../../assets/img/1.jpg';
import heroSVG1 from '../../assets/img/icon1.svg';
import heroSVG2 from '../../assets/img/icon2.svg';
import heroSVG3 from '../../assets/img/icon3.svg';
import heroSVG4 from '../../assets/img/icon5.svg';
import heroSVG5 from '../../assets/img/icon6.svg';
import heroSVG6 from '../../assets/img/icon7.svg';





function Hero() {






    return (
        <div>


            <div
                className="hero min-h-screen flex-col lg:flex-row-reverse"
                style={{
                    backgroundImage: `url(${heroImg})`,
                }}>
                <div className="relative w-full min-h-screen float-left overflow-hidden">
                    <span className="absolute animate-animCircle bottom-[17%] left-[2%]">
                        <img src={heroSVG4} alt="" />
                    </span>
                    <span className="absolute top-[17%] left-[30%]">
                        <img src={heroSVG6} alt="SVG" />
                    </span>
                    <span className="absolute top-[36%] left-[49%]" >
                        <img src={heroSVG3} alt="SVG" />
                    </span>
                    <span className="left-[35%]">
                        <img src={heroSVG1} alt="SVG" />
                    </span>

                    <span className="absolute animate-animCircle top-[27%] right-[12%]">
                        <img src={heroSVG4} alt="SVG" />
                    </span>
                    <span className="absolute bottom-[20%] right-[9%]" >
                        <img src={heroSVG2} alt="SVG" />
                    </span>
                    <span className="absolute animate-animCircle bottom-[3%] left-[18.5%]">
                        <img src={heroSVG5} alt="SVG" />
                    </span>
                </div>
                <div className="hero-content lg:text-left mr-auto">
                    <div className="max-w-md inline-block">
                        <h1 className="mb-5 text-7xl font-bold text-black">
                            <span className="text-[#ab5429]">I </span>AM
                            MANJIRUL ISLAM
                        </h1>
                        <p className="relative mb-5 uppercase text-[17px] w-fit">
                            Welcome to my Agency
                            <span className="absolute w-20 h-1 bg-[#ab5429] left-full ml-[2px] bottom-[9px]"></span>

                        </p>
                        <button className="font-bold text-black transition-all duration-300 ease-in-out">
                            See All Projects
                        </button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Hero
