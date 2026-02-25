/* ============================================================
   HOME PAGE — TitanCladding Technology
   Design: Titan Force — Cinematic Industrial Dark
   Sections: Hero, Stats, Services, Industries, Technology, About, Contact
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield, Zap, Wrench, Layers, Flame, Droplets,
  ChevronDown, MapPin, Phone, Mail, Send, CheckCircle,
  ArrowRight, Award, Clock, Users, TrendingUp
} from "lucide-react";

// ─── Animated counter hook ───────────────────────────────────
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ─── Intersection observer hook ──────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Hero Section ─────────────────────────────────────────────
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url("https://private-us-east-1.manuscdn.com/sessionFile/inwnSf6KaDOtIk4RFKH66i/sandbox/3zWfkPEHl0AgYzNnIdFdwK-img-1_1771984502000_na1fn_dGl0YW4taGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaW53blNmNkthRE90SWs0UkZLSDY2aS9zYW5kYm94LzN6V2ZrUEVIbDBBZ1l6Tm5JZEZkd0staW1nLTFfMTc3MTk4NDUwMjAwMF9uYTFmbl9kR2wwWVc0dGFHVnlieTFpWncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gpCMHodkV1wRkjn3cY7P1jA5OKrOl5QRLEG-FWcipA67FETn07PLLMwhalzPKVQOVG~pudd5PnIi8sxHAZNgDcPr0w1nd9iF1Qg9DeXuTFJI2kU5EkUTlOMAinUbu0DBn1gLXTq4hGJ2XQWF4cuzBFbp0lY6pH19IwBqm5X~8PEQB9PJRD6qCbFplW42Sno45AU3adehvqCG01DPJyyXkQN3ea49UuaoCNI61EZf3QImh4AUeCQ~Sb78BXZzoNbsZy2Z-4hdvQGbVCMEFFm1sX8KODzYufzdxorWWU0tCmYr8DuJcnaDxyvuaahwO4y20XZY9f81kb2OVbWBzJQSdg__")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay - Lightened */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.01_240/0.65)] via-[oklch(0.15_0.01_240/0.45)] to-[oklch(0.15_0.01_240/0.20)]" />
      {/* Amber gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.01_240/0.60)] via-transparent to-transparent" />

      <div className="container relative z-10 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="h-[1px] w-12 bg-[oklch(0.82_0.14_185)]" />
            <span className="font-['Rajdhani'] text-sm tracking-[0.3em] uppercase text-[oklch(0.82_0.14_185)] font-600">
              Precision Surface Engineering
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`font-['Rajdhani'] font-700 text-5xl md:text-6xl lg:text-7xl leading-none tracking-wide uppercase text-white mb-4 transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Titan<span className="text-[oklch(0.72_0.18_65)]">Clad</span>™
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl text-[oklch(0.85_0.005_240)]">
              Laser Cladding
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-[oklch(0.65_0.005_240)] font-500">
              Technology
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`font-['Open_Sans'] text-base md:text-lg text-[oklch(0.75_0.005_240)] max-w-xl leading-relaxed mb-8 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Advanced laser metal deposition services for the oil & gas industry and beyond.
            Superior wear resistance, corrosion protection, and component restoration —
            engineered for the most demanding environments.
          </p>

          {/* Location badge */}
          <div
            className={`flex items-center gap-2 mb-8 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <MapPin size={14} className="text-[oklch(0.72_0.18_65)]" />
            <span className="text-[oklch(0.55_0.01_240)] text-sm font-['Open_Sans']">
              Cypress, TX · Serving the Greater Houston Area
            </span>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <button onClick={scrollToServices} className="titan-btn-primary flex items-center gap-2">
              Our Services
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[oklch(0.45_0.01_240)] hover:text-[oklch(0.72_0.18_65)] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}

// ─── Stats Section ────────────────────────────────────────────
function StatsSection() {
  const { ref, inView } = useInView(0.3);
  const years = useCountUp(7, 2000, inView);
  const components = useCountUp(2000, 2500, inView);
  const industries = useCountUp(12, 1500, inView);
  const uptime = useCountUp(98, 2000, inView);

  const stats = [
    { value: years, suffix: "+", label: "Years of Excellence", icon: <Award size={20} />, color: "amber" },
    { value: components, suffix: "+", label: "Components Processed", icon: <Layers size={20} />, color: "cyan" },
    { value: industries, suffix: "+", label: "Industries Served", icon: <TrendingUp size={20} />, color: "amber" },
    { value: uptime, suffix: "%", label: "Client Satisfaction", icon: <CheckCircle size={20} />, color: "cyan" },
  ];

  return (
    <section className="bg-[oklch(0.94_0.01_240)] py-16 border-y border-[oklch(0.18_0.01_240)]">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className={`flex justify-center mb-3 ${stat.color === 'amber' ? 'text-[oklch(0.72_0.18_65)]' : 'text-[oklch(0.82_0.14_185)]'}`}>
                {stat.icon}
              </div>
              <div className={`font-['Rajdhani'] font-700 text-4xl md:text-5xl leading-none ${stat.color === 'amber' ? 'text-[oklch(0.72_0.18_65)]' : 'text-[oklch(0.82_0.14_185)]'}`}>
                {stat.value}{stat.suffix}
              </div>
              <div className="text-[oklch(0.55_0.01_240)] text-xs tracking-widest uppercase font-['Rajdhani'] mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────
function ServicesSection() {
  const { ref, inView } = useInView(0.1);

  const services = [
    {
      icon: <Layers size={28} />,
      title: "Laser Cladding",
      subtitle: "Core Service",
      description:
        "Precision laser metal deposition (LMD) applying metallurgically bonded protective layers to critical components. Minimal heat input, low dilution, and superior bonding strength.",
      features: ["Wear-resistant overlays", "Corrosion protection", "Dimensional restoration", "Custom alloy deposition"],
      color: "amber",
    },
    {
      icon: <Shield size={28} />,
      title: "Hardfacing",
      subtitle: "Surface Protection",
      description:
        "Laser hardfacing with tungsten carbide, chromium carbide, and cobalt-based alloys for extreme wear environments. Extends component life by up to 10x.",
      features: ["Tungsten carbide coatings", "Cobalt alloy overlays", "Chromium carbide layers", "Custom hardness profiles"],
      color: "cyan",
    },
    {
      icon: <Wrench size={28} />,
      title: "Component Repair",
      subtitle: "Restoration Services",
      description:
        "Restore worn or damaged components to original dimensions and performance specifications. Cost-effective alternative to full component replacement.",
      features: ["Valve seat restoration", "Shaft & plunger repair", "Pump component rebuild", "Drill tool refurbishment"],
      color: "amber",
    },
    {
      icon: <Flame size={28} />,
      title: "Corrosion Protection",
      subtitle: "Environmental Defense",
      description:
        "Specialized corrosion-resistant cladding for components exposed to H₂S, CO₂, chlorides, and other aggressive media common in oil & gas operations.",
      features: ["Inconel 625 cladding", "Stainless steel overlays", "Nickel alloy coatings", "Sour service compliance"],
      color: "cyan",
    },
    {
      icon: <Zap size={28} />,
      title: "Laser Hardening",
      subtitle: "Surface Treatment",
      description:
        "Selective surface hardening using laser energy to transform the microstructure of steel components without distortion or dimensional change.",
      features: ["Case hardening", "Selective area treatment", "Minimal distortion", "No quench media required"],
      color: "amber",
    },
    {
      icon: <Droplets size={28} />,
      title: "Custom Alloy Solutions",
      subtitle: "Material Engineering",
      description:
        "Engineered alloy selection and custom powder blending for unique application requirements. We work with stainless steels, superalloys, titanium, and more.",
      features: ["Alloy consultation", "Custom powder blends", "Material testing", "Performance validation"],
      color: "cyan",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[oklch(0.92_0.01_240)]">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[oklch(0.72_0.18_65)]" />
            <span className="font-['Rajdhani'] text-sm tracking-[0.3em] uppercase text-[oklch(0.72_0.18_65)]">
              What We Do
            </span>
          </div>
          <h2 className="font-['Rajdhani'] font-700 text-4xl md:text-5xl uppercase text-white tracking-wide">
            Our <span className="text-[oklch(0.72_0.18_65)]">Services</span>
          </h2>
          <p className="text-[oklch(0.55_0.01_240)] max-w-2xl mt-4 font-['Open_Sans'] leading-relaxed">
            TitanCladding Technology provides a comprehensive suite of laser-based surface engineering services,
            delivering precision, durability, and performance for the most demanding industrial applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`titan-card p-6 group transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center mb-5 border ${
                  service.color === "amber"
                    ? "text-[oklch(0.72_0.18_65)] border-[oklch(0.72_0.18_65)/0.3] bg-[oklch(0.72_0.18_65)/0.08] group-hover:bg-[oklch(0.72_0.18_65)/0.15]"
                    : "text-[oklch(0.82_0.14_185)] border-[oklch(0.82_0.14_185)/0.3] bg-[oklch(0.82_0.14_185)/0.08] group-hover:bg-[oklch(0.82_0.14_185)/0.15]"
                } transition-all duration-300`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <div className="mb-1">
                <span className={`text-xs tracking-widest uppercase font-['Rajdhani'] ${service.color === "amber" ? "text-[oklch(0.72_0.18_65)]" : "text-[oklch(0.82_0.14_185)]"}`}>
                  {service.subtitle}
                </span>
              </div>
              <h3 className="font-['Rajdhani'] font-700 text-xl uppercase tracking-wide text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[oklch(0.55_0.01_240)] text-sm leading-relaxed font-['Open_Sans'] mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5">
                {service.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-[oklch(0.60_0.01_240)] font-['Open_Sans']">
                    <span className={`w-1.5 h-1.5 rotate-45 flex-shrink-0 ${service.color === "amber" ? "bg-[oklch(0.72_0.18_65)]" : "bg-[oklch(0.82_0.14_185)]"}`} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Equipment Capabilities Section ──────────────────────────
function EquipmentSection() {
  const { ref, inView } = useInView(0.1);

  const machines = [
    {
      title: "6-Axis Robotic Arm System",
      subtitle: "Complex Geometries",
      description: "Advanced CNC-controlled robotic arms for intricate part geometries, bores, and hard-to-reach surfaces. Perfect for valve internals, pump components, and precision drilling tools.",
      capabilities: ["Complex 3D geometries", "Internal bore cladding", "Precision positioning", "Multi-axis coverage", "Tight tolerances", "Custom part fixtures"],
      color: "amber",
    },
    {
      title: "3-Axis Heavy Duty System",
      subtitle: "Large Components",
      description: "Dedicated system for heavy and long pieces including OD (outer diameter) work, ID (inner diameter) cladding, and large-scale industrial components. Handles pipeline segments, large valves, and heavy shafts.",
      capabilities: ["OD (outer diameter) cladding", "ID (inner diameter) work", "Long piece processing", "Heavy component handling", "High deposition rates", "Large surface areas"],
      color: "cyan",
    },
    {
      title: "Laser Hardening System",
      subtitle: "Surface Treatment",
      description: "Selective laser surface hardening for case hardening, wear resistance, and microstructural transformation without distortion. Ideal for shafts, gears, and bearing surfaces.",
      capabilities: ["Selective hardening", "Case depth control", "Minimal distortion", "High-speed processing", "Complex profiles", "Precision targeting"],
      color: "amber",
    },
  ];

  return (
    <section id="equipment" className="py-24 bg-[oklch(0.92_0.01_240)]">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[oklch(0.72_0.18_65)]" />
            <span className="font-['Rajdhani'] text-sm tracking-[0.3em] uppercase text-[oklch(0.72_0.18_65)]">
              Our Capabilities
            </span>
          </div>
          <h2 className="font-['Rajdhani'] font-700 text-4xl md:text-5xl uppercase text-white tracking-wide">
            Advanced <span className="text-[oklch(0.72_0.18_65)]">Equipment</span>
          </h2>
          <p className="text-[oklch(0.55_0.01_240)] max-w-2xl mt-4 font-['Open_Sans'] leading-relaxed">
            TitanCladding Technology operates state-of-the-art laser cladding systems designed to handle everything from intricate precision work to heavy industrial components. Our equipment is configured for OD work, ID cladding, and laser hardening across a wide range of part sizes and geometries.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {machines.map((machine, i) => (
            <div key={i} className={`titan-card p-8 group transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={`w-16 h-16 flex items-center justify-center mb-6 border-2 ${machine.color === "amber" ? "border-[oklch(0.72_0.18_65)] bg-[oklch(0.72_0.18_65)/0.1]" : "border-[oklch(0.82_0.14_185)] bg-[oklch(0.82_0.14_185)/0.1]"} group-hover:scale-110 transition-transform duration-300`}>
                <Layers size={28} className={machine.color === "amber" ? "text-[oklch(0.72_0.18_65)]" : "text-[oklch(0.82_0.14_185)]"} />
              </div>
              <div className="mb-1">
                <span className={`text-xs tracking-widest uppercase font-['Rajdhani'] ${machine.color === "amber" ? "text-[oklch(0.72_0.18_65)]" : "text-[oklch(0.82_0.14_185)]"}`}>{machine.subtitle}</span>
              </div>
              <h3 className="font-['Rajdhani'] font-700 text-xl uppercase tracking-wide text-white mb-3">{machine.title}</h3>
              <p className="text-[oklch(0.55_0.01_240)] text-sm leading-relaxed font-['Open_Sans'] mb-5">{machine.description}</p>
              <div className="space-y-2 border-t border-[oklch(0.18_0.01_240)] pt-5">
                {machine.capabilities.map((cap, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-[oklch(0.60_0.01_240)] font-['Open_Sans']">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${machine.color === "amber" ? "bg-[oklch(0.72_0.18_65)]" : "bg-[oklch(0.82_0.14_185)]"}`} />
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical specs callout */}
        <div className={`mt-16 p-8 border border-[oklch(0.25_0.01_240)] bg-[oklch(0.94_0.01_240)] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-['Rajdhani'] font-700 text-lg text-[oklch(0.72_0.18_65)] uppercase tracking-wide mb-2">OD Work</div>
              <p className="text-[oklch(0.55_0.01_240)] text-sm font-['Open_Sans'] leading-relaxed">Outer diameter cladding for external surfaces, including large-diameter components and complex external geometries.</p>
            </div>
            <div>
              <div className="font-['Rajdhani'] font-700 text-lg text-[oklch(0.82_0.14_185)] uppercase tracking-wide mb-2">ID Work</div>
              <p className="text-[oklch(0.55_0.01_240)] text-sm font-['Open_Sans'] leading-relaxed">Inner diameter cladding for internal bores, valve cavities, and precision internal surfaces with tight tolerances.</p>
            </div>
            <div>
              <div className="font-['Rajdhani'] font-700 text-lg text-[oklch(0.72_0.18_65)] uppercase tracking-wide mb-2">Laser Hardening</div>
              <p className="text-[oklch(0.55_0.01_240)] text-sm font-['Open_Sans'] leading-relaxed">Surface hardening without distortion for wear-resistant coatings, case hardening, and microstructural enhancement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Quality Assurance & Lab Section ───────────────────────────
function QualityLabSection() {
  const { ref, inView } = useInView(0.1);

  const labServices = [
    {
      title: "Metallographic Analysis",
      description: "Comprehensive microstructural examination including dilution rate analysis, bond line evaluation, and phase identification. Ensures cladding chemistry and performance meet specifications.",
      capabilities: ["Dilution rate measurement", "Bond line integrity", "Phase analysis", "Hardness mapping", "Microstructure documentation", "Chemical composition verification"],
      icon: "🔬",
      color: "amber",
    },
    {
      title: "Dimensional & Surface Inspection",
      description: "Precision dimensional verification, surface finish analysis, and geometric tolerance checking. Confirms components meet drawing specifications and functional requirements.",
      capabilities: ["Dimensional accuracy", "Surface finish (Ra/Rz)", "Geometric tolerances", "Bore/OD verification", "Coating thickness", "Visual defect inspection"],
      icon: "📐",
      color: "cyan",
    },
    {
      title: "Non-Destructive Testing (NDT)",
      description: "Advanced inspection techniques to detect subsurface defects, porosity, cracks, and coating adhesion issues without damaging the component.",
      capabilities: ["Ultrasonic testing", "Dye penetrant inspection", "Adhesion testing", "Porosity detection", "Crack detection", "Coating integrity"],
      icon: "🔍",
      color: "amber",
    },
    {
      title: "Hardness & Wear Testing",
      description: "Comprehensive hardness profiling, wear resistance evaluation, and performance validation to confirm the cladding meets application requirements.",
      capabilities: ["Hardness profiling (HV/HRC)", "Wear resistance testing", "Erosion resistance", "Corrosion resistance", "Performance validation", "Comparative analysis"],
      icon: "⚡",
      color: "cyan",
    },
  ];

  return (
    <section id="quality" className="py-24 bg-[oklch(0.92_0.01_240)]">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[oklch(0.72_0.18_65)]" />
            <span className="font-['Rajdhani'] text-sm tracking-[0.3em] uppercase text-[oklch(0.72_0.18_65)]">
              Quality Assurance
            </span>
          </div>
          <h2 className="font-['Rajdhani'] font-700 text-4xl md:text-5xl uppercase text-white tracking-wide">
            In-House <span className="text-[oklch(0.72_0.18_65)]">Lab & Inspection</span>
          </h2>
          <p className="text-[oklch(0.55_0.01_240)] max-w-2xl mt-4 font-['Open_Sans'] leading-relaxed">
            Every component processed under the TitanClad™ standard undergoes rigorous in-house laboratory testing and inspection. Our metallurgical lab provides comprehensive analysis including dilution rate measurement, microstructural examination, and performance validation — ensuring your components exceed specifications.
          </p>
        </div>

        {/* Lab Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {labServices.map((service, i) => (
            <div
              key={i}
              className={`titan-card p-8 group transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center mb-6 border-2 text-3xl ${service.color === "amber" ? "border-[oklch(0.72_0.18_65)] bg-[oklch(0.72_0.18_65)/0.1]" : "border-[oklch(0.82_0.14_185)] bg-[oklch(0.82_0.14_185)/0.1]"} group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-['Rajdhani'] font-700 text-xl uppercase tracking-wide text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[oklch(0.55_0.01_240)] text-sm leading-relaxed font-['Open_Sans'] mb-5">
                {service.description}
              </p>

              {/* Capabilities */}
              <div className="space-y-2 border-t border-[oklch(0.18_0.01_240)] pt-5">
                {service.capabilities.map((cap, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-[oklch(0.60_0.01_240)] font-['Open_Sans']">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${service.color === "amber" ? "bg-[oklch(0.72_0.18_65)]" : "bg-[oklch(0.82_0.14_185)]"}`} />
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Promise */}
        <div className={`p-8 border-l-4 border-[oklch(0.72_0.18_65)] bg-[oklch(0.94_0.01_240)] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex gap-6 items-start">
            <div className="text-3xl flex-shrink-0">✓</div>
            <div>
              <h3 className="font-['Rajdhani'] font-700 text-lg text-white uppercase tracking-wide mb-2">The TitanClad™ Quality Promise</h3>
              <p className="text-[oklch(0.55_0.01_240)] font-['Open_Sans'] leading-relaxed">
                Every component receives a comprehensive inspection report documenting dilution rates, microstructural analysis, dimensional verification, and hardness profiling. We stand behind our work with detailed metallurgical data and performance validation — giving you confidence that your critical components will perform flawlessly in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Industries Section ───────────────────────────────────────
function IndustriesSection() {
  const { ref, inView } = useInView(0.1);

  const industries = [
    {
      title: "Oil & Gas",
      description: "Downhole tools, wellhead components, valves, pump plungers, piston rods, and risers. Our TitanClad™ process withstands H₂S, CO₂, and high-pressure environments.",
      components: ["Valve seats & gates", "Pump plungers", "Drill collars", "Hydraulic cylinders", "Piston rods", "Bearing journals"],
      highlight: true,
    },
    {
      title: "Petrochemical",
      description: "Process equipment protection against aggressive chemicals, high temperatures, and erosive media in refinery and chemical plant environments.",
      components: ["Reactor components", "Heat exchangers", "Agitator shafts", "Pump casings", "Impellers", "Seal faces"],
      highlight: false,
    },
    {
      title: "Power Generation",
      description: "Turbine components, generator shafts, and boiler parts requiring superior high-temperature wear and oxidation resistance.",
      components: ["Turbine blades", "Rotor shafts", "Bearing housings", "Steam valves", "Boiler tubes", "Fan blades"],
      highlight: false,
    },
    {
      title: "Mining & Minerals",
      description: "Extreme wear protection for crushing, grinding, and conveying equipment operating in highly abrasive environments.",
      components: ["Crusher jaws", "Grinding rolls", "Conveyor components", "Drill bits", "Slurry pumps", "Cyclone liners"],
      highlight: false,
    },
    {
      title: "Marine & Offshore",
      description: "Corrosion and wear protection for marine propulsion, offshore platform equipment, and subsea components.",
      components: ["Propeller shafts", "Stern tubes", "Anchor chains", "Subsea valves", "Pump shafts", "Rudder bearings"],
      highlight: false,
    },
    {
      title: "General Manufacturing",
      description: "Custom laser cladding solutions for any industrial application requiring enhanced surface properties and extended component life.",
      components: ["Forming dies", "Extrusion screws", "Hydraulic rods", "Rollers & rolls", "Molds", "Custom components"],
      highlight: false,
    },
  ];

  return (
    <section
      id="industries"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url("https://private-us-east-1.manuscdn.com/sessionFile/inwnSf6KaDOtIk4RFKH66i/sandbox/3zWfkPEHl0AgYzNnIdFdwK-img-4_1771984505000_na1fn_dGl0YW4tb2lsZ2FzLWltZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaW53blNmNkthRE90SWs0UkZLSDY2aS9zYW5kYm94LzN6V2ZrUEVIbDBBZ1l6Tm5JZEZkd0staW1nLTRfMTc3MTk4NDUwNTAwMF9uYTFmbl9kR2wwWVc0dGIybHNaMkZ6TFdsdFp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IGz6wwX5IIfiu7vgiVXDnUeQAS5on4qDwPcUt-QpHg7n9dETyMElMKfFRv~QgVSqU8~a5ljFKtEPImbXJe0ELnGSpHGhR7i2FPrWV9StrBTIeWDDBUDmKhZKlph-OKHmzRXxn5RnpG7SlCsI3UKWR2Ud839a2FIuL9yF9YvHg02ZsROoAeNcgVMDBVgCvz6bDBLugJlAwLRe9Q-HPARLLTxb7nAikgF3l74nu-8mBjIrbPdumOuiKLRxfxuTvr~OUfe9Wq5Q65ePHmLj62pM7aCLXUaTu5p7gR~rkjgjc1Zek-~YSwQbMR~cIrAi9oICrsm25n3TRA9HClUHMnrx3w__")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[oklch(0.93_0.01_240/0.92)]" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[oklch(0.82_0.14_185)]" />
            <span className="font-['Rajdhani'] text-sm tracking-[0.3em] uppercase text-[oklch(0.82_0.14_185)]">
              Markets We Serve
            </span>
          </div>
          <h2 className="font-['Rajdhani'] font-700 text-4xl md:text-5xl uppercase text-white tracking-wide">
            Industries <span className="text-[oklch(0.82_0.14_185)]">Served</span>
          </h2>
          <p className="text-[oklch(0.55_0.01_240)] max-w-2xl mt-4 font-['Open_Sans'] leading-relaxed">
            From offshore drilling platforms to power plants, TitanCladding Technology delivers
            precision surface engineering solutions across a wide range of demanding industrial sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <div
              key={i}
              className={`p-6 border transition-all duration-700 group ${
                industry.highlight
                  ? "border-[oklch(0.72_0.18_65)/0.6] bg-[oklch(0.72_0.18_65)/0.08] hover:bg-[oklch(0.72_0.18_65)/0.12]"
                  : "border-[oklch(0.25_0.01_240)] bg-[oklch(0.91_0.01_240/0.7)] hover:border-[oklch(0.72_0.18_65)/0.4] hover:bg-[oklch(0.91_0.01_240/0.9)]"
              } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {industry.highlight && (
                <div className="inline-block bg-[oklch(0.72_0.18_65)] text-[oklch(0.09_0.01_240)] text-[0.6rem] tracking-widest uppercase font-['Rajdhani'] font-700 px-2 py-0.5 mb-3">
                  Primary Market
                </div>
              )}
              <h3 className={`font-['Rajdhani'] font-700 text-xl uppercase tracking-wide mb-3 ${industry.highlight ? "text-[oklch(0.72_0.18_65)]" : "text-white"}`}>
                {industry.title}
              </h3>
              <p className="text-[oklch(0.55_0.01_240)] text-sm leading-relaxed font-['Open_Sans'] mb-4">
                {industry.description}
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {industry.components.map((comp, j) => (
                  <div key={j} className="flex items-center gap-1.5 text-xs text-[oklch(0.50_0.01_240)] font-['Open_Sans']">
                    <div className="w-1 h-1 bg-[oklch(0.72_0.18_65)/0.6] rounded-full flex-shrink-0" />
                    {comp}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Technology Section ───────────────────────────────────────
function TechnologySection() {
  const { ref, inView } = useInView(0.1);

  const advantages = [
    { title: "Metallurgical Bond", desc: "True fusion bonding — not mechanical adhesion. The clad layer becomes part of the substrate, ensuring superior adhesion and longevity." },
    { title: "Minimal Heat Input", desc: "Laser precision minimizes the heat-affected zone (HAZ), preventing distortion, microstructural changes, and residual stress in the base material." },
    { title: "Low Dilution", desc: "Dilution rates as low as 2–5%, preserving the chemistry and properties of the deposited alloy for maximum performance." },
    { title: "Precision Deposition", desc: "CNC-controlled laser positioning enables precise cladding on complex geometries, bores, and hard-to-reach surfaces." },
    { title: "Wide Material Range", desc: "Compatible with stainless steels, Inconel, Stellite, tungsten carbide, titanium alloys, and custom powder blends." },
    { title: "Rapid Processing", desc: "High deposition rates and automated systems deliver faster turnaround than traditional PTA or HVOF processes." },
  ];

  return (
    <section id="technology" className="py-24 bg-[oklch(0.92_0.01_240)]">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="relative overflow-hidden">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/inwnSf6KaDOtIk4RFKH66i/sandbox/3zWfkPEHl0AgYzNnIdFdwK-img-5_1771984499000_na1fn_dGl0YW4tdGVjaC1pbWc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaW53blNmNkthRE90SWs0UkZLSDY2aS9zYW5kYm94LzN6V2ZrUEVIbDBBZ1l6Tm5JZEZkd0staW1nLTVfMTc3MTk4NDQ5OTAwMF9uYTFmbl9kR2wwWVc0dGRHVmphQzFwYldjLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=M132Slnq6zvFbpE65myOMlRHQXEpSd0GOM1amy56bl9~8nfccwxiP5cppYoVVKBvb0cpICcKAfNNGv7fFAI2vuRQ37y8iA~E-PqGvnEHDvag5hQeW8bSVxdZWHR-0vWn3bGqn04e3TSm-KHlWdZGnmlqBOSSWePsmiwWxSeiiPOJ8zwk1RuW1Rlu8-2SdyrQ9y3O76KSATLLl9dUH3ImTTkq0cy97GoE3-Run-1vE3XKroSiFW9ZTksbaIIOqS6nEocV5P-lk4yWQwa~fbXxet~hziNnAE42WoOhxnLZIVBDYD6bpDzsQD7yPt~MnWyNhGiyc~xDMZENqVe9D5Q2gA__"
                alt="Laser cladding nozzle technology"
                className="w-full h-[480px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.20_0.01_240/0.40)] via-transparent to-transparent opacity-60" />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 titan-glass p-4 border border-[oklch(0.72_0.18_65)/0.4]">
              <div className="font-['Rajdhani'] font-700 text-2xl text-[oklch(0.72_0.18_65)]">TitanClad™</div>
              <div className="text-[oklch(0.55_0.01_240)] text-xs font-['Open_Sans'] tracking-widest uppercase">Proprietary Process</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[oklch(0.72_0.18_65)]" />
              <span className="font-['Rajdhani'] text-sm tracking-[0.3em] uppercase text-[oklch(0.72_0.18_65)]">
                The TitanClad™ Difference
              </span>
            </div>
            <h2 className="font-['Rajdhani'] font-700 text-4xl md:text-5xl uppercase text-white tracking-wide mb-6">
              Why <span className="text-[oklch(0.72_0.18_65)]">Laser</span> Cladding?
            </h2>
            <p className="text-[oklch(0.60_0.01_240)] font-['Open_Sans'] leading-relaxed mb-8">
              Laser Metal Deposition (LMD) is the most advanced surface engineering technology available today.
              Unlike thermal spray, HVOF, or PTA welding, laser cladding delivers a true metallurgical bond
              with minimal heat input — resulting in superior performance and longer component life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((adv, i) => (
                <div key={i} className="flex gap-3 group">
                  <div className="w-1.5 h-full min-h-[2rem] bg-gradient-to-b from-[oklch(0.72_0.18_65)] to-[oklch(0.82_0.14_185)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-['Rajdhani'] font-700 text-sm uppercase tracking-wide text-[oklch(0.85_0.005_240)] mb-1">
                      {adv.title}
                    </h4>
                    <p className="text-[oklch(0.50_0.01_240)] text-xs font-['Open_Sans'] leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────
function AboutSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url("https://private-us-east-1.manuscdn.com/sessionFile/inwnSf6KaDOtIk4RFKH66i/sandbox/3zWfkPEHl0AgYzNnIdFdwK-img-3_1771984502000_na1fn_dGl0YW4tYWJvdXQtYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaW53blNmNkthRE90SWs0UkZLSDY2aS9zYW5kYm94LzN6V2ZrUEVIbDBBZ1l6Tm5JZEZkd0staW1nLTNfMTc3MTk4NDUwMjAwMF9uYTFmbl9kR2wwWVc0dFlXSnZkWFF0WW1jLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tIeWDeGfJFaJSG2nVkXtreZu20qpFttLTIYrOPeMP1x3NWggMSfrNqarS0uzAiBaZsPpI6wnTCR9Fi27Cihmri2tLaqpSjDOko4mviBXVN3QoWG6w5~Y3J4NkcHw1utBDsDBHJAlHzvPcEJdA5WfxseUDcSIXHI3OJXBnY-SAWWEtTMKsZdTw5toEPAU0g__")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[oklch(0.93_0.01_240/0.88)]" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[oklch(0.82_0.14_185)]" />
              <span className="font-['Rajdhani'] text-sm tracking-[0.3em] uppercase text-[oklch(0.82_0.14_185)]">
                Who We Are
              </span>
            </div>
            <h2 className="font-['Rajdhani'] font-700 text-4xl md:text-5xl uppercase text-white tracking-wide mb-6">
              About <span className="text-[oklch(0.82_0.14_185)]">TitanCladding</span>
            </h2>
            <div className="space-y-4 text-[oklch(0.60_0.01_240)] font-['Open_Sans'] leading-relaxed">
              <p>
                TitanCladding Technology is a precision laser cladding service provider based in Cypress, Texas,
                strategically located to serve the greater Houston oil & gas corridor and industrial markets
                throughout the Gulf Coast region.
              </p>
              <p>
                Operating under our registered trademark <span className="text-[oklch(0.72_0.18_65)] font-600">TitanClad™</span>,
                we deliver advanced laser metal deposition (LMD) services that extend component life,
                reduce maintenance costs, and maximize operational uptime for our clients.
              </p>
              <p>
                Our team of certified laser technicians and metallurgical engineers brings deep expertise
                in surface engineering, alloy selection, and process optimization — ensuring every
                component we process meets the highest performance standards.
              </p>
            </div>

            <div className="titan-section-divider my-8 max-w-xs" />

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: "Cypress, TX 77429" },
                { label: "Trademark", value: "TitanClad™" },
                { label: "Address", value: "16655-2 Telge Road" },
                { label: "Service Area", value: "Greater Houston & Gulf Coast" },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-[oklch(0.72_0.18_65)/0.4] pl-3">
                  <div className="text-[oklch(0.45_0.01_240)] text-xs uppercase tracking-widest font-['Rajdhani']">{item.label}</div>
                  <div className="text-[oklch(0.80_0.005_240)] text-sm font-['Open_Sans'] font-500 mt-0.5">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Values */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="space-y-4">
              {[
                {
                  icon: <Award size={20} />,
                  title: "Quality First",
                  desc: "Every component processed under the TitanClad™ standard undergoes rigorous quality control, from pre-process inspection to final dimensional verification.",
                },
                {
                  icon: <Shield size={20} />,
                  title: "Precision Engineering",
                  desc: "CNC-controlled laser systems and certified metallurgical processes ensure repeatable, consistent results on every job — regardless of complexity.",
                },
                {
                  icon: <Clock size={20} />,
                  title: "Fast Turnaround",
                  desc: "We understand that downtime is costly. Our streamlined processes and dedicated capacity ensure rapid turnaround to get your equipment back in service.",
                },
                {
                  icon: <Users size={20} />,
                  title: "Client Partnership",
                  desc: "We work closely with engineering teams to understand application requirements and recommend the optimal cladding solution for each unique challenge.",
                },
              ].map((val, i) => (
                <div key={i} className="titan-glass p-5 flex gap-4 group hover:border-[oklch(0.72_0.18_65)/0.5] transition-all duration-300">
                  <div className="text-[oklch(0.72_0.18_65)] flex-shrink-0 mt-0.5">{val.icon}</div>
                  <div>
                    <h4 className="font-['Rajdhani'] font-700 text-base uppercase tracking-wide text-white mb-1">{val.title}</h4>
                    <p className="text-[oklch(0.55_0.01_240)] text-sm font-['Open_Sans'] leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner Section ─────────────────────────────────────────
function CTABannerSection() {
  const { ref, inView } = useInView(0.3);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url("https://private-us-east-1.manuscdn.com/sessionFile/inwnSf6KaDOtIk4RFKH66i/sandbox/3zWfkPEHl0AgYzNnIdFdwK-img-2_1771984501000_na1fn_dGl0YW4tc2VydmljZXMtYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaW53blNmNkthRE90SWs0UkZLSDY2aS9zYW5kYm94LzN6V2ZrUEVIbDBBZ1l6Tm5JZEZkd0staW1nLTJfMTc3MTk4NDUwMTAwMF9uYTFmbl9kR2wwWVc0dGMyVnlkbWxqWlhNdFltYy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WKZVU~T4tXKIJGHzW8IG5nXWS4DpXqm-bc3pSzuxg4icCQOa8WVI~1XTncGDVkYOag6a0nPJAVjUkugiL2G7TWV0xfMDA6WUsw7Hp7iww5jDqGfWtuVaYvO~pRXnnqbmVzdz9D0Ypj9uStwB98zrIPwSAzPaYKB1mURYzBV4X6gQAjKjei9AZx2luFWBcHD9stFYwgW35xAAVrEjxJkJFKVV0C15sTHU3U66aIitfGHXs22VD2B4SiD0r8LErcr3yDQKAn~5ERlX2Bpuo2W4EHXZlbxAMLzx6yt3-4IQPXIhOvJL3JOnlskGmmOW7WCGdDM5wRrsJ06z3dWUfviF5g__")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.20_0.01_240/0.60)] to-[oklch(0.20_0.01_240/0.40)]" />
      <div className="container relative z-10" ref={ref}>
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center lg:text-left">
            <div className="titan-section-divider mb-4 mx-auto lg:mx-0 max-w-xs" />
            <h2 className="font-['Rajdhani'] font-700 text-3xl md:text-4xl uppercase text-white tracking-wide">
              Ready to Extend Your <span className="text-[oklch(0.72_0.18_65)]">Component Life</span>?
            </h2>
            <p className="text-[oklch(0.60_0.01_240)] font-['Open_Sans'] mt-3 max-w-xl">
              Contact TitanCladding Technology today. Our engineers will assess your application
              and provide a tailored TitanClad™ solution.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <button onClick={scrollToContact} className="titan-btn-primary flex items-center gap-2 whitespace-nowrap">
              Request a Quote
              <ArrowRight size={16} />
            </button>
            <a
              href="mailto:info@titancladding.com"
              className="titan-btn-outline flex items-center gap-2 whitespace-nowrap"
            >
              <Mail size={16} />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────
function ContactSection() {
  const { ref, inView } = useInView(0.1);
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "", file: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full bg-[oklch(0.90_0.01_240)] border border-[oklch(0.25_0.01_240)] text-[oklch(0.85_0.005_240)] placeholder-[oklch(0.40_0.01_240)] px-4 py-3 text-sm font-['Open_Sans'] focus:outline-none focus:border-[oklch(0.72_0.18_65)] transition-colors";

  return (
    <section id="contact" className="py-24 bg-[oklch(0.94_0.01_240)]">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[oklch(0.72_0.18_65)]" />
              <span className="font-['Rajdhani'] text-sm tracking-[0.3em] uppercase text-[oklch(0.72_0.18_65)]">
                Get In Touch
              </span>
            </div>
            <h2 className="font-['Rajdhani'] font-700 text-4xl md:text-5xl uppercase text-white tracking-wide mb-6">
              Request a <span className="text-[oklch(0.72_0.18_65)]">Quote</span>
            </h2>
            <p className="text-[oklch(0.55_0.01_240)] font-['Open_Sans'] leading-relaxed mb-10">
              Ready to extend the life of your critical components? Contact TitanCladding Technology
              for a consultation and quote. Our engineers will assess your application and recommend
              the optimal TitanClad™ solution.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[oklch(0.72_0.18_65)/0.4] flex items-center justify-center text-[oklch(0.72_0.18_65)] flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="font-['Rajdhani'] font-700 text-sm uppercase tracking-widest text-[oklch(0.72_0.18_65)] mb-1">
                    Location
                  </div>
                  <p className="text-[oklch(0.65_0.01_240)] text-sm font-['Open_Sans']">
                    16655-2 Telge Road<br />
                    Cypress, TX 77429
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[oklch(0.82_0.14_185)/0.4] flex items-center justify-center text-[oklch(0.82_0.14_185)] flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="font-['Rajdhani'] font-700 text-sm uppercase tracking-widest text-[oklch(0.82_0.14_185)] mb-1">
                    Email
                  </div>
                  <a href="mailto:info@titancladding.com" className="text-[oklch(0.65_0.01_240)] text-sm font-['Open_Sans'] hover:text-[oklch(0.82_0.14_185)] transition-colors">
                    info@titancladding.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[oklch(0.72_0.18_65)/0.4] flex items-center justify-center text-[oklch(0.72_0.18_65)] flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="font-['Rajdhani'] font-700 text-sm uppercase tracking-widest text-[oklch(0.72_0.18_65)] mb-1">
                    Phone
                  </div>
                  <a href="tel:+1-832-208-2666" className="text-[oklch(0.65_0.01_240)] text-sm font-['Open_Sans'] hover:text-[oklch(0.72_0.18_65)] transition-colors">
                    (832) 208-2666
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-10 border border-[oklch(0.25_0.01_240)] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123!2d-95.6890!3d29.9690!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s16655+Telge+Rd%2C+Cypress%2C+TX+77429!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TitanCladding Technology Location"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-[oklch(0.72_0.18_65)/0.4] bg-[oklch(0.72_0.18_65)/0.05]">
                <CheckCircle size={48} className="text-[oklch(0.72_0.18_65)] mb-6" />
                <h3 className="font-['Rajdhani'] font-700 text-2xl uppercase tracking-wide text-white mb-3">
                  Message Received
                </h3>
                <p className="text-[oklch(0.55_0.01_240)] font-['Open_Sans'] text-sm leading-relaxed">
                  Thank you for contacting TitanCladding Technology. Our team will review your inquiry
                  and respond within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="titan-btn-outline mt-8 text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[oklch(0.55_0.01_240)] text-xs uppercase tracking-widest font-['Rajdhani'] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      className={inputClass}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[oklch(0.55_0.01_240)] text-xs uppercase tracking-widest font-['Rajdhani'] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className={inputClass}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[oklch(0.55_0.01_240)] text-xs uppercase tracking-widest font-['Rajdhani'] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className={inputClass}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[oklch(0.55_0.01_240)] text-xs uppercase tracking-widest font-['Rajdhani'] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (832) 208-2666"
                      className={inputClass}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[oklch(0.55_0.01_240)] text-xs uppercase tracking-widest font-['Rajdhani'] mb-2">
                    Service Required
                  </label>
                  <select
                    className={inputClass}
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="" className="bg-[oklch(0.90_0.01_240)]">Select a service...</option>
                    <option value="laser-cladding" className="bg-[oklch(0.90_0.01_240)]">Laser Cladding</option>
                    <option value="hardfacing" className="bg-[oklch(0.90_0.01_240)]">Hardfacing</option>
                    <option value="component-repair" className="bg-[oklch(0.90_0.01_240)]">Component Repair</option>
                    <option value="corrosion-protection" className="bg-[oklch(0.90_0.01_240)]">Corrosion Protection</option>
                    <option value="laser-hardening" className="bg-[oklch(0.90_0.01_240)]">Laser Hardening</option>
                    <option value="custom" className="bg-[oklch(0.90_0.01_240)]">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[oklch(0.55_0.01_240)] text-xs uppercase tracking-widest font-['Rajdhani'] mb-2">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your component, application, and requirements..."
                    className={`${inputClass} resize-none`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-[oklch(0.55_0.01_240)] text-xs uppercase tracking-widest font-['Rajdhani'] mb-2">
                    Upload Drawings or Specifications (Optional)
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.dwg,.step,.stp,.jpg,.jpeg,.png,.doc,.docx"
                    className="w-full bg-[oklch(0.90_0.01_240)] border border-[oklch(0.25_0.01_240)] text-[oklch(0.85_0.005_240)] px-4 py-3 text-sm font-['Open_Sans'] focus:outline-none focus:border-[oklch(0.72_0.18_65)] transition-colors cursor-pointer file:bg-[oklch(0.72_0.18_65)] file:border-0 file:text-[oklch(0.09_0.01_240)] file:px-4 file:py-2 file:rounded file:cursor-pointer file:font-bold"
                    onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
                  />
                  <p className="text-[oklch(0.40_0.01_240)] text-xs mt-2">
                    Accepted: PDF, DWG, STEP, JPG, PNG, DOC (Max 10MB)
                  </p>
                </div>

                <button type="submit" className="titan-btn-primary w-full flex items-center justify-center gap-3 text-base">
                  <Send size={16} />
                  Submit Request
                </button>

                <p className="text-[oklch(0.40_0.01_240)] text-xs font-['Open_Sans'] text-center">
                  We respond within 1 business day. Your information is kept confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Home Page ───────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.92_0.01_240)]">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <EquipmentSection />
      <QualityLabSection />
      <IndustriesSection />
      <TechnologySection />
      <AboutSection />
      <CTABannerSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
