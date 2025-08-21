import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Image */}
        <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40">
          <Image
            src="/images/IMG_4054.jpg"
            alt="Hani El Khalfi"
            width={160}
            height={160}
            className="rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-lg object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Hani El Khalfi
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground">
            Full-Stack Developer & Data Scientist
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Shipped 4+ web apps (1,200+ users) and built ML pipelines that cut processing time by 70%.
          </p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">4+</div>
            <p className="text-sm text-muted-foreground">
              Deployed web apps used by 1,200+ users
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">70%</div>
            <p className="text-sm text-muted-foreground">
              Processing time reduction with ML pipelines
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">Full-Stack</div>
            <p className="text-sm text-muted-foreground">
              Angular/React • Spring Boot/Node • Docker • SQL/Mongo
            </p>
          </div>
        </div>

        {/* Tech Stack Highlights */}
        <div className="flex flex-wrap justify-center gap-3 py-6">
          {[
            "Angular", "React", "Spring Boot", "Node.js", 
            "TensorFlow", "Docker", "MongoDB", "MySQL"
          ].map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Projects
            <ArrowRight size={16} />
          </Link>
          
          <a
            href="/resume/Hani_El_Khalfi_ang.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
          >
            Download CV
            <Download size={16} />
          </a>
        </div>

        {/* Quick Contact */}
        <div className="flex justify-center items-center gap-6 pt-8 border-t border-border">
          <a
            href="mailto:elkhalfihani10@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
            <span className="hidden sm:inline">Email</span>
          </a>
          
          <a
            href="https://github.com/heniEl10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/elkhalfihani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
