import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Star,
  Trophy,
  GraduationCap,
  Sparkles,
  Send,
  Code,
  Brain,
  Braces,
  Layers,
  Palette,
  Workflow,
  MapPin,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Typewriter } from "./Typewriter";
import { Particles } from "./Particles";

/* ============== HERO ============== */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl animate-float-slow" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-brand-purple/25 blur-3xl animate-float-slower" />
        <Particles />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <Reveal>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for internships & collaborations
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Hi, I'm <span className="gradient-text">Arshad Ansari</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 text-base font-medium text-muted-foreground sm:text-lg">
          <Typewriter
              words={[
                "CSE (Data Science) Student at VIT Pune | Python & Web Dev",
                "Python Developer",
              ]}
              className="text-foreground"
            />
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground sm:text-base">
            I enjoy building intelligent applications, modern web experiences, and solving
            real-world problems with technology.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl gradient-bg px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== ABOUT ============== */
export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading eyebrow="About" title="Curious builder, lifelong learner" />
        <div className="mt-10 grid gap-8 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="glass rounded-2xl p-6 md:p-8">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                I'm a Computer Science (Data Science) student at Vishwakarma Institute of
                Technology, Pune. I enjoy building real projects using Python and web technologies.
                I love experimenting with AI tools, learning by doing, and solving problems through
                code.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-2">
            <ul className="grid gap-3">
              {[
                { icon: Brain, label: "AI & ML explorer" },
                { icon: Code, label: "Python-first developer" },
                { icon: Layers, label: "Modern web builder" },
                { icon: Sparkles, label: "Always learning" },
              ].map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg gradient-bg text-primary-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 truncate font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============== SKILLS ============== */
const skills: { name: string; icon: typeof Code }[] = [
  { name: "Python", icon: Code },
  { name: "HTML", icon: Layers },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Braces },
  { name: "GitHub", icon: Github },
  { name: "AI & ML", icon: Brain },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Skills" title="Tools I build with" />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 40}>
              <div className="group glass relative overflow-hidden rounded-xl p-4 transition-all hover:-translate-y-1 hover:glow-ring">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-px rounded-xl gradient-bg opacity-20 blur-md" />
                </div>
                <div className="relative flex flex-col items-center gap-2 text-center">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-white/5 text-foreground transition-colors group-hover:gradient-bg group-hover:text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">{s.name}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== PROJECTS ============== */
type Project = {
  title: string;
  description: string;
  tags: string[];
  stars?: number;
  repo?: string;
  demo?: string;
  soon?: boolean;
};

const projects: Project[] = [
  {
    title: "Python Learner App",
    description:
      "An interactive Python learning application built to help beginners understand Python concepts through practical examples and an intuitive interface.",
    tags: ["Python", "Learning", "Interactive"],
    stars: 0,
    repo: "https://github.com/05unique-dotcom/python-learner-app",
    demo: "https://python-learner--arshadansari786.replit.app/",
  },
  {
    title: "Nitro Rush Revamped",
    description:
      "A 3D browser racing game built with Three.js and WebGL. Features joystick controls, multiple vehicles, missions, and a leaderboard.",
    tags: ["Three.js", "WebGL", "JavaScript"],
    demo: "https://nitro-rush-revamped.lovable.app/",
  },
  {
    title: "PyStar",
    description:
      "An interactive Python learning platform with quizzes and challenges.",
    tags: ["Python", "React", "Web App"],
    demo: "https://pystar.lovable.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Projects" title="Selected work" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title + i} delay={i * 80}>
              <article className="group glass relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:glow-ring">
                <div className="absolute inset-x-0 top-0 h-px gradient-bg opacity-60" />
                <header className="flex items-start justify-between gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5">
                    <Workflow className="h-5 w-5 text-foreground" />
                  </div>
                  {!p.soon && (
                    <span className="glass inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3" />
                      {p.stars ?? 0}
                    </span>
                  )}
                  {p.soon && (
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-muted-foreground">
                      Soon
                    </span>
                  )}
                </header>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg gradient-bg px-3.5 py-2 text-xs font-medium text-primary-foreground transition-transform hover:scale-105"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="glass inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium hover:bg-white/10"
                    >
                      <Github className="h-3.5 w-3.5" />
                      View Source
                    </a>
                  )}
                  {p.soon && (
                    <span className="glass inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium text-muted-foreground">
                      <Sparkles className="h-3.5 w-3.5" />
                      In development
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== EDUCATION ============== */
const education = [
  {
    level: "SSC",
    title: "Secondary School Certificate",
    desc: "Foundation in mathematics, sciences, and computing fundamentals.",
  },
  {
    level: "HSC",
    title: "Higher Secondary Certificate",
    desc: "Physics, Chemistry, Mathematics — strong preparation for engineering entrances.",
  },
  {
    level: "B.Tech",
    title: "Computer Science & Engineering (Data Science)",
    desc: "Vishwakarma Institute of Technology, Pune\n2026 – 2030",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading eyebrow="Education" title="Academic journey" />
        <ol className="relative mt-12 space-y-6 border-l border-white/10 pl-6 md:pl-8">
          {education.map((e, i) => (
            <Reveal key={e.level} delay={i * 100} as="li">
              <span className="absolute -left-[9px] mt-1.5 grid h-4 w-4 place-items-center rounded-full gradient-bg ring-4 ring-background">
                <GraduationCap className="h-2.5 w-2.5 text-primary-foreground" />
              </span>
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-medium text-foreground">
                    {e.level}
                  </span>
                  <span>Milestone</span>
                </div>
                <h3 className="mt-2 text-base font-semibold sm:text-lg">{e.title}</h3>
                <p className="mt-1.5 whitespace-pre-line text-sm text-muted-foreground">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============== ACHIEVEMENTS ============== */
const achievements = [
  {
    icon: Trophy,
    title: "MHT CET",
    value: "98.46 Percentile",
    desc: "Ranked in the top percentile among lakhs of engineering aspirants.",
  },
  {
    icon: Trophy,
    title: "JEE Main",
    value: "85 Percentile",
    desc: "Strong result in one of India's most competitive engineering exams.",
  },
  {
    icon: Sparkles,
    title: "Academic Excellence",
    value: "Consistent performer",
    desc: "Recognized for consistent academic performance and problem-solving.",
  },
  {
    icon: Github,
    title: "Open Source Learning",
    value: "Always shipping",
    desc: "Learning in public — building, breaking, and sharing on GitHub.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Achievements" title="Milestones I'm proud of" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="group glass h-full rounded-2xl p-5 transition-all hover:-translate-y-1 hover:glow-ring">
                <span className="grid h-11 w-11 place-items-center rounded-xl gradient-bg text-primary-foreground">
                  <a.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-medium text-muted-foreground">{a.title}</h3>
                <p className="mt-1 text-lg font-semibold gradient-text">{a.value}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== GITHUB SHOWCASE ============== */
export function GitHubShowcase() {
  // Deterministic pseudo-random contribution grid
  const cells = Array.from({ length: 7 * 20 }, (_, i) => {
    const seed = Math.sin(i * 12.9898) * 43758.5453;
    const v = seed - Math.floor(seed);
    if (v < 0.35) return 0;
    if (v < 0.6) return 1;
    if (v < 0.85) return 2;
    return 3;
  });
  const shades = [
    "bg-white/[0.04]",
    "bg-brand-blue/30",
    "bg-brand-purple/50",
    "bg-brand-purple/80",
  ];

  return (
    <section id="github" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-purple/30 blur-3xl" />
            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-brand-blue/30 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div className="min-w-0">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  GitHub
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                  Building in <span className="gradient-text">public</span>
                </h2>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">
                  Follow along as I ship projects, experiment with AI, and sharpen my craft one
                  commit at a time.
                </p>
                <a
                  href="https://github.com/05unique-dotcom"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl gradient-bg px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
                >
                  <Github className="h-4 w-4" />
                  Visit GitHub Profile
                </a>
              </div>
              <div
                className="grid grid-flow-col grid-rows-7 gap-1"
                aria-hidden
              >
                {cells.map((v, i) => (
                  <span
                    key={i}
                    className={`h-3 w-3 rounded-[3px] ${shades[v]} transition-colors`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== CONTACT ============== */
export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Contact" title="Let's build something together" />
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <div className="glass flex h-full flex-col justify-between rounded-2xl p-6">
              <div className="space-y-4">
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value="05unique7057@gmail.com"
                  href="mailto:05unique7057@gmail.com"
                />
                <ContactRow
                  icon={Github}
                  label="GitHub"
                  value="@05unique-dotcom"
                  href="https://github.com/05unique-dotcom"
                />
                <ContactRow
                  icon={Linkedin}
                  label="LinkedIn"
                  value="arshad-ansari"
                  href="https://linkedin.com/in/arshad-ansari"
                />
                <ContactRow icon={MapPin} label="Location" value="India" />
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                I usually reply within a day. For anything urgent, email works best.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-3">
            <form onSubmit={onSubmit} className="glass grid gap-4 rounded-2xl p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" required />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
              </div>
              <Field label="Subject" name="subject" placeholder="What's this about?" required />
              <label className="grid gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me a bit about your idea or opportunity…"
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-white/20 focus:bg-white/[0.05] focus:ring-2 focus:ring-primary/40"
                />
              </label>
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`text-xs transition-opacity ${sent ? "text-emerald-400 opacity-100" : "opacity-0"}`}
                >
                  Thanks — I'll get back to you soon.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl gradient-bg px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                  Send message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-white/20 focus:bg-white/[0.05] focus:ring-2 focus:ring-primary/40"
      />
    </label>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/5">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="block truncate text-sm font-medium">{value}</span>
      </span>
    </>
  );
  const cls =
    "flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.05]";
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

/* ============== FOOTER ============== */
export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
        <p>Designed & Developed by Arshad Ansari</p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/05unique-dotcom"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 hover:bg-white/5 hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="mailto:05unique7057@gmail.com"
            aria-label="Email"
            className="rounded-lg p-2 hover:bg-white/5 hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ============== SHARED ============== */
function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <div className="text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          <span className="gradient-text">{title}</span>
        </h2>
      </div>
    </Reveal>
  );
}
