import AboutMe from "@/components/aboutMe";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Project from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Header />
      <Intro />
      <AboutMe />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
