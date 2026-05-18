import type { Metadata } from 'next'
import { CountUp } from '@/components/count-up'

export const metadata: Metadata = {
  title: 'About',
  description: 'AI & Backend Engineer at Electric Miles, London. From ML research roots through iOS development to EV infrastructure and AI integration.',
}

const metrics = [
  { value: 30,   suffix: '+', decimals: 0, label: 'Chargers\nintegrated', accent: true  },
  { value: 3,    suffix: '+', decimals: 0, label: 'Years\nshipping',      accent: false },
  { value: 2,    suffix: '',  decimals: 0, label: 'Roles\nat EM',         accent: false },
  { value: 8.96, suffix: '',  decimals: 2, label: 'CGPA\nSRM',            accent: false },
]

export default function About() {
  return (
    <div className="px-6 pt-32 pb-20 max-w-layout mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">

        {/* Prose */}
        <div className="flex-1 max-w-content">
          <section className="mb-14">
            <p className="font-mono text-small text-text-tertiary tracking-widest uppercase mb-6">Roots</p>
            <div className="space-y-5 text-body text-text-secondary">
              <p>
                I started in machine learning — not because it was fashionable, but because I was
                obsessed with what you could infer from data that had no obvious structure. At SRM
                Institute in Chennai, I built a cyclone intensity prediction system using infrared
                INSAT-3D satellite imagery. The hypothesis: convolutional nets applied to raw
                geoTIFF frames could yield faster, more granular predictions. It worked — and
                reinforced a way of thinking I still carry: physical systems as data problems.
              </p>
              <p>
                Around the same time: real-time object detection on the COCO dataset, BERTopic
                topic modelling on news corpora, YOLO-based social distance monitoring. Research
                rigour. Data-to-decision pipelines. Systems thinking.
              </p>
            </div>
          </section>

          <section className="mb-14">
            <p className="font-mono text-small text-text-tertiary tracking-widest uppercase mb-6">Building</p>
            <div className="space-y-5 text-body text-text-secondary">
              <p>
                Then products. An iOS trip planning app — Circles — built in SwiftUI with MVVM
                architecture and a MongoDB backend. Ten-plus screens, collaborative editing,
                real-time sync. An iOS internship at Infosys. A hospital management system
                (zen-u). An open-source 3D slicer fork (slic3r).
              </p>
              <p>
                The pattern: full-stack capability, product ownership, cross-platform range.
                The discipline of shipping something complete. The distance between
                &ldquo;it works&rdquo; and &ldquo;it feels right&rdquo; — and learning to close it deliberately.
              </p>
            </div>
          </section>

          <section>
            <p className="font-mono text-small text-text-tertiary tracking-widest uppercase mb-6">Now</p>
            <div className="space-y-5 text-body text-text-secondary">
              <p>
                Electric Miles. I joined as a Platform Onboarding Engineer and spent the first
                phase integrating EV chargers into a live OCPP network. Thirty-plus chargers.
                KEBA, Rolec, NexBlue, EnSmart, EN+, Vestel, Heliox, and others. Every
                manufacturer treats the OCPP standard differently — custom status codes,
                non-standard field values, undocumented edge cases. You learn fast that a
                protocol spec and a real charger are two different things.
              </p>
              <p>
                Then: full end-to-end test ownership of emPACT — Electric Miles&rsquo; flagship
                B2B platform for CPOs and fleet operators. State machine coverage for every
                charger type. Payment flow edge cases. Load balancing scenarios.
              </p>
              <p>
                Now: AI &amp; Backend Engineer. I led the internal rollout of Claude (Anthropic&rsquo;s
                API) across Electric Miles&rsquo; operations, automating high-friction workflows in
                the PHP/Symfony backend. The first production AI integration at an EV
                infrastructure company. That&rsquo;s the work I find most interesting — the
                intersection where energy infrastructure meets AI systems.
              </p>
            </div>
          </section>
        </div>

        {/* Sticky sidebar */}
        <aside className="lg:w-64 shrink-0">
          <div className="lg:sticky lg:top-32 space-y-8 font-mono text-small">
            {[
              { label: 'Currently',  lines: ['AI & Backend Engineer', 'Electric Miles, London'] },
              { label: 'Building',   lines: ['Energy infrastructure software', 'Internal AI tooling with Claude'] },
              { label: 'Focused on', lines: ['OCPP · OCPI · PHP/Symfony', 'Next.js · TypeScript · AI integrations'] },
              { label: 'Open to',    lines: ['Senior roles in energy tech', 'Climate infrastructure · EV systems'] },
            ].map(({ label, lines }) => (
              <div key={label}>
                <p className="text-text-tertiary mb-3 tracking-widest uppercase">{label}</p>
                <div className="border-t border-border pt-3 space-y-1">
                  {lines.map((line) => (
                    <p key={line} className="text-text-secondary">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Metrics */}
      <div className="mt-20 pt-12 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m) => (
          <div key={m.label}>
            <CountUp
              end={m.value}
              suffix={m.suffix}
              decimals={m.decimals}
              className={`font-display text-h1 ${m.accent ? 'text-accent' : 'text-text-primary'}`}
            />
            <p className="font-mono text-small text-text-secondary mt-1 whitespace-pre-line">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
