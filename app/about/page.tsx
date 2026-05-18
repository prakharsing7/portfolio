import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'AI & Backend Engineer at Electric Miles, London. From ML research roots through iOS development to EV infrastructure and AI integration.',
}

export default function About() {
  return (
    <div className="px-6 pt-32 pb-20 max-w-layout mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">

        {/* Prose */}
        <div className="flex-1 max-w-content">
          <div className="space-y-5 text-body text-text-secondary mb-14">
            <p>
              I started in machine learning: not because it was fashionable, but because I was
              obsessed with what you could infer from data that had no obvious structure. At SRM
              Institute in Chennai, I built a cyclone intensity prediction system using infrared
              INSAT-3D satellite imagery. The hypothesis: convolutional nets applied to raw
              geoTIFF frames could yield faster, more granular predictions. It worked, and
              reinforced a way of thinking I still carry: physical systems as data problems.
            </p>
            <p>
              Around the same time: real-time object detection on the COCO dataset, BERTopic
              topic modelling on news corpora, YOLO-based social distance monitoring. Research
              rigour. Data-to-decision pipelines. Systems thinking.
            </p>
          </div>

          <div className="space-y-5 text-body text-text-secondary mb-14">
            <p>
              Then products. An iOS trip planning app (Circles), built in SwiftUI with MVVM
              architecture and a MongoDB backend. Ten-plus screens, collaborative editing,
              real-time sync. An iOS internship at Infosys. A hospital management system
              (zen-u). An open-source 3D slicer fork (slic3r).
            </p>
            <p>
              The pattern: full-stack capability, product ownership, cross-platform range.
              The discipline of shipping something complete. The distance between
              &ldquo;it works&rdquo; and &ldquo;it feels right&rdquo;, and learning to close it deliberately.
            </p>
          </div>

          <div className="space-y-5 text-body text-text-secondary">
            <p>
              Electric Miles. I joined as a Platform Onboarding Engineer and spent the first
              phase integrating EV chargers into a live OCPP network: 30+ chargers across 15+
              manufacturers. KEBA, Rolec, NexBlue, EnSmart, EN+, Vestel, Heliox, and others.
              Every manufacturer treats the OCPP standard differently. Custom status codes,
              non-standard field values, undocumented edge cases. You learn fast that a
              protocol spec and a real charger are two different things.
            </p>
            <p>
              Then: full end-to-end test ownership of emPACT, Electric Miles&rsquo; flagship
              B2B platform for CPOs and fleet operators. State machine coverage for every
              charger type. Payment flow edge cases. Load balancing scenarios.
            </p>
            <p>
              Now: AI &amp; Backend Engineer. I led the internal rollout of Claude (Anthropic&rsquo;s
              API) across Electric Miles&rsquo; operations, automating high-friction workflows in
              the PHP/Symfony backend. The first production AI integration at an EV
              infrastructure company. That&rsquo;s the work I find most interesting: the
              intersection where energy infrastructure meets AI systems.
            </p>
          </div>
        </div>

        {/* Sticky sidebar */}
        <aside className="lg:w-64 shrink-0">
          <div className="lg:sticky lg:top-32 space-y-8 font-mono text-small">
            {[
              { label: 'Currently',  lines: ['AI & Backend Engineer', 'Electric Miles, London'] },
              { label: 'Building',   lines: ['Energy infrastructure software', 'Internal AI tooling with Claude'] },
              { label: 'Focused on', lines: ['OCPP · OCPI · PHP/Symfony', 'Next.js · TypeScript · AI integrations'] },
              { label: 'Open to',    lines: ['Senior full-time or contract', 'Energy tech · Climate · EV systems', 'Remote or London'] },
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
    </div>
  )
}
