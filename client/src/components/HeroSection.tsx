import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import heroImage from '@assets/generated_images/Portfolio_hero_illustration_developer_f54e0ccc.png';

interface HeroSectionProps {
  name?: string;
  title?: string;
  onViewProjects?: () => void;
  onContact?: () => void;
}

export default function HeroSection({
  name = "Your Name",
  title = "Aspiring Software Engineer & UI/UX Enthusiast",
  onViewProjects,
  onContact
}: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                {name}
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                {title}
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Passionate about creating beautiful, functional digital experiences that make a difference.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={onViewProjects}
                className="gap-2"
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onContact}
                className="gap-2"
                data-testid="button-contact-me"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src={heroImage}
                alt="Portfolio Hero Illustration"
                className="w-full h-auto rounded-lg"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
