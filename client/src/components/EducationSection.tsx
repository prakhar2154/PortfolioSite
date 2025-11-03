import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Languages, Briefcase, Heart } from 'lucide-react';

interface EducationSectionProps {
  institution?: string;
  degree?: string;
  duration?: string;
  languages?: string[];
  softSkills?: string[];
  interests?: string[];
}

export default function EducationSection({
  institution = "SRM Institute of Science and Technology",
  degree = "B.Tech in Computer Science & Engineering",
  duration = "2023 - 2027",
  languages = ["Hindi", "English", "French", "Korean"],
  softSkills = ["Communication", "Attention to Detail", "Teamwork", "Leadership", "Adaptability"],
  interests = ["Writing", "Literature", "Designing", "Sketching", "UI/UX"]
}: EducationSectionProps) {
  return (
    <section id="education" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education & More
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 md:col-span-2" data-testid="card-education">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {institution}
                </h3>
                <p className="text-lg text-foreground/80 mb-1">{degree}</p>
                <p className="text-muted-foreground">{duration}</p>
              </div>
            </div>
          </Card>

          <Card className="p-8" data-testid="card-languages">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Languages className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <Badge
                  key={lang}
                  variant="secondary"
                  data-testid={`badge-language-${lang.toLowerCase()}`}
                >
                  {lang}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-8" data-testid="card-soft-skills">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Soft Skills</h3>
            </div>
            <ul className="space-y-2">
              {softSkills.map((skill) => (
                <li
                  key={skill}
                  className="text-foreground/80 flex items-center gap-2"
                  data-testid={`text-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 md:col-span-2" data-testid="card-interests">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge
                  key={interest}
                  variant="outline"
                  data-testid={`badge-interest-${interest.toLowerCase()}`}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
