import { Hero } from "@/components/Hero";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { 
  Bolt, 
  Headset, 
  Target, 
  Pencil, 
  Globe, 
  Settings, 
  BarChart, 
  Megaphone, 
  SquarePen, 
  Video, 
  Sparkles,
  ArrowRight,
  Star,
  Share2,
  Mail,
  Check,
  X
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5">
        <nav className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-tighter text-primary">Elevate</div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-primary font-bold border-b-2 border-primary pb-1 text-sm" href="#">Services</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Portfolio</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Pricing</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Process</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Team</a>
          </div>
          <Button className="bg-secondary-container text-white px-6 py-2 rounded-xl hover:opacity-80 transition-all">
            Get Started
          </Button>
        </nav>
      </header>

      <main>
        <Hero />

        {/* Trust Bar */}
        <section className="py-24 border-y border-white/5 bg-surface-container-low">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 opacity-50 grayscale hover:grayscale-0 transition-all">
              {["AURORA", "VERTEX", "LUMINA", "SPHERE"].map((brand) => (
                <div key={brand} className="flex justify-center items-center h-12 text-2xl font-bold opacity-40">{brand}</div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Bolt, text: "Fast Delivery" },
                { icon: Headset, text: "Monthly Support" },
                { icon: Target, text: "Custom Strategy" },
                { icon: Pencil, text: "Creative Content" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <item.icon className="text-secondary w-8 h-8" />
                  <span className="font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 bg-surface-container-lowest">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Growth Services</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Everything your business needs to dominate the digital landscape, from technical builds to viral content.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { icon: Globe, title: "Website Design", desc: "Custom UI/UX experiences built for high conversion and brand prestige." },
                { icon: Settings, title: "Maintenance", desc: "Proactive security, updates, and performance tuning for your digital assets." },
                { icon: BarChart, title: "SEO", desc: "Technical and on-page optimization to rank your business where it matters most." },
                { icon: Megaphone, title: "Social Media", desc: "Full management and strategy to build an engaged community around your brand." },
                { icon: SquarePen, title: "Content Creation", desc: "Professional copy and visuals that tell your brand's unique story with authority." },
                { icon: Video, title: "Video/Reels", desc: "High-impact short-form video content designed for viral reach and engagement." }
              ].map((service, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl flex flex-col h-full group hover:bg-secondary-container/5">
                  <service.icon className="w-10 h-10 text-secondary mb-6" />
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-on-surface-variant mb-8 flex-grow">{service.desc}</p>
                  <a className="text-secondary font-bold flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
              <div className="glass-card p-8 rounded-2xl flex flex-col h-full group hover:bg-secondary-container/5 lg:col-span-2">
                <Sparkles className="w-10 h-10 text-secondary mb-6" />
                <div className="lg:flex lg:gap-12">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Branding</h3>
                    <p className="text-on-surface-variant mb-8 flex-grow">Visual identities that command respect. Logo systems, guidelines, and visual language.</p>
                  </div>
                  <div className="mt-auto shrink-0">
                    <Button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold">Explore Branding</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="glass-card p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] neon-glow-blue border-white/10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Grow Your Brand Online?</h2>
              <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">
                Join 250+ businesses that have elevated their digital presence with our expert team.
              </p>
              <Button className="bg-secondary-container text-white px-12 py-8 rounded-2xl text-xl hover:scale-105 transition-all">
                Get Your Free Proposal
              </Button>
            </div>
          </div>
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-secondary-container/20 blur-[150px] rounded-full"></div>
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-secondary-container/10 blur-[150px] rounded-full"></div>
        </section>
      </main>

      <footer className="w-full py-20 bg-surface-container-lowest border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-primary mb-6">Elevate</div>
            <p className="text-on-surface-variant mb-8">Building the next generation of digital-first brands with precision and creativity.</p>
            <div className="flex gap-4">
              <Globe className="text-on-surface-variant cursor-pointer hover:text-secondary w-5 h-5" />
              <Share2 className="text-on-surface-variant cursor-pointer hover:text-secondary w-5 h-5" />
              <Mail className="text-on-surface-variant cursor-pointer hover:text-secondary w-5 h-5" />
            </div>
          </div>
          {[
            { title: "Agency", links: ["Services", "Portfolio", "Pricing", "Team"] },
            { title: "Resources", links: ["Careers", "Process", "Blog", "Contact"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service"] }
          ].map((col, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h5 className="text-primary font-bold mb-2">{col.title}</h5>
              {col.links.map((link) => (
                <a key={link} className="text-on-surface-variant hover:text-secondary transition-colors" href="#">{link}</a>
              ))}
              {col.title === "Legal" && <p className="mt-8 text-on-surface-variant text-sm">© 2024 Elevate Agency. All rights reserved.</p>}
            </div>
          ))}
        </div>
      </footer>
      <MadeWithDyad />
    </div>
  );
};

export default Index;