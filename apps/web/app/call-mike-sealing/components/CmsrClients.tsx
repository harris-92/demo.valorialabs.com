import { Building2 } from 'lucide-react'

const clients = [
  {
    src: '/call-mike-sealing/clients/home-hardware.svg',
    name: 'Home Hardware',
  },
  {
    src: '/call-mike-sealing/clients/esso.svg',
    name: 'Esso',
  },
  {
    src: '/call-mike-sealing/clients/riocan.svg',
    name: 'RioCan Real Estate Investment Trust',
  },
  {
    src: '/call-mike-sealing/clients/pizza-pizza.svg',
    name: 'Pizza Pizza',
  },
] as const

export default function CmsrClients() {
  return (
    <section id="clients" className="bg-[var(--cmsr-surface-low)] py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 lg:px-12">
        <div className="max-w-2xl space-y-2">
          <p className="cmsr-label flex items-center gap-2 text-[var(--cmsr-primary)]">
            <Building2 className="size-4" aria-hidden="true" />
            Commercial Accounts
          </p>
          <h2 className="cmsr-h2">Our Clients</h2>
        </div>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {clients.map((client) => (
            <li key={client.name} className="flex flex-col items-center justify-center gap-3 rounded-xl bg-[var(--cmsr-neutral)] px-4 py-6">
              <img src={client.src} alt={client.name} className="h-14 w-full object-contain sm:h-16" />
              <span className="text-center text-xs font-semibold text-[var(--cmsr-on-primary)]">{client.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
