import { SiLinkedin, SiGithub } from 'react-icons/si';

interface FooterProps {
  linkedinUrl?: string;
  githubUrl?: string;
}

export default function Footer({
  linkedinUrl = "https://linkedin.com",
  githubUrl = "https://github.com"
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
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
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Portfolio</h3>
            <p className="text-muted-foreground text-sm">
              Aspiring Software Engineer & UI/UX Enthusiast
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollToSection(`#${item.toLowerCase()}`)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left"
                  data-testid={`link-footer-${item.toLowerCase()}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                data-testid="link-footer-linkedin"
              >
                <SiLinkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                data-testid="link-footer-github"
              >
                <SiGithub className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
