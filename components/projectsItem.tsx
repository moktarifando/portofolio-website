import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  url: string;
}

export default function ProjectItem({ name, image, url }: Props) {
  return (
    <div className="flex flex-col gap-4 items-center border-2 p-10 rounded-3xl bg-slate-50">
      <div className="image-container">
        <Image
          src={image}
          alt="project image"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          className="rounded-3xl"
        ></Image>
      </div>
      <h1>{name}</h1>
      <div className="flex gap-4">
        <Button>
          <Link href="#">Github</Link>
        </Button>
        <Button>
          <Link href={url}>Live Demo</Link>
        </Button>
      </div>
    </div>
  );
}
