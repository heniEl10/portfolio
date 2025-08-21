import { Metadata } from "next";
import { Download, MapPin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About - Hani El Khalfi",
  description: "Learn more about Hani El Khalfi's background, experience, and skills in full-stack development and data science.",
};

export default function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-Stack Developer & Data Scientist with a passion for building scalable 
            web applications and intelligent systems that make a real impact.
          </p>
          
          <div className="mt-8">
            <a
              href="/resume/Hani_El_Khalfi_ang.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>

        {/* Bio */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Bio</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              I&apos;m a passionate Full-Stack Developer and Data Scientist with experience building 
              end-to-end web applications and intelligent systems. With expertise spanning from 
              frontend frameworks like Angular and React to backend technologies like Spring Boot 
              and Node.js, I create comprehensive solutions that bridge the gap between user 
              experience and complex data processing.
            </p>
            <p>
              My journey in AI and machine learning has led me to develop efficient pipelines 
              that significantly reduce processing times while maintaining high accuracy. I thrive 
              on solving complex problems and translating business requirements into scalable, 
              maintainable code.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-primary" />
              <a href="mailto:elkhalfihani10@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                elkhalfihani10@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-primary" />
              <a href="tel:+212632448493" className="text-muted-foreground hover:text-primary transition-colors">
                (+212) 632-448-493
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Full-Stack Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Angular</li>
                <li>React</li>
                <li>Spring Boot</li>
                <li>Node.js</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">ML/DL & AI</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>TensorFlow</li>
                <li>Keras</li>
                <li>PyTorch</li>
                <li>OpenCV</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">Databases</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">DevOps & Tools</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Git, GitHub, GitLab</li>
                <li>Docker</li>
                <li>Linux</li>
                <li>Maven</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">Methodologies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Agile</li>
                <li>Scrum</li>
                <li>Kanban</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">Languages</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Arabic (Native)</li>
                <li>French (C1)</li>
                <li>English (C1)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Experience</h2>
          <div className="space-y-8">
            
            {/* Current Role */}
            <div className="border-l-4 border-primary pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">Data & AI Developer</h3>
                <span className="text-sm text-muted-foreground">Feb 2025 – Present</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <p className="text-primary font-medium">Business Shared Services</p>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Casablanca</span>
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Built diarization + Whisper transcription + GPT-4 analysis pipeline; manual QA 3h → 20min (−89%)</li>
                <li>• Angular + Spring Boot dashboard improved supervisor efficiency by +32%</li>
              </ul>
              <div className="mt-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Tech:</strong> Pyannote, Whisper, GPT-4, FastAPI, Angular, Spring Boot
                </p>
              </div>
            </div>

            {/* AI Researcher */}
            <div className="border-l-4 border-muted pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">AI Researcher - Facial Emotion Recognition</h3>
                <span className="text-sm text-muted-foreground">Mar 2025 – Jul 2025</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <p className="text-primary font-medium">MAScIR Foundation – UM6P</p>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Rabat</span>
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Built ElderReact dataset; optimized MobileNetV2 for real-time (&lt;200 ms/image)</li>
                <li>• Deployed on a robotics platform; +67% accuracy on new database</li>
              </ul>
              <div className="mt-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Tech:</strong> Python, TensorFlow, MobileNetV2, Transfer Learning, Streamlit, OpenCV, Elan
                </p>
              </div>
            </div>

            {/* Data Innovation Developer */}
            <div className="border-l-4 border-muted pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">Data Innovation Developer</h3>
                <span className="text-sm text-muted-foreground">Jun 2024 – Jul 2024</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <p className="text-primary font-medium">HoussniJob Innovation</p>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Casablanca</span>
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ATS with NLP (SpaCy) in Django; cut pre-screening time −50%</li>
                <li>• React/Docker interface for 20+ recruiters</li>
              </ul>
              <div className="mt-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Tech:</strong> Django, Python, NLP, SpaCy, React, Docker
                </p>
              </div>
            </div>

            {/* Full-Stack Developer */}
            <div className="border-l-4 border-muted pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">Full-Stack Developer</h3>
                <span className="text-sm text-muted-foreground">Apr 2023 – Jun 2023</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <p className="text-primary font-medium">Prefecture of Meknes</p>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Meknes</span>
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Angular/Node training management app; −60% admin workload; served 200+ agents</li>
              </ul>
              <div className="mt-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Tech:</strong> Node.js, Angular, Angular Material, Chart.js, MongoDB
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Education</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">Master&apos;s Degree</h3>
                <span className="text-sm text-muted-foreground">Sep 2023 – Jul 2025</span>
              </div>
              <p className="text-primary font-medium mb-1">Data Science & Intelligent Systems</p>
              <p className="text-muted-foreground">FST Fez</p>
            </div>

            <div className="border-l-4 border-muted pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">Bachelor&apos;s Degree</h3>
                <span className="text-sm text-muted-foreground">Sep 2022 – Jun 2023</span>
              </div>
              <p className="text-primary font-medium mb-1">Computer Engineering</p>
              <p className="text-muted-foreground">FST Fez</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
