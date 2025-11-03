import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Globe, Database, Lightbulb } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface SkillsSectionProps {
  categories?: SkillCategory[];
}

const defaultCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ["Python", "C", "C++", "Java"]
  },
  {
    title: "Web Development",
    icon: <Globe className="h-8 w-8 text-primary" />,
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Database",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ["MySQL", "SQL", "Firebase"]
  },
  {
    title: "Other Skills",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    skills: ["DSA", "UI/UX Design"]
  }
];

export default function SkillsSection({ categories = defaultCategories }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={category.title}
              className="p-6 hover-elevate"
              data-testid={`card-skill-${index}`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
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
