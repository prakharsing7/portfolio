export async function GET(request: Request) {
  const acceptsText = request.headers.get('accept')?.includes('text/plain') ?? false

  const data = {
    name: 'Prakhar Singh',
    role: 'AI & Backend Engineer',
    company: 'Electric Miles',
    location: 'London, UK',
    building: 'Software infrastructure for EV charging networks',
    stack: ['PHP', 'Symfony', 'TypeScript', 'Next.js', 'Claude API'],
    chargersIntegrated: '30+',
    currentFocus: 'Leading internal AI rollout using Claude at Electric Miles',
    contact: 'prakharsing7@gmail.com',
    updated: new Date().toISOString().split('T')[0],
    haiku: [
      'Electrons flow clean —',
      'thirty chargers now online,',
      'the grid learns to breathe.',
    ],
  }

  if (acceptsText) {
    const text = `PRAKHAR SINGH — /now
════════════════════════════════

Role      ${data.role}
Company   ${data.company}
Location  ${data.location}

Building  ${data.building}
Stack     ${data.stack.join(' · ')}
Chargers  ${data.chargersIntegrated} integrated

Contact   ${data.contact}
Updated   ${data.updated}

  ${data.haiku.join('\n  ')}

════════════════════════════════
`
    return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
  }

  return Response.json(data)
}
