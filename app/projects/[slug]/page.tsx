import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { projects, caseStudies } from "@/lib/data";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Cpu, ShieldAlert, Sparkles, Layers } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  const caseStudy = caseStudies[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen pt-24">
      <Nav />

      <article className="px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs text-mist transition-colors hover:text-pulse"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to All Projects
            </Link>
          </div>

          {/* Case Study Header */}
          <div className="mb-10">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-pulse">{project.period}</span>
            </div>

            <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-3 font-mono text-base text-pulse sm:text-lg">{project.tagline}</p>
            <p className="mt-5 text-lg leading-relaxed text-mist">{project.description}</p>

            {/* Quick Links CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs font-semibold text-ink transition-all hover:border-white/30 hover:shadow-glow"
                >
                  <Github className="h-4 w-4" /> View Source Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-signal-gradient px-6 py-3 font-mono text-xs font-semibold text-void shadow-glow transition-all hover:brightness-110"
                >
                  <ExternalLink className="h-4 w-4" /> Launch Live Product
                </a>
              )}
            </div>
          </div>

          {/* Key Metrics Grid */}
          {caseStudy?.metrics && (
            <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {caseStudy.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="glass glow-border rounded-2xl p-5 border border-white/10 text-center"
                >
                  <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">{m.value}</p>
                  <p className="mt-1 font-mono text-xs text-mist">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Architecture Section */}
          {caseStudy?.architecture && (
            <div className="glass glow-border mb-10 rounded-2xl p-7 border border-white/10 sm:p-8">
              <div className="mb-4 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-pulse">
                <Layers className="h-4 w-4 text-signal" />
                <span>Architecture &amp; Data Pipeline</span>
              </div>
              <p className="font-mono text-sm leading-relaxed text-ink">{caseStudy.architecture}</p>
            </div>
          )}

          {/* Engineering Bullet Points */}
          <div className="mb-12 space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">Key Engineering Contributions</h2>
            <div className="glass rounded-2xl p-6 border border-white/10 space-y-3">
              {project.bullets.map((bullet, idx) => (
                <div key={idx} className="flex gap-3 text-sm leading-relaxed text-mist">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges */}
          {caseStudy?.challenges && (
            <div className="mb-12 space-y-4">
              <h2 className="font-display text-2xl font-semibold text-ink">Technical Challenges Solved</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {caseStudy.challenges.map((c, idx) => (
                  <div key={idx} className="glass rounded-2xl p-5 border border-white/10">
                    <div className="mb-2 flex items-center gap-2 text-pulse font-mono text-xs">
                      <ShieldAlert className="h-4 w-4 text-pulse" /> Challenge 0{idx + 1}
                    </div>
                    <p className="text-xs leading-relaxed text-mist">{c}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mb-12">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-mist">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
