"use client";

import { useState } from "react";
import Image from "next/image";
import fotos from "@/data/fotos";

type GaleriaCategoria = "todas" | "parthenon" | "ourizona" | "royal";

const categorias: { key: GaleriaCategoria; label: string }[] = [
  { key: "todas", label: "Todas" },
  { key: "parthenon", label: "Condomínio Parthenon" },
  { key: "ourizona", label: "Ourizona - PR" },
  { key: "royal", label: "Condomínio Royal" },
];

function getFiltro(cat: GaleriaCategoria) {
  if (cat === "todas") {
    return [...fotos.parthenon, ...fotos.ourizona, ...fotos.royal];
  }
  return fotos[cat];
}

export default function HomePage() {
  const [categoria, setCategoria] = useState<GaleriaCategoria>("todas");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtradas = getFiltro(categoria);

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#074748] via-[#0A6162] to-[#0d7a7b] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#0A6162] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0A6162] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left">
          <div className="lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Esquadrias de Alumínio em Paranavaí PR
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Esquadrias de Alumínio em{" "}
              <span className="text-white">Paranavaí e Noroeste do PR</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Fabricação e instalação de <strong>esquadrias de alumínio</strong>, portas, janelas, brises e fachadas em{" "}
              <strong>Paranavaí</strong> e região noroeste do Paraná. Orçamento sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#portfolio" className="btn-primary text-center">
                Ver Trabalhos Realizados
              </a>
              <a
                href="https://wa.me/554499999999?text=Olá! Gostaria de um orçamento para esquadrias de alumínio em Paranavaí."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !border-white !text-white hover:!bg-white hover:!text-[#0A6162] text-center"
              >
                Orçamento Esquadrias Paranavaí
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-3/4 opacity-10">
          <div className="w-full h-full bg-gradient-to-l from-[#0A6162] to-transparent" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }} />
        </div>
      </section>

      {/* ==================== SOBRE ==================== */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#0A6162] to-[#0d7a7b] rounded-2xl flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold text-white mb-2">+10</div>
                  <div className="text-lg">Anos Atendendo Paranavaí</div>
                  <div className="mt-6 flex gap-8 justify-center text-sm">
                    <div><span className="text-white font-bold text-xl">+50</span><br />Obras no Noroeste PR</div>
                    <div><span className="text-white font-bold text-xl">100%</span><br />Clientes Satisfeitos</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-[#070707] uppercase tracking-wider mb-2">
                Sobre a AlumiVetro
              </h2>
              <h3 className="section-title mb-6">Referência em esquadrias de alumínio em Paranavaí</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A <strong>AlumiVetro</strong> é referência em <strong>esquadrias de alumínio em Paranavaí</strong> e todo o{" "}
                noroeste do Paraná. Trabalhamos com materiais de alta qualidade e mão de obra especializada{" "}
                para entregar projetos residenciais e comerciais com acabamento impecável.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Do planejamento à instalação, cada etapa é pensada para garantir durabilidade,{" "}
                design moderno e a satisfação dos nossos clientes. Atendemos <strong>Paranavaí</strong>,{" "}
                Ourizona, Nova Esperança e toda região do noroeste paranaense.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {["Equipe própria em Paranavaí", "Materiais certificados", "Orçamento sem compromisso", "Garantia em esquadrias"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-[#070707] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PORTFÓLIO / GALERIA ==================== */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-[#070707] uppercase tracking-wider mb-2">
              Portfólio
            </h2>
            <h3 className="section-title">Trabalhos Realizados em Paranavaí e Região</h3>
            <p className="section-subtitle">
              Conheça alguns dos projetos de esquadrias de alumínio que realizamos no noroeste do Paraná.
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categorias.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setCategoria(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  categoria === cat.key
                    ? "bg-[#0A6162] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid de fotos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtradas.map((foto, i) => (
              <div
                key={i}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setLightbox(foto.src)}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{foto.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVIÇOS ==================== */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-sm font-semibold text-[#070707] uppercase tracking-wider mb-2">
              Serviços de Esquadrias em Paranavaí
            </h2>
            <h3 className="section-title">Soluções em Alumínio para Sua Obra</h3>
            <p className="section-subtitle">
              Oferecemos serviços completos de esquadrias de alumínio, brises, estruturas e instalação profissional em Paranavaí e região.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Esquadrias de Alumínio",
                desc: "Fabricação e instalação de janelas, portas e vitrôs sob medida em Paranavaí. Perfis de alta resistência com design moderno.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: "Brises Soleil",
                desc: "Elementos arquitetônicos em alumínio que controlam iluminação e ventilação. Design funcional para residências e comércios.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
              {
                title: "Fachadas e Estruturas",
                desc: "Estruturas de alumínio para fachadas, coberturas, sacadas e projetos comerciais. Instalação profissional em Paranavaí.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
              },
              {
                title: "Instalação de Esquadrias",
                desc: "Equipe especializada em instalação de esquadrias de alumínio em Paranavaí. Precisão, segurança e acabamento impecável.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "Manutenção de Esquadrias",
                desc: "Manutenção preventiva e corretiva de esquadrias de alumínio em Paranavaí. Prolongue a vida útil das suas janelas e portas.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
              },
              {
                title: "Projetos Personalizados",
                desc: "Desenvolvemos projetos de esquadrias sob medida para sua obra em Paranavaí. Do conceito à instalação final.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
            ].map((servico, i) => (
              <div
                key={i}
                className="group p-8 rounded-xl border border-gray-100 hover:border-[#070707]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-[#0A6162]/5 text-[#0A6162] flex items-center justify-center mb-5 group-hover:bg-[#0A6162] group-hover:text-white transition-all duration-300">
                  {servico.icon}
                </div>
                <h4 className="text-lg font-bold text-[#0A6162] mb-3">{servico.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{servico.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA / CONTATO ==================== */}
      <section id="contato" className="py-20 bg-[#0A6162] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0A6162] to-transparent" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Solicite seu Orçamento em Paranavaí
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos transformar sua obra com soluções em alumínio em Paranavaí e região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/554499999999?text=Olá! Gostaria de um orçamento para esquadrias de alumínio em Paranavaí."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 text-lg inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale pelo WhatsApp
            </a>
            <a
              href="https://www.instagram.com/alumivetro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-[#0A6162] font-bold py-4 px-10 rounded-lg transition-all duration-300 text-lg inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ==================== LIGHTBOX ==================== */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-[#0A6162] transition-colors"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={lightbox}
              alt="Foto ampliada de esquadrias de alumínio em Paranavaí"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
