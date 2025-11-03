import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection
      name="Shagun Sinha"
      title="Aspiring Software Engineer & UI/UX Enthusiast"
      onViewProjects={() => console.log('View Projects clicked')}
      onContact={() => console.log('Contact clicked')}
    />
  );
}
