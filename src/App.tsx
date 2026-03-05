import { useEffect, useState } from "react"

type ProfileLink = {
  title: string
  subtitle: string
  href: string
  mode: "external" | "contact"
}

const profileLinks: ProfileLink[] = [
  {
    title: "Portfolio",
    subtitle: "Seleção de projetos e estudos",
    href: "https://ls-sportifolio.vercel.app/",
    mode: "external",
  },
  {
    title: "Gihub",
    subtitle: "Código e repositórios",
    href: "#",
    mode: "external",
  },
  {
    title: "LinkedIn",
    subtitle: "Perfil e trajetória",
    href: "#",
    mode: "external",
  },
  {
    title: "Contato",
    subtitle: "Parcerias e propostas",
    href: "#",
    mode: "contact",
  },
]

const quickActions = [
  { label: "Tiktok", href: "#" },
]

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    if (!isContactOpen) {
      document.body.style.removeProperty("overflow")
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsContactOpen(false)
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.removeProperty("overflow")
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isContactOpen])

  return (
    <main className="viewport">
      <div className="ambient-layer" aria-hidden="true" />
      <section className="stage">
        <aside className="profile-panel">
          <p className="kicker">BLACK EDITION</p>
          <div className="avatar" aria-hidden="true">
            <span>LS  </span>
          </div>
          <h1>Luis Felipe</h1>
          <p className="bio">
            Design limpo. Presenca forte. Uma pagina unica para centralizar seus
            links com foco total em conversao.
          </p>
          <div className="meta-row">
            <span>UI/UX First</span>
            <span>Linktree Layout</span>
            <span>2026</span>
          </div>
        </aside>

        <section className="links-panel" aria-label="Links principais">
          <header className="panel-header">
            <h2>Escolha seu destino</h2>
            <p>
              Interface pensada para escaneabilidade, contraste e navegacao
              intuitiva em qualquer tela.
            </p>
          </header>

          <nav className="links-list" aria-label="Lista de links">
            {profileLinks.map((item, index) => {
              if (item.mode === "contact") {
                return (
                  <button
                    key={item.title}
                    type="button"
                    className="link-card link-card-button"
                    onClick={() => setIsContactOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={isContactOpen}
                  >
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.subtitle}</small>
                    </span>
                    <em aria-hidden="true">{String(index + 1).padStart(2, "0")}</em>
                  </button>
                )
              }

              const isExternal = item.href.startsWith("http")

              return (
                <a
                  key={item.title}
                  className="link-card"
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </span>
                  <em aria-hidden="true">{String(index + 1).padStart(2, "0")}</em>
                </a>
              )
            })}
          </nav>

          <footer className="panel-footer">
            <p>Siga tambem</p>
            <div className="quick-actions" aria-label="Redes sociais">
              {quickActions.map((social) => (
                <a key={social.label} href={social.href}>
                  {social.label}
                </a>
              ))}
            </div>
          </footer>
        </section>
      </section>

      {isContactOpen ? (
        <div
          className="contact-modal-backdrop"
          role="presentation"
          onClick={() => setIsContactOpen(false)}
        >
          <section
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="contact-modal-header">
              <div>
                <p>Contato direto</p>
                <h3 id="contact-modal-title">Fale comigo</h3>
              </div>
              <button
                type="button"
                className="contact-close"
                onClick={() => setIsContactOpen(false)}
                aria-label="Fechar popup de contato"
              >
                Fechar
              </button>
            </header>

            <p className="contact-intro">
              Escolha o melhor canal para conversarmos sobre projetos e
              oportunidades.
            </p>

            <div className="contact-list">
              <a className="contact-card" href="mailto:luisfelipe92088@gmail.com">
                <span>Email</span>
                <strong>luisfelipe92088@gmail.com</strong>
              </a>

              <a
                className="contact-card"
                href="https://wa.me/5567996304962"
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp</span>
                <strong>+55 (67) 99630-4962</strong>
              </a>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  )
}

export default App
