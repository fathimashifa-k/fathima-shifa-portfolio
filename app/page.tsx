import Storefront from "@/components/Storefront";
import { profile, projects, experience, highlights, skills, education } from "@/data/content";

const link = "underline decoration-line underline-offset-4 hover:decoration-accent";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-16 px-6 py-16">
      <h2 className="mb-8 font-display text-3xl font-bold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <span className="font-display text-lg font-bold">{profile.name}</span>
        <nav className="flex gap-5 text-sm text-muted">
          {["projects", "experience", "skills", "contact"].map((s) => (
            <a key={s} href={`#${s}`} className="capitalize hover:text-fg">{s}</a>
          ))}
        </nav>
      </header>

      <section className="mx-auto grid max-w-5xl items-center gap-12 px-6 pb-12 pt-10 md:grid-cols-2">
        <div>
          <p className="mb-4 text-muted">{profile.title}, {profile.location}</p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">{profile.headline}</h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-md bg-accent px-5 py-2.5 font-medium text-accent-fg transition-opacity hover:opacity-90">View projects</a>
            <a href={profile.github} className="rounded-md border border-line px-5 py-2.5 font-medium transition-colors hover:border-accent">Open GitHub</a>
          </div>
        </div>
        <Storefront />
      </section>

      <Section id="about" title="About">
        <p className="max-w-2xl text-lg leading-relaxed text-muted">{profile.about}</p>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="rounded-xl border border-line bg-surface p-6">
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                {p.tech.map((t) => <li key={t} className="rounded-md bg-bg px-2.5 py-1 text-muted">{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-muted">Source code is on <a className={link} href={profile.github}>GitHub</a>.</p>
      </Section>

      <Section id="experience" title="Experience">
        <ul className="max-w-2xl space-y-3">
          {experience.map((e) => (
            <li key={e} className="flex gap-3 leading-relaxed"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{e}</li>
          ))}
        </ul>
        <h3 className="mb-4 mt-12 font-display text-xl font-bold">Highlights</h3>
        <ul className="max-w-2xl space-y-3">
          {highlights.map((h) => (
            <li key={h} className="flex gap-3 leading-relaxed"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warm" />{h}</li>
          ))}
        </ul>
      </Section>

      <Section id="skills" title="Skills">
        <dl className="grid gap-6 sm:grid-cols-2">
          {skills.map((g) => (
            <div key={g.group} className="border-l-2 border-accent pl-4">
              <dt className="font-display text-lg font-bold">{g.group}</dt>
              <dd className="mt-1 text-muted">{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
        <h3 className="mb-2 mt-12 font-display text-xl font-bold">Education</h3>
        <p className="text-muted">{education.course}, {education.result}, {education.years}</p>
      </Section>

      <Section id="contact" title="Contact">
        <p className="mb-4 text-lg text-muted">Hiring or want to talk about a project? Reach me here.</p>
        <ul className="space-y-2 text-lg">
          <li><a className={link} href={profile.linkedin}>LinkedIn</a></li>
          <li><a className={link} href={profile.github}>GitHub</a></li>
          <li><a className={link} href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
        </ul>
      </Section>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-muted">{profile.name}, {profile.location}</footer>
    </main>
  );
}
