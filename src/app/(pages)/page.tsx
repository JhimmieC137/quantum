'use client'

import CircleHoverButton from "@/components/buttons/CircleHoverButton";
import { IMGRectangularStyle } from "@/components/ImageStyle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {

  return (
    <div className="size-full flex flex-col justify-end">
      <div className="flex justify-between w-full items-end mt-[14rem]">
        <div className="w-3/4">
          <p className="text-[9rem] leading-[9rem] max-w-[10rem] text-zinc-200">
            Quantum Homes
          </p>
        </div>

        <div className="flex-row text-left items-end">
          <p className="text-[16px] max-w-[38rem] text-zinc-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repellat, laudantium 
            doloremque, similique dolores inventore incidunt eveniet quae iure dicta, pariatur aut.
          </p>
          <div className="flex gap-5 mt-5">
            {/* <div className="py-2 px-4 bg-red-600 text-amber-100 rounded-xl hover:bg-zinc-200 hover:text-zinc-900 ease-in-out duration-300 cursor-pointer">
              <p className="text-lg">Get Started</p>
            </div> */}
            <CircleHoverButton border="yellow" background="none" hoverBackground="yellow" style="w-[9em]" content="Invest now" />
            {/* <div className="py-2 px-4 border border-zinc-200 rounded-xl hover:border-zinc-50 text-zinc-300 hover:text-zinc-50 ease-in-out duration-300 cursor-pointer">
              <p className="text-lg">See more</p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="h-[1px] mt-14 mb-5 w-full bg-zinc-300/30"/>
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, FreeMode]}
          // spaceBetween={2}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="flex flex-col items-start">
              <p className="text-xl font-bold text-zinc-100 my-4">Proposal</p>
              <p className="text-[16px] text-zinc-300 max-w-[30rem]">
                Receive a detailed proposal outlining the scope, timeline, and next steps for your architectural project.
                Slide 4 of 4.
              </p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="flex flex-col items-start">
              <p className="text-xl font-bold text-zinc-100 my-4">Project proposal</p>
              <p className="text-[16px] text-zinc-300 max-w-[30rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea expedita omnis suscipit repudiandae hic.
              </p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="flex flex-col items-start">
              <p className="text-xl font-bold text-zinc-100 my-4">Something</p>
              <p className="text-[16px] text-zinc-300 max-w-[30rem]">
                Lorem ipsum dolor sajn kndj njno nodnojnjn ojn on oj no; jn;lj nlj nljk nlon ln kmn expedita omnis suscipit repudiandae hic.
              </p>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      <div className="h-[1px] mt-7 w-full bg-zinc-300/30" />


      <div className="mt-24 mb-5 w-full ">
        <div className="flex flex-col justify-center items-center h-24 relative">
          <div className="text-zinc-200 text-sm border border-zinc-800 bg-zinc-900 rounded-lg p-2 absolute top-50% bottom-50% left-0 flex flex-row justify-between items-center gap-2">
            {/* <img src="https://cdn.prod.website-files.com/677df2203175761c2bf874cb/67f4ebccd8d8062d946cdec1_Dots-Grid.svg" className="size-4"/> */}
            <p className="text-amber-300">
              About Us
            </p>
          </div>
          <div className="h-[1px] bg-zinc-800 w-full"/>
        </div>
      </div>

    </div>
  );
}
