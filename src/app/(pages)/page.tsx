import CircleHoverButton from "@/components/buttons/CircleHoverButton";
import { IMGRectangularStyle } from "@/components/imageStyle";

export default function Home() {
  return (
    <div className="mt-12">

      {/* Hero section */}
      <section id="hero" className="w-full flex flex-col lg:flex-row lg:justify-between gap-3 lg:gap-[4rem]">
        <div className="w-full lg:w-[80%]">
          <h3 className="text-[4em] 2xl:text-[5em] leading-[1.2em] font-bold text-secondary mb-3">
            Find your dream home
          </h3>
          <p className="text-lg font-medium mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit eveniet cum, quae ipsa placeat architecto? Asperiores alias aut iusto aliquid nam natus obcaecati ea nesciunt amet odit!
          </p>
          <div className="flex flex-col xl:flex-row xl:justify-between gap-10 mt-8 w-full">
            <div className="w-full flex flex-col justify-between">
              <div className="mb-10 w-fit">
                <CircleHoverButton background="yellow" hoverBackground="brown" border="brown" content="Explore properties" />
              </div>
              <div className="flex flex-row items-center gap-0">
                <div className="size-14 bg-[url('/agents/agent_3.png')] bg-cover bg-no-repeat bg-center border-[3px] border-background z-10 rounded-full" />
                <div className="size-14 bg-[url('/agents/agent_2.png')] bg-cover bg-no-repeat bg-center border-[3px] border-background z-20 -ml-3 rounded-full" />
                <div className="size-14 bg-[url('/agents/agent_1.png')] bg-cover bg-no-repeat bg-center border-[3px] border-background z-40 -ml-3 rounded-full" />
                <div className="size-14 bg-secondary border-[3px] border-background z-50 -ml-5 rounded-full flex justify-center items-center">
                  <p className="text-lg font-semibold text-zinc-300 ml-1">
                    15+
                  </p>
                </div>
                <p className="text-lg font-normal text-zinc-700 ml-2">Agents</p>
              </div>
            </div>
            <div className="w-full">
              <IMGRectangularStyle
                image="/house.png"
                alt="house"
                underlayColor="orange"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col mt-5 pr-3">
          <div className="relative mb-10">
            <IMGRectangularStyle
              image="/house2.jpg"
              alt="house"
              underlayColor="yellow"
            />
            <img src="/buildings.svg" className="absolute -bottom-2 -right-3 w-[15em]"  alt="buildings" />
          </div>
          <div className="flex flex-col xl:flex-row gap-8 w-full">
            <CircleHoverButton style="w-full xl:w-2/6" background="yellow" hoverBackground="brown" border="brown" content="Contact us" />
            <CircleHoverButton style="w-full xl:w-2/6" background="yellow" hoverBackground="brown" border="brown" content="Contact us" />
          </div>
        </div>
      </section>
      {/* Hero section ends*/}


    </div>
  );
}
