import ProjectItem from "./projectsItem";
import H1 from "./ui/h1";
import P from "./ui/paragraph";

import { projectsData } from "@/lib/projectsData";

export default function Project() {
  return (
    <div className="m-auto max-w-[70%] space-y-8">
      <div className="text-container text-center space-y-2">
        <P>Browse My Recent</P>
        <H1>Projects</H1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
        {projectsData.map((project) => (
          <ProjectItem key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
