
import CircleHoverButton from "@/components/buttons/CircleHoverButton";
import { IMGRectangularStyle } from "@/components/ImageStyle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { montserrat } from "@/app/(pages)/layout";

export default function Hero() {
    return (
        <div className="max-w-screen min-h-screen bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80')] bg-cover bg-no-repeat bg-center w-full">
        {/* <div className="max-w-screen min-h-screen bg-[url('/wallpapers/mansion_e.png')] bg-cover bg-no-repeat bg-center w-full"> */}
            <div className="max-w-screen min-h-screen bg-zinc-950/80 inset-0 relative flex justify-center items-center">
                <div className="max-w-[1400px] w-full">

                    <div className="flex justify-start -mt-24">
                        <div className="w-full">
                            <div className={`${montserrat.className} flex justify-start gap-4 items-center mb-5 pl-1`}>
                                <div className="h-px w-16 bg-[#C4161C]"/>
                                <p className={`${montserrat.className} text-xs font-bold text-amber-400 tracking-widest`}>PREMIUM REAL ESTATE · LAGOS · IBADAN</p>
                            </div>

                            <p className={`${montserrat.className} text-[6rem] leading-[7.5rem] font-semibold max-w-[55rem] text-zinc-200 mb-5`}>
                                Where Land Meets <span className="text-amber-400">Legacy.</span>
                            </p>

                            <div className="flex-row text-left items-end">
                                <p className="text-[15px] max-w-[50rem] text-zinc-200">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repellat, laudantium 
                                    doloremque, similique dolores inventore incidunt eveniet quae iure dicta, pariatur aut.
                                </p>
                            </div>

                            <div>
                                <div className="flex gap-5 mt-10">
                                    <div className="py-4 px-10 bg-red-600 text-zinc-100 rounded-xl hover:bg-zinc-200 hover:text-zinc-900 ease-in-out duration-300 cursor-pointer">
                                        <p className="text-md">Explore properties</p>
                                    </div>
                                    <div className="py-4 px-10 border border-zinc-200 rounded-xl hover:bg-zinc-200 hover:text-zinc-900 text-zinc-300 ease-in-out duration-300 cursor-pointer">
                                    <   p className="text-md">Our services</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex divide-x divide-amber-400 divide-opacity-50 mt-10 tracking-widest">
                                <div className="pr-8">
                                    <p className={`${montserrat.className} text-5xl mb-px text-amber-400 font-semibold`}>500+</p>
                                    <p className="text-sm text-zinc-100/60">Land plots sold</p>
                                </div>
                                <div className="px-8">
                                    <p className={`${montserrat.className} text-5xl mb-px text-amber-400 font-semibold`}>120+</p>
                                    <p className="text-sm text-zinc-100/60">Structures built</p>
                                </div>
                                <div className="pl-8">
                                    <p className={`${montserrat.className} text-5xl mb-px text-amber-400 font-semibold`}>10+</p>
                                    <p className="text-sm text-zinc-100/60">Years experience</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
