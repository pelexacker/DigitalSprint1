import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Mail, MessageSquare, CheckCircle2, ChevronDown, Loader2 } from 'lucide-react';
import { Resend } from 'resend';
import logo from './assets/logo.svg';

const resend = new Resend('re_9dBvPusT_6AMUHNdPZTmz2MMCMKTvyfHu');

const testimonialsData = [
    { text: `"Sistem 2026 je promenio sve. Od vizije do lansiranja za samo 10 dana. Nikada nismo videli ovakvu brzinu uz ovaj nivo kvaliteta."`, author: "ROY LARSON", role: "CEO, StartUp Inc", initials: "RL" },
    { text: `"Tim Agencije je nadmašio sva naša očekivanja. SEO proboj koji smo doživeli u prvom kvartalu nam je vratio investiciju četvorostruko."`, author: "NEMANJA ILIĆ", role: "Osnivač, TechNova", initials: "NI" },
    { text: `"Rebranding je bio pun pogodak! Sada zračimo onom dozom profesionalizma koju smo oduvek želeli na našem sajtu."`, author: "MILAN MITROVIĆ", role: "Direktor, Inženjering Plus", initials: "MM" },
    { text: `"Odgovaranje na zahteve je trenutno. Više se ni ne brinemo za tehnička pitanja, sve se rešava u roku od par sati."`, author: "JELENA SAVIĆ", role: "Marketing Menadžer", initials: "JS" },
    { text: `"Pravi digitalni partner u punom smislu reči. Od prvog sastanka do isporuke, zadržali su fantastičnu radnu etiku."`, author: "DAVID KOVAČ", role: "CTO, FinTech RS", initials: "DK" },
    { text: `"Smeo UX dizajn, brzina sajta i fenomenalna platforma. Najbolja investicija za naš online biznis u poslednjih 5 godina."`, author: "SANJA ĐORĐEVIĆ", role: "E-Commerce", initials: "SĐ" },
    { text: `"Samo ću reći jedno: 150% povećanje broja upita preko sajta samo mesec dana od novog lansiranja. Ogromna preporuka!"`, author: "MARKO ANDRIĆ", role: "Sales Lead", initials: "MA" },
    { text: `"Nisam do sada sarađivala sa agencijom koja ovoliko transparentno radi. Rezultati dolaze ranije od ugovorenog roka."`, author: "ANA NIKOLIĆ", role: "Product Manager", initials: "AN" },
    { text: `"Lakoća komuniciranja na višem nivou. Nema mailova, sve obavljamo brzim voice notama i tiketima. Cene su potpuno jasne."`, author: "STEFAN JOVANOVIĆ", role: "StartUp Osnivač", initials: "SJ" },
    { text: `"Ovakva efikasnost nam je uštedela minimum 30 sati na sastančenja oko dizajna. Sistem 2026 radi savršeno i efikasno!"`, author: "IVANA VASIĆ", role: "Kreativni Direktor", initials: "IV" }
];

function App() {
    const [openFaq, setOpenFaq] = useState(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        ime: '',
        prezime: '',
        email: '',
        telefon: '',
        firma: '',
        websajt: '',
        usluga: '',
        budzet: '',
        poruka: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'vexwebdizajner@gmail.com',
                subject: `Novi Upit: ${formData.ime} ${formData.prezime}`,
                html: `
                    <h3>Novi upit sa sajta</h3>
                    <p><strong>Ime i prezime:</strong> ${formData.ime} ${formData.prezime}</p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <p><strong>Telefon:</strong> ${formData.telefon}</p>
                    <p><strong>Firma:</strong> ${formData.firma || 'Nije navedeno'}</p>
                    <p><strong>Web sajt:</strong> ${formData.websajt || 'Nije navedeno'}</p>
                    <p><strong>Usluga:</strong> ${formData.usluga}</p>
                    <p><strong>Budžet:</strong> ${formData.budzet || 'Nije navedeno'}</p>
                    <p><strong>Poruka:</strong></p>
                    <p>${formData.poruka}</p>
                `
            });
            setSubmitted(true);
        } catch (error) {
            console.error('Email error:', error);
            alert('Došlo je do greške pri slanju. Molimo pokušajte ponovo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonialsData.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="app-container">
            {/* NAVBAR */}
            <nav className="navbar container">
                <div className="nav-logo">
                    <img src={logo} alt="Digitalni Sprint" className="logo-img" />
                </div>
                <div className="nav-links">
                    <a href="#usluge">Usluge</a>
                    <a href="#o-nama">O nama</a>
                    <a href="#cene">Cene</a>
                    <a href="#kontakt">Kontakt</a>
                </div>
                <button className="btn-primary">Zakaži poziv</button>
            </nav>

            {/* HERO SECTION WRAPPER */}
            <div className="hero-section-wrapper">
                {/* SCROLLING GALLERY BACKGROUND */}
                <div className="scrolling-gallery-bg">
                    <div className="gallery-col col-1">
                        {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2].map((i, idx) => (
                            <div key={`c1-${idx}`} className={`video-item dummy-vid-${i}`}></div>
                        ))}
                    </div>
                    <div className="gallery-col col-2">
                        {[3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map((i, idx) => (
                            <div key={`c2-${idx}`} className={`video-item dummy-vid-${i}`}></div>
                        ))}
                    </div>
                    <div className="gallery-col col-3">
                        {[2, 4, 1, 3, 2, 4, 1, 3, 2, 4].map((i, idx) => (
                            <div key={`c3-${idx}`} className={`video-item dummy-vid-${i}`}></div>
                        ))}
                    </div>
                    <div className="gallery-col col-4">
                        {[4, 1, 3, 2, 4, 1, 3, 2, 4, 1].map((i, idx) => (
                            <div key={`c4-${idx}`} className={`video-item dummy-vid-${i}`}></div>
                        ))}
                    </div>
                    <div className="gallery-col col-5">
                        {[1, 3, 2, 4, 1, 3, 2, 4, 1, 3].map((i, idx) => (
                            <div key={`c5-${idx}`} className={`video-item dummy-vid-${i}`}></div>
                        ))}
                    </div>
                    <div className="gallery-col col-6">
                        {[3, 2, 4, 1, 3, 2, 4, 1, 3, 2].map((i, idx) => (
                            <div key={`c6-${idx}`} className={`video-item dummy-vid-${i}`}></div>
                        ))}
                    </div>
                </div>

                {/* HERO CONTENT */}
                <section className="hero container section-padding">
                    <div className="hero-content">
                        <div className="rating">
                            <div className="stars">
                                <Star size={16} fill="var(--color-accent)" color="var(--color-accent)" />
                                <Star size={16} fill="var(--color-accent)" color="var(--color-accent)" />
                                <Star size={16} fill="var(--color-accent)" color="var(--color-accent)" />
                                <Star size={16} fill="var(--color-accent)" color="var(--color-accent)" />
                                <Star size={16} fill="var(--color-accent)" color="var(--color-accent)" />
                            </div>
                            <span><strong>5.0/5.0</strong> Ocena na Google-u</span>
                        </div>
                        <h1>VAŠ <span className="text-accent">DIGITALNI</span> UDARAC</h1>
                        <p className="hero-desc">
                            Vraćamo uloženo kroz moćan dizajn, marketing i
                            SEO optimizaciju naših e-commerce partnera i B2B
                            konsalting i Web3 brendova klijentima.
                        </p>
                        <div className="hero-actions">
                            <button className="btn-primary">Start your sprint</button>
                            <button className="btn-outline">Otkrijte naš proces</button>
                        </div>
                    </div>

                    <div className="hero-form-wrapper">
                        <div className="hero-form glass-panel">
                            {submitted ? (
                                <div className="success-message tc">
                                    <CheckCircle2 size={48} color="var(--color-accent)" className="mb-20" />
                                    <h3>Hvala vam!</h3>
                                    <p>Vaš upit je uspešno poslat. Javićemo vam se u najkraćem roku.</p>
                                    <button onClick={() => setSubmitted(false)} className="btn-outline mt-20">Pošalji novi upit</button>
                                </div>
                            ) : (
                                <>
                                    <h3>Hajde da gradimo zajedno</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-row">
                                            <input type="text" name="ime" placeholder="Ime*" value={formData.ime} onChange={handleInputChange} required />
                                            <input type="text" name="prezime" placeholder="Prezime*" value={formData.prezime} onChange={handleInputChange} required />
                                        </div>
                                        <div className="form-row">
                                            <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleInputChange} required />
                                            <input type="tel" name="telefon" placeholder="Telefon*" value={formData.telefon} onChange={handleInputChange} required />
                                        </div>
                                        <div className="form-row">
                                            <input type="text" name="firma" placeholder="Firma" value={formData.firma} onChange={handleInputChange} />
                                            <input type="url" name="websajt" placeholder="Web sajt" value={formData.websajt} onChange={handleInputChange} />
                                        </div>
                                        <div className="form-row">
                                            <select name="usluga" required value={formData.usluga} onChange={handleInputChange}>
                                                <option value="" disabled>Usluga*</option>
                                                <option value="web-design">Web Dizajn</option>
                                                <option value="seo">SEO</option>
                                                <option value="marketing">Marketing</option>
                                                <option value="branding">Brending</option>
                                            </select>
                                            <input type="text" name="budzet" placeholder="Budžet" value={formData.budzet} onChange={handleInputChange} />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="poruka" placeholder="Opišite vaš projekat*" rows="3" value={formData.poruka} onChange={handleInputChange} required></textarea>
                                        </div>
                                        <button type="submit" className="btn-dark" disabled={isSubmitting}>
                                            {isSubmitting ? <><Loader2 className="animate-spin mr-10" size={20} /> SLANJE...</> : 'POŠALJI UPIT'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </div>

            {/* RECENT WORK */}
            <section className="recent-work container section-padding" id="usluge">
                <div className="section-head">
                    <h2 className="section-title">NEDAVNO<br />LANSIRANO</h2>
                    <button className="btn-circle"><ArrowRight size={24} /></button>
                </div>

                <div className="work-grid">
                    <div className="work-card">
                        <div className="work-img dummy-img-1"></div>
                        <h4>BESPOKE STRATEGY</h4>
                        <p className="work-sub">Usluga dizajna / Brending i web produkcija</p>
                        <a href="#" className="work-link">POGLEDAJ SAJT <ArrowRight size={16} /></a>
                    </div>
                    <div className="work-card">
                        <div className="work-img dummy-img-2"></div>
                        <h4>ERGONOMIC PRO HEADPHONES</h4>
                        <p className="work-sub">Premium dizajn / Webshop platform</p>
                        <a href="#" className="work-link">POGLEDAJ SAJT <ArrowRight size={16} /></a>
                    </div>
                    <div className="work-card">
                        <div className="work-img dummy-img-3"></div>
                        <h4>PIONEER INNOVATION</h4>
                        <p className="work-sub">Dizajn / Kompletno mapiranje i strategija</p>
                        <a href="#" className="work-link">POGLEDAJ SAJT <ArrowRight size={16} /></a>
                    </div>
                </div>
            </section>

            {/* PAIN POINTS */}
            <section className="pain-points section-padding bg-dark">
                <div className="container">
                    <div className="pain-header">
                        <h2>DOSTA VAM JE<br />PROJEKATA KOJI<br /><span className="text-accent">TRAJU VEČNO?</span></h2>
                        <p>
                            Prestanite gubiti vreme na procese koji ne daju
                            rezultate. Naš sistem je napravljen da vam uštedi
                            vreme i donese pravi profit.
                        </p>
                    </div>

                    <div className="pain-cards">
                        <div className="pain-card">
                            <div className="pain-icon"><Mail size={24} color="#D2FF28" /></div>
                            <h3>0 MEJLOVA</h3>
                            <p>Zaboravite na beskonačne email nizove. Koristimo Notion tablu i Slack kanal da ubrzamo rad.</p>
                            <span className="pain-badge">RADITE EFIKASNIJE</span>
                        </div>
                        <div className="pain-card">
                            <div className="pain-icon"><MessageSquare size={24} color="#D2FF28" /></div>
                            <h3>LJUDSKI JEZIK</h3>
                            <p>Govorimo tvoj jezik. Nema žargonskih i teških reči. Sve objašnjavamo na prosto i razumljivo.</p>
                            <span className="pain-badge">JASNA KOMUNIKACIJA</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL SLIDER */}
            <section className="testimonial section-padding bg-accent">
                <div className="container tc">
                    <div className="testimonial-slider">
                        {testimonialsData.map((item, index) => (
                            <div
                                key={index}
                                className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
                            >
                                <h2 className="quote-text">
                                    {item.text}
                                </h2>
                                <div className="author">
                                    <div className="author-avatar">{item.initials}</div>
                                    <div className="author-info">
                                        <strong>{item.author}</strong>
                                        <span>{item.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PROGRESS BAR / INDICATORS */}
                    <div className="testimonial-indicators">
                        {testimonialsData.map((_, idx) => (
                            <button
                                key={idx}
                                className={`indicator-dot ${idx === currentTestimonial ? 'active' : ''}`}
                                onClick={() => setCurrentTestimonial(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className="pricing section-padding" id="cene">
                <div className="container tc">
                    <h2 className="section-title">ODABERITE SVOJ <span className="text-accent-inverse">TEMPO.</span></h2>
                    <p className="pricing-desc">Plaćanje se vrši pre početka rada. Bez skrivenih troškova.</p>

                    <div className="pricing-grid">
                        {/* Plan 1 */}
                        <div className="pricing-card">
                            <span className="plan-badge">START</span>
                            <h3>UGC & SOCIAL</h3>
                            <p className="plan-desc">Za startape i male biznise koji žele rast.</p>
                            <div className="price">€1,200<span>/mesečno</span></div>
                            <ul className="plan-features">
                                <li><CheckCircle2 size={16} /> 12 Visokokvalitetnih Vizuala</li>
                                <li><CheckCircle2 size={16} /> UGC Video Produkcija</li>
                                <li><CheckCircle2 size={16} /> Copywriting & Strategija</li>
                            </ul>
                            <button className="btn-outline plan-btn">Zakažite Poziv</button>
                        </div>

                        {/* Plan 2 */}
                        <div className="pricing-card popular">
                            <span className="plan-badge accent">POPULAR</span>
                            <h3>WEBSITE SPRINT</h3>
                            <p className="plan-desc">Kompletan veb sajt za samo 10 dana.</p>
                            <div className="price">€3,500<span>/jednokratno</span></div>
                            <ul className="plan-features">
                                <li><CheckCircle2 size={16} color="var(--color-accent)" /> <strong>Unikatan Web Dizajn</strong></li>
                                <li><CheckCircle2 size={16} color="var(--color-accent)" /> <strong>Figma To Framer/React</strong></li>
                                <li><CheckCircle2 size={16} color="var(--color-accent)" /> <strong>SEO Analiza i Optimizacija</strong></li>
                            </ul>
                            <button className="btn-primary plan-btn w-full">Zakažite Vebb Sprint</button>
                        </div>

                        {/* Plan 3 */}
                        <div className="pricing-card">
                            <span className="plan-badge">PREMIUM</span>
                            <h3>CREATIVE PARTNER</h3>
                            <p className="plan-desc">Sve što vam treba za skaliranje na max.</p>
                            <div className="price">€4,000<span>/mesečno</span></div>
                            <ul className="plan-features">
                                <li><CheckCircle2 size={16} /> Neograničen Web Design</li>
                                <li><CheckCircle2 size={16} /> Neograničena Produkcija</li>
                                <li><CheckCircle2 size={16} /> Neograničen Copywriting</li>
                            </ul>
                            <button className="btn-outline plan-btn">Zadrži Nas</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq section-padding container" id="faq">
                <h2 className="section-title tc">PITANJA? <span className="text-accent-inverse">ODGOVORI.</span></h2>

                <div className="faq-list">
                    {[
                        { q: "KOLIKO TRAJE IZRADA SAJTA?", a: "Zavisi od obima posla. Naš Website Sprint paket omogućava kompletno dizajniranje i lansiranje unikatnog veb sajta za samo 10 radnih dana." },
                        { q: "KAKO NAM NAPLAĆUJETE?", a: "Plaćanje se vrši direktno putem fakture bankovnim transferom pre početka radova na mesečnom ili fiksnom nivou, kako je definisano ugovorom. Nema skrivenih troškova." },
                        { q: "DA LI NUDITE ODRŽAVANJE SAJTA?", a: "Da, uz naše dugoročne planove, kao i kroz posebne dogovore, u potpunosti vršimo redovno i tehničko održavanje, kao i dodavanje novih funkcionalnosti." },
                        { q: "MOGU LI SAM DA MENJAM SADRŽAJ?", a: "Apsolutno. Svaki sajt gradimo tako da korisnik preko jednostavnog panela (CMS) može lako da dodaje nove tekstove, slike i blog postove." },
                        { q: "KO ĆE RADITI NA MOM PROJEKTU?", a: "Vaš projekat će voditi iskusni tim, zavisno od potreba obuhvata dizajnera, inženjera, kopirajtera i projekt menadžera." }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                            onClick={() => setOpenFaq(idx === openFaq ? -1 : idx)}
                        >
                            <div className="faq-q">
                                <h4>{item.q}</h4>
                                <div className="icon"><ChevronDown size={20} /></div>
                            </div>
                            <div className="faq-a">
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="final-cta section-padding bg-dark tc">
                <div className="container">
                    <h2>VREME JE ZA<br /><span className="text-accent gradient-text">VAŠ SPRINT.</span></h2>
                    <p className="cta-subtitle">Spremni za skaliranje i rezultate? Spremite kafu, pošaljite nam upit i krećemo odmah u pobede.</p>
                    <button className="btn-primary cta-btn">ZAPOČNITE ODMAH</button>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer bg-dark-ext">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <div className="nav-logo text-light">
                                <img src={logo} alt="Digitalni Sprint" className="logo-img invert" />
                            </div>
                            <p>Vaš digitalni partner. Transformisanje ideja u rezultate prekosutra.</p>
                        </div>

                        <div className="footer-links">
                            <h4>MENI</h4>
                            <a href="#">Usluge</a>
                            <a href="#">O Nama</a>
                            <a href="#">Cenovnik</a>
                            <a href="#">Klijenti</a>
                        </div>

                        <div className="footer-links">
                            <h4>LEGALNO</h4>
                            <a href="#">Uslovi Prodaje</a>
                            <a href="#">Politika Privatnosti</a>
                            <a href="#">Kolacići (Cookies)</a>
                        </div>

                        <div className="footer-newsletter">
                            <h4>NEWSLETTER</h4>
                            <p>Budite u toku sa našim lansiranjima i digitalnim akcijama.</p>
                            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                                <input type="email" placeholder="Email adresa" required />
                                <button type="submit">→</button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Agencija. Sva prava zadržana.</p>
                        <p>Designed with Vite & React</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
