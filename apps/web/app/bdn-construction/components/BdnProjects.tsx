import { featuredProjects } from '../lib/content'
import BdnImage from './BdnImage'

export default function BdnProjects() {
  return (
    <section id="projects" className="bg-[var(--bdn-low)] py-16 lg:py-20">
      <div className="bdn-wrap">
        <div className="mb-10 max-w-2xl">
          <p className="bdn-kicker">Selected work</p>
          <h2 className="bdn-h2 mt-2">Projects across the GTA</h2>
          <p className="mt-3 text-[var(--bdn-muted)]">
            Fit-outs and renovations from the BDN project list, including retail rollouts, restaurants, and a jewellery
            store built to a national brand standard.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.title} className="bdn-card bdn-lift group">
              <div className="relative h-56 overflow-hidden rounded-t-[var(--bdn-radius)]">
                <BdnImage
                  src={project.image.src}
                  alt={project.image.alt}
                  width={960}
                  height={720}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="bdn-photo h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-[var(--bdn-navy)]/80 px-2.5 py-1 text-xs text-white">
                  {project.place}
                </span>
              </div>
              <div className="p-5">
                <h3 className="bdn-h3">{project.title}</h3>
                <p className="mt-2 text-sm text-[var(--bdn-muted)]">{project.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
