"use client";

import { useState } from "react";
import { Shield, WifiOff, ChevronDown, ChevronUp, FileText, Scale, Globe, Cpu, Server, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "919692000359";

const faqs = [
  {
    question: "How is this different from on-premise AI?",
    answer: "On-premise AI typically means running the same cloud model on the customer's own servers. Data still moves across the customer's internal network, and the model is often still managed by the vendor remotely. Privacy by Physics goes further: computation happens on the originating device itself, and there is no vendor-controlled management channel."
  },
  {
    question: "How capable can a model be if it runs on a single device?",
    answer: "Capable enough for the use cases that matter. The frontier of model capability has shifted dramatically in the past 24 months. Models that required data-center hardware three years ago now run on consumer-grade silicon. We work within those capabilities — and our products are designed around them, not retrofitted."
  },
  {
    question: "What happens when you need to update the model?",
    answer: "Updates are pushed through sovereign channels controlled by the deploying institution. There is no automatic update channel back to KSAI infrastructure. The institution decides when and how to update its fleet."
  },
  {
    question: "Doesn't this make analytics impossible?",
    answer: "It makes vendor-side analytics absent by default. The deploying institution can run its own analytics on its own infrastructure with full data. KSAI does not need that data — and not needing it is the entire point."
  },
  {
    question: "How do you make money if you can&rsquo;t see usage?",
    answer: "We sell hardware, software, and licensed deployments. Our business model does not depend on collecting user data, monetizing engagement, or selling derived insights. It depends on building infrastructure people pay to deploy."
  },
  {
    question: "Can you guarantee zero outbound data flow?",
    answer: "We design for it, we test for it, and we encourage every customer to audit it independently. A 'guarantee' in any architecture is a contractual claim; what we offer is a verifiable one. Verify it yourself with a packet sniffer."
  },
  {
    question: "Does this work for very large deployments?",
    answer: "Yes. The architecture scales horizontally — each new device is an independent unit. Cloud architectures scale by centralizing load; ours scales by distributing it. The marginal cost of an additional deployment is the cost of an additional device, not the cost of additional cloud capacity."
  },
  {
    question: "What about model improvements that require user data?",
    answer: "When we improve our models, we do so using data we have separately licensed, generated, or collected with explicit consent — not data from deployed systems. Our deployments are not a training data pipeline."
  },
];

const whitepapers = [
  { title: "The Privacy by Physics Manifesto", abstract: "Our foundational positioning paper. Everything else flows from this.", status: "Coming Soon", gated: false },
  { title: "Sovereign AI and the Cloud Wrapper Problem", abstract: "Technical and economic critique of cloud-wrapper architectures.", status: "Coming Soon", gated: false },
  { title: "Edge Inference Economics: The 18-Month Flip", abstract: "When edge deployments become cheaper than cloud, with worked examples.", status: "Coming Soon", gated: true },
  { title: "Privacy by Physics and the DPDP Act, 2023", abstract: "Regulatory alignment brief for Indian counterparts.", status: "Coming Soon", gated: false },
  { title: "Privacy by Physics and the EU AI Act", abstract: "Regulatory alignment brief for EU counterparts.", status: "Coming Soon", gated: false },
];

const regulations = [
  { icon: Shield, title: "Digital Personal Data Protection Act, 2023 (India)", description: "The DPDP Act regulates the processing of digital personal data. Privacy by Physics changes the question. Where data is not collected, transmitted, or stored by KSAI, the Act's processing obligations do not attach to us as a Data Fiduciary." },
  { icon: Scale, title: "General Data Protection Regulation (EU)", description: "The GDPR's strictest provisions — cross-border transfer restrictions, data subject access rights, the right to erasure — are easier to satisfy when data has never left the data subject's own device." },
  { icon: Globe, title: "Sectoral and Sovereign Requirements", description: "Healthcare, defence, education, and financial services in most jurisdictions carry sectoral data residency requirements. Privacy by Physics is designed to make these requirements satisfiable by architecture rather than by contract." },
];

const principles = [
  { icon: Cpu, title: "On-Device Computation", description: "All inference, all reasoning, all generation happens on the hardware in front of the user. Our models are quantized and optimized to run on edge silicon — not because cloud is unavailable, but because cloud is unnecessary." },
  { icon: WifiOff, title: "Zero Outbound Telemetry by Default", description: "Our deployments do not phone home. There is no usage analytics being shipped back to KSAI servers, no model performance data being silently uploaded. Where telemetry is needed, it is opt-in, explicit, and contractually scoped." },
  { icon: Server, title: "Sovereign Update Channels", description: "When a deployed system needs an update, the update is delivered through a channel the deployer controls — typically an air-gapped technician sync, a sovereign distribution server, or a contracted update window." },
  { icon: Eye, title: "Auditable by Default", description: "Every KSAI deployment can be network-audited. Plug a packet sniffer into the network the device is on. You should see nothing leaving. If you see anything leaving, that is a bug — and we want to know about it." },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="card overflow-hidden">
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left">
            <span className="font-semibold text-[var(--color-text)] pr-4">{faq.question}</span>
            {openIndex === index ? <ChevronUp className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[var(--color-text-muted)] flex-shrink-0" />}
          </button>
          {openIndex === index && <div className="px-6 pb-6 text-[var(--color-text-secondary)] leading-relaxed border-t border-[var(--color-border)] pt-4">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default function PrivacyByPhysicsPage() {
  return (
    <div className="pt-16">
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#0A2540" }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 30% 50%, rgba(12, 109, 162, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(12, 109, 162, 0.2) 0%, transparent 50%)` }} />
        </div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Privacy by Physics.</h1>
            <p className="text-2xl mb-8 opacity-80 font-light">Not a promise. Not a policy. An architecture.</p>
            <p className="text-lg max-w-2xl mx-auto mb-12 opacity-70 leading-relaxed">
              Every privacy policy in the world tells you what a company will do with your data after collecting it. We are not interested in that conversation. We have designed our systems so we never collect it in the first place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white border-0 text-base px-8 py-6">Download the Whitepaper</Button>
              <a href="/contact"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base px-8 py-6">Talk to Our Team</Button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-8 tracking-tight">Four Billion People. Zero Sovereign AI Infrastructure.</h2>
            <div className="prose prose-lg max-w-none text-[var(--color-text-secondary)] space-y-6">
              <p>The AI industry is built on a single, unstated assumption: that data can move. That a query made in a rural clinic, a tribal village, a government office, or a child&apos;s classroom can travel — to a data center in another country, processed by a model owned by another corporation, returned with an answer.</p>
              <p>This assumption is convenient for the companies building AI. It is catastrophic for everyone else.</p>
              <p>When data must move, three things follow: <strong className="text-[var(--color-text)]">Connectivity becomes a prerequisite.</strong> <strong className="text-[var(--color-text)]">Sovereignty becomes negotiable.</strong> And <strong className="text-[var(--color-text)]">privacy becomes a function of trust</strong> in institutions you cannot audit.</p>
              <p>For four billion people in the Global South — and for any government, hospital, or institution that takes data residency seriously — none of those three conditions are acceptable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6"><p className="text-4xl font-bold text-[#0C6DA2] mb-2">2.7 billion</p><p className="text-sm text-[var(--color-text-muted)]">People with no reliable internet access</p></div>
              <div className="text-center p-6"><p className="text-4xl font-bold text-[#0C6DA2] mb-2">140+</p><p className="text-sm text-[var(--color-text-muted)]">Jurisdictions with active data residency laws</p></div>
              <div className="text-center p-6"><p className="text-4xl font-bold text-[#0C6DA2] mb-2">0</p><p className="text-sm text-[var(--color-text-muted)]">Cloud AI vendors guaranteeing data never leaves the device</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8 tracking-tight">Most &apos;AI for the Global South&apos; is a Cloud Wrapper.</h2>
            <div className="prose prose-lg max-w-none text-[var(--color-text-secondary)] space-y-6">
              <p>A cloud wrapper is what happens when a company takes a model running on someone else&apos;s servers in another country, builds a thin interface around it, and calls it a sovereign AI product.</p>
              <p className="font-medium text-[var(--color-text)]">The interface is local. The intelligence is not.</p>
              <p>Every cloud wrapper carries the same structural failures:</p>
              <ul className="space-y-2 list-none">
                {["It requires connectivity the deployment environment may not have", "It exfiltrates data to a jurisdiction the deployer cannot control", "It costs per query in a market that cannot sustain per-query economics", "It breaks the moment the connection breaks", "It transfers liability for data handling to a vendor outside the regulator's reach"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-red-400" /></div><span>{item}</span></li>
                ))}
              </ul>
              <p className="pt-4">Cloud wrappers can be useful in the right context. They are not infrastructure. They are not sovereign. And they are not what we build.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8 tracking-tight">Privacy by Physics, Defined.</h2>
            <div className="prose prose-lg max-w-none text-[var(--color-text-secondary)] space-y-6 text-left">
              <p>Privacy by Physics is a design principle that states: personal data should not require trust to remain private. It should require physics.</p>
              <p>If data has not been transmitted, it cannot be intercepted. If a system has no network interface, it cannot be remotely breached. If a model runs on the device that generated the input, no external party — including us — can read the input.</p>
              <p><strong className="text-[var(--color-text)]">The protection is not in the policy. The protection is in the architecture.</strong></p>
              <p>When a government asks us how we comply with data residency, our answer is not a legal opinion. It is a network diagram with no outbound arrow. When a regulator asks where the patient&apos;s data goes, our answer is: it didn&apos;t go anywhere. It is still on the device where it originated.</p>
              <p className="font-medium text-[var(--color-text)]">This is what privacy looks like when it is engineered instead of promised.</p>
            </div>
            <blockquote className="max-w-2xl mx-auto mt-12 border-l-4 border-[#0C6DA2] pl-8 py-4"><p className="text-2xl font-serif italic text-[var(--color-text-secondary)]">&ldquo;The strongest privacy guarantee is the data you never collected.&rdquo;</p></blockquote>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] tracking-tight">Four Principles That Hold Our Architecture Together.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {principles.map((p) => (
              <div key={p.title} className="card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0C6DA2] flex items-center justify-center flex-shrink-0"><p.icon className="w-7 h-7 text-white" /></div>
                  <div><h3 className="text-xl font-bold text-[var(--color-text)] mb-3">{p.title}</h3><p className="text-[var(--color-text-secondary)] leading-relaxed">{p.description}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] tracking-tight">How Privacy by Physics Maps to Global Data Protection Law.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {regulations.map((r) => (
              <div key={r.title} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0C6DA2] flex items-center justify-center flex-shrink-0"><r.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">{r.title}</h3><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{r.description}</p></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[var(--color-text-muted)] mt-8 text-center max-w-2xl mx-auto italic">Regulatory analysis is jurisdiction-specific and engagement-specific. We do not provide legal advice. We provide an architecture that makes the legal review shorter.</p>
        </div>
      </section>

      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] tracking-tight">Technical and Policy Whitepapers.</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whitepapers.map((paper) => (
              <div key={paper.title} className="card p-6">
                <div className="w-full h-32 rounded-lg bg-[var(--color-surface-2)] mb-4 flex items-center justify-center"><FileText className="w-12 h-12 text-[var(--color-text-muted)]" /></div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{paper.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">{paper.abstract}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--color-text-muted)] bg-[var(--color-surface-2)] px-2 py-1 rounded">{paper.status}</span>
                  {paper.gated && <span className="text-xs text-[var(--color-primary)]">Email required</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] tracking-tight">What People Ask Us.</h2></div>
            <FAQAccordion />
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8 tracking-tight">What We Believe.</h2>
            <div className="prose prose-lg text-[var(--color-text-secondary)] space-y-6 text-left">
              {["We believe that the next decade of AI infrastructure will be defined by a question the industry has tried to avoid: whose data, whose jurisdiction, whose terms?", "We believe that the populations the cloud was never built for are not a market segment to be reached eventually. They are the test of whether the AI industry is serious about what it claims to be building.", "We believe that privacy that depends on trust is privacy that has already been compromised.", "We believe that the strongest privacy guarantee is the data you never collected. And the strongest sovereignty guarantee is the data that never left."].map((text, i) => (
                <p key={i} className="text-lg leading-relaxed font-serif italic">&ldquo;{text}&rdquo;</p>
              ))}
              <p className="text-lg font-bold text-[var(--color-text)] pt-4">This is what we build. This is what we mean when we say Privacy by Physics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#0C6DA2" }}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Build with the Sovereign Ground Layer.</h2>
            <p className="text-lg mb-8 opacity-90">Partner with us on deployments where data residency is non-negotiable.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'm interested in Privacy by Physics. I'd like to discuss a partnership.")}`} target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white border-0 text-base px-8 py-6">Partner with Us</Button></a>
              <a href="/contact"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base px-8 py-6">Talk to the Architecture Team</Button></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
