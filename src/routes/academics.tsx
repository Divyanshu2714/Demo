import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, FlaskConical, Languages, Palette } from "lucide-react";
import { PageIntro, PageShell } from "@/components/school-layout";
const stages=[
  {Icon:BookOpen,title:"Lower School",copy:"A joyful foundation in literacy, numeracy, science and creative expression.",age:"Ages 4–10"},
  {Icon:FlaskConical,title:"Middle School",copy:"Subject specialists deepen knowledge through enquiry, collaboration and challenge.",age:"Ages 11–14"},
  {Icon:Languages,title:"Upper School",copy:"A broad GCSE programme develops confident, independent learners.",age:"Ages 15–16"},
  {Icon:Palette,title:"Sixth Form",copy:"Personalised pathways, expert guidance and space for original scholarship.",age:"Ages 16–18"},
];
export const Route=createFileRoute("/academics")({head:()=>({meta:[{title:"Academics — ABC School"},{name:"description",content:"Explore ABC's curriculum from Lower School to Sixth Form."},{property:"og:title",content:"Academics — ABC School"},{property:"og:description",content:"Rigorous, curious and human-centred learning."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Academics});
function Academics(){return <PageShell><main><PageIntro eyebrow="Academics" title="A curriculum with rigour, range and room to think." description="Students build secure knowledge, learn to question confidently and discover the subjects that move them."/><section className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:px-6">{stages.map(({Icon,title,copy,age})=><article key={title} className="glass rounded-lg border border-border p-6 sm:p-8"><Icon className="size-6 text-accent"/><p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-primary">{age}</p><h2 className="mt-2 font-display text-3xl text-brand-deep">{title}</h2><p className="mt-3 leading-7 text-muted-foreground">{copy}</p></article>)}</section></main></PageShell>}