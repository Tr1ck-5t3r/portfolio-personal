import { onMount } from "solid-js";
import gsap from "gsap";
import "./Hero.css";

const Hero = () => {
  let heroImageRef, heroSectionRef;

  onMount(() => {
    const heroImage = heroImageRef;
    const heroSection = heroSectionRef;

    if (!heroImage || !heroSection) {
      console.error("Hero image or section not found!");
      return;
    }

    console.log("Hero section and image loaded:", heroSection, heroImage);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroSection.getBoundingClientRect();

      const xPos = (clientX - left - width / 2) / 15;
      const yPos = (clientY - top - height / 2) / 15;

      gsap.to(heroImage, {
        x: xPos,
        y: yPos,
        rotateX: -yPos * 3,
        rotateY: xPos * 3,
        ease: "power3.out",
        duration: 0.3,
      });
    };

    const resetAnimation = () => {
      gsap.to(heroImage, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
        duration: 0.5,
      });
    };

    heroSection.addEventListener("mousemove", handleMouseMove);
    heroSection.addEventListener("mouseleave", resetAnimation);

    return () => {
      heroSection.removeEventListener("mousemove", handleMouseMove);
      heroSection.removeEventListener("mouseleave", resetAnimation);
    };
  });

  return (
    <section class="hero" ref={(el) => (heroSectionRef = el)}>
      <img
        src="/tarun.jpeg"
        alt="Profile"
        class="hero-image"
        ref={(el) => (heroImageRef = el)}
      />
      <div class="hero-content">
        <h3>Hi<span>👋</span> I'm Tarun</h3>
        <div class="animation">
          <p>Data Analyst | Deep Learning Enthusiast | Web Dev</p>
        </div>
        <a href="/projects" class="hero-button">View Projects</a>
      </div>
    </section>
  );
};

export default Hero;
