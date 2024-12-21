import Image from "next/image";

import aboutMePic from "../public/about-pic.png";
import experience from "../public/experience.png";
import education from "../public/education.png";
import P from "./ui/paragraph";
import H1 from "./ui/h1";

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center gap-4 max-w-[70%] mx-auto">
      <div className="text-container text-center space-y-2 mb-20">
        <P>Get To Know More</P>
        <H1>About Me</H1>
      </div>

      <div className="responsive-container flex flex-col lg:flex-row justify-center items-center mx-5 gap-10 ">
        <div className="profile-pic-container m-auto min-w-[300px] min-h-[300px]">
          <Image
            src={aboutMePic}
            width={500}
            height={500}
            alt="profile"
            className="rounded-3xl"
          />
        </div>

        <div className="experience-education-and-text-container flex flex-col gap-8">
          <div className="experience-education-container flex justify-center gap-6">
            <div className="border-2 rounded-xl grow flex flex-col justify-center items-center py-4">
              <Image src={experience} width={30} height={30} alt="experience" />
              <h1 className="text-lg font-bold">Experience</h1>
              <p>4 years</p>
              <p>Fullstack Developer</p>
            </div>
            <div className="border-2 rounded-xl grow flex flex-col justify-center items-center py-4">
              <Image src={education} width={30} height={30} alt="education" />
              <h1 className="text-lg font-bold">Education</h1>
              <p>S1 Akuntansi</p>
              <p>FEB UI</p>
            </div>
          </div>

          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
