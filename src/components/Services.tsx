"use client"

export default function Services() {

    return (
        <div className="w-full">
            <div className="relative w-full flex justify-center items-center">
                <div className="absolute top-[5em] left-auto right-auto">
                    <div className="text-zinc-800 text-sm border border-zinc-400/50 bg-none rounded-lg p-2 flex flex-row justify-between items-center gap-2">
                        <p className="text-zinc-800">
                            Services
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-[8em] h-32">
                <p className="text-5xl text-zinc-900">
                    Our Services Over the Years
                </p>

                <p className="text-md text-zinc-600 mt-5 max-w-[45%] mx-auto">
                    {/* We provide end-to-end real estate solutions from verified land sales and legal documentation to modern construction and strategic investment advisory designed to secure assets and maximize long-term value. */}
                    We offer end-to-end real estate solutions, combining verified land sales, legal security, modern construction, and smart investment guidance.
                </p>
            </div>

            <div className="w-full grid grid-flow-row divide-y divide-zinc-400 border-y border-y-zinc-400 mt-20">
                
                <div className="w-full flex ease-in-out duration-200 p-10 gap-5">
                    <div className="w-[45%] flex justify-end items-center">
                        <img src="https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/67f5f20bb625038a6599e49c_image-p-1600.png" className="rounded-xl "/>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="">
                            <img src="" className=""/>
                            <div>
                                <p className="text-2xl text-zinc-700 mb-2">
                                    Urban planning
                                </p>
                                <p className="text-md text-zinc-400">
                                    Architectural design combines creativity, functionality, and sustainability to craft spaces that inspire, enhance daily life, and seamlessly blend aesthetics with structural innovation for lasting impact.
                                </p>
                            </div>
                        </div>

                        <div className="w-[10%] flex justify-end">
                            <div className="rounded-full bg-zinc-900 size-7">
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-20">
                    <p>
                        Heyyy
                    </p>
                </div>

                <div className="h-20">
                    <p>
                        Yoooo
                    </p>
                </div>
                <div className="h-20">
                    <p>
                        Yoooo
                    </p>
                </div>

            </div>

        </div>
    )
}