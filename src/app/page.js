import Image from "next/image";
import { ProfilePicture, NityanandCharanDas, Img } from "@/assets/ImgsPath";
import data from "@/data/data.json";
import { InstagramIcon, Tick } from "@/assets/AllSVGs";
import {
  FaFacebook,
  FaInstagramSquare,
  FaSquareXTwitter,
  IoIosArrowBack,
  IoIosArrowForward,
  MdOndemandVideo,
  TbMessages,
} from "@/assets/icons";
import { FaYoutube } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="min-h-screen ">
        <div className="w-[1440px] mx-auto">
          <div className="w-full h-[35rem] relative">
            <div className="w-full h-full">
              <Image
                src={NityanandCharanDas.src}
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                className="rounded-md"
              />
            </div>
            <div className="absolute top-0 left-0 inset-0 bg-black bg-opacity-30 transition-opacity w-[62rem] blur-sm"></div>
            <div className="absolute left-[8rem] top-[20rem] text-white font-bold opacity-80">
              <div className="w-[45rem]">
                <div className="text-2xl">{data.instructor.name}</div>
                <div className="text-5xl">{data.course.title}</div>
              </div>
            </div>
            <div className="absolute bottom-[-15rem] right-[10rem] bg-gray-200 h-[20rem] w-[25rem] space-y-5 p-5">
              <div className="">
                <b className="text-xl">Course fees</b>
                <div className="text-4xl font-bold">₹ 5,000</div>
              </div>
              <div className="text-base">
                <div className="pb-2">
                  <b className="text-xl">What&apos;s included:</b>
                </div>
                <div className="flex gap-2">
                  <MdOndemandVideo /> 5 on-demand videos
                </div>
                <div className="flex gap-2">
                  <MdOndemandVideo /> 2 live stream sessions
                </div>
                <div className="flex gap-2">
                  <TbMessages /> Live Q&A sessions with Nityanand Charan Das
                </div>
                <div className="flex gap-2">
                  <TbMessages /> An active whatsapp community
                </div>
              </div>
              <button className="mx-auto text-center rounded-full w-full p-2 bg-[#771994] text-white">
                {" "}
                Register today
              </button>
            </div>
          </div>
          <div className="w-[50rem] px-[5rem] text-lg">
            <nav className="grid grid-cols-3 gap-5 text-xl font-bold opacity-80">
              <div className="p-5 border-b-4 border-violet-500 text-center">
                ABOUT
              </div>
              <div className="p-5 text-center">INSTRUCTOR</div>
              <div className="p-5 text-center">REVIEWS</div>
            </nav>
            <div className="p-2 pt-10 space-y-10">
              <div className="space-y-5">
                <div className="text-3xl font-bold">About the course</div>
                <div>{data.course.about_the_course}</div>
                <div>{data.course.about_the_course}</div>
                <div>{data.course.about_the_course}</div>
              </div>
              <div className="space-y-5">
                <div className="text-3xl font-bold">
                  What to expect from the course
                </div>
                <ul className="p-2 space-y-2">
                  <li className="flex gap-5 items-center">
                    <Tick />
                    Learn to manoe vour relationshios
                  </li>
                  <li className="flex gap-5 items-center">
                    <Tick />
                    Batter communication
                  </li>
                  <li className="flex gap-5 items-center">
                    <Tick />
                    Time manacemenn
                  </li>
                  <li className="flex gap-5 items-center">
                    <Tick />
                    Foroveness
                  </li>
                </ul>
              </div>
              <div className="space-y-5">
                <div className="text-3xl font-bold">Key topics covered</div>
                <div className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium est id corrupti, veniam dolore iure qui,
                  reprehenderit optio ipsa quasi natus voluptates, nemo cumque
                  dicta ad culpa ab fugit aspernatur? Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Sunt commodi voluptate rem
                  eaque sapiente impedit odit error consequuntur dolor magnam.
                </div>
                <ul className="p-2 space-y-2">
                  <li className="flex gap-5 items-center">
                    <Tick />
                    <div className="">
                      <b className="pr-1">10 written and audio session</b>
                      guiding you in decoding the language of numbers so that
                      you can easily receive their insights and messages.
                    </div>
                  </li>
                  <li className="flex gap-5 items-center">
                    <Tick />
                    <div className="">
                      <b className="pr-1">Intuitive exercises and homework</b>{" "}
                      walk you through the energies and values of numbers and
                      number sequences so you can become your own authority.
                    </div>
                  </li>
                  <li className="flex gap-5 items-center">
                    <Tick />
                    <div className="">
                      <b className="pr-1">A handy reference</b> to numerical
                      meanings, so you can uncover your souls gifts, challenges,
                      lessons, and purpose – and receive spiritual guidance
                      along your path.
                    </div>
                  </li>
                  <li className="flex gap-5 items-center">
                    <Tick />
                    <div className="">
                      <b className="pr-1">Expert techniques</b> for
                      manifestation offer simple ways to use numbers to
                      co-create with the universe.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-[5rem] text-lg">
            <div className="p-2 pt-10 space-y-10">
              <div className="space-y-5">
                <div className="text-3xl font-bold">About the Instructor</div>
                <div className="flex">
                  <div className="">
                    <Image
                      alt="Profile Picture"
                      src={ProfilePicture.src}
                      height={150}
                      width={150}
                      layout="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-full grid grid-cols-2 gap-10 px-5">
                    <div className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nemo sunt officia eum corporis blanditiis repellat
                      ratione, enim praesentium earum, laudantium harum? Illum
                      sed nihil nesciunt, iure blanditiis fuga unde consectetur!
                    </div>
                    <div className="">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto enim ratione impedit laboriosam libero doloremque
                      quos quas explicabo voluptatem consequatur accusamus
                      asperiores, dolores reiciendis dolore voluptates? Nulla
                      neque provident ea.
                    </div>
                    <div className="col-span-2 flex w-full justify-between text-sm pt-5">
                      <div className="flex gap-2 items-center">
                        <FaFacebook color="blue" size={20} /> Facebook
                      </div>
                      <div className="flex gap-2 items-center">
                        <FaSquareXTwitter color="#1DA1F2" size={20} /> Twitter
                      </div>
                      <div className="flex gap-2 items-center">
                        <FaYoutube color="red" size={20} /> Twitter
                      </div>
                      <div className="flex gap-2 items-center">
                        <InstagramIcon size={20} /> Twitter
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 m-20">
            <div className="flex items-center justify-between p-10">
              <div className="bg-gray-200 h-10 w-10 p-3 rounded-full">
                <IoIosArrowBack />
              </div>
              <div className=" w-[42rem] space-y-5">
                <div className="text-center text-3xl">
                  &quot;But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system.&quot;
                </div>
                <div className="flex gap-2 items-center justify-center text-sm">
                  <div className="w-10 h-10 rounded-full relative">
                    <Image
                      alt="Img"
                      src={Img.src}
                      layout="fill"
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <b>Name of the reviewer</b>
                    <p>Destination of the reviewer</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <div className="bg-gray-400 p-1 rounded-full" />
                  <div className="bg-gray-400 p-1 rounded-full" />
                  <div className="bg-gray-400 p-1 px-3 rounded-full" />
                </div>
              </div>
              <div className="bg-gray-200 h-10 w-10 p-3 rounded-full">
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
