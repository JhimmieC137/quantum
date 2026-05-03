import { Montserrat } from "next/font/google";
import FadeUp from "@/ui/FadeUp"

const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});


interface TeamMember {
  image: string;
  firstName: string;
  lastName: string;
  role: string;
}

const members: TeamMember[] = [
  {
    image: "/team/engnr_1.jpg",
    firstName: "Engr. Sobowale",
    lastName: "Micheal",
    role: "General Manager",
  },
  {
    image: "/team/engnr_2.jpg",
    firstName: "Engr. Sobowale",
    lastName: "Micheal",
    role: "General Manager",
  },
  {
    image: "/team/engnr_3.jpg",
    firstName: "Engr. Sobowale",
    lastName: "Micheal",
    role: "General Manager",
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="rounded-[50%] size-[18rem] relative overflow-hidden flex justify-center items-center bg-red-700 p-[3px]">
        <div className="rounded-[50%] size-full relative overflow-hidden m-auto">
          <img
            src={member.image}
            alt={`${member.firstName} ${member.lastName}`}
            className="absolute inset-0 bg-cover"
          />
        </div>
      </div>

      <p
        className={`${montserrat.className} text-zinc-800 text-center text-3xl font-semibold mt-5`}
      >
        {member.firstName}{" "}
        <span className="text-amber-400 italic">{member.lastName}</span>
      </p>

      <p className="text-zinc-800 text-center text-xl mt-2">{member.role}</p>
    </div>
  );
}

export default function TeamGrid() {
  return (
    <div className="bg-[#F4F2EC] py-10 w-full">
      <div className="max-w-[1400px] m-auto">
        <FadeUp>
            <p className={`${montserrat.className} text-zinc-800 text-center text-5xl font-semibold mt-14`}>
                Meet Our <span className="text-amber-300 italic">Team</span>
            </p>
        </FadeUp>

        <FadeUp>
            <p className="text-zinc-800 text-center text-md pr-10 my-5 max-w-[50rem] mx-auto mb-14">
                A passionate group of architects, designers, and visionaries dedicated to crafting innovative, sustainable, and timeless spaces.
            </p>
        </FadeUp>

        <div className="mt-16 grid xl:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr] gap-14">
          {members.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
