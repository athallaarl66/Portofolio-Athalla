import ContactContainer from "@/components/ContactContainer";
import { ProjectCarousel } from "@/components/ProjectCarousel";

export default function ProjectsGallery() {
  return (
    <>
      <header className="page-heading projects-heading">
        <h1>Projects.</h1>
        <p>Browse work across web applications, APIs, IoT, and developer tools.</p>
      </header>
      <div className="page-gallery">
        <ProjectCarousel gallery />
      </div>
      <ContactContainer />
    </>
  );
}
