import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleViewProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection
          name="Shagun Sinha"
          title="Aspiring Software Engineer & UI/UX Enthusiast"
          onViewProjects={handleViewProjects}
          onContact={handleContact}
        />
        <AboutSection
          summary="Motivated second-year Computer Science student passionate about UI/UX, programming, and problem-solving. Looking for internships to apply technical and creative skills in real-world projects."
          highlights={["CS Student", "UI/UX Enthusiast", "Internship Ready"]}
        />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection
          institution="SRM Institute of Science and Technology"
          degree="B.Tech in Computer Science & Engineering"
          duration="2023 - 2027"
          languages={["Hindi", "English", "French", "Korean"]}
          softSkills={["Communication", "Attention to Detail", "Teamwork", "Leadership", "Adaptability"]}
          interests={["Writing", "Literature", "Designing", "Sketching", "UI/UX"]}
        />
        <ContactSection
          email="shagunsinha2506@gmail.com"
          phone="0000000000"
          location="Nagpur, Maharashtra, India"
          onSubmit={(data) => console.log('Form submitted:', data)}
        />
      </main>
      <Footer />
    </div>
  );
}
