import { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Areas } from '@/components/site/areas'

export const metadata: Metadata = {
  title: 'Service Zones | Narendar Home Tuitions',
  description:
    'Explore home tuition service zones around Uppal, including Habsiguda, Ramanthapur, Boduppal, Nagole and nearby East Hyderabad neighborhoods.',
  keywords: [
    'service zones',
    'coverage areas',
    'Hyderabad neighborhoods',
    'home tuition areas',
    'Narendar Home Tuitions',
  ],
}

export default function ServiceZonesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Service Zones"
        title="Our Coverage Areas"
        description="We welcome home tuition enquiries from Uppal, Habsiguda, Ramanthapur, Boduppal, Nagole and nearby East Hyderabad neighborhoods. Contact us to confirm tutor availability for your locality."
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'Service Zones' },
        ]}
      />
      <Areas isHomepage={false} />
    </PageShell>
  )
}
