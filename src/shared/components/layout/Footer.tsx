import { site } from "@/shared/config/site";
import { Container } from "@/shared/components/ui/Container";
import { PhoneLink } from "@/shared/components/ui/PhoneLink";
import { Logo } from "./Logo";

function GroupTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white">
      {children}
    </p>
  );
}

export function Footer() {
  const { address } = site;
  return (
    <footer className="bg-brand-dark text-slate-300">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo onDark className="mb-4" />
            <p className="text-sm leading-relaxed">
              Professional pressure washing for {site.areasServed[0]} and nearby towns.
              Locally owned, licensed &amp; insured.
            </p>
            <address className="mt-4 space-y-1 text-sm not-italic">
              <p>
                {address.street}
                <br />
                {address.city}, {address.state} {address.zip}
              </p>
              <p>
                <PhoneLink className="font-semibold text-white hover:text-brand-light" />
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-white"
                >
                  {site.email}
                </a>
              </p>
            </address>
          </div>


          <nav aria-label="Residential services">
            <GroupTitle>Residential</GroupTitle>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {site.services.residential.map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Commercial services">
            <GroupTitle>Commercial</GroupTitle>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {site.services.commercial.map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <nav aria-label="Quick links">
              <GroupTitle>Company</GroupTitle>
              <ul className="grid grid-cols-1 gap-2 text-sm">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6">
              <GroupTitle>Hours</GroupTitle>
              <ul className="space-y-1 text-sm">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    <span className="text-slate-400">{h.days}:</span> {h.time}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <GroupTitle>Areas Served</GroupTitle>
              <p className="text-sm">{site.areasServed.join(" · ")}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy;
          </p>
          <p className="text-slate-400">{site.name} · {address.city}, {address.state}</p>
        </div>
      </Container>
    </footer>
  );
}
