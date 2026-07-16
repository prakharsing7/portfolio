// Static paper-grain overlay. Pure CSS (SVG feTurbulence data URI in globals).
// No JS animation — nothing to gate on reduced-motion.
export default function Grain() {
  return <div className="grain-overlay" aria-hidden="true" />
}
