
import card1 from '../../assets/img/1 (1).jpg';
import card2 from '../../assets/img/2.jpg';


function Projects() {
    return (
        <div className="p-48" id='project'>


            <div className='text-center'>
                <h2 className="text-4xl font-bold text-black mb-4">Latest Projects</h2>
                <p className="text-base mb-12">
                    Fusce sollicitudin eros id ex maximus gravida non vitae ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.</p>
            </div>

            <div className="grid grid-cols-3 gap-5">


                <div className="card bg-base-100 w-auto shadow-xl h-[480px]">
                    <div className="group overflow-hidden">
                        <img
                            src={card1}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
                        />
                    </div>
                    <div className="card-body h-44">
                        <h2 className="card-title">
                            Deo Sumbara
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>






                <div className="card bg-base-100 w-auto shadow-xl h-[480px]">
                    <div className="group overflow-hidden">
                        <img
                            src={card2}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
                        />
                    </div>
                    <div className="card-body h-44">
                        <h2 className="card-title">
                            Product Design
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </div>
                </div>








                <div className="card bg-base-100 w-auto shadow-xl h-[480px]">
                    <div className="group overflow-hidden">
                        <img
                            src={card1}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
                        />
                    </div>
                    <div className="card-body h-44">
                        <h2 className="card-title">
                            Emotional Music
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </div>
                </div>





                <div className="card bg-base-100 w-auto shadow-xl h-[480px]">
                    <div className="group overflow-hidden">
                        <img
                            src={card2}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
                        />
                    </div>
                    <div className="card-body h-44">
                        <h2 className="card-title">
                            Drawing Art
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </div>
                </div>





                <div className="card bg-base-100 w-auto shadow-xl h-[480px]">
                    <div className="group overflow-hidden">
                        <img
                            src={card1}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
                        />
                    </div>
                    <div className="card-body h-44">
                        <h2 className="card-title">
                            Product Design
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </div>
                </div>




                <div className="card bg-base-100 w-auto shadow-xl h-[480px]">
                    <div className="group overflow-hidden">
                        <img
                            src={card2}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
                        />
                    </div>
                    <div className="card-body h-44">
                        <h2 className="card-title">
                            Mockup Shape
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </div>
                </div>









            </div>

        </div>
    )
}

export default Projects
