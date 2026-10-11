import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, Leaf, ShieldCheck, Globe2, Sprout, SlidersHorizontal, FileCheck2, Truck, MessagesSquare, PackageCheck, Factory, Soup, Cookie, HeartPulse, Croissant, Baby, Store, BadgeCheck, Quote } from 'lucide-react';
import { useEffect,useRef,useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProductCatalog } from '@/components/product-catalog';
import { CTA } from '@/components/site-shell';
import { pageHead } from '@/lib/products';
import hero from '@/assets/ingredients-hero.jpg';
import farm from '@/assets/sourcing-farm.jpg';
import worldMapNetwork from '@/assets/world-map-network.png';
import worldMapMinimal from '@/assets/world-map-minimal.png';
export const Route=createFileRoute('/')({head:()=>pageHead('Premium ingredients. Global possibilities.','India-sourced dehydrated vegetable, fruit and herbal powders for global food manufacturers, distributors and private-label buyers.'),component:Home});
function Counter({end,suffix}:{end:number;suffix:string}){const ref=useRef<HTMLSpanElement>(null);const [count,setCount]=useState(end);useEffect(()=>{const node=ref.current;if(!node||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const observer=new IntersectionObserver(entries=>{if(!entries[0]?.isIntersecting)return;const start=performance.now();let frame=0;const tick=(now:number)=>{const t=Math.min((now-start)/1100,1);setCount(Math.round(end*(1-Math.pow(1-t,3))));if(t<1)frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);observer.disconnect();return()=>cancelAnimationFrame(frame)},{threshold:.6});observer.observe(node);return()=>observer.disconnect()},[end]);return <span ref={ref}>{count}{suffix}</span>}
const benefits=[{icon:Sprout,title:'Direct farm network',text:'A sourcing approach built around relationships, seasonality and ingredient integrity.'},{icon:SlidersHorizontal,title:'Made to your specification',text:'Mesh, colour, composition and packaging aligned with your formulation.'},{icon:FileCheck2,title:'Export paperwork handled',text:'Clear documentation and coordination for a smoother cross-border journey.'},{icon:Truck,title:'Reliable dispatch',text:'Production and shipping schedules agreed around your business needs.'},{icon:MessagesSquare,title:'A responsive team',text:'One conversation, clear answers and attentive coordination from enquiry onward.'},{icon:PackageCheck,title:'Private label ready',text:'Flexible packaging possibilities for ingredients that carry your brand.'}];
function WorldMap(){
  const [mapType, setMapType] = useState<'network'|'minimal'>('network');
  return (
    <div className="relative group w-full">
      <div className="overflow-hidden rounded-2xl border border-primary/30 bg-[#0A1F15]/80 shadow-[0_15px_40px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-500 hover:border-primary/60">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A1F15]">
          <img
            src={mapType === 'network' ? worldMapNetwork : worldMapMinimal}
            alt={mapType === 'network' ? 'Aurelian International Global Export Network with worldwide shipping routes' : 'Aurelian International Global Target Markets Map'}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#0F2A1D]/85 backdrop-blur-md px-2 py-1 rounded-full border border-primary/30 text-[10px]">
            <button
              type="button"
              onClick={() => setMapType('network')}
              className={`px-2.5 py-0.5 rounded-full transition-all text-[10px] ${mapType === 'network' ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-dark-muted hover:text-on-forest'}`}
            >
              Export Routes
            </button>
            <button
              type="button"
              onClick={() => setMapType('minimal')}
              className={`px-2.5 py-0.5 rounded-full transition-all text-[10px] ${mapType === 'minimal' ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-dark-muted hover:text-on-forest'}`}
            >
              Minimal View
            </button>
          </div>
        </div>
        <div className="p-3.5 border-t border-white/10 flex items-center justify-between text-xs text-dark-muted bg-[#0F2A1D]/60">
          <span className="flex items-center gap-2 text-[11px]">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            Origin: India (Worldwide Sea & Air Freight Dispatches)
          </span>
          <span className="text-[10px] tracking-wider uppercase text-primary font-medium hidden sm:inline-block">Global Distribution Network</span>
        </div>
      </div>
    </div>
  );
}
function Home(){return <>
<section className="hero"><img src={hero} alt="Premium turmeric, beetroot and onion powders with fresh Indian ingredients" className="hero-image" width={1536} height={1024} fetchPriority="high"/><div className="container"><div className="hero-content"><div className="eyebrow">DEHYDRATED VEGETABLE & FRUIT POWDERS · EXPORTERS FROM INDIA</div><h1>Nature’s finest,<br/><em>dehydrated</em> and delivered<br/>worldwide.</h1><p className="hero-copy">Pure ingredients. Consistent quality. A dependable partner.<br/>Premium vegetable, fruit and herbal powders, thoughtfully sourced in India for your global business.</p><div className="hero-buttons"><Button variant="gold" asChild><Link to="/products">Explore Products <ArrowUpRight/></Link></Button><Button variant="editorial" asChild><Link to="/contact">Request a Quote <ArrowUpRight/></Link></Button></div><div className="hero-small"><span><Leaf/>Naturally sourced</span><span><ShieldCheck/>Quality-led processing</span><span><Globe2/>Export focused</span></div></div></div><span className="scroll-indicator">Scroll to explore</span><span className="hero-caption">FROM INDIAN SOIL. TO THE WORLD.</span></section>
<section className="stats-strip"><div className="container"><div className="stats-grid"><div className="stat"><div className="stat-number"><Counter end={20} suffix="+"/></div><div className="stat-label">Countries Served*</div></div><div className="stat"><div className="stat-number"><Counter end={25} suffix="+"/></div><div className="stat-label">Products*</div></div><div className="stat"><div className="stat-number"><Counter end={100} suffix="%"/></div><div className="stat-label">Natural*</div></div><div className="stat"><div className="stat-number text-2xl">Bulk &<br className="hidden"/> Private Label</div><div className="stat-label">Solutions for your business</div></div></div><p className="placeholder-note">*Illustrative figures only. To be replaced with verified company data; product composition confirmed per specification.</p></div></section>
<div className="cert-strip">{['FSSAI','ISO','HACCP','APEDA','IEC'].map(c=><span key={c} className="cert-badge"><BadgeCheck/>{c}</span>)}<span className="cert-note">Certification details on request.<br/>Status pending verification.</span></div>
<section className="section"><div className="container editorial-grid"><div className="farm-composition reveal"><img src={farm} alt="Illustrative Indian farm sourcing scene" className="farm-photo" width={1024} height={1024} loading="lazy"/><div className="farm-seal"><Sprout/><span>Indian roots.<br/>Global standards.</span><small>THE AURELIAN WAY</small></div></div><div className="editorial-copy reveal"><div className="eyebrow">ROOTED IN INDIA. REACHING THE WORLD.</div><h2>Rooted in <em>quality.</em><br/>Built on trust.</h2><p className="muted">Good ingredients begin long before they reach your production line. They begin with the right source, the right care and a partner who understands what consistency means.</p><p className="muted">At Aurelian International, we connect India’s agricultural richness with the needs of global buyers — offering carefully selected dehydrated powders and practical, export-focused support.</p><Link to="/about" className="text-link mt-5">Discover our story <ArrowUpRight size={15}/></Link></div></div></section>
<section className="section pt-4"><div className="container"><div className="section-heading"><div><div className="eyebrow">OUR PRODUCTS</div><h2>Naturally <em>chosen.</em></h2></div><Link className="text-link" to="/products">View all products <ArrowUpRight size={15}/></Link></div><p className="muted mb-7">Clean flavours. Vibrant colours. Ingredients made for your next great product.</p><ProductCatalog featured/></div></section>
<section className="section dark-band"><div className="container"><div className="section-heading"><div><div className="eyebrow">WHY AURELIAN</div><h2>A partner you can<br/><em>plan around.</em></h2></div><p className="max-w-xs text-xs">More than a shipment of ingredients.<br/>A thoughtful approach to your supply chain.</p></div><div className="benefit-grid">{benefits.map(b=><article key={b.title} className="benefit reveal"><b.icon/><h3>{b.title}</h3><p>{b.text}</p></article>)}</div></div></section>
<section className="section"><div className="container"><div className="eyebrow">FROM SOURCE TO SHIPMENT</div><h2>A considered journey.<br/>At <em>every step.</em></h2><div className="timeline mt-10">{[['Sourcing','Select ingredients and agree sourcing requirements.'],['Processing & dehydration','Prepare, dehydrate and mill to the agreed brief.'],['Quality testing','Review batch parameters and supporting reports.'],['Packaging','Protect freshness with fit-for-purpose formats.'],['Global shipping','Coordinate documentation, dispatch and delivery.']].map(([title,text],i)=><article key={title} className="reveal"><div className="step-number">0{i+1}</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
<section className="section dark-band"><div className="container reach-grid"><div><div className="eyebrow">GLOBAL POSSIBILITIES</div><h2>Indian ingredients.<br/><em>Worldwide</em> ambition.</h2><p>Working toward lasting ingredient partnerships across markets, with attention to every destination’s requirements.</p><div className="region-list">{['Middle East','Europe','North America','Southeast Asia','Africa'].map(r=><span key={r}>{r}</span>)}</div><p className="placeholder-note mt-5">Illustrative target markets; actual export destinations to be confirmed.</p></div><WorldMap/></div></section>
<section className="section"><div className="container"><div className="eyebrow">MADE FOR YOUR INDUSTRY</div><h2>One ingredient. <em>Endless possibilities.</em></h2><div className="industry-grid mt-10">{[[Factory,'Food manufacturing'],[Cookie,'Snacks & seasonings'],[Soup,'Soups & sauces'],[HeartPulse,'Nutraceuticals'],[Croissant,'Bakery'],[Baby,'Baby food'],[Store,'Retail & private label']].map(([Icon,label])=>{const I=Icon as typeof Factory;return <div className="industry" key={String(label)}><I/><span>{String(label)}</span></div>})}</div><p className="placeholder-note mt-7">Suitability for regulated applications, including baby food, is subject to buyer validation and agreed testing.</p></div></section>
<section className="section bg-secondary"><div className="container quote-panel"><div className="eyebrow">PARTNERSHIPS THAT MATTER</div><Quote className="mx-auto text-gold" size={28}/><blockquote>“The right ingredient partner brings more than quality.<br/>They bring confidence to every order.”</blockquote><p className="placeholder-note">Illustrative testimonial copy — not a client endorsement.<br/>To be replaced with an approved quote from a real buyer.</p></div></section><CTA/>
</>}
