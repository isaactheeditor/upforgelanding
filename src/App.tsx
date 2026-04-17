export default function App() {
  return (
    <div className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="bg-[#111318]/80 backdrop-blur-xl fixed top-0 w-full z-50 shadow-[0_4px_30px_rgba(255,106,0,0.1)]">
        <div className="flex justify-between items-center px-6 h-16 w-full relative">
          <button className="text-[#FF6A00] hover:text-[#FF6A00] transition-colors duration-300 active:scale-95 transition-transform flex items-center justify-center p-2">
            <span className="material-symbols-outlined">shield</span>
          </button>
          <h1 className="font-['Space_Grotesk'] tracking-[0.2em] uppercase text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#FFB694] to-[#FF6A00]">Upforge</h1>
          <button className="text-[#A6E6FF]/70 hover:text-[#FF6A00] transition-colors duration-300 active:scale-95 transition-transform flex items-center justify-center p-2">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
          <div className="bg-gradient-to-r from-transparent via-[#FF6A00]/20 to-transparent h-[1px] w-full absolute bottom-0 left-0"></div>
        </div>
      </header>

      <main className="flex-grow pt-16 md:pb-24 pb-24">
        {/* Mobile Hero Section */}
        <section className="px-6 py-12 flex flex-col items-center justify-center min-h-[707px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-highest/20 to-transparent pointer-events-none -z-10"></div>
          <div className="w-full max-w-md mx-auto space-y-8 relative z-10 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface leading-tight">
              Transforme seu treino em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary">evolução real</span>
            </h2>

            {/* App Card Mockup */}
            <div className="bg-surface-variant/60 backdrop-blur-xl rounded-xl p-6 shadow-[0_0_40px_rgba(255,106,0,0.1)] border border-outline-variant/15 text-left transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-surface-container-high overflow-hidden border-2 border-primary-container/30 relative shadow-[0_0_20px_rgba(255,106,0,0.2)]">
                    <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYbsiHbZC-ODkimJ7l_UgIKPdKe8E3b5xbuHUEMDkkbq67o8V916goQxWIDpy8uz4aFcdfqnOAVFO7BzCUObhFKLJ7iTti9WnFHQdRA_bwxiVAkvW_sEH3p29sJMG4sCtiEnbnvXKQowuUopt2mbqyyO1D9jcNnIrt_q9etmy871hbgu8G4pfmo9scJcFH_UGhW4qBxHLwx_9k3FONFIHy7PZcRKVHi5zOAuCTsWBw628ZFibNNEFSkJC2aocXc7ZwMJsDXP07VH-1" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-lg text-on-surface">GUERREIRO</h3>
                    <p className="text-secondary text-sm font-label uppercase tracking-widest">Nível 12</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest px-3 py-1 rounded-lg border border-outline-variant/15 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-sm">local_fire_department</span>
                  <span className="font-bold text-on-surface text-sm">7 DIAS</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-on-surface-variant font-label uppercase tracking-wider">
                  <span>Experiência</span>
                  <span>2450 / 3000 XP</span>
                </div>
                <div className="h-3 w-full bg-surface-bright rounded-full overflow-hidden backdrop-blur-sm relative">
                  <div className="absolute top-0 left-0 h-full w-[81%] bg-gradient-to-r from-secondary-container to-secondary rounded-full shadow-[0_0_10px_rgba(0,209,255,0.5)]"></div>
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-br from-primary-container to-primary text-on-primary-container font-label font-bold uppercase tracking-widest py-4 px-8 rounded-xl shadow-[0_0_30px_rgba(255,106,0,0.2)] hover:shadow-[0_0_50px_rgba(255,106,0,0.4)] transition-all duration-300 transform active:scale-95 text-lg">
              QUERO ACESSO AO BETA
            </button>
          </div>
         </section>

         {/* Problem Section */}
         <section className="py-20 px-6 bg-surface-container-lowest relative border-y border-outline-variant/5">
          <div className="max-w-3xl mx-auto text-center space-y-6">
           <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface-variant">
             Você já tentou... <br/>
             <span className="text-error font-black mt-2 inline-block">O problema nunca foi você.</span>
           </h2>
           <p className="text-on-surface/70 text-lg max-w-xl mx-auto leading-relaxed">
             Planilhas chatas, aplicativos confusos, falta de motivação. O sistema tradicional falhou em manter você engajado na sua própria jornada.
           </p>
          </div>
         </section>

         {/* RPG Solution Section */}
         <section className="py-24 px-6 relative">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-10 order-2 md:order-1">
            <h2 className="font-headline text-4xl font-bold text-on-surface leading-tight">
             Aqui você não treina.<br/>
             <span className="text-primary">Você evolui.</span>
            </h2>
            <ul className="space-y-6">
             <li className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
               <span className="material-symbols-outlined">star</span>
              </div>
              <div>
               <h4 className="font-headline font-bold text-lg text-on-surface mb-1">Ganhe XP Real</h4>
               <p className="text-on-surface-variant text-sm">Cada repetição, cada corrida, cada refeição se transforma em pontos de experiência na sua jornada.</p>
              </div>
             </li>
             <li className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
               <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
               <h4 className="font-headline font-bold text-lg text-on-surface mb-1">Level Up</h4>
               <p className="text-on-surface-variant text-sm">Desbloqueie novas conquistas, títulos e equipamentos virtuais conforme você suba de nível.</p>
              </div>
             </li>
             <li className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <div className="bg-tertiary/10 p-3 rounded-lg text-tertiary">
               <span className="material-symbols-outlined">fitness_center</span>
              </div>
              <div>
               <h4 className="font-headline font-bold text-lg text-on-surface mb-1">Evolução Real</h4>
               <p className="text-on-surface-variant text-sm">A gamificação é o meio, mas os resultados no seu corpo e na sua saúde são reais e mensuráveis.</p>
              </div>
             </li>
            </ul>
           </div>
           
           <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 bg-primary-container/20 blur-[60px] rounded-full z-0"></div>
            <div className="relative z-10 w-full aspect-[4/5] bg-surface-container-highest rounded-2xl border border-outline-variant/20 overflow-hidden shadow-2xl flex items-center justify-center">
             <img alt="App Interface Mockup" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpDMpPNLWPs-MjRhiobYZTG4hqErvziLu8gG5XYgS7TxVWDyhuOCL8hNpoUTb3okMd1d6w-tUXWibcrnVBgFFturUG1OT10OYjAXjw3nfPJ2s7rEIAO42nUvcIhgyWYHXeLPoy6WhpG3cFs2uAHRa22tk6jr4V3wSbuDV5XNtIhEl-Dc54Wh7avMfwAcg67leX3EZmzyQnNQwva0IYj8OFFi4jJddANuHVExDxfh6Nc5_TETpRZoiq6fPVW2M58uawD7gzvqreuZDt" />
             <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent"></div>
             <div className="absolute bottom-6 left-6 right-6 p-4 bg-surface-variant/80 backdrop-blur-md rounded-xl border border-outline-variant/20">
              <p className="text-center font-headline tracking-widest text-secondary text-sm uppercase">Interface do Herói</p>
             </div>
            </div>
           </div>
          </div>
         </section>

         {/* Epic Finale Section */}
         <section className="py-32 px-6 relative overflow-hidden bg-surface-container-lowest">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
           <h2 className="font-headline text-5xl md:text-6xl font-black text-on-surface uppercase tracking-tight">
            Torne-se o guerreiro que você está <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary-container">destinado a ser</span>
           </h2>
           <button className="bg-gradient-to-br from-primary-container to-primary text-on-primary-container font-headline font-bold uppercase tracking-[0.2em] py-5 px-10 rounded-xl shadow-[0_0_40px_rgba(255,106,0,0.3)] hover:shadow-[0_0_60px_rgba(255,106,0,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-xl border border-primary-fixed-dim/50">
            COMEÇAR MINHA JORNADA
           </button>
          </div>
         </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111318] w-full py-12 px-8 flex flex-col items-center gap-6 text-center border-t border-[#A6E6FF]/5 pb-24 md:pb-12">
       <div className="text-[#FF6A00] font-black font-['Space_Grotesk'] text-xl tracking-widest uppercase">Upforge</div>
       <div className="flex flex-wrap justify-center gap-6">
        <a className="font-['Space_Grotesk'] text-xs tracking-widest uppercase text-[#A6E6FF]/40 hover:text-[#00D1FF] transition-all opacity-80 hover:opacity-100" href="#">The Manifesto</a>
        <a className="font-['Space_Grotesk'] text-xs tracking-widest uppercase text-[#A6E6FF]/40 hover:text-[#00D1FF] transition-all opacity-80 hover:opacity-100" href="#">Legendary Support</a>
        <a className="font-['Space_Grotesk'] text-xs tracking-widest uppercase text-[#A6E6FF]/40 hover:text-[#00D1FF] transition-all opacity-80 hover:opacity-100" href="#">Privacy Scroll</a>
        <a className="font-['Space_Grotesk'] text-xs tracking-widest uppercase text-[#A6E6FF]/40 hover:text-[#00D1FF] transition-all opacity-80 hover:opacity-100" href="#">Terms of Conquest</a>
       </div>
       <div className="font-['Space_Grotesk'] text-xs tracking-widest uppercase text-[#A6E6FF]/40 mt-4">© 2026 upforge. FORGED IN THE OBSIDIAN VOID.</div>
      </footer>
    </div>
  );
}
