'use client'

import React, { useState } from 'react';

export default function OuiriseTactical() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContactForm = () => setIsOpen(!isOpen);

  return (
    <div className="bg-[#0a0a0a] text-white font-mono selection:bg-red-900 selection:text-white min-h-screen cursor-crosshair relative">
      {/* Tactical Background Grid Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10" 
           style={{ 
             backgroundImage: `linear-gradient(#800000 1px, transparent 1px), linear-gradient(90deg, #800000 1px, transparent 1px)`,
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Header */}
      <header className="sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#333] z-50 px-6 py-4 flex justify-between items-center">
        <div className="border-2 border-red-800 px-3 py-1">
          <span className="font-bold text-2xl tracking-tighter uppercase italic">Ouirise</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-xs font-bold tracking-widest">
          <a href="#services" className="hover:text-red-600 transition-colors uppercase underline decoration-red-800 underline-offset-4">SERVICES</a>
          <a href="#portfolio" className="hover:text-red-600 transition-colors uppercase underline decoration-red-800 underline-offset-4">DEPLOYMENTS</a>
          <a href="#plans" className="hover:text-red-600 transition-colors uppercase underline decoration-red-800 underline-offset-4">PLANS</a>
          <button onClick={toggleContactForm} className="hover:text-red-600 transition-colors uppercase underline decoration-red-800 underline-offset-4">CONTACT_HQ</button>
        </nav>
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/ouiriseinit" className="hover:text-red-600"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/ouiriseinit/" className="hover:text-red-600"><i className="fab fa-instagram"></i></a>
        </div>
      </header>

      <main className="relative z-10 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center border-b border-[#333] py-20">
          <p className="text-red-600 font-bold mb-4 tracking-widest">// SYSTEM_INITIALIZED: 2025</p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-6 tracking-tighter">
            Ouirise Initiative<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #800000' }}>SCALE YOUR VISION</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed border-l-2 border-red-800 pl-6">
            We bridge the gap between startup vision and enterprise-grade reality. 
            Using agentic workflows and modern cloud architecture, we develop the tools innovators need to lead.
          </p>
          <div className="mt-10">
            <button 
              onClick={toggleContactForm}
              className="bg-red-800 hover:bg-red-600 text-white font-bold py-4 px-10 uppercase transition-all [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)]"
            >
              Request Deployment
            </button>
          </div>
        </section>

        {/* Engineering Section */}
        <section id="services" className="py-20 border-b border-[#333]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="col-span-1">
              <h2 className="text-4xl font-black uppercase mb-4">Our Software Engineers</h2>
              <h3 className="text-red-600 font-bold tracking-widest uppercase text-sm italic">8+ Years Developing Custom Solutions</h3>
            </div>
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 text-sm leading-loose">
              <div className="space-y-4">
                <p><span className="text-white font-bold">[01]</span> Developed React, HTML, CSS, Javascript, and Next.js applications for industry innovators in Banking and Entreprenuership.</p>
                <p><span className="text-white font-bold">[02]</span> Incorporate modern cloud practices for data security and analytics. Use agentic workflows for smooth deployment timelines.</p>
              </div>
              <div className="space-y-4">
                <p><span className="text-white font-bold">[03]</span> Well versed in building custom interfaces and dashboards for a wide variety of industries.</p>
                <p><span className="text-white font-bold">[04]</span> Use leading AI research and automation methodologies to boost organizational workflows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 border-b border-[#333]">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-black uppercase">Recent Deployments</h2>
            <p className="text-red-800 text-xs font-bold uppercase tracking-widest underline underline-offset-8">Case_Files_v1.0</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Xavier Austin Group LLC", link: "./xavieraustingroup.html" },
              { name: "Maleek Music", link: "./maleekmusic.html" },
              { name: "Our Style Apparel", link: "./ourstyle.html" },
              { name: "Business Cents LLC", link: "./businesscents.html" },
              { name: "theJugoBar", link: "https://ouiriseinit.github.io/thejugobar/" },
              { name: "Cultural Gold", link: "https://ouiriseinit.github.io/culturalgold/" }
            ].map((project, idx) => (
              <a 
                key={idx}
                href={project.link}
                className="group relative bg-[#151515] border border-[#333] p-8 hover:border-red-800 transition-all overflow-hidden"
              >
                <span className="absolute top-2 right-4 text-[10px] text-red-900 font-bold opacity-30 group-hover:opacity-100 uppercase tracking-tighter italic">Secured_Link</span>
                <h4 className="text-xl font-bold uppercase mb-4 relative z-10">{project.name}</h4>
                <div className="flex items-center text-xs text-red-600 font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 uppercase">
                  View Specs <i className="fas fa-arrow-right ml-2"></i>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Project Plans */}
        <section id="plans" className="py-20 text-center">
          <h2 className="text-4xl font-black uppercase mb-4">Project Plans</h2>
          <p className="text-gray-500 mb-12 tracking-widest uppercase italic text-sm">Engineered for scalability // Drafted for success</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SPA Plan */}
            <div className="bg-[#111] border border-[#333] p-10 flex flex-col items-center hover:bg-black transition-colors group">
              <span className="text-red-800 text-[10px] font-bold mb-4 uppercase tracking-[0.3em]">Phase_01</span>
              <h3 className="text-2xl font-black mb-2 uppercase">PROTOTYPE</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6 uppercase">Single Page Application</p>
              <div className="text-left w-full space-y-3 mb-8">
                {['Modern Cloud Deployment', 'Responsive Design', 'Speed Optimized'].map(item => (
                  <div key={item} className="text-[10px] text-gray-500 flex items-center gap-2">
                    <span className="text-red-800 italic font-black">[√]</span> {item.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>

            {/* MVP Plan */}
            <div className="bg-[#111] border-2 border-red-800 p-10 flex flex-col items-center relative scale-105 shadow-[0_0_30px_rgba(128,0,0,0.1)]">
              <span className="bg-red-800 text-white text-[10px] font-bold px-3 py-1 absolute -top-3 uppercase tracking-widest">Most Popular</span>
              <span className="text-red-800 text-[10px] font-bold mb-4 uppercase tracking-[0.3em]">Phase_02</span>
              <h3 className="text-2xl font-black mb-2 uppercase italic">THE MVP SOLUTION</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6 uppercase">Scalable Interactive Cloud</p>
              <div className="text-left w-full space-y-3 mb-8">
                {['Custom Database Integration', 'Server Management Included', 'Interactive Dashboards'].map(item => (
                  <div key={item} className="text-[10px] text-white flex items-center gap-2">
                    <span className="text-red-800 italic font-black">[√]</span> {item.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>

            {/* Big Data Plan */}
            <div className="bg-[#111] border border-[#333] p-10 flex flex-col items-center hover:bg-black transition-colors">
              <span className="text-red-800 text-[10px] font-bold mb-4 uppercase tracking-[0.3em]">Phase_03</span>
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">BIG DATA & AI</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6 uppercase">Enterprise Intelligence</p>
              <div className="text-left w-full space-y-3 mb-8">
                {['AI Agent Workflows', 'Full-time Engineering Focus', 'Custom Analytics Suites'].map(item => (
                  <div key={item} className="text-[10px] text-gray-500 flex items-center gap-2">
                    <span className="text-red-800 italic font-black">[√]</span> {item.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Tactical Footer */}
      <footer className="border-t border-[#333] py-10 mt-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-gray-600 tracking-widest">
          <p>COPYRIGHT © 2026 OUIRISE INITIATIVE // ALL SYSTEMS NOMINAL</p>
          <p className="mt-4 md:mt-0 text-red-900">ENCRYPTED_CONNECTION_SECURED</p>
        </div>
      </footer>

      {/* Contact Form Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-6">
          <div className="bg-[#0c0c0c] border border-red-800 p-8 w-full max-w-md relative">
            <button 
              onClick={toggleContactForm}
              className="absolute -top-4 -right-4 bg-red-800 text-white w-8 h-8 font-black rounded-none flex items-center justify-center"
            >X</button>
            <h3 className="text-2xl font-black uppercase mb-6 tracking-tighter">Initiate Deployment Contact</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="ENTITY_NAME" type="text" className="w-full p-3 bg-black border border-[#333] text-red-600 focus:border-red-800 outline-none text-xs uppercase" />
              <input placeholder="ENTITY_EMAIL" type="email" className="w-full p-3 bg-black border border-[#333] text-red-600 focus:border-red-800 outline-none text-xs uppercase" />
              <textarea placeholder="PROJECT_SPECIFICATIONS" className="w-full p-3 h-32 bg-black border border-[#333] text-red-600 focus:border-red-800 outline-none text-xs uppercase resize-none"></textarea>
              <button className="w-full bg-red-800 hover:bg-red-600 py-3 font-black uppercase tracking-widest transition-all">
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}