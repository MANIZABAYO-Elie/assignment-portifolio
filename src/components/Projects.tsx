import { projects } from '../data/projects'

export default function Projects(){
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map(p => (
            <div key={p.id} className="p-4 border rounded">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="text-sm mt-2">{p.description}</p>
              <div className="mt-3 text-xs">{p.tech.join(' • ')}</div>
              <div className="mt-3">
                <a className="mr-3 underline" href={p.repo}>Repo</a>
                <a className="underline" href={p.demo}>Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}