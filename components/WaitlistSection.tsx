import WaitlistForm from './WaitlistForm'
import SectionHeader from './SectionHeader'

interface WaitlistSectionProps {
  title: string
  subtitle: string
  niche: string
  /** Optional id for anchor links (e.g. "waitlist") */
  id?: string
}

export default function WaitlistSection({ title, subtitle, niche, id }: WaitlistSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4">
        <div className="card-friendly p-8 md:p-10">
          <div className="mb-8">
            <SectionHeader title={title} subtitle={subtitle} variant="dark" />
          </div>
          <WaitlistForm niche={niche} />
        </div>
      </div>
    </section>
  )
}
