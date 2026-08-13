import { useState, type FormEvent } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Minus,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';

type Service = {
  number: string;
  title: string;
  description: string;
  detail: string;
  color: string;
};

const services: Service[] = [
  {
    number: '01',
    title: 'Celebraciones',
    description: 'Cumpleaños, aniversarios y esas fechas que merecen una entrada triunfal.',
    detail: 'Desde 185 €',
    color: 'bg-[#dce9e4]',
  },
  {
    number: '02',
    title: 'Bodas íntimas',
    description: 'Instalaciones etéreas para decir “sí” con un fondo que se queda en la memoria.',
    detail: 'Desde 420 €',
    color: 'bg-[#f5d7d0]',
  },
  {
    number: '03',
    title: 'Baby showers',
    description: 'Paletas suaves, detalles delicados y una bienvenida hecha a tu medida.',
    detail: 'Desde 240 €',
    color: 'bg-[#e5dff0]',
  },
  {
    number: '04',
    title: 'Marcas & eventos',
    description: 'Escenografías con personalidad para lanzamientos, pop-ups y equipos.',
    detail: 'Propuesta a medida',
    color: 'bg-[#f4df9d]',
  },
];

const gallery = [
  { image: '/balloons-dinner.jpg', title: 'Mesa de verano', type: 'Celebración privada', className: 'md:col-span-7 md:row-span-2' },
  { image: '/balloons-wedding.jpg', title: 'Un sí en crema', type: 'Boda íntima', className: 'md:col-span-5' },
  { image: '/balloons-baby.jpg', title: 'Bienvenida, Vera', type: 'Baby shower', className: 'md:col-span-5' },
  { image: '/balloons-birthday.jpg', title: 'Cumpleaños en color', type: 'Fiesta privada', className: 'md:col-span-5 md:row-span-2' },
];

const testimonials = [
  {
    quote: 'Llegamos con una idea y salimos con una escena completa. Todo tenía intención, desde el primer globo hasta la última cinta.',
    name: 'Clara & Nico',
    detail: 'Boda civil · Madrid',
  },
  {
    quote: 'La instalación cambió por completo el espacio. Nuestros invitados todavía hablan del arco de la entrada.',
    name: 'Marina R.',
    detail: 'Cumpleaños · Chamberí',
  },
  {
    quote: 'Entendieron el tono de nuestra marca a la primera: festivo, pero nada obvio. El resultado fue precioso.',
    name: 'Estudio Norte',
    detail: 'Lanzamiento · Valencia',
  },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-3" data-testid="link-logo">
      <span className="relative flex h-10 w-9 items-end justify-center" aria-hidden="true">
        <span className="absolute left-0 top-1 h-6 w-6 rounded-[55%_45%_50%_50%] bg-[#df5270] rotate-[-16deg]" />
        <span className="absolute right-0 top-0 h-7 w-6 rounded-[45%_55%_50%_50%] bg-[#f1c958] rotate-[14deg]" />
        <span className="absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 bg-[#24344b]" />
      </span>
      <span className={`text-[15px] font-bold leading-[.95] tracking-[-.04em] ${light ? 'text-[#f6efdf]' : 'text-[#24344b]'}`}>
        balloon<br /><span className="font-normal tracking-[.02em]">decoration</span>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', event: '', date: '', message: '' });

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grain min-h-[100dvh] overflow-hidden bg-[#f6efdf] text-[#24344b]">
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="section-shell flex h-[82px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 text-[13px] font-semibold md:flex" aria-label="Navegación principal">
            <a href="#servicios" className="outline-link" data-testid="link-nav-servicios">Servicios</a>
            <a href="#galeria" className="outline-link" data-testid="link-nav-galeria">Galería</a>
            <a href="#proceso" className="outline-link" data-testid="link-nav-proceso">Cómo funciona</a>
            <a href="#contacto" className="btn-lift rounded-full bg-[#24344b] px-5 py-3 text-[#f6efdf]" data-testid="link-nav-presupuesto">Pide presupuesto</a>
          </nav>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#24344b]/20 md:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mx-3 rounded-3xl border border-[#24344b]/10 bg-[#f6efdf]/95 p-4 shadow-[0_18px_45px_rgba(36,52,75,.15)] backdrop-blur-md md:hidden" aria-label="Menú móvil">
            <a href="#servicios" onClick={closeMenu} className="block rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-[#e9dfca]" data-testid="link-mobile-servicios">Servicios</a>
            <a href="#galeria" onClick={closeMenu} className="block rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-[#e9dfca]" data-testid="link-mobile-galeria">Galería</a>
            <a href="#proceso" onClick={closeMenu} className="block rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-[#e9dfca]" data-testid="link-mobile-proceso">Cómo funciona</a>
            <a href="#contacto" onClick={closeMenu} className="mt-2 flex items-center justify-between rounded-2xl bg-[#df5270] px-4 py-3 text-sm font-bold text-[#fff8e9]" data-testid="link-mobile-presupuesto">Hablemos de tu celebración <ArrowRight size={17} /></a>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative min-h-[700px] overflow-hidden pb-20 pt-32 md:min-h-[770px] md:pt-40">
          <div className="absolute -right-32 -top-48 h-[580px] w-[580px] rounded-full bg-[#e3cde0]/55 blur-[1px]" />
          <div className="absolute -bottom-48 left-[-130px] h-[420px] w-[420px] rounded-full bg-[#d6e6e1]/70" />
          <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[.93fr_1.07fr]">
            <div className="relative z-10 max-w-[590px]">
              <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-[#24344b]/15 bg-[#f9f2e5]/70 px-3 py-2 text-[11px] font-bold tracking-[.14em] text-[#8a4a59] uppercase">
                <Sparkles size={13} /> diseño de atmósferas
              </div>
              <h1 className="animate-rise delay-1 mt-7 text-display text-[clamp(3.6rem,8vw,7.2rem)] leading-[.88] tracking-[-.065em] text-[#24344b]">
                Que se note<br /><em className="text-[#df5270]">que hoy</em><br />es especial.
              </h1>
              <p className="animate-rise delay-2 mt-7 max-w-[440px] text-[16px] leading-7 text-[#526071]">
                Diseñamos decoraciones con globos que transforman un lugar en <span className="font-semibold text-[#24344b]">el momento</span> que querías celebrar.
              </p>
              <div className="animate-rise delay-3 mt-8 flex flex-wrap items-center gap-5">
                <a href="#contacto" className="btn-lift inline-flex items-center gap-3 rounded-full bg-[#df5270] px-6 py-4 text-sm font-bold text-[#fff8e9]" data-testid="link-hero-presupuesto">
                  Cuéntanos tu idea <ArrowRight size={17} />
                </a>
                <a href="#galeria" className="outline-link inline-flex items-center gap-2 text-sm font-bold" data-testid="link-hero-galeria">
                  Ver proyectos <ArrowDown size={15} />
                </a>
              </div>
              <div className="animate-rise delay-4 mt-12 flex items-center gap-3 text-xs text-[#687282]">
                <span className="flex -space-x-2" aria-hidden="true">
                  <span className="h-7 w-7 rounded-full border-2 border-[#f6efdf] bg-[#df5270]" />
                  <span className="h-7 w-7 rounded-full border-2 border-[#f6efdf] bg-[#9fbdb6]" />
                  <span className="h-7 w-7 rounded-full border-2 border-[#f6efdf] bg-[#f1c958]" />
                </span>
                <span><strong className="text-[#24344b]">+180 celebraciones</strong> con algo que contar</span>
              </div>
            </div>

            <div className="relative mx-auto h-[450px] w-full max-w-[620px] md:h-[570px]">
              <div className="absolute left-[12%] top-[4%] h-[78%] w-[78%] hero-orb rotate-[5deg] overflow-hidden shadow-[0_35px_70px_rgba(73,58,61,.18)]">
                <img src="/balloons-dinner.jpg" alt="Instalación de globos sobre una mesa de celebración" className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-[4%] left-[2%] rounded-2xl border border-[#24344b]/10 bg-[#f9f2e5]/90 px-4 py-3 shadow-[0_15px_30px_rgba(60,52,48,.1)] backdrop-blur">
                <span className="eyebrow text-[#df5270]">proyecto destacado</span>
                <p className="mt-1 text-sm font-semibold">Una mesa para recordar</p>
              </div>
              <div className="animate-float absolute right-[3%] top-[8%] flex h-24 w-20 items-center justify-center rounded-[52%_48%_51%_49%] bg-[#f1c958] shadow-[inset_-9px_-13px_0_rgba(187,129,35,.12),0_16px_26px_rgba(114,91,32,.14)]">
                <span className="h-7 w-3 rounded-full bg-white/25 blur-sm" />
              </div>
              <div className="animate-float absolute bottom-[21%] right-[0] flex h-32 w-28 items-center justify-center rounded-[52%_48%_51%_49%] bg-[#df5270] shadow-[inset_-11px_-18px_0_rgba(149,46,70,.13),0_18px_30px_rgba(114,45,63,.15)] [animation-delay:1.1s]">
                <span className="h-10 w-4 rounded-full bg-white/20 blur-sm" />
              </div>
              <span className="absolute right-[13%] top-[25%] h-7 w-7 rounded-full bg-[#9fbdb6]" />
              <span className="absolute bottom-[12%] right-[24%] h-4 w-4 rounded-full bg-[#e3cde0]" />
            </div>
          </div>
          <a href="#manifiesto" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-bold tracking-[.2em] text-[#697282] uppercase md:flex" data-testid="link-scroll-manifiesto">
            descubre nuestro enfoque <span className="h-9 w-px bg-[#24344b]/25" />
          </a>
        </section>

        <section id="manifiesto" className="bg-[#24344b] py-20 text-[#f6efdf] md:py-28">
          <div className="section-shell grid gap-12 md:grid-cols-[.72fr_1.28fr] md:items-end">
            <div>
              <span className="eyebrow text-[#f1c958]">más que globos</span>
              <p className="mt-5 text-display text-4xl leading-tight md:text-5xl">Diseñamos cómo se va a sentir.</p>
            </div>
            <div>
              <p className="max-w-[680px] text-[clamp(1.35rem,2.5vw,2.25rem)] leading-[1.2] tracking-[-.035em] text-[#f9f2e5]">
                Una celebración memorable no ocurre por accidente. Tiene ritmo, color, un punto de sorpresa y espacio para que pasen cosas.
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm text-[#b8c0c8]">
                <span className="h-px w-10 bg-[#df5270]" /> Del primer boceto a la última foto
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section-shell py-24 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow text-[#df5270]">lo que hacemos</span>
              <h2 className="mt-4 text-display text-5xl leading-[.96] tracking-[-.05em] md:text-6xl">Tu ocasión.<br /><em>En su mejor versión.</em></h2>
            </div>
            <p className="max-w-[320px] text-sm leading-6 text-[#687282]">No trabajamos con packs cerrados. Cada instalación nace de tu espacio, tu historia y tu manera de celebrar.</p>
          </div>
          <div className="mt-14 divide-y divide-[#24344b]/15 border-y border-[#24344b]/15">
            {services.map((service) => (
              <article key={service.number} className="group grid gap-5 py-7 transition-colors hover:bg-[#efe5d2] md:grid-cols-[80px_1fr_1fr_130px] md:items-center md:gap-8">
                <span className="text-sm font-semibold text-[#df5270]" data-testid={`text-service-number-${service.number}`}>{service.number}</span>
                <h3 className="text-display text-3xl tracking-[-.03em] md:text-4xl">{service.title}</h3>
                <p className="max-w-[330px] text-sm leading-6 text-[#687282]">{service.description}</p>
                <span className={`w-fit rounded-full px-3 py-2 text-[11px] font-bold ${service.color}`} data-testid={`text-service-price-${service.number}`}>{service.detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="galeria" className="bg-[#e9dfcf] py-24 md:py-32">
          <div className="section-shell">
            <div className="flex items-end justify-between gap-5">
              <div>
                <span className="eyebrow text-[#8a4a59]">un poco de inspiración</span>
                <h2 className="mt-4 text-display text-5xl leading-[.95] tracking-[-.05em] md:text-6xl">Hecho para<br /><em>ser recordado.</em></h2>
              </div>
              <span className="hidden text-sm text-[#687282] md:block">01 — 04</span>
            </div>
            <div className="mt-12 grid auto-rows-[260px] gap-4 md:grid-cols-12 md:auto-rows-[210px]">
              {gallery.map((item, index) => (
                <a href="#contacto" key={item.title} className={`image-zoom group relative overflow-hidden rounded-[1.4rem] ${item.className}`} data-testid={`link-gallery-${index + 1}`}>
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172235]/85 to-transparent p-5 pt-16 text-[#fff8e9]">
                    <span className="text-[10px] font-bold tracking-[.16em] uppercase text-[#f1c958]">{item.type}</span>
                    <p className="mt-1 text-display text-xl">{item.title}</p>
                  </div>
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8e9]/85 text-[#24344b] opacity-0 transition-opacity group-hover:opacity-100"><ArrowRight size={15} /></span>
                </a>
              ))}
            </div>
            <div className="mt-7 flex items-center justify-between border-t border-[#24344b]/15 pt-5">
              <p className="text-sm text-[#687282]">¿Tienes una idea en mente?</p>
              <a href="#contacto" className="outline-link flex items-center gap-2 text-sm font-bold" data-testid="link-gallery-contacto">Hagámosla real <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section id="proceso" className="section-shell py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[.75fr_1.25fr]">
            <div>
              <span className="eyebrow text-[#df5270]">sin complicaciones</span>
              <h2 className="mt-4 text-display text-5xl leading-[.96] tracking-[-.05em] md:text-6xl">Del “¿y si…?”<br /><em>a “qué bonito”.</em></h2>
              <p className="mt-6 max-w-[320px] text-sm leading-6 text-[#687282]">Nos ocupamos de la parte bonita y de la que no se ve. Tú solo tienes que disfrutar de llegar y encontrarlo todo en su sitio.</p>
            </div>
            <div className="border-t border-[#24344b]/15">
              {[
                ['01', 'Nos cuentas', 'Fecha, lugar, número de personas y eso que quieres que todo el mundo recuerde.'],
                ['02', 'Lo imaginamos', 'Te enviamos una propuesta visual con paleta, formas y una inversión clara.'],
                ['03', 'Lo instalamos', 'Llegamos antes que tus invitados. Montamos, cuidamos cada detalle y dejamos magia.'],
              ].map(([number, title, body]) => (
                <div key={number} className="grid gap-4 border-b border-[#24344b]/15 py-7 md:grid-cols-[64px_190px_1fr] md:items-start">
                  <span className="text-sm font-bold text-[#df5270]">{number}</span>
                  <h3 className="text-display text-2xl">{title}</h3>
                  <p className="text-sm leading-6 text-[#687282]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#dce9e4] py-20 md:py-24">
          <div className="section-shell grid gap-10 md:grid-cols-[.5fr_1.5fr] md:items-center">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#24344b] text-[#f1c958]"><Sparkles size={19} /></span>
              <span className="eyebrow text-[#24344b]">lo dicen ellos</span>
            </div>
            <div className="relative">
              <Minus className="absolute -left-1 -top-2 text-[#df5270]" size={24} />
              <div className="pl-8">
                <blockquote className="text-display text-3xl leading-[1.2] tracking-[-.03em] md:text-5xl">“{testimonials[0].quote}”</blockquote>
                <div className="mt-7 flex items-center gap-3 text-sm">
                  <span className="h-2 w-2 rounded-full bg-[#df5270]" />
                  <span className="font-bold">{testimonials[0].name}</span>
                  <span className="text-[#687282]">{testimonials[0].detail}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-24 md:py-32">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article key={testimonial.name} className={`rounded-[1.5rem] p-7 ${index === 1 ? 'bg-[#f5d7d0]' : 'bg-[#efe5d2]'}`} data-testid={`card-testimonial-${index + 1}`}>
                <div className="flex gap-1 text-[#df5270]" aria-label="5 de 5">
                  {[1, 2, 3, 4, 5].map((star) => <span key={star} className="h-2 w-2 rounded-full bg-[#df5270]" />)}
                </div>
                <p className="mt-7 min-h-[115px] text-[17px] leading-7">“{testimonial.quote}”</p>
                <div className="mt-7 border-t border-[#24344b]/15 pt-4">
                  <p className="text-sm font-bold">{testimonial.name}</p>
                  <p className="mt-1 text-xs text-[#687282]">{testimonial.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="bg-[#24344b] py-24 text-[#f6efdf] md:py-32">
          <div className="section-shell grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <span className="eyebrow text-[#f1c958]">cuéntanoslo todo</span>
              <h2 className="mt-5 text-display text-6xl leading-[.9] tracking-[-.06em] md:text-8xl">Hagamos<br /><em className="text-[#df5270]">fiesta.</em></h2>
              <p className="mt-7 max-w-[330px] text-[15px] leading-7 text-[#b8c0c8]">Cuatro datos, una idea y te respondemos en menos de 48 horas con los siguientes pasos.</p>
              <div className="mt-10 space-y-4 text-sm text-[#d5d9dd]">
                <a href="mailto:hola@balloondecoration.es" className="flex items-center gap-3 outline-link" data-testid="link-email"><Mail size={16} className="text-[#f1c958]" /> hola@balloondecoration.es</a>
                <a href="tel:+34612488930" className="flex items-center gap-3 outline-link" data-testid="link-phone"><Phone size={16} className="text-[#f1c958]" /> +34 612 488 930</a>
                <span className="flex items-center gap-3"><MapPin size={16} className="text-[#f1c958]" /> Madrid · Valencia · donde nos lleve la fiesta</span>
              </div>
            </div>
            <div className="rounded-[1.6rem] bg-[#f6efdf] p-6 text-[#24344b] md:p-9">
              {submitted ? (
                <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#dce9e4] text-[#3b7468]"><Check size={28} /></span>
                  <h3 className="mt-7 text-display text-4xl">Lo tenemos.</h3>
                  <p className="mt-4 max-w-[330px] text-sm leading-6 text-[#687282]">Gracias, {form.name || 'qué ilusión'}. Revisamos tu idea y te escribimos muy pronto para empezar a darle forma.</p>
                  <button type="button" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', event: '', date: '', message: '' }); }} className="mt-8 text-sm font-bold text-[#df5270] underline underline-offset-4" data-testid="button-new-request">Enviar otra consulta</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-contacto">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="eyebrow text-[#687282]">tu nombre</span>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 w-full border-0 border-b border-[#24344b]/20 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#9da2a5] focus:border-[#df5270]" placeholder="María García" data-testid="input-name" />
                    </label>
                    <label className="block">
                      <span className="eyebrow text-[#687282]">tu email</span>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full border-0 border-b border-[#24344b]/20 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#9da2a5] focus:border-[#df5270]" placeholder="maria@email.com" data-testid="input-email" />
                    </label>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="eyebrow text-[#687282]">qué celebras</span>
                      <div className="relative">
                        <select required value={form.event} onChange={(e) => setForm({ ...form, event: e.target.value })} className="mt-2 w-full appearance-none border-0 border-b border-[#24344b]/20 bg-transparent px-0 py-3 text-sm outline-none focus:border-[#df5270]" data-testid="select-event">
                          <option value="">Elige una opción</option>
                          <option value="cumpleanos">Cumpleaños</option>
                          <option value="boda">Boda</option>
                          <option value="baby-shower">Baby shower</option>
                          <option value="marca">Evento de marca</option>
                          <option value="otro">Otra celebración</option>
                        </select>
                        <ChevronDown size={15} className="pointer-events-none absolute right-0 top-3" />
                      </div>
                    </label>
                    <label className="block">
                      <span className="eyebrow text-[#687282]">cuándo será</span>
                      <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="mt-2 w-full border-0 border-b border-[#24344b]/20 bg-transparent px-0 py-3 text-sm outline-none focus:border-[#df5270]" data-testid="input-date" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="eyebrow text-[#687282]">cuéntanos un poco</span>
                    <textarea required rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 w-full resize-none border-0 border-b border-[#24344b]/20 bg-transparent px-0 py-3 text-sm leading-6 outline-none placeholder:text-[#9da2a5] focus:border-[#df5270]" placeholder="Lugar, número de invitados, colores que te gustan..." data-testid="textarea-message" />
                  </label>
                  <button type="submit" className="btn-lift mt-2 flex w-full items-center justify-between rounded-full bg-[#df5270] px-6 py-4 text-sm font-bold text-[#fff8e9]" data-testid="button-submit-contact">
                    Quiero mi propuesta <ArrowRight size={18} />
                  </button>
                  <p className="text-center text-[11px] text-[#7e8589]">Sin compromiso · Respondemos en menos de 48 h</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#24344b] px-0 pb-8 text-[#f6efdf]">
        <div className="section-shell border-t border-[#f6efdf]/15 pt-8">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <Logo light />
              <p className="mt-4 text-xs text-[#9faab5]">Decoración que hace espacio para celebrar.</p>
            </div>
            <div className="flex items-center gap-5 text-xs text-[#9faab5]">
              <a href="#servicios" className="outline-link" data-testid="link-footer-servicios">Servicios</a>
              <a href="#galeria" className="outline-link" data-testid="link-footer-galeria">Galería</a>
              <a href="#contacto" className="outline-link" data-testid="link-footer-contacto">Contacto</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" data-testid="link-footer-instagram"><Instagram size={17} /></a>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#f6efdf]/15 pt-5 text-[11px] text-[#7c8995] md:flex-row">
            <span>© 2024 Balloon Decoration</span>
            <span>Hecho para momentos que merecen más.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;