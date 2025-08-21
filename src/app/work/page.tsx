import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Work & Projects - Hani El Khalfi",
  description: "Explore the projects and work of Hani El Khalfi, including web applications, machine learning solutions, and AI systems.",
};

const projects = [
  {
    id: 1,
    title: "Automated Call Evaluation Platform",
    description: "Diarization + transcription + LLM evaluation system that reduced QA time by 89%",
    image: "/projects/call-evaluation.jpg",
    tags: ["FastAPI", "Pyannote", "Whisper", "GPT-4", "Angular", "Spring Boot"],
    impact: "QA time: 3h → 20min (−89%)",
    status: "Production",
    link: "#",
    github: "#",
    features: [
      "Real-time audio diarization",
      "Automatic transcription with Whisper",
      "AI-powered evaluation with GPT-4",
      "Web dashboard for supervisors",
      "Pipeline orchestration"
    ]
  },
  {
    id: 2,
    title: "Resource Management System",
    description: "Secure resource management system serving 50+ users with role-based access control",
    image: "/projects/resource-management.jpg",
    tags: ["Spring Boot", "Angular", "Java", "MySQL"],
    impact: "−35% inventory errors",
    status: "Production",
    link: "https://github.com/heniEl10/ressource-manager-app",
    github: "https://github.com/heniEl10/ressource-manager-app",
    features: [
      "Role-based authentication",
      "Real-time inventory tracking",
      "Advanced reporting dashboard",
      "Multi-user management",
      "Audit logging"
    ]
  },
  {
    id: 3,
    title: "CVJob - Applicant Tracking System",
    description: "ATS with NLP preprocessing using SpaCy that cut pre-screening time by 50%",
    image: "/projects/cvjob.jpg",
    tags: ["React", "Django", "SpaCy", "Docker", "NLP"],
    impact: "−50% pre-screening time",
    status: "Complete",
    link: "https://github.com/heniEl10/cvjob-frontend",
    github: "https://github.com/heniEl10/cvjob-frontend",
    features: [
      "Natural language processing",
      "Automated resume screening",
      "React-based frontend",
      "Django REST API",
      "Docker containerization"
    ]
  },
  {
    id: 4,
    title: "ElderReact - Facial Emotion Recognition",
    description: "Optimized emotion recognition system for elderly users with MobileNetV2",
    image: "/projects/elderreact.jpg",
    tags: ["Python", "TensorFlow", "MobileNetV2", "OpenCV", "Streamlit"],
    impact: "+67% accuracy improvement",
    status: "Research",
    link: "https://github.com/heniEl10/elderly-emotion-recognition-app",
    github: "https://github.com/heniEl10/elderly-emotion-recognition-app",
    features: [
      "Real-time emotion detection (<200ms)",
      "Optimized for elderly faces",
      "Robotics platform integration",
      "Custom dataset creation",
      "Transfer learning optimization"
    ]
  }
];

const smallerProjects = [
  {
    title: "Training Management System",
    description: "Angular/Node.js app for Prefecture of Meknes serving 200+ agents",
    tags: ["Angular", "Node.js", "MongoDB"],
    impact: "−60% admin workload"
  },
  {
    title: "ATS with NLP",
    description: "Applicant tracking system with natural language processing",
    tags: ["Django", "SpaCy", "React", "Docker"],
    impact: "−50% pre-screening time"
  }
];

export default function Work() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Work & Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing full-stack development, 
            machine learning, and AI solutions that deliver real impact.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-muted flex items-center justify-center">
                  <div className="text-muted-foreground text-center">
                    <Zap size={48} className="mx-auto mb-2" />
                    <p className="text-sm">Project Screenshot</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Production' ? 'bg-green-100 text-green-800' :
                      project.status === 'Research' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users size={16} className="text-primary" />
                      <span className="text-sm font-medium text-primary">{project.impact}</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    <Link
                      href={project.link}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={14} />
                      View Project
                    </Link>
                    <Link
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded hover:bg-muted transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* More Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-foreground">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {smallerProjects.map((project, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-3">{project.description}</p>
                
                <div className="mb-3">
                  <span className="text-sm font-medium text-primary">{project.impact}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Interested in working together?
            </h2>
            <p className="text-muted-foreground mb-6">
              I&apos;m always excited to take on new challenges and build innovative solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
