import { frontendExperience, backendExperience } from "@/lib/experienceData";
import ExperienceItem from "./experienceItem";
import H1 from "./ui/h1";
import P from "./ui/paragraph";

export default function Experience() {
  return (
    <div className="m-auto max-w-[70%] space-y-6">
      <div className="text-container text-center space-y-2">
        <P>Explore My</P>
        <H1>Experience</H1>
      </div>
      <div className="flex justify-center gap-4">
        <div className="frontend-dev border-2 p-12 rounded-3xl flex flex-col gap-8 items-center content-center">
          <h1 className="text-2xl text-center font-bold">
            Frontend Development
          </h1>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
            {Object.entries(frontendExperience).map(([key, value]) => (
              <ExperienceItem key={key} skill={key} experience={value} />
            ))}
          </div>
        </div>
        <div className="backend-dev border-2 p-12 rounded-3xl flex flex-col gap-8 items-center content-center">
          <h1 className="text-2xl text-center font-bold ">
            Backend Development
          </h1>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
            {Object.entries(backendExperience).map(([key, value]) => (
              <ExperienceItem key={key} skill={key} experience={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
