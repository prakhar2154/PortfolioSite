import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Flame, Droplet, Plane } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    title: "Automatic Fire Alarm System",
    description: "Fire detection system using thermistors, op-amps, and microcontroller for automated safety monitoring and alert generation.",
    technologies: ["Hardware", "Microcontroller", "Sensors"],
    icon: <Flame className="h-12 w-12 text-destructive" />
  },
  {
    title: "Temperature-Based Water Pump Control System",
    description: "Uses sensors and actuators for automated water pump control based on temperature readings and environmental conditions.",
    technologies: ["IoT", "Sensors", "Automation"],
    icon: <Droplet className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Travel Management System",
    description: "Built in Java with JDBC and MySQL, includes Swing UI for managing travel bookings, itineraries, and customer information.",
    technologies: ["Java", "JDBC", "MySQL", "Swing"],
    icon: <Plane className="h-12 w-12 text-primary" />
  }
];

export default function ProjectsSection({ projects = defaultProjects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-6 hover-elevate transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-project-${index}`}
            >
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg w-fit">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-tech-${tech.toLowerCase()}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
