"use client";

import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Copy, Check, MapPin } from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always excited to discuss new opportunities, collaborate on interesting projects, 
            or just chat about technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
              
              {/* Email */}
              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <a 
                        href="mailto:elkhalfihani10@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        elkhalfihani10@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('elkhalfihani10@gmail.com', 'email')}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Phone</h3>
                      <a 
                        href="tel:+212632448493" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (+212) 632-448-493
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('+212632448493', 'phone')}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Location</h3>
                    <p className="text-muted-foreground">Morocco</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Connect on Social</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/heniEl10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/elkhalfihani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Quick Message</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-6">
                  Prefer to send a quick message? You can reach me directly via email or phone. 
                  I typically respond within 24 hours during business days.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Best times to reach me:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Monday - Friday: 9:00 AM - 6:00 PM (GMT+1)</li>
                      <li>• Weekend: Limited availability</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-foreground mb-2">What I&apos;m looking for:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Full-stack development opportunities</li>
                      <li>• Data science and AI projects</li>
                      <li>• Technical consulting</li>
                      <li>• Collaboration on interesting challenges</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href="mailto:elkhalfihani10@gmail.com?subject=Let's%20Connect&body=Hi%20Hani,%0A%0AI'd%20like%20to%20discuss..."
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors w-full justify-center"
                  >
                    <Mail size={16} />
                    Send Email
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">💬 Quick Response Guaranteed</h3>
              <p className="text-sm text-muted-foreground">
                I pride myself on being responsive. You can expect to hear back from me 
                within 24 hours, often much sooner. For urgent matters, don&apos;t hesitate 
                to mention it in your message.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Are you available for freelance work?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! I&apos;m open to interesting freelance projects, especially those involving 
                full-stack development or AI/ML implementation.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Do you offer consulting services?</h3>
              <p className="text-sm text-muted-foreground">
                Absolutely. I provide technical consulting for architecture decisions, 
                technology stack selection, and optimization strategies.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">What&apos;s your preferred communication method?</h3>
              <p className="text-sm text-muted-foreground">
                Email is best for initial contact. For ongoing projects, I&apos;m flexible 
                with Slack, Teams, or whatever works best for your team.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Can we schedule a call?</h3>
              <p className="text-sm text-muted-foreground">
                Of course! Send me an email with your availability and preferred topics, 
                and I&apos;ll coordinate a time that works for both of us.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
