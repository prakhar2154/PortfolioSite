import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface AboutSectionProps {
  summary?: string;
  highlights?: string[];
}

export default function AboutSection({
  summary = "Motivated second-year Computer Science student passionate about UI/UX, programming, and problem-solving. Looking for internships to apply technical and creative skills in real-world projects.",
  highlights = ["CS Student", "UI/UX Designer", "Problem Solver"]
}: AboutSectionProps) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <Card className="p-8">
          <p className="text-lg leading-relaxed text-foreground mb-8">
            {summary}
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {highlights.map((highlight) => (
              <Badge
                key={highlight}
                variant="secondary"
                className="px-4 py-2 text-sm"
                data-testid={`badge-${highlight.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {highlight}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
