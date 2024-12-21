import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import profilePic from "../public/profile-pic.png";
import linkedinPic from "../public/linkedin.png";
import githubPic from "../public/github.png";

export default function Intro() {
  return (
    <section className="flex gap-10 items-center justify-center">
      <div className="section__pic-container">
        <Image src={profilePic} width={400} height={400} alt="profile" />
      </div>
      <div className="intro space-y-4">
        <div className="text-center space-y-4">
          <p className="font-bold text-grey-600">Hello, I&apos;m</p>
          <h1 className="text-5xl font-bold">Muh Okta Rifando</h1>
          <p className="text-3xl text-gray-600 font-bold">
            Fullstack Developer
          </p>
        </div>

        <div className="section__button flex justify-center gap-4 items-center">
          <Button variant="outline" className="rounded-full border-2 py-6 px-4">
            <Link href="#contact">Download CV</Link>
          </Button>
          <Button className="rounded-full border-2 py-6 px-4">
            <Link href="#contact">Contact Info</Link>
          </Button>
        </div>
        <div className="section_social_container flex justify-center gap-4">
          <Link href="https://www.linkedin.com/in/muh-okta-rifando/">
            <Image
              src={linkedinPic}
              width={50}
              height={50}
              alt="linkedin"
            ></Image>
          </Link>
          <Link href="https://github.com/muhoktarifando">
            <Image src={githubPic} width={50} height={50} alt="github"></Image>
          </Link>
        </div>
      </div>
    </section>
  );
}
