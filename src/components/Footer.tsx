export default function Footer() {
  return (
    <footer className="bg-[#0A6162] text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">AlumiVetro</h3>
          <p className="text-sm leading-relaxed">
            Especializada em fabricação e instalação de esquadrias de alumínio e vidros.
            Qualidade e excelência para seu projeto.
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Contato</h3>
          <p className="text-sm">
            📍 Rua Guerino Pomin, 780<br />
            Jardim Santos Dumont - Paranavaí/PR<br />
            📞 (44) 99955-4709<br />
            ✉️ alumivetro@outlook.com
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Horário</h3>
          <p className="text-sm">
            Seg a Sex: 08h às 18h<br />
            Sáb: 08h às 12h
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs">
        <p>© {new Date().getFullYear()} AlumiVetro. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
