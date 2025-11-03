import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  email?: string;
  phone?: string;
  location?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection({
  email = "shagunsinha2506@gmail.com",
  phone = "0000000000",
  location = "Nagpur, Maharashtra, India",
  linkedinUrl = "https://linkedin.com",
  githubUrl = "https://github.com",
  onSubmit
}: ContactSectionProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (onSubmit) {
      onSubmit(formData);
    }
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <Card className="p-8 md:col-span-3" data-testid="card-contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Your name"
                  required
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  placeholder="What's this about?"
                  required
                  data-testid="input-subject"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Your message..."
                  rows={5}
                  required
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          <Card className="p-8 md:col-span-2" data-testid="card-contact-info">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-start gap-4 text-foreground/80 hover:text-foreground transition-colors group"
                  data-testid="link-email"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm break-all">{email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${phone}`}
                  className="flex items-start gap-4 text-foreground/80 hover:text-foreground transition-colors group"
                  data-testid="link-phone"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm">{phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-foreground/80">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm">{location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="font-medium text-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    data-testid="link-linkedin"
                  >
                    <SiLinkedin className="h-6 w-6 text-primary" />
                  </a>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    data-testid="link-github"
                  >
                    <SiGithub className="h-6 w-6 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
