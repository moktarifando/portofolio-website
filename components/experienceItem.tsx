import Image from "next/image";

import checkmark from "/public/checkmark.png";

interface Props {
  skill: string;
  experience: string;
}

export default function ExperienceItem({ skill, experience }: Props) {
  return (
    <div className="flex gap-4">
      <Image
        src={checkmark}
        alt="checkmark"
        width={30}
        height={30}
        style={{ objectFit: "contain" }}
      />
      <div>
        <h1 className="font-bold text-lg">{skill}</h1>
        <p>{experience}</p>
      </div>
    </div>
  );
}
