import { useState, useEffect } from "react";

const NAVY = "#1B2A4A";
const ORANGE = "#E8732C";
const WHITE = "#FFFFFF";
const LIGHT = "#F7F8FA";
const GREY = "#6B7280";
const BORDER = "#E5E7EB";
const GREEN = "#10B981";

/* ── tiny helpers ── */
const css = (obj) => Object.entries(obj).map(([k,v])=>`${k.replace(/([A-Z])/g,'-$1').toLowerCase()}:${v}`).join(';');

function useScroll() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

/* ── NAV ── */
function Nav({ onStart }) {
  const y = useScroll();
  const scrolled = y > 40;
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 5%", height: 64,
      background: scrolled ? "rgba(27,42,74,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "background .3s, backdrop-filter .3s",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
    }}>
      <div>
        <span style={{ fontSize: 22, fontWeight: 900, color: WHITE, letterSpacing: -0.5 }}>DAXA</span>
        <span style={{ fontSize: 10, color: ORANGE, fontWeight: 700, letterSpacing: 2, marginLeft: 8 }}>GLOBAL</span>
      </div>
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {["Services", "Comment ça marche", "Tarifs", "Contact"].map(l => (
          <a key={l} href="#" style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>{l}</a>
        ))}
        <button onClick={onStart} style={{
          background: ORANGE, color: WHITE, border: "none",
          padding: "9px 22px", borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: "pointer",
        }}>Commencer</button>
      </div>
    </nav>
  );
}

/* ── HERO ── */
function Hero({ onStart }) {
  return (
    <section style={{
      minHeight: "100vh", background: `linear-gradient(150deg, ${NAVY} 0%, #0f1c33 60%, #1a2d4a 100%)`,
      display: "flex", alignItems: "center", position: "relative", overflow: "hidden",
    }}>
      {/* background accent circles */}
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: ORANGE + "08", top: -150, right: -100, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: ORANGE + "06", bottom: 100, left: -80, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 5% 80px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: ORANGE + "18", border: `1px solid ${ORANGE}40`,
              borderRadius: 20, padding: "6px 14px", marginBottom: 28,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: ORANGE }} />
              <span style={{ fontSize: 12, color: ORANGE, fontWeight: 600, letterSpacing: .5 }}>Plateforme logistique panafricaine</span>
            </div>
            <h1 style={{
              fontSize: 52, fontWeight: 900, color: WHITE, lineHeight: 1.1,
              letterSpacing: -1.5, marginBottom: 24,
            }}>
              Importez.<br />
              <span style={{ color: ORANGE }}>Expédiez.</span><br />
              En confiance.
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 36, maxWidth: 440 }}>
              DAXA connecte les commerçants et acheteurs africains à des fournisseurs vérifiés et des transporteurs fiables — tout en un seul endroit.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <button onClick={onStart} style={{
                background: ORANGE, color: WHITE, border: "none",
                padding: "14px 30px", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                Commencer maintenant
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <a href="#how" style={{
                color: "rgba(255,255,255,0.7)", fontSize: 15, fontWeight: 500,
                textDecoration: "none", display: "flex", alignItems: "center", gap: 6, padding: "14px 0",
              }}>
                Comment ça marche →
              </a>
            </div>
          </div>

          {/* Stats panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { n: "100%", label: "Fournisseurs vérifiés manuellement", sub: "Zéro arnaque, zéro surprise" },
              { n: "10%", label: "Commission transport seulement", sub: "Calculée sur la valeur réelle de l'envoi" },
              { n: "$120", label: "Frais fixe de sourcing", sub: "Facturé uniquement à la confirmation" },
            ].map(s => (
              <div key={s.n} style={{
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", gap: 20,
              }}>
                <div style={{ fontSize: 34, fontWeight: 900, color: ORANGE, letterSpacing: -1, flexShrink: 0 }}>{s.n}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: WHITE }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 3 }}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HOW IT WORKS ── */
function HowItWorks() {
  const steps = [
    { icon: "📋", title: "Décrivez votre besoin", desc: "Vous remplissez le formulaire en ligne — expédition ou recherche de fournisseur. Moins de 3 minutes." },
    { icon: "⚡", title: "DAXA traite votre demande", desc: "Notre équipe identifie le meilleur transporteur ou fournisseur vérifié selon votre besoin sous 24h." },
    { icon: "✅", title: "Confirmation & suivi", desc: "Vous recevez une confirmation avec les détails. Votre équipe DAXA reste disponible sur WhatsApp." },
  ];
  return (
    <section id="how" style={{ padding: "100px 5%", background: LIGHT }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ fontSize: 12, color: ORANGE, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>COMMENT ÇA MARCHE</div>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: NAVY, letterSpacing: -0.8 }}>Simple. Rapide. Fiable.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              background: WHITE, borderRadius: 16, padding: "36px 28px",
              border: `1px solid ${BORDER}`, position: "relative",
            }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <div style={{
                position: "absolute", top: 28, right: 28,
                fontSize: 48, fontWeight: 900, color: NAVY + "08",
              }}>{i + 1}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: GREY, lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES ── */
function Services({ onTransport, onSourcing }) {
  return (
    <section style={{ padding: "100px 5%", background: WHITE }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ fontSize: 12, color: ORANGE, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>NOS SERVICES</div>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: NAVY, letterSpacing: -0.8 }}>Deux services, un seul partenaire</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>

          {/* Transport */}
          <div style={{ borderRadius: 20, overflow: "hidden", border: `1px solid ${BORDER}` }}>
            <div style={{ background: NAVY, padding: "40px 36px" }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>🚚</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: WHITE, marginBottom: 10 }}>Transport de marchandises</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                Envoyez vos colis et cargaisons entre l'Afrique et l'Europe, ou entre pays africains. Nos transporteurs partenaires vérifiés prennent en charge l'acheminement de bout en bout.
              </p>
            </div>
            <div style={{ background: LIGHT, padding: "28px 36px" }}>
              <div style={{ marginBottom: 20 }}>
                {["Devis sous 24h", "Suivi de votre envoi", "Fret aérien & routier", "Afrique ↔ Europe & intra-Afrique"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: GREEN + "20", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    <span style={{ fontSize: 14, color: NAVY }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: ORANGE + "12", borderRadius: 10, padding: "12px 16px", marginBottom: 20 }}>
                <span style={{ fontSize: 12, color: GREY }}>Commission : </span>
                <span style={{ fontSize: 16, fontWeight: 800, color: ORANGE }}>10%</span>
                <span style={{ fontSize: 12, color: GREY }}> de la valeur de l'envoi</span>
              </div>
              <button onClick={onTransport} style={{
                width: "100%", background: NAVY, color: WHITE, border: "none",
                padding: "13px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer",
              }}>Demander un transport →</button>
            </div>
          </div>

          {/* Sourcing */}
          <div style={{ borderRadius: 20, overflow: "hidden", border: `1px solid ${BORDER}` }}>
            <div style={{ background: `linear-gradient(135deg, ${ORANGE} 0%, #c45e1a 100%)`, padding: "40px 36px" }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>🌍</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: WHITE, marginBottom: 10 }}>Sourcing fournisseurs</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
                Vous cherchez un produit à importer ? DAXA identifie, vérifie et vous met en relation avec des fournisseurs fiables — Chine, Turquie, Europe. Vous négociez, on sécurise.
              </p>
            </div>
            <div style={{ background: LIGHT, padding: "28px 36px" }}>
              <div style={{ marginBottom: 20 }}>
                {["Fournisseurs vérifiés manuellement", "Accompagnement à la négociation", "Chine, Turquie, Europe & plus", "Zéro frais cachés"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: GREEN + "20", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    <span style={{ fontSize: 14, color: NAVY }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: ORANGE + "12", borderRadius: 10, padding: "12px 16px", marginBottom: 20 }}>
                <span style={{ fontSize: 12, color: GREY }}>Frais de mise en relation : </span>
                <span style={{ fontSize: 16, fontWeight: 800, color: ORANGE }}>$120</span>
                <span style={{ fontSize: 12, color: GREY }}> fixe · à la confirmation</span>
              </div>
              <button onClick={onSourcing} style={{
                width: "100%", background: ORANGE, color: WHITE, border: "none",
                padding: "13px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer",
              }}>Trouver un fournisseur →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ── */
function Testimonials() {
  const t = [
    { name: "Moussa Diallo", role: "Commerçant, Dakar", text: "En 3 jours, DAXA m'a trouvé un fournisseur de textile en Turquie à un prix 30% en dessous de ce que je payais avant. Et la livraison s'est faite sans problème.", stars: 5 },
    { name: "Amara Koné", role: "Import-export, Abidjan", text: "J'ai expédié ma première cargaison Lagos → Paris via DAXA. Le suivi était impeccable, les tarifs clairs dès le départ. Je recommande sans hésiter.", stars: 5 },
    { name: "Kemi Adeyemi", role: "PME, Lagos", text: "Ce qui m'a convaincu : la transparence. J'ai su exactement ce que j'allais payer avant même de confirmer. Fini les mauvaises surprises.", stars: 5 },
  ];
  return (
    <section style={{ padding: "100px 5%", background: NAVY }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ fontSize: 12, color: ORANGE, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>TÉMOIGNAGES</div>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: WHITE, letterSpacing: -0.8 }}>Ils font confiance à DAXA</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {t.map((item, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16, padding: "28px",
            }}>
              <div style={{ color: ORANGE, fontSize: 18, marginBottom: 14 }}>{"★".repeat(item.stars)}</div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>
                "{item.text}"
              </p>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: WHITE }}>{item.name}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FORMSPREE = "https://formspree.io/f/xpqgvkwj";

async function submitToFormspree(data) {
  const res = await fetch(FORMSPREE, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  return res.ok;
}

/* ── TRANSPORT FORM ── */
function TransportForm({ onBack, onDone }) {
  const [form, setForm] = useState({ nom: "", email: "", tel: "", origin: "", dest: "", desc: "", value: "", poids: "", date: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const f = k => v => setForm(p => ({ ...p, [k]: v }));
  const commission = form.value ? Math.round(parseFloat(form.value) * 0.10) : null;
  const valid = form.nom && form.email && form.tel && form.origin && form.dest && form.value;

  const handleSubmit = async () => {
    if (!valid) return;
    setLoading(true); setError(false);
    const ok = await submitToFormspree({
      "Type de demande": "🚚 Transport de marchandises",
      "Nom": form.nom,
      "Email": form.email,
      "Téléphone / WhatsApp": form.tel,
      "Origine": form.origin,
      "Destination": form.dest,
      "Description marchandise": form.desc,
      "Poids estimé (kg)": form.poids || "Non précisé",
      "Valeur déclarée (USD)": `$${parseFloat(form.value).toLocaleString()}`,
      "Commission estimée (10%)": `$${commission?.toLocaleString()}`,
      "Date d'enlèvement souhaitée": form.date || "Non précisée",
    });
    setLoading(false);
    if (ok) onDone("transport", form);
    else setError(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: LIGHT, paddingTop: 80 }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: GREY, cursor: "pointer", fontSize: 14, marginBottom: 24, display: "flex", alignItems: "center", gap: 6 }}>
          ← Retour
        </button>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, color: ORANGE, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>TRANSPORT DE MARCHANDISES</div>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: NAVY, letterSpacing: -0.5 }}>Décrivez votre envoi</h2>
          <p style={{ color: GREY, fontSize: 14, marginTop: 6 }}>Notre équipe vous rappelle sous 24h avec un devis détaillé.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: WHITE, borderRadius: 16, padding: 24, border: `1px solid ${BORDER}` }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 18 }}>Vos coordonnées</h3>
              {[
                { k: "nom", label: "Nom complet *", ph: "Ex: Moussa Diallo" },
                { k: "email", label: "Email *", ph: "votre@email.com", type: "email" },
                { k: "tel", label: "Téléphone / WhatsApp *", ph: "+225 07 00 00 00" },
              ].map(({ k, label, ph, type }) => (
                <div key={k} style={{ marginBottom: 14 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5 }}>{label}</label>
                  <input type={type || "text"} placeholder={ph} value={form[k]} onChange={e => f(k)(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 13, background: LIGHT, outline: "none", fontFamily: "system-ui" }} />
                </div>
              ))}
            </div>
            <div style={{ background: WHITE, borderRadius: 16, padding: 24, border: `1px solid ${BORDER}` }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 18 }}>Trajet</h3>
              {[
                { k: "origin", label: "Ville d'origine *", ph: "Ex: Lagos, Nigeria" },
                { k: "dest", label: "Destination *", ph: "Ex: Paris, France" },
              ].map(({ k, label, ph }) => (
                <div key={k} style={{ marginBottom: 14 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5 }}>{label}</label>
                  <input placeholder={ph} value={form[k]} onChange={e => f(k)(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 13, background: LIGHT, outline: "none", fontFamily: "system-ui" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: WHITE, borderRadius: 16, padding: 24, border: `1px solid ${BORDER}` }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 18 }}>Marchandise</h3>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5 }}>Description *</label>
                <textarea placeholder="Nature des produits, conditionnement, fragilité…" value={form.desc} onChange={e => f("desc")(e.target.value)} rows={3}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 13, background: LIGHT, outline: "none", resize: "vertical", fontFamily: "system-ui" }} />
              </div>
              {[
                { k: "poids", label: "Poids estimé (kg)", ph: "Ex: 50" },
                { k: "value", label: "Valeur déclarée (USD) *", ph: "Ex: 2000" },
                { k: "date", label: "Date souhaitée d'enlèvement", ph: "", type: "date" },
              ].map(({ k, label, ph, type }) => (
                <div key={k} style={{ marginBottom: 14 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5 }}>{label}</label>
                  <input type={type || "text"} placeholder={ph} value={form[k]} onChange={e => f(k)(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 13, background: LIGHT, outline: "none", fontFamily: "system-ui" }} />
                </div>
              ))}
            </div>

            {/* Live calculator */}
            <div style={{ background: NAVY, borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 600, marginBottom: 6 }}>ESTIMATION EN TEMPS RÉEL</div>
              <div style={{ fontSize: 42, fontWeight: 900, color: ORANGE, letterSpacing: -1 }}>
                {commission ? `$${commission.toLocaleString()}` : "—"}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 6 }}>
                {commission ? `10% de $${parseFloat(form.value).toLocaleString()} déclarés` : "Saisissez la valeur déclarée pour voir l'estimation"}
              </div>
              <div style={{ marginTop: 16, padding: "10px 14px", background: "rgba(255,255,255,0.06)", borderRadius: 8, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                ℹ️ Devis définitif confirmé par notre équipe sous 24h.
              </div>
            </div>

            {error && (
              <div style={{ padding: "12px 16px", background: "#FEE2E2", borderRadius: 8, fontSize: 13, color: "#DC2626", marginBottom: 12 }}>
                ⚠️ Une erreur s'est produite. Vérifiez votre connexion et réessayez.
              </div>
            )}
            <button onClick={handleSubmit} disabled={!valid || loading} style={{
              width: "100%", padding: "15px", borderRadius: 12, border: "none",
              background: valid && !loading ? ORANGE : BORDER, color: valid && !loading ? WHITE : GREY,
              fontSize: 15, fontWeight: 700, cursor: valid && !loading ? "pointer" : "default",
            }}>
              {loading ? "Envoi en cours…" : valid ? "Envoyer ma demande →" : "Complétez les champs obligatoires *"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── SOURCING FORM ── */
function SourcingForm({ onBack, onDone }) {
  const [form, setForm] = useState({ nom: "", email: "", tel: "", product: "", country: "", qty: "", budget: "", specs: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const f = k => v => setForm(p => ({ ...p, [k]: v }));
  const valid = form.nom && form.email && form.tel && form.product;
  const countries = ["Chine 🇨🇳", "Turquie 🇹🇷", "France 🇫🇷", "Inde 🇮🇳", "Maroc 🇲🇦", "Italie 🇮🇹", "Autre"];

  const handleSubmit = async () => {
    if (!valid) return;
    setLoading(true); setError(false);
    const ok = await submitToFormspree({
      "Type de demande": "🔍 Sourcing fournisseur",
      "Nom": form.nom,
      "Email": form.email,
      "Téléphone / WhatsApp": form.tel,
      "Produit recherché": form.product,
      "Pays de production souhaité": form.country || "Non précisé",
      "Quantité minimum": form.qty || "Non précisée",
      "Budget max par unité": form.budget || "Non précisé",
      "Spécifications / qualité": form.specs || "Non précisées",
      "Frais de mise en relation": "$120 (facturable à la confirmation)",
    });
    setLoading(false);
    if (ok) onDone("sourcing", form);
    else setError(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: LIGHT, paddingTop: 80 }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: GREY, cursor: "pointer", fontSize: 14, marginBottom: 24, display: "flex", alignItems: "center", gap: 6 }}>
          ← Retour
        </button>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, color: ORANGE, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>SOURCING FOURNISSEUR</div>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: NAVY, letterSpacing: -0.5 }}>Quel produit cherchez-vous ?</h2>
          <p style={{ color: GREY, fontSize: 14, marginTop: 6 }}>DAXA identifie les fournisseurs vérifiés et vous met en relation sous 24h.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: WHITE, borderRadius: 16, padding: 24, border: `1px solid ${BORDER}` }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 18 }}>Vos coordonnées</h3>
              {[
                { k: "nom", label: "Nom complet *", ph: "Ex: Amara Koné" },
                { k: "email", label: "Email *", ph: "votre@email.com", type: "email" },
                { k: "tel", label: "Téléphone / WhatsApp *", ph: "+225 07 00 00 00" },
              ].map(({ k, label, ph, type }) => (
                <div key={k} style={{ marginBottom: 14 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5 }}>{label}</label>
                  <input type={type || "text"} placeholder={ph} value={form[k]} onChange={e => f(k)(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 13, background: LIGHT, outline: "none", fontFamily: "system-ui" }} />
                </div>
              ))}
            </div>
            {/* Fee box */}
            <div style={{ background: `linear-gradient(135deg, ${ORANGE}, #c45e1a)`, borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontWeight: 600, letterSpacing: 1, marginBottom: 6 }}>FRAIS DE MISE EN RELATION</div>
              <div style={{ fontSize: 48, fontWeight: 900, color: WHITE, letterSpacing: -2 }}>$120</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 8, lineHeight: 1.6 }}>
                Montant fixe · Facturé uniquement après confirmation de la mise en relation · Aucun frais caché.
              </div>
            </div>
          </div>

          <div style={{ background: WHITE, borderRadius: 16, padding: 24, border: `1px solid ${BORDER}` }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 18 }}>Le produit recherché</h3>
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5 }}>Produit / catégorie *</label>
              <input placeholder="Ex: Tissu wax coton 100%, électronique, chaussures…" value={form.product} onChange={e => f("product")(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 13, background: LIGHT, outline: "none", fontFamily: "system-ui" }} />
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5 }}>Pays de production souhaité</label>
              <select value={form.country} onChange={e => f("country")(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 13, background: LIGHT, outline: "none" }}>
                <option value="">Sélectionner (optionnel)</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            {[
              { k: "qty", label: "Quantité minimum souhaitée", ph: "Ex: 500 unités, 100 kg…" },
              { k: "budget", label: "Budget max par unité (USD)", ph: "Ex: $5 / unité" },
            ].map(({ k, label, ph }) => (
              <div key={k} style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5 }}>{label}</label>
                <input placeholder={ph} value={form[k]} onChange={e => f(k)(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 13, background: LIGHT, outline: "none", fontFamily: "system-ui" }} />
              </div>
            ))}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5 }}>Spécifications / exigences qualité</label>
              <textarea placeholder="Matière, dimensions, certifications, packaging requis…" value={form.specs} onChange={e => f("specs")(e.target.value)} rows={4}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 13, background: LIGHT, outline: "none", resize: "vertical", fontFamily: "system-ui" }} />
            </div>
            {error && (
              <div style={{ padding: "12px 16px", background: "#FEE2E2", borderRadius: 8, fontSize: 13, color: "#DC2626", marginBottom: 12 }}>
                ⚠️ Une erreur s'est produite. Vérifiez votre connexion et réessayez.
              </div>
            )}
            <button onClick={handleSubmit} disabled={!valid || loading} style={{
              width: "100%", padding: "15px", borderRadius: 12, border: "none",
              background: valid && !loading ? ORANGE : BORDER, color: valid && !loading ? WHITE : GREY,
              fontSize: 15, fontWeight: 700, cursor: valid && !loading ? "pointer" : "default",
            }}>
              {loading ? "Envoi en cours…" : valid ? "Envoyer ma demande →" : "Complétez les champs obligatoires *"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── CONFIRMATION ── */
function Confirmation({ type, form, onBack }) {
  const isTransport = type === "transport";
  return (
    <div style={{ minHeight: "100vh", background: LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 560, width: "100%", margin: "0 auto", padding: "40px 20px", textAlign: "center" }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: GREEN + "18", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 900, color: NAVY, marginBottom: 12 }}>
          Demande envoyée ! 🎉
        </h2>
        <p style={{ color: GREY, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
          Merci <strong>{form.nom}</strong>. Notre équipe DAXA a bien reçu votre demande de <strong>{isTransport ? "transport" : "sourcing fournisseur"}</strong> et vous contactera sous <strong>24h</strong> sur <strong>{form.email}</strong> ou par WhatsApp au <strong>{form.tel}</strong>.
        </p>

        {/* Recap */}
        <div style={{ background: WHITE, borderRadius: 16, padding: 24, border: `1px solid ${BORDER}`, textAlign: "left", marginBottom: 28 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: ORANGE, letterSpacing: 1, marginBottom: 14 }}>RÉCAPITULATIF</div>
          {isTransport ? (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${BORDER}` }}>
                <span style={{ fontSize: 13, color: GREY }}>Trajet</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{form.origin} → {form.dest}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${BORDER}` }}>
                <span style={{ fontSize: 13, color: GREY }}>Valeur déclarée</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>${parseFloat(form.value).toLocaleString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
                <span style={{ fontSize: 13, color: GREY }}>Commission estimée</span>
                <span style={{ fontSize: 14, fontWeight: 800, color: ORANGE }}>${Math.round(parseFloat(form.value) * 0.10).toLocaleString()}</span>
              </div>
            </>
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${BORDER}` }}>
                <span style={{ fontSize: 13, color: GREY }}>Produit recherché</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{form.product}</span>
              </div>
              {form.country && <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${BORDER}` }}>
                <span style={{ fontSize: 13, color: GREY }}>Pays souhaité</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{form.country}</span>
              </div>}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
                <span style={{ fontSize: 13, color: GREY }}>Frais de mise en relation</span>
                <span style={{ fontSize: 14, fontWeight: 800, color: ORANGE }}>$120</span>
              </div>
            </>
          )}
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button onClick={onBack} style={{
            padding: "12px 24px", borderRadius: 10, border: `1.5px solid ${BORDER}`,
            background: WHITE, color: NAVY, fontSize: 14, fontWeight: 600, cursor: "pointer",
          }}>Retour à l'accueil</button>
          <a href="https://wa.me/2340000000" target="_blank" rel="noreferrer" style={{
            padding: "12px 24px", borderRadius: 10, border: "none",
            background: "#25D366", color: WHITE, fontSize: 14, fontWeight: 600,
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            💬 Nous contacter sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer style={{ background: NAVY, padding: "60px 5% 30px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 900, color: WHITE, marginBottom: 4 }}>DAXA</div>
            <div style={{ fontSize: 11, color: ORANGE, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>GLOBAL DISTRIBUTION</div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 260 }}>
              Votre partenaire logistique et commercial pour l'Afrique et le monde. Transport · Sourcing · Confiance.
            </p>
          </div>
          {[
            { title: "Services", links: ["Transport de marchandises", "Sourcing fournisseurs", "Suivi de commande", "Devenir partenaire"] },
            { title: "Corridors", links: ["Afrique → Europe", "Europe → Afrique", "Intra-Afrique", "Chine → Afrique"] },
            { title: "Contact", links: ["WhatsApp", "Email : hello@daxa.africa", "Abuja, Nigeria", "Abidjan, Côte d'Ivoire"] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 12, fontWeight: 700, color: WHITE, letterSpacing: 1, marginBottom: 16 }}>{col.title}</div>
              {col.links.map(l => (
                <div key={l} style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 10 }}>{l}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© 2026 DAXA Global Distribution. Tous droits réservés.</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>Abuja · Abidjan · Dakar</span>
        </div>
      </div>
    </footer>
  );
}

/* ── PARTNER FORM ── */
function PartnerForm({ onBack, onDone }) {
  const [form, setForm] = useState({ nom: "", email: "", tel: "", type: "", zone: "", capacite: "", desc: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const f = k => v => setForm(p => ({ ...p, [k]: v }));
  const valid = form.nom && form.email && form.tel && form.type;

  const handleSubmit = async () => {
    if (!valid) return;
    setLoading(true); setError(false);
    const ok = await submitToFormspree({
      "Type de demande": "🤝 Candidature partenaire",
      "Nom / Entreprise": form.nom,
      "Email": form.email,
      "Téléphone / WhatsApp": form.tel,
      "Type de partenaire": form.type,
      "Zone de couverture": form.zone || "Non précisée",
      "Capacité / spécialité": form.capacite || "Non précisée",
      "Description de l'activité": form.desc || "Non précisée",
    });
    setLoading(false);
    if (ok) onDone("partner", form);
    else setError(true);
  };
  return (
    <div style={{ minHeight: "100vh", background: LIGHT, paddingTop: 80 }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: GREY, cursor: "pointer", fontSize: 14, marginBottom: 24, display: "flex", alignItems: "center", gap: 6 }}>
          ← Retour
        </button>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, color: ORANGE, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>DEVENIR PARTENAIRE</div>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: NAVY, letterSpacing: -0.5 }}>Rejoignez le réseau DAXA</h2>
          <p style={{ color: GREY, fontSize: 14, marginTop: 6 }}>Transporteur ou fournisseur — notre équipe vous contacte sous 24h pour valider votre profil.</p>
        </div>
        <div style={{ background: WHITE, borderRadius: 16, padding: 28, border: `1px solid ${BORDER}` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { k: "nom", label: "Nom / Entreprise *", ph: "Ex: Fast Cargo Nigeria" },
              { k: "email", label: "Email *", ph: "contact@votreentreprise.com", type: "email" },
              { k: "tel", label: "Téléphone / WhatsApp *", ph: "+234 80 00 00 00" },
            ].map(({ k, label, ph, type }) => (
              <div key={k} style={{ marginBottom: 4 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5 }}>{label}</label>
                <input type={type || "text"} placeholder={ph} value={form[k]} onChange={e => f(k)(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 13, background: LIGHT, outline: "none", fontFamily: "system-ui" }} />
              </div>
            ))}
            <div style={{ marginBottom: 4 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5 }}>Type de partenaire *</label>
              <select value={form.type} onChange={e => f("type")(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 13, background: LIGHT, outline: "none" }}>
                <option value="">Sélectionner</option>
                <option value="Transporteur">🚚 Transporteur</option>
                <option value="Fournisseur">🏭 Fournisseur / Grossiste</option>
              </select>
            </div>
            <div style={{ marginBottom: 4 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5 }}>Zone de couverture / localisation</label>
              <input placeholder="Ex: Nigeria, Lagos → Europe" value={form.zone} onChange={e => f("zone")(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 13, background: LIGHT, outline: "none", fontFamily: "system-ui" }} />
            </div>
            <div style={{ marginBottom: 4 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5 }}>Capacité / spécialité</label>
              <input placeholder="Ex: 5 tonnes max, textile uniquement…" value={form.capacite} onChange={e => f("capacite")(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 13, background: LIGHT, outline: "none", fontFamily: "system-ui" }} />
            </div>
          </div>
          <div style={{ marginBottom: 20, marginTop: 4 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5 }}>Décrivez votre activité</label>
            <textarea placeholder="Votre expérience, vos références, ce que vous pouvez offrir à DAXA…" value={form.desc} onChange={e => f("desc")(e.target.value)} rows={4}
              style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 13, background: LIGHT, outline: "none", resize: "vertical", fontFamily: "system-ui" }} />
          </div>
          {error && (
            <div style={{ padding: "12px 16px", background: "#FEE2E2", borderRadius: 8, fontSize: 13, color: "#DC2626", marginBottom: 12 }}>
              ⚠️ Une erreur s'est produite. Vérifiez votre connexion et réessayez.
            </div>
          )}
          <button onClick={handleSubmit} disabled={!valid || loading} style={{
            width: "100%", padding: "15px", borderRadius: 12, border: "none",
            background: valid && !loading ? NAVY : BORDER, color: valid && !loading ? WHITE : GREY,
            fontSize: 15, fontWeight: 700, cursor: valid && !loading ? "pointer" : "default",
          }}>
            {loading ? "Envoi en cours…" : valid ? "Envoyer ma candidature →" : "Complétez les champs obligatoires *"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── PROFILE CHOOSER ── */
function ProfileChooser({ onChoose, onBack }) {
  const [hovered, setHovered] = useState(null);
  const profiles = [
    {
      id: "transport",
      emoji: "📦",
      title: "J'ai une marchandise à envoyer",
      sub: "Colis, cargaison, fret — vers l'Europe ou entre pays africains",
      color: ORANGE,
      detail: ["Particulier", "Commerçant", "Exportateur"],
    },
    {
      id: "sourcing",
      emoji: "🔍",
      title: "Je cherche un fournisseur / produit",
      sub: "Importer depuis la Chine, la Turquie, l'Europe ou ailleurs",
      color: "#3B82F6",
      detail: ["Acheteur", "Commerçant", "PME"],
    },
    {
      id: "partner",
      emoji: "🤝",
      title: "Je veux devenir partenaire DAXA",
      sub: "Rejoindre le réseau en tant que transporteur ou fournisseur",
      color: NAVY,
      detail: ["Transporteur", "Grossiste", "Fournisseur"],
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 780, width: "100%", padding: "40px 20px" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: GREY, cursor: "pointer", fontSize: 14, marginBottom: 32, display: "flex", alignItems: "center", gap: 6 }}>
          ← Retour à l'accueil
        </button>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 34, fontWeight: 900, color: NAVY, letterSpacing: -1, marginBottom: 8 }}>
            Vous êtes…?
          </div>
          <p style={{ color: GREY, fontSize: 16 }}>
            Choisissez votre profil pour accéder au bon formulaire.
          </p>
        </div>

        {/* Profile cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {profiles.map(p => (
            <button
              key={p.id}
              onClick={() => onChoose(p.id)}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex", alignItems: "center", gap: 24,
                padding: "24px 28px", borderRadius: 16, cursor: "pointer", textAlign: "left",
                border: `2px solid ${hovered === p.id ? p.color : BORDER}`,
                background: hovered === p.id ? p.color + "06" : WHITE,
                transition: "all .18s", width: "100%",
                boxShadow: hovered === p.id ? `0 4px 20px ${p.color}20` : "0 1px 4px rgba(0,0,0,.04)",
              }}
            >
              {/* Emoji circle */}
              <div style={{
                width: 64, height: 64, borderRadius: 16, flexShrink: 0,
                background: hovered === p.id ? p.color + "18" : LIGHT,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, transition: "background .18s",
              }}>
                {p.emoji}
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: NAVY, marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: GREY, marginBottom: 10 }}>{p.sub}</div>
                <div style={{ display: "flex", gap: 8 }}>
                  {p.detail.map(d => (
                    <span key={d} style={{
                      fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20,
                      background: p.color + "15", color: p.color,
                    }}>{d}</span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div style={{
                width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                background: hovered === p.id ? p.color : LIGHT,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background .18s",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke={hovered === p.id ? WHITE : GREY} strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: 12, color: GREY, marginTop: 28 }}>
          Une question ? Écrivez-nous directement sur{" "}
          <a href="https://wa.me/2340000000" style={{ color: ORANGE, fontWeight: 600, textDecoration: "none" }}>WhatsApp</a>
        </p>
      </div>
    </div>
  );
}

/* ── APP ROOT ── */
export default function App() {
  const [view, setView] = useState("home");
  const [confirmData, setConfirmData] = useState(null);

  const handleDone = (type, form) => {
    setConfirmData({ type, form });
    setView("confirm");
    window.scrollTo(0, 0);
  };

  const goStart = () => { setView("choose"); window.scrollTo(0, 0); };

  if (view === "choose") return <ProfileChooser onChoose={v => setView(v)} onBack={() => setView("home")} />;
  if (view === "transport") return <TransportForm onBack={() => setView("choose")} onDone={handleDone} />;
  if (view === "sourcing") return <SourcingForm onBack={() => setView("choose")} onDone={handleDone} />;
  if (view === "partner") return <PartnerForm onBack={() => setView("choose")} onDone={handleDone} />;
  if (view === "confirm") return <Confirmation {...confirmData} onBack={() => { setView("home"); setConfirmData(null); }} />;

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <Nav onStart={goStart} />
      <Hero onStart={goStart} />
      <HowItWorks />
      <Services onTransport={() => setView("transport")} onSourcing={() => setView("sourcing")} />
      <Testimonials />
      <Footer />
    </div>
  );
}
