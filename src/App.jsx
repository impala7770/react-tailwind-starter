import React from 'react';

// Заглушки вместо библиотеки иконок (чтобы не ломался сайт)
const Bot = ({ className }) => <span className={className} style={{ fontSize: '1.2em' }}>🤖</span>;
const Zap = ({ className }) => <span className={className} style={{ fontSize: '1.2em' }}>⚡</span>;
const ShieldCheck = ({ className }) => <span className={className} style={{ fontSize: '2.5em', display: 'block' }}>🛡️</span>;
const BarChart3 = ({ className }) => <span className={className} style={{ fontSize: '2.5em', display: 'block' }}>📊</span>;
const ChevronRight = ({ className }) => <span className={className} style={{ fontSize: '1.2em' }}>➡️</span>;
const CheckCircle2 = ({ className }) => <span className={className} style={{ fontSize: '1.2em' }}>✅</span>;
const Wallet = ({ className }) => <span className={className} style={{ fontSize: '2.5em', display: 'block' }}>💳</span>;
const Activity = ({ className }) => <span className={className} style={{ fontSize: '1.2em' }}>📈</span>;

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-purple-500/30">
      
      {/* НАВИГАЦИЯ */}
      <nav className="fixed w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Bot className="text-purple-500" />
            <span>PolyAlgo <span className="text-purple-500">Trader</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Технологии</a>
            <a href="#stats" className="hover:text-white transition-colors">Статистика</a>
            <a href="#pricing" className="hover:text-white transition-colors">Тарифы</a>
          </div>
          <a href="https://t.me/polymarket3333bot" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-all">
            Войти
          </a>
        </div>
      </nav>

      {/* HERO СЕКЦИЯ */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8">
            <Activity className="text-purple-400" />
            <span>Движок v2.0: Интегрирован 6-Factor Binance Validator</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Переиграй толпу на <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Polymarket
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Институциональный алгоритм. Ищет инсайдерские аномалии в стакане Polymarket и подтверждает их реальными объемами Binance (CVD, OI, Heatmap, Long/Short Ratio).
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://t.me/polymarket3333bot" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_-5px_#9333ea]">
              Запустить в Telegram
              <ChevronRight />
            </a>
            <a href="#stats" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
              Смотреть статистику
            </a>
          </div>
        </div>
      </section>

      {/* СТАТИСТИКА */}
      <section id="stats" className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-white mb-2">76.2%</div>
            <div className="text-sm text-slate-400 font-medium">Глобальный Винрейт</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white mb-2">6</div>
            <div className="text-sm text-slate-400 font-medium">Факторов Валидации</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white mb-2">&lt;1s</div>
            <div className="text-sm text-slate-400 font-medium">Web3 Исполнение</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white mb-2">480+</div>
            <div className="text-sm text-slate-400 font-medium">Успешных сделок</div>
          </div>
        </div>
      </section>

      {/* ФИЧИ */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Под капотом — <span className="text-purple-400">чистая математика</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-purple-500/30 transition-colors">
            <ShieldCheck className="mb-4" />
            <h3 className="text-2xl font-bold mb-4">6-Factor Binance Validator</h3>
            <p className="text-slate-400 leading-relaxed">
              Мы не верим Polymarket на слово. Каждая аномалия проходит жесткую проверку через API Binance Futures. Бот анализирует CVD (агрессию), OBI (баланс стакана), микро-импульсы цены, плотности магнитных лимиток, моментум Открытого Интереса (OI RSI) и сквизы толпы (Long/Short Ratio).
            </p>
          </div>
          
          <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-cyan-500/30 transition-colors">
            <BarChart3 className="mb-4" />
            <h3 className="text-xl font-bold mb-3">Стаканный радар</h3>
            <p className="text-slate-400 text-sm">
              Блокировка сделок, если на пути цены стоит бетонная "плита" из сотен биткоинов в Heatmap.
            </p>
          </div>

          <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-green-500/30 transition-colors">
            <Wallet className="mb-4" />
            <h3 className="text-xl font-bold mb-3">Web3 Auto-Trade</h3>
            <p className="text-slate-400 text-sm">
              Прямое подключение к сети Polygon. Бот сам покупает акции через смарт-контракты за доли секунды.
            </p>
          </div>

          <div className="md:col-span-2 bg-slate-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Анти-спам архитектура</h3>
            <p className="text-slate-400 mb-6">
              Интегрированная SQLite база данных гарантирует, что вы получите строго один сигнал на один 15-минутный раунд. Никакого визуального мусора.
            </p>
          </div>
        </div>
      </section>

      {/* ТАРИФЫ */}
      <section id="pricing" className="py-24 px-6 bg-slate-900/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Выберите свой арсенал</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-4xl mx-auto gap-8">
            <div className="bg-slate-950 border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-medium text-slate-300 mb-2">Тариф PRO</h3>
              <div className="text-4xl font-bold mb-6">50 USDT<span className="text-lg text-slate-500 font-normal"> /мес</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="text-purple-500" /> Открытые точки входа</li>
                <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="text-purple-500" /> 6-факторная валидация</li>
                <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="text-purple-500" /> Прямые ссылки на рынки</li>
                <li className="flex items-center gap-3 text-slate-500"><Zap /> <s>Автоторговля Web3</s></li>
              </ul>
              <a href="https://t.me/polymarket3333bot" target="_blank" rel="noopener noreferrer" className="w-full bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-bold transition-colors flex justify-center">
                Выбрать PRO
              </a>
            </div>

            <div className="bg-gradient-to-b from-purple-900/40 to-slate-950 border border-purple-500/30 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">РЕКОМЕНДУЕМ</div>
              <h3 className="text-xl font-medium text-purple-300 mb-2">Тариф ULTRA</h3>
              <div className="text-4xl font-bold mb-6">150 USDT<span className="text-lg text-slate-500 font-normal"> /мес</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-100"><CheckCircle2 className="text-purple-400" /> Всё из тарифа PRO</li>
                <li className="flex items-center gap-3 text-slate-100"><CheckCircle2 className="text-purple-400" /> <b>1-Second Web3 Auto-Trade</b></li>
                <li className="flex items-center gap-3 text-slate-100"><CheckCircle2 className="text-purple-400" /> Индивидуальный Polygon кошелек</li>
                <li className="flex items-center gap-3 text-slate-100"><CheckCircle2 className="text-purple-400" /> Kelly Bet Sizing (риск-менеджмент)</li>
              </ul>
              <a href="https://t.me/polymarket3333bot" target="_blank" rel="noopener noreferrer" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-bold transition-colors shadow-lg shadow-purple-500/25 flex justify-center">
                Выбрать ULTRA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-500 border-t border-white/5 text-sm">
        <p>© 2026 PolyAlgo Trader. Торговля высокорискованными активами может привести к убыткам.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
