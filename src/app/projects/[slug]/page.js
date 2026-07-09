import Link from "next/link";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../../data/content";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }) {
  const { slug } = params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900 text-stone">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-primary mb-4">404</h1>
          <p className="mb-8">Quest Not Found</p>
          <Link href="/" className="game-button">Return to Map</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-dark-900 pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-stone hover:text-primary transition-colors mb-8 font-bold tracking-widest uppercase text-xs">
          <FaArrowLeft /> Back to Arena
        </Link>
        
        <div className="game-card bg-dark-800 p-8 md:p-12 border-2 border-primary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 text-glow">{project.title}</h1>
          <p className="text-stone text-lg leading-relaxed mb-8">{project.description}</p>
          
          <div className="flex flex-wrap gap-3 mb-10 border-b border-stone/20 pb-8">
            {project.tech?.map(t => (
              <span key={t} className="bg-dark-900 border border-primary/40 px-3 py-1 rounded text-primary text-xs font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(247,201,72,0.1)]">
                {t}
              </span>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-10">
            <div>
              <h2 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-widest">Architecture</h2>
              <p className="text-stone text-sm leading-relaxed">{project.architecture}</p>
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-widest">Challenges Conquered</h2>
              <p className="text-stone text-sm leading-relaxed">{project.challenges}</p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-widest">Key Highlights</h2>
            <ul className="space-y-4">
              {project.highlights?.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-stone text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 shadow-[0_0_5px_rgba(247,201,72,0.8)]" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-8 border-t border-stone/20">
            {project.links?.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="game-button flex items-center justify-center gap-2">
                <FaExternalLinkAlt /> LAUNCH PROJECT
              </a>
            )}
            {project.links?.github && project.links.github !== "#" && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="game-button flex items-center justify-center gap-2 bg-dark-900 border-stone hover:border-primary text-stone hover:text-white">
                <FaGithub /> VIEW SOURCE
              </a>
            )}
          </div>
          
        </div>
      </div>
    </main>
  );
}
