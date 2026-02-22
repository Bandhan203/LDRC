import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../../imports/svg-0998r9wxqb";
import imgSlideItem4 from "figma:asset/c6e23dedf7395ed8e4fe15c2e6771eeb39892ea4.png";
import imgSlideItem5 from "figma:asset/0cfb18d36ac0940a4cc72c6ba6b1a5bf721f893a.png";
import imgSlideItem1 from "figma:asset/dcc55873d01a51d48044cf7a5283563f4c513428.png";
import imgBackground from "figma:asset/99564e2dc18d4793b30a7fa270cbba8cfbb17db1.png";
import imgImage4 from "figma:asset/4ff6ef3a898e0b18055b2632f15d4115562eb69f.png";
import imgImage6 from "figma:asset/5ebdbabdb7df9432c98235dca289b38fdfbcc556.png";
import imgFrame5 from "figma:asset/7944ea933c9b265858ac155d2acfe933d770866e.png";
import imgFrame6 from "figma:asset/9eae3a2eda4d9a449420a88c3181c7999555bcef.png";
import imgFrame7 from "figma:asset/bf9b7184885723d53a57060f9f509f25d0713f40.png";
import imgFrame8 from "figma:asset/1dbf181360286606b42836c5a727a28419749fd9.png";
import imgFrame9 from "figma:asset/4f3b3ceff10bb44d363e4682553e3fd1c071056e.png";
import imgFrame10 from "figma:asset/0ce1eb34c88f4ee95035d23855d5ba745568e766.png";
import imgFrame11 from "figma:asset/37d2ab3f359cd7869fe272dd4c110fa006672e3f.png";
import imgFrame12 from "figma:asset/b1718635334beecd2630aa519975f9fa656249c8.png";
import imgFrame13 from "figma:asset/68919f97f6883199c6bd6781e2b4f6bc34e29937.png";
import imgFrame14 from "figma:asset/0f3fe6472ed147a172b0cfa71580713e52f0b1e9.png";
import imgFrame15 from "figma:asset/b93e8758e31177ff49e3050117c7aa3b9becde8c.png";
import imgFrame16 from "figma:asset/27bf1ffa28ac168f311e10fd447ea0e016f5e26b.png";
import imgFrame17 from "figma:asset/8278dd9dea85947faeedb9bb6efeb8d281e18326.png";
import imgScreenshot7Jpg1 from "figma:asset/439ac7fcbe93b2914de65756651146a8b9063d01.png";
import { imgSlideList, imgImage5 } from "../../imports/svg-2nehk";

/* ============================================================
   Design System Constants
   ============================================================ */
const COLORS = {
  navyDark: '#1a2332',
  navyMid: '#2d3436',
  gold: '#c9a961',
  goldLight: '#e4d2a7',
  bgLight: '#f1f3f4',
  textDark: '#212529',
  textHeading: '#343a40',
  textMuted: '#6c757d',
  accentOrange: '#f16d0c',
  purple: '#7B61FF',
  white: '#ffffff',
  cardGray: '#808285',
};

export default function EnhancedDesign() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const focusScrollRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      img: imgSlideItem4,
      alt: "LDRC – Defending Rights",
      tag: "Trusted Legal Excellence Since 2024",
      title: "Defending Rights,",
      subtitle: "Delivering Justice.",
      desc: "Expert representation across Intellectual Property, Environmental, Taxation & Cybersecurity Law.",
      cta: "Book a Consultation",
    },
    {
      img: imgSlideItem5,
      alt: "LDRC – IP Law",
      tag: "Intellectual Property Law",
      title: "Protecting Your",
      subtitle: "Creative Assets.",
      desc: "From patents and trademarks to digital IP in the age of AI — we safeguard what your mind creates.",
      cta: "Explore IP Practice",
    },
    {
      img: imgSlideItem1,
      alt: "LDRC – Environmental Law",
      tag: "Environmental Law",
      title: "Building a",
      subtitle: "Sustainable Future.",
      desc: "Rigorous legal counsel on climate liability, environmental compliance, and corporate accountability.",
      cta: "Learn More",
    },
    {
      img: imgSlideItem5,
      alt: "LDRC – Cybersecurity Law",
      tag: "Cybersecurity & Data Privacy",
      title: "Securing Your",
      subtitle: "Digital Frontier.",
      desc: "Jurisdiction, liability, and data privacy regulation — we navigate cyber law across borders.",
      cta: "Get Legal Advice",
    },
    {
      img: imgSlideItem4,
      alt: "LDRC – Taxation Law",
      tag: "Taxation Law",
      title: "Strategic Tax",
      subtitle: "Defence & Advisory.",
      desc: "Corporate tax structuring, compliance strategy, and litigation support from seasoned tax lawyers.",
      cta: "Speak to an Expert",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const navItems = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
    { name: 'Media', href: '#media' },
  ];

  const focusAreas = [
    { img: imgFrame5, title: "Fellowship", description: "Bringing world-class experts together to provide scholarship that informs today's most pressing policy debates." },
    { img: imgFrame6, title: "Fellowship", description: "Bringing world-class experts together to provide scholarship that informs today's most pressing policy debates." },
    { img: imgFrame7, title: "Fellowship", description: "Bringing world-class experts together to provide scholarship that informs today's most pressing policy debates." },
    { img: imgFrame8, title: "Research Programs", description: "Conducting in-depth research on key policy issues." },
    { img: imgFrame9, title: "Publications", description: "Publishing cutting-edge research and analysis." },
    { img: imgFrame10, title: "Partnerships", description: "Building alliances with leading organizations, universities, and institutions to expand our reach and impact." },
    { img: imgFrame11, title: "Congressional Education", description: "Equipping Congress with accessible, nonpartisan insights to meet the challenges of a complex global landscape." },
    { img: imgFrame12, title: "Policy Analysis", description: "Providing expert analysis on critical policy matters." },
    { img: imgFrame13, title: "Global Outreach", description: "Expanding research impact through international collaboration." },
    { img: imgFrame14, title: "Legal Reform", description: "Advocating for evidence-based legal reforms." },
    { img: imgFrame15, title: "Academic Programs", description: "Training the next generation of legal scholars." },
    { img: imgFrame16, title: "Community Engagement", description: "Connecting research with community needs." },
    { img: imgFrame17, title: "Innovation Hub", description: "Fostering innovative approaches to legal challenges." },
  ];

  const stats = [
    { value: "4", label: "Research Centres", gradient: "from-[#c9a961] to-[#e4d2a7]", iconPath: svgPaths.pdc1ff00, basePath: "M15.9961 9.33105V27.9932" },
    { value: "50+", label: "Research Projects", gradient: "from-[#1a2332] to-[#2d3436]", iconPaths: [svgPaths.p2dc05180, svgPaths.p7ccc380, svgPaths.p161467e0, svgPaths.p16f0c500] },
    { value: "100+", label: "Publications", gradient: "from-[#6c757d] to-[#2d3436]", iconPaths: [svgPaths.p3e51af00, svgPaths.pba76600] },
    { value: "2024", label: "Established", gradient: "from-[#e4d2a7] to-[#c9a961]", iconPaths: [svgPaths.p10a14f40, svgPaths.p224f8680, svgPaths.p64d9c60, svgPaths.pc790b80] },
  ];

  // Get slide positions for stacked carousel (matches Figma layout)
  const getSlideStyle = (index: number) => {
    const diff = index - currentSlide;
    const totalSlides = slides.length;
    let normalizedDiff = diff;
    if (normalizedDiff > totalSlides / 2) normalizedDiff -= totalSlides;
    if (normalizedDiff < -totalSlides / 2) normalizedDiff += totalSlides;
    
    const absOffset = Math.abs(normalizedDiff);
    if (absOffset > 2) return { opacity: 0, scale: 0.4, x: normalizedDiff > 0 ? '80%' : '-80%', zIndex: 0 };
    
    // Based on Figma's stacked card positions:
    // Center: full size, ±1: 80% scale offset to sides, ±2: 60% scale at edges
    const scales = [1, 0.8, 0.6];
    const xOffsets = [0, 18.5, 30.3];
    const sign = normalizedDiff > 0 ? 1 : normalizedDiff < 0 ? -1 : 0;
    
    return {
      opacity: 1,
      scale: scales[absOffset],
      x: `${sign * xOffsets[absOffset]}%`,
      zIndex: 10 - absOffset,
    };
  };

  return (
    <div className="min-h-screen bg-[#f1f3f4] w-full overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* ============================================================
          NAVBAR
          ============================================================ */}
      <nav className="sticky top-0 z-50 bg-[#1a2332]">
        {/* Top Utility Bar */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between py-3 border-b border-white/10">
            <div className="hidden md:flex items-center gap-6">
              <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors" style={{ fontFamily: "'Lato', sans-serif" }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p3cbd86f0} fill="currentColor" /></svg>
                <span className="text-[20px] tracking-[-0.5px]">English</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p1cdc4c00} fill="currentColor" /></svg>
              </button>
              <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors" style={{ fontFamily: "'Lato', sans-serif" }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p255bca00} fill="currentColor" /></svg>
                <span className="text-[20px] tracking-[-0.5px]">Whatsapp</span>
              </button>
              <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors" style={{ fontFamily: "'Lato', sans-serif" }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p2b80a880} fill="currentColor" /></svg>
                <span className="text-[20px] tracking-[-0.5px]">Contact</span>
              </button>
            </div>
            {/* Theme Toggle */}
            <button className="flex items-center gap-2 bg-black rounded-full p-[3px]" aria-label="Toggle theme">
              <div className="bg-[#1a2332] rounded-full p-[3px]">
                <svg className="w-8 h-[31px]" viewBox="0 0 32 31" fill="none">
                  <ellipse cx="16" cy="15.5" fill="black" rx="16" ry="15.5" />
                  <mask height="24" id="mask_theme" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="24" x="4" y="4">
                    <path d="M4 4H28L4 28V4Z" fill="white" />
                  </mask>
                  <g mask="url(#mask_theme)"><path d={svgPaths.p26328f00} fill="#C9A961" /></g>
                </svg>
              </div>
              <div className="p-[3px]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d={svgPaths.p414e180} fill="white" /></svg>
              </div>
            </button>
          </div>

          {/* Main Navigation Bar */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-[-10%_-20%_-30%_-20%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                    <g clipPath="url(#clip_logo)" filter="url(#filter_logo)">
                      <path d={svgPaths.p3c66d8f0} fill="url(#paint_logo)" stroke="#C9A961" strokeWidth="2" />
                      <g>
                        <path d="M28 18V30" stroke="#C9A961" strokeLinecap="round" strokeWidth="1.5" />
                        <path d="M20 20H36" stroke="#C9A961" strokeLinecap="round" strokeWidth="1.5" />
                        <path d={svgPaths.p2d449780} stroke="#C9A961" />
                        <path d={svgPaths.p3997e100} stroke="#C9A961" />
                        <path d="M22 20V21" stroke="#C9A961" />
                        <path d="M34 20V21" stroke="#C9A961" />
                        <path d={svgPaths.p9f9f400} stroke="#C9A961" />
                      </g>
                    </g>
                    <defs>
                      <filter id="filter_logo" x="0" y="0" width="56" height="56" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" /><feGaussianBlur stdDeviation="4" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="shadow" />
                        <feBlend in="SourceGraphic" in2="shadow" mode="normal" result="shape" />
                      </filter>
                      <linearGradient id="paint_logo" x1="9" y1="5" x2="47" y2="47" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1A2332" /><stop offset="1" stopColor="#2D3436" />
                      </linearGradient>
                      <clipPath id="clip_logo"><rect fill="white" height="40" transform="translate(8 4)" width="40" /></clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <span className="text-[#c9a961] text-[20px] tracking-[-0.5px]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>LDRC</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a key={item.name} href={item.href}
                  className={`relative px-6 py-3 text-[16px] tracking-[0.4px] transition-colors group ${item.active ? 'text-[#c9a961]' : 'text-white hover:text-[#c9a961]'}`}
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                  {item.name}
                  <span className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c9a961] to-[#e4d2a7] transition-opacity ${item.active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                </a>
              ))}
            </div>

            {/* CTA */}
            <button className="hidden lg:block bg-gradient-to-b from-[#c9a961] to-[#e4d2a7] px-6 py-3 rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] hover:shadow-xl hover:scale-105 transition-all"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px' }}>
              Get in Touch
            </button>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden pb-4">
                {navItems.map((item) => (
                  <a key={item.name} href={item.href} className={`block px-4 py-3 rounded-lg text-[16px] transition-colors ${item.active ? 'text-[#c9a961] bg-white/5' : 'text-white hover:bg-white/5'}`}
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    {item.name}
                  </a>
                ))}
                <button className="w-full mt-4 bg-gradient-to-b from-[#c9a961] to-[#e4d2a7] px-6 py-3 rounded-[16px] text-[14px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                  Get in Touch
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* ============================================================
          HERO SECTION - Stacked Carousel + Latest Legal Insights + Upcoming Events
          ============================================================ */}
      <section className="relative bg-gradient-to-b from-[#212529] via-[#1a2332] via-[29.38%] to-[#f1f3f4] to-[52.795%] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Carousel Area */}
          <div className="relative h-[220px] sm:h-[380px] md:h-[460px] lg:h-[560px] px-0 sm:px-10 lg:px-16 pt-6 sm:pt-10 flex flex-col gap-4 sm:gap-6 items-center w-full max-w-full overflow-hidden">
            {/* Stacked Slides with Mask */}
            <div className="relative flex-1 w-full max-w-full"
              style={{
                maskImage: `url('${imgSlideList}')`,
                WebkitMaskImage: `url('${imgSlideList}')`,
                maskSize: '117.05% 138.25%',
                WebkitMaskSize: '117.05% 138.25%',
                maskPosition: '-8.52% -14%',
                WebkitMaskPosition: '-8.52% -14%',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
              }}>
              {slides.map((slide, index) => {
                const style = getSlideStyle(index);
                return (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ opacity: style.opacity, scale: style.scale, x: style.x }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    style={{ zIndex: style.zIndex }}>
                    <div className="w-[90%] sm:w-[74%] lg:w-[65.6%] h-full rounded-[16px] sm:rounded-[30px] lg:rounded-[40px] overflow-hidden bg-white relative shadow-lg">
                      <img src={slide.img} alt={slide.alt} className="w-full h-full object-cover pointer-events-none" />
                      {/* Text overlay — only fully visible on the active centre slide */}
                      {index === currentSlide && (
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,18,30,0.90)] via-[rgba(10,18,30,0.40)] to-transparent flex flex-col justify-end p-4 sm:p-7 lg:p-10">
                          <p className="text-[#c9a961] text-[9px] sm:text-[11px] lg:text-[13px] uppercase tracking-[2px] sm:tracking-[2.5px] mb-1 sm:mb-2 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>{slide.tag}</p>
                          <h2 className="text-white text-[16px] sm:text-[26px] lg:text-[40px] leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                            {slide.title}
                            <span className="block text-[#c9a961] italic">{slide.subtitle}</span>
                          </h2>
                          <div className="hidden sm:block">
                            <p className="text-white/80 text-[12px] lg:text-[14px] leading-[1.6] mt-2 sm:mt-3 max-w-[480px]" style={{ fontFamily: "'Inter', sans-serif" }}>{slide.desc}</p>
                          </div>
                          <button className="mt-2 sm:mt-3 self-start bg-gradient-to-b from-[#c9a961] to-[#e4d2a7] text-[#1a2332] px-3 sm:px-5 py-1.5 sm:py-2 rounded-[10px] sm:rounded-[12px] text-[10px] sm:text-[13px] font-bold shadow-[0px_8px_15px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform" style={{ fontFamily: "'Inter', sans-serif" }}>{slide.cta}</button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Slide Navigation - Matching Figma exactly */}
            <div className="flex items-center justify-center gap-2 p-2 shrink-0">
              <button onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="p-2 cursor-pointer shrink-0" aria-label="Previous slide">
                <div className="relative w-6 h-6">
                  <div className="absolute" style={{ inset: '14.33% 12.5% 14.33% 9.91%' }}>
                    <svg className="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6213 17.1213">
                      <path clipRule="evenodd" d={svgPaths.p1257d050} fill="#999999" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </button>
              <div className="flex items-center gap-2.5 p-2">
                {slides.map((_, index) => (
                  <button key={index} onClick={() => setCurrentSlide(index)}
                    className="cursor-pointer shrink-0 block"
                    aria-label={`Go to slide ${index + 1}`}>
                    {index === currentSlide ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" fill="#7B61FF" r="8" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 12 12">
                        <circle cx="6" cy="6" fill="#999999" r="6" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
              <button onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="p-2 cursor-pointer shrink-0" aria-label="Next slide">
                <div className="relative w-6 h-6">
                  <div className="absolute" style={{ inset: '12.98% 12.18%' }}>
                    <svg className="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1514 17.772">
                      <path clipRule="evenodd" d={svgPaths.p1d9c4800} fill="#999999" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Latest Legal Insights + Upcoming Events - Below Carousel */}
          <div className="px-4 sm:px-6 lg:px-20 pb-8 sm:pb-16 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-10">
              {/* Left Side - Article Cards */}
              <div className="flex flex-col gap-8 sm:gap-10 items-end">
                {/* White Article Card */}
                <div className="bg-white relative w-full">
                  <div aria-hidden="true" className="absolute border border-[rgba(33,37,41,0.12)] border-solid inset-0 pointer-events-none shadow-[0px_10px_10px_0px_rgba(0,0,0,0.25),0px_4px_4px_0px_rgba(0,0,0,0.25),2px_7px_5px_0px_rgba(0,0,0,0.18)]" />
                  <div className="flex flex-row items-center w-full overflow-hidden">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 pb-7 px-5 sm:px-7 w-full">
                      <div className="flex flex-col gap-6 flex-1 min-w-0">
                        <div style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                          <p className="text-[15px] sm:text-[17px] text-[#394f87] leading-[1.4]">Landmark Ruling on Intellectual Property:</p>
                          <p className="text-[15px] sm:text-[17px] text-[#394f87] leading-[1.4] mt-1">Software Patent Protections in the Digital Age</p>
                          <p className="text-[12px] sm:text-[13px] text-[#6c757d] leading-[1.55] mt-4">The High Court's recent decision reshapes how software…</p>
                        </div>
                        <div style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                          <p className="text-[12px] sm:text-[13px] text-[#212529]" style={{ fontWeight: 600 }}>Dr. Amara Osei-Bonsu</p>
                          <p className="text-[13px] sm:text-[14px] text-black mt-1">14 February 2026</p>
                        </div>
                      </div>
                      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between gap-4 sm:gap-8 shrink-0 w-full sm:w-auto sm:self-stretch sm:pl-6">
                        <p className="text-[18px] sm:text-[22px] text-[#343a40] uppercase leading-tight" style={{ fontFamily: "'Libre Franklin', sans-serif", fontWeight: 700 }}>Legal<br className="hidden sm:block" /> Insights</p>
                        <div className="bg-gradient-to-b from-[#c9a961] to-[#e4d2a7] px-5 py-1.5 rounded-[16px] relative cursor-pointer shrink-0">
                          <div aria-hidden="true" className="absolute border border-[rgba(201,169,97,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
                          <p className="text-[14px] text-[#1a2332] leading-[20px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>View All</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dark Gradient Article Card */}
                <div className="bg-gradient-to-r from-[#1a2332] to-[#4f6a98] rounded-lg relative shadow-[0px_10px_10px_0px_rgba(0,0,0,0.25),0px_4px_4px_0px_rgba(0,0,0,0.25),2px_7px_5px_0px_rgba(0,0,0,0.18)] w-full">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pl-6 sm:pl-10 pr-6 sm:pr-8 py-6 sm:py-8">
                    <div className="flex-1 min-w-0">
                      <p className="text-[16px] sm:text-[18px] text-white leading-[1.4]" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>Climate Liability & Corporate Accountability:</p>
                      <p className="text-[16px] sm:text-[18px] text-white leading-[1.4] mt-0.5" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>Environmental Law's New Frontier</p>
                      <p className="text-[13px] text-[rgba(248,249,250,0.7)] leading-[19.5px] mt-3" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>How courts are redefining corporate obligations under…</p>
                      <p className="text-[14px] text-[#e4d2a7] leading-[16.8px] mt-2" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>2 February 2026</p>
                    </div>
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-between gap-4 sm:gap-10 shrink-0 sm:pl-6 sm:self-stretch">
                      <p className="text-[20px] sm:text-[24px] text-white uppercase leading-tight" style={{ fontFamily: "'Libre Franklin', sans-serif", fontWeight: 700 }}>Legal<br className="hidden sm:block" /> Insights</p>
                      <div className="bg-gradient-to-b from-[#c9a961] to-[#e4d2a7] px-5 py-1.5 rounded-[16px] relative inline-flex items-center justify-center cursor-pointer">
                        <div aria-hidden="true" className="absolute border border-[rgba(201,169,97,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
                        <p className="text-[14px] text-[#1a2332] leading-[20px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>View All</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Upcoming Events */}
              <div className="relative overflow-hidden min-h-[300px]">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <div className="absolute bg-[#eee] inset-0" />
                  <div className="absolute inset-0 overflow-hidden">
                    <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[227.65%]" src={imgBackground} />
                  </div>
                </div>
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <div className="relative h-[28.8px] mb-12">
                    <p className="text-[24px] text-[#343a40] uppercase leading-[28.8px] absolute left-0 top-0" style={{ fontFamily: "'Libre Franklin', sans-serif", fontWeight: 700 }}>Upcoming Events</p>
                    <div className="absolute bg-[#d2d2d2] h-[3px] left-[70%] right-0 top-[15px]" />
                  </div>
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#c9a961] pl-4">
                      <p className="text-[15px] text-[#212529] leading-[22px]" style={{ fontFamily: "'Libre Franklin', sans-serif", fontWeight: 600 }}>IP Law Symposium 2026</p>
                      <p className="text-[13px] text-[#6c757d] mt-1" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>12 March 2026 · University Hall</p>
                    </div>
                    <div className="border-l-4 border-[#1a2332] pl-4">
                      <p className="text-[15px] text-[#212529] leading-[22px]" style={{ fontFamily: "'Libre Franklin', sans-serif", fontWeight: 600 }}>Environmental Law Moot Court</p>
                      <p className="text-[13px] text-[#6c757d] mt-1" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>28 March 2026 · LDRC Auditorium</p>
                    </div>
                    <div className="border-l-4 border-[#c9a961] pl-4">
                      <p className="text-[15px] text-[#212529] leading-[22px]" style={{ fontFamily: "'Libre Franklin', sans-serif", fontWeight: 600 }}>Cybersecurity & Data Privacy Forum</p>
                      <p className="text-[13px] text-[#6c757d] mt-1" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>10 April 2026 · Online & In-Person</p>
                    </div>
                    <div className="border-l-4 border-[#1a2332] pl-4">
                      <p className="text-[15px] text-[#212529] leading-[22px]" style={{ fontFamily: "'Libre Franklin', sans-serif", fontWeight: 600 }}>Annual Tax Law Conference</p>
                      <p className="text-[13px] text-[#6c757d] mt-1" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>24 April 2026 · Capital City Centre</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HIGHLIGHTS SECTION
          ============================================================ */}
      <section className="relative bg-gradient-to-b from-[#1a2332] via-[#2d3436] via-50% to-[#1a2332] py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 relative">
          {/* Decorative blur */}
          <div className="absolute left-[10%] top-[45%] w-[200px] sm:w-[384px] h-[200px] sm:h-[384px] rounded-full blur-[40px] sm:blur-[64px] opacity-50" style={{ backgroundImage: 'linear-gradient(135deg, rgba(201,169,97,0.05) 0%, rgba(228,210,167,0.05) 100%)' }} />
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Title + Video */}
            <div>
              <h2 className="text-[26px] sm:text-[35px] lg:text-[44px] text-white mb-2" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>CASE HIGHLIGHTS</h2>
              <p className="text-[22px] sm:text-[28px] lg:text-[35px] text-[#c9a961] italic mb-6 sm:mb-8" style={{ fontFamily: "'Roboto', sans-serif" }}>View All</p>
              
              {/* Video Preview */}
              <div className="relative aspect-[3/2] rounded-lg overflow-hidden group cursor-pointer"
                style={{ maskImage: `url('${imgImage5}')`, WebkitMaskImage: `url('${imgImage5}')`, maskSize: 'cover', WebkitMaskSize: 'cover' }}>
                <img src={imgImage6} alt="Video highlight" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-end justify-end p-8">
                  <div className="w-[47px] h-[47px]">
                    <svg className="w-full h-full" viewBox="0 0 47 47" fill="none">
                      <path clipRule="evenodd" d={svgPaths.p34d3f00} fill="white" fillOpacity="0.72" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p1b58a800} fill="white" fillOpacity="0.72" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Second Video Card */}
            <div className="relative">
              {/* Gray shape background */}
              <div className="bg-[#808285] rounded-tl-[40px] sm:rounded-tl-[60px] rounded-br-[40px] sm:rounded-br-[60px] p-6 sm:p-10 lg:p-12 h-full flex flex-col">
                <h3 className="text-[22px] sm:text-[28px] lg:text-[35px] text-white mb-4 sm:mb-6" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>Notable Victories</h3>
                <div className="space-y-4 text-[15px] text-white leading-[29px] flex-1" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  <p>Secured a landmark ruling protecting a startup's proprietary algorithm under IP law, setting a precedent for digital asset ownership.</p>
                  <p>Successfully defended a multinational corporation against unlawful emissions charges, redefining environmental compliance standards.</p>
                  <p>Advised the government on a comprehensive cybersecurity legislative framework adopted across three jurisdictions.</p>
                </div>
                <div className="mt-6">
                  <div className="w-[120px] max-w-full h-auto rounded mb-4 overflow-hidden">
                    <img src={imgImage4} alt="Content preview" className="w-full h-auto" />
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="bg-gradient-to-b from-[#c9a961] to-[#e4d2a7] px-6 py-1.5 rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)] border border-[rgba(201,169,97,0.4)]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px', color: '#1a2332' }}>
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom text area */}
          <div className="mt-8 text-[15px] text-white leading-[29px] max-w-3xl" style={{ fontFamily: "'Roboto', sans-serif" }}>
            <p>Our team of dedicated legal scholars and practitioners brings over two decades of collective expertise, consistently achieving outcomes that protect the rights and interests of our clients across all practice areas.</p>
          </div>
        </div>
      </section>

      {/* ============================================================
          OUR FOCUS AREA SECTION
          ============================================================ */}
      <section className="relative bg-white py-16 sm:py-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
          {/* Title */}
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[41.5px]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              <span className="text-black">Our Focus </span>
              <span className="text-[#c9a961] italic">Area</span>
            </h2>
          </div>
          
          {/* Quote */}
          <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-[#6c757d] text-justify leading-[1.7] sm:leading-[39px] w-full max-w-[666px] mb-8 sm:mb-10 italic" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
            "We combine rigorous academic scholarship with practical legal expertise — empowering clients, shaping policy, and advancing justice across every domain we serve."
          </p>
        </div>

        {/* Scrolling Card Strip - Full Width */}
        <div className="relative">
          {/* Decorative white ellipses */}
          <div className="hidden lg:block absolute -top-[37px] left-0 w-full h-[116px] z-10">
            <svg className="w-full h-full" viewBox="0 0 1440 116" preserveAspectRatio="none"><ellipse cx="720" cy="58" rx="720" ry="58" fill="white" /></svg>
          </div>
          
          <div ref={focusScrollRef} className="flex gap-6 sm:gap-9 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-14 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {focusAreas.map((area, index) => (
              <div key={index} className="relative shrink-0 w-[240px] sm:w-[290px] lg:w-[332px] h-[340px] sm:h-[380px] lg:h-[423px] rounded-sm overflow-hidden group cursor-pointer">
                <img src={area.img} alt={area.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#004b7a] via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-12 left-4 sm:left-9 right-6 sm:right-9 border-l-[6px] border-[#f16d0c] pl-6">
                    <h3 className="text-white text-[19.8px] mb-3" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900 }}>{area.title}</h3>
                    <p className="text-white/90 text-[16.7px] leading-[20.7px]" style={{ fontFamily: "'Inter', sans-serif" }}>{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decorative ellipse */}
          <div className="hidden lg:block absolute -bottom-[37px] left-0 w-full h-[116px] z-10">
            <svg className="w-full h-full" viewBox="0 0 1440 116" preserveAspectRatio="none"><ellipse cx="720" cy="58" rx="720" ry="58" fill="white" /></svg>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 mt-12">
          <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-[#6c757d] text-justify leading-[1.7] sm:leading-[39px] w-full max-w-[725px]" style={{ fontFamily: "'Playfair Display', serif" }}>
            "LDRC seeks to further the study, comprehension, and critical evaluation of significant legal areas through innovative academic initiatives and research excellence."
          </p>
        </div>
      </section>

      {/* ============================================================
          TRANSFORMING LEGAL LANDSCAPES SECTION
          ============================================================ */}
      <section className="relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(90deg, rgba(217,217,217,0.2) 0%, rgba(217,217,217,0.2) 100%), linear-gradient(rgb(255,255,255) 26%, rgb(26,35,50) 43%, rgb(241,243,244) 47%)' }}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-28 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="w-full">
              {/* Our Mission Badge */}
              <div className="inline-flex items-center gap-3 border border-[rgba(26,35,50,0.1)] rounded-full px-5 py-2.5 mb-8 bg-gradient-to-r from-[rgba(26,35,50,0.1)] to-[rgba(45,52,54,0.1)]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <g clipPath="url(#clip_mission)">
                    <path d={svgPaths.p35b0d2a} stroke="#1A2332" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
                    <path d={svgPaths.p38ec4080} stroke="#1A2332" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
                    <path d={svgPaths.p1aa42e00} stroke="#1A2332" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
                    <path d={svgPaths.p39ddd00} stroke="#1A2332" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
                  </g>
                  <defs><clipPath id="clip_mission"><rect fill="white" width="16" height="16" /></clipPath></defs>
                </svg>
                <span className="text-[14px] text-[#1a2332] uppercase tracking-[0.35px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Our Mission</span>
              </div>

              {/* Heading */}
              <h2 className="mb-8">
                <span className="block text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.2] lg:leading-[75px] text-black" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Transforming</span>
                <span className="block text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.2] lg:leading-[75px] italic bg-clip-text" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, backgroundImage: 'linear-gradient(90deg, rgb(201,169,97) 0%, rgba(201,169,97,0) 58%), linear-gradient(171deg, rgb(201,169,97) 0%, rgb(228,210,167) 100%)', WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>Legal Landscapes</span>
              </h2>

              {/* Gold-bordered Quote */}
              <div className="border-l-[3.75px] border-[#c9a961] rounded-tr-[16px] rounded-br-[16px] bg-gradient-to-r from-[rgba(201,169,97,0.05)] to-transparent p-6 sm:p-8 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 shrink-0 mt-1 opacity-50" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p1791f000} stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p3fda8800} stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-white text-justify leading-[1.7] sm:leading-[39px] italic" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    "Justice is not just a principle — it is a practice. At LDRC, we translate complex legal landscapes into clear, actionable counsel that makes a real difference."
                  </p>
                </div>
              </div>

              {/* Description paragraphs */}
              <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-12">
                <p className="text-[15px] sm:text-[18px] text-black text-justify leading-[1.7] sm:leading-[29.25px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  The Law and Development Research Centre brings together legal scholars known for their doctrinal, historical, and interdisciplinary research. We host scholars, organise conferences and seminars, obtain research funding, and supply vital materials across our specialized research areas.
                </p>
                <p className="text-[15px] sm:text-[18px] text-black text-justify leading-[1.7] sm:leading-[29.25px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Our four research centres focus on Intellectual Property Law, Environmental Law, Taxation Law, and Cybersecurity Law, addressing contemporary challenges through rigorous academic inquiry and innovative research methodologies.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 lg:gap-10">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center text-center gap-4">
                    <div className={`w-16 h-16 rounded-[16px] bg-gradient-to-b ${stat.gradient} shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)] flex items-center justify-center`}>
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                        {stat.basePath && <path d={stat.basePath} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.666" />}
                        {stat.iconPath && <path d={stat.iconPath} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.666" />}
                        {stat.iconPaths && stat.iconPaths.map((p, i) => (
                          <path key={i} d={p} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.666" />
                        ))}
                      </svg>
                    </div>
                    <p className="text-[24px] sm:text-[30px] text-[#1a2332]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{stat.value}</p>
                    <p className="text-[11px] sm:text-[14px] text-black uppercase tracking-[0.35px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image Card */}
            <div className="hidden lg:flex relative w-full lg:w-[469px] justify-center">
              <div className="sticky top-[200px] w-full max-w-[400px]">
                {/* Decorative blurs */}
                <div className="absolute -right-8 -top-6 w-[128px] h-[128px] rounded-full blur-[40px]" style={{ backgroundImage: 'linear-gradient(135deg, rgba(201,169,97,0.1) 0%, rgba(228,210,167,0.05) 100%)' }} />
                <div className="absolute -left-4 top-[50%] w-[96px] h-[96px] rounded-full blur-[24px]" style={{ backgroundImage: 'linear-gradient(135deg, rgba(26,35,50,0.1) 0%, rgba(45,52,54,0.05) 100%)' }} />
                
                <div className="rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] p-2 overflow-hidden" style={{ backgroundImage: 'linear-gradient(132deg, rgba(201,169,97,0.1) 0%, rgba(228,210,167,0.05) 100%)' }}>
                  <div className="relative rounded-[16px] overflow-hidden h-[500px]">
                    <img src={imgScreenshot7Jpg1} alt="LDRC 2024" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,35,50,0.2)] to-transparent" />
                  </div>
                </div>
                
                {/* LDRC 2024 Badge */}
                <div className="absolute -left-8 bottom-12 bg-white rounded-[16px] border border-[rgba(201,169,97,0.1)] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#c9a961] to-[#e4d2a7] flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p2eb02800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.pa356a00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[18px] text-[#1a2332]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>LDRC 2024</p>
                      <p className="text-[14px] text-black" style={{ fontFamily: "'Inter', sans-serif" }}>Academic Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURED RESEARCH SECTION
          ============================================================ */}
      <section className="relative bg-gradient-to-b from-[#1a2332] via-[#2d3436] via-50% to-[#1a2332] border-t border-b border-black overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-10 sm:py-12">
          {/* Title */}
          <div className="flex items-center gap-1 mb-8">
            <span className="text-[26.3px] text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Featured</span>
            <span className="text-[26.3px] text-[#c9a961] italic" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Research</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
            {/* Main Article Card */}
            <div className="bg-white rounded-lg p-6 sm:p-10">
              <h3 className="text-[23.3px] text-black mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                Digital Assets & IP Law: Protecting Innovation in the Age of AI
              </h3>
              <p className="text-[18.4px] text-black leading-[30px] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                As artificial intelligence reshapes creative industries, LDRC's latest research examines how existing intellectual property frameworks must evolve to protect inventors, artists, and businesses operating in an AI-driven economy.
              </p>
              <button className="border-[3px] border-[#c9a961] px-6 py-3 flex items-center gap-2 hover:bg-[#c9a961]/10 transition-colors">
                <span className="text-[14.6px] text-[#c9a961]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>Read More</span>
                <span className="text-[16px] text-[#c9a961]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>{'>'}</span>
              </button>
            </div>

            {/* Side Research Items */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[13.6px] text-white leading-[19px] mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                  Carbon Tax Obligations & Corporate Defence: A Practitioner's Guide to Environmental Compliance in 2026
                </p>
                <button className="border-[3px] border-[#c9a961] px-5 py-3 flex items-center gap-2 hover:bg-[#c9a961]/10 transition-colors">
                  <span className="text-[14.6px] text-[#c9a961]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>Read More</span>
                  <span className="text-[16px] text-[#c9a961]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>{'>'}</span>
                </button>
              </div>
              <div>
                <p className="text-[13.6px] text-white leading-[19px] mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                  Cross-Border Cybersecurity Law: Jurisdiction, Liability, and the Future of Data Privacy Regulation
                </p>
                <button className="border-[3px] border-[#c9a961] px-5 py-3 flex items-center gap-2 hover:bg-[#c9a961]/10 transition-colors">
                  <span className="text-[14.6px] text-[#c9a961]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>Read More</span>
                  <span className="text-[16px] text-[#c9a961]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>{'>'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          OUR PARTNERS SECTION
          ============================================================ */}
      <section className="relative bg-white overflow-hidden py-10 sm:py-14 lg:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-28">
          {/* Title */}
          <div className="flex items-center justify-center gap-1 mb-8 sm:mb-16 lg:mb-20">
            <span className="text-[26.3px] text-black" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Our</span>
            <span className="text-[26.3px] text-[#c9a961] italic" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Partners</span>
          </div>

          {/* LDRC Logo + Rating */}
          <div className="flex flex-col items-center mb-10">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-[-10%_-20%_-30%_-20%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                    <g clipPath="url(#clip_partner_logo)" filter="url(#filter_partner_logo)">
                      <path d={svgPaths.p3c66d8f0} fill="url(#paint_partner_logo)" stroke="#C9A961" strokeWidth="2" />
                      <g><path d="M28 18V30" stroke="#C9A961" strokeLinecap="round" strokeWidth="1.5" /><path d="M20 20H36" stroke="#C9A961" strokeLinecap="round" strokeWidth="1.5" /></g>
                    </g>
                    <defs>
                      <filter id="filter_partner_logo" x="0" y="0" width="56" height="56" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" /><feGaussianBlur stdDeviation="4" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend in2="BackgroundImageFix" result="shadow" /><feBlend in="SourceGraphic" in2="shadow" result="shape" />
                      </filter>
                      <linearGradient id="paint_partner_logo" x1="9" y1="5" x2="47" y2="47" gradientUnits="userSpaceOnUse"><stop stopColor="#1A2332" /><stop offset="1" stopColor="#2D3436" /></linearGradient>
                      <clipPath id="clip_partner_logo"><rect fill="white" height="40" transform="translate(8 4)" width="40" /></clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <span className="text-[20px] text-[#c9a961] tracking-[-0.5px]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>LDRC</span>
            </div>
            
            {/* Stars + Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-[25px] h-[24px]" viewBox="0 0 25.62 24.53" fill="none">
                    <path d={svgPaths.p3513db00} fill="#60A5FA" />
                  </svg>
                ))}
              </div>
              <span className="text-[16px] text-[#1a2332]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>4.4/5</span>
              <span className="text-[16px] text-[#6c757d]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>(14,590 Reviews)</span>
            </div>
          </div>

          {/* Partner Logos - Using SVG components from Figma */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70">
            {/* Waverio */}
            <svg className="h-[46px] w-auto" viewBox="0 0 189.009 46.1214" fill="none">
              <path d={svgPaths.p13c9d600} fill="#D4D4D8" /><path d={svgPaths.p21c91d00} fill="#D4D4D8" /><path d={svgPaths.p3b05980} fill="#D4D4D8" />
              <path d={svgPaths.p1bb20100} fill="#D4D4D8" /><path d={svgPaths.p2a459800} fill="#D4D4D8" /><path d={svgPaths.p1930b380} fill="#D4D4D8" />
              <path d={svgPaths.p23b1eb00} fill="#D4D4D8" /><path clipRule="evenodd" d={svgPaths.p10a43d00} fill="#7F57F1" fillRule="evenodd" />
            </svg>
            {/* LegalPulse */}
            <svg className="h-[43px] w-auto" viewBox="0 0 164.371 42.7027" fill="none">
              <path d={svgPaths.p12658880} fill="#A1A1AA" /><path d={svgPaths.p31ab8d80} fill="#A1A1AA" />
            </svg>
            {/* Alterbone */}
            <svg className="h-[46px] w-auto" viewBox="0 0 220.446 46.1215" fill="none">
              <path d={svgPaths.p936bcf0} fill="#232B36" /><path d={svgPaths.p36487400} fill="#2DF8BB" />
              <path d={svgPaths.pef16c0} fill="#2DF8BB" /><path d={svgPaths.p2edca680} fill="#2DF8BB" />
            </svg>
            {/* Tinygone */}
            <svg className="h-[35px] w-auto" viewBox="0 0 197.527 34.9892" fill="none">
              <path d={svgPaths.pbe0500} fill="#E11D48" /><path d={svgPaths.pe4fd200} fill="#FDA4AF" /><path d={svgPaths.p2c26b640} fill="#FB7185" />
            </svg>
            {/* Preso */}
            <svg className="h-[34px] w-auto" viewBox="0 0 133.188 34.1112" fill="none">
              <path d={svgPaths.p15f81980} fill="#73E5E2" /><path d={svgPaths.p134c3100} fill="#FBCF8E" />
            </svg>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER
          ============================================================ */}
      <footer className="bg-gradient-to-b from-[#1a2332] via-[#2d3436] via-50% to-[#1a2332] text-white overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-28 pt-16 sm:pt-20 pb-8 relative">
          {/* Decorative blurs */}
          <div className="absolute left-[23%] top-0 w-[200px] sm:w-[384px] h-[200px] sm:h-[384px] rounded-full blur-[40px] sm:blur-[64px]" style={{ backgroundImage: 'linear-gradient(135deg, rgba(201,169,97,0.05) 0%, rgba(228,210,167,0.05) 100%)' }} />
          
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
            {/* Column 1: Logo + About */}
            <div className="sm:col-span-2 lg:col-span-1">
              {/* Footer Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-[-10%_-20%_-30%_-20%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                      <g clipPath="url(#clip_flogo)" filter="url(#filter_flogo)">
                        <path d={svgPaths.p3c66d8f0} fill="url(#paint_flogo)" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
                        <g><path d="M28 18V30" stroke="#C9A961" strokeLinecap="round" strokeWidth="1.5" /><path d="M20 20H36" stroke="#C9A961" strokeLinecap="round" strokeWidth="1.5" />
                        <path d={svgPaths.p2d449780} stroke="#C9A961" /><path d={svgPaths.p3997e100} stroke="#C9A961" /><path d="M22 20V21" stroke="#C9A961" /><path d="M34 20V21" stroke="#C9A961" /><path d={svgPaths.p9f9f400} stroke="#C9A961" /></g>
                      </g>
                      <defs>
                        <filter id="filter_flogo" x="0" y="0" width="56" height="56" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="4" /><feGaussianBlur stdDeviation="4" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                          <feBlend in2="BackgroundImageFix" result="shadow" /><feBlend in="SourceGraphic" in2="shadow" result="shape" />
                        </filter>
                        <linearGradient id="paint_flogo" x1="9" y1="5" x2="47" y2="47" gradientUnits="userSpaceOnUse"><stop stopColor="#1A2332" /><stop offset="1" stopColor="#2D3436" /></linearGradient>
                        <clipPath id="clip_flogo"><rect fill="white" height="40" transform="translate(8 4)" width="40" /></clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <span className="text-[20px] text-[#c9a961] tracking-[-0.5px]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>LDRC</span>
              </div>

              <p className="text-[18px] text-[rgba(248,249,250,0.8)] text-justify leading-[29.25px] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                The Law and Development Research Centre brings together legal scholars for doctrinal, historical, and interdisciplinary research across four specialized centres: Intellectual Property, Environmental Law, Taxation Law, and Cybersecurity Law.
              </p>

              {/* Established Badge */}
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(201,169,97,0.2)] rounded-[16px] p-4 mb-6">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p3090d6c0} stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.pa356a00} stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <div>
                    <p className="text-[16px] text-[#c9a961]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>LDRC Established 2024</p>
                    <p className="text-[14px] text-[rgba(248,249,250,0.6)]" style={{ fontFamily: "'Inter', sans-serif" }}>Academic Research Excellence</p>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="flex gap-4">
                {[svgPaths.p32ecfd80, null, svgPaths.p2339b480].map((path, i) => (
                  <button key={i} className="w-12 h-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[16px] flex items-center justify-center hover:bg-[#c9a961]/20 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                      {i === 0 && <path d={svgPaths.p32ecfd80} stroke="rgba(248,249,250,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />}
                      {i === 1 && <>
                        <path d={svgPaths.p1853bb00} stroke="rgba(248,249,250,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
                        <path d={svgPaths.p11995b00} stroke="rgba(248,249,250,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
                        <path d={svgPaths.p8044f00} stroke="rgba(248,249,250,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
                      </>}
                      {i === 2 && <path d={svgPaths.p2339b480} stroke="rgba(248,249,250,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />}
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h3 className="text-[20px] text-[#c9a961] mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>Navigation</h3>
              <ul className="space-y-4">
                {['About Us', 'Research Areas', 'Publications', 'Our Team', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[16px] text-[rgba(248,249,250,0.7)] hover:text-[#c9a961] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Research Focus */}
            <div>
              <h3 className="text-[20px] text-[#c9a961] mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>Research Focus</h3>
              <ul className="space-y-4">
                {['Intellectual Property Law', 'Environmental Law', 'Taxation Law', 'Cybersecurity Law', 'Research Publications'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[16px] text-[rgba(248,249,250,0.7)] hover:text-[#c9a961] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Get in Touch */}
            <div>
              <h3 className="text-[20px] text-[#c9a961] mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>Get in Touch</h3>
              <div className="space-y-4">
                {/* Address */}
                <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[16px] p-4">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 shrink-0 mt-1" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p26ddc800} stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" />
                      <path d={svgPaths.p35ba4680} stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" />
                    </svg>
                    <div>
                      <p className="text-[16px] text-white mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Address</p>
                      <p className="text-[14px] text-[rgba(248,249,250,0.7)] leading-[22.75px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                        123 University Avenue<br />Suite 456, Academic District<br />Capital City 12345, United States
                      </p>
                    </div>
                  </div>
                </div>
                {/* Phone */}
                <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[16px] p-4">
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip_phone)"><path d={svgPaths.p24c7c480} stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" /></g>
                      <defs><clipPath id="clip_phone"><rect fill="white" width="20" height="20" /></clipPath></defs>
                    </svg>
                    <div>
                      <p className="text-[16px] text-white mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Phone</p>
                      <p className="text-[16px] text-[rgba(248,249,250,0.7)]" style={{ fontFamily: "'Inter', sans-serif" }}>+880 01576442521</p>
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[16px] p-4">
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p24d83580} stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" />
                      <path d={svgPaths.pd919a80} stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" />
                    </svg>
                    <div>
                      <p className="text-[16px] text-white mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Email</p>
                      <p className="text-[16px] text-[rgba(248,249,250,0.7)]" style={{ fontFamily: "'Inter', sans-serif" }}>info@ldrc.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[rgba(255,255,255,0.1)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[14px] text-[#6c757d]" style={{ fontFamily: "'Inter', sans-serif" }}>
                &copy; 2024 Law and Development Research Centre. All rights reserved.
              </p>
              <p className="text-[12px] text-[#6c757d] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                Designed with excellence &bull; Powered by innovation
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-[12px] text-[rgba(248,249,250,0.6)]" style={{ fontFamily: "'Inter', sans-serif" }}>
                <a href="#" className="hover:text-[#c9a961] transition-colors">Privacy Policy</a>
                <span>&bull;</span>
                <a href="#" className="hover:text-[#c9a961] transition-colors">Terms of Service</a>
                <span>&bull;</span>
                <a href="#" className="hover:text-[#c9a961] transition-colors">Accessibility</a>
              </div>
              <button className="w-10 h-10 rounded-[16px] bg-gradient-to-b from-[#c9a961] to-[#e4d2a7] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)] flex items-center justify-center hover:scale-105 transition-transform" aria-label="Scroll to top">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p12efb320} stroke="#1A2332" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
                  <path d="M7.998 12.664V3.333" stroke="#1A2332" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
