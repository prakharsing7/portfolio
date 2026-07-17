export type ExperienceRole = {
  title: string
  company: string
  period: string
  description?: string
  tags?: string[]
}

export const EXPERIENCE: ExperienceRole[] = [
  {
    title: 'Backend Engineer',
    company: 'Electric Miles',
    period: '2026–present',
    description:
      "Led the internal rollout of Claude (Anthropic) across Electric Miles' operations, automating high-friction workflows in the PHP/Symfony backend. First production AI integration at an EV infrastructure company.",
    tags: ['PHP', 'Symfony', 'Claude API', 'TypeScript', 'OCPI'],
  },
  {
    title: 'Platform Onboarding Engineer',
    company: 'Electric Miles',
    period: '2024–2026',
    description:
      "Integrated 30+ EV chargers into a live OCPP network. Owned full end-to-end test coverage of emPACT, Electric Miles' flagship B2B platform for CPOs and fleet operators.",
    tags: ['OCPP', 'PHP', 'Symfony', 'PostgreSQL', 'E2E Testing'],
  },
  {
    title: 'Intern',
    company: 'Electric Miles',
    period: '2022–2024',
  },
  {
    title: 'iOS Developer Intern',
    company: 'Infosys',
    period: '2022',
    description:
      "Built and shipped iOS features using Swift and UIKit. Gained production experience with Apple's design guidelines, Core Data, and REST API integration.",
    tags: ['Swift', 'UIKit', 'iOS', 'REST'],
  },
]
