import React, { useState } from 'react';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(0);
  
  const faqs = [
    {
      q: 'У меня узкая котельная, котел поместится?',
      a: 'Мы производим котлы с левосторонним и правосторонним расположением бункера. Для точного ответа нам нужен план или фото вашей котельной на WhatsApp — инженер подберет компоновку за 15 минут.'
    },
    {
      q: 'Какой именно уголь подходит?',
      a: 'Оптимально: Балахтинский или любой другой бурый/каменный уголь фракции "орех" или "эко-горошек" (до 50 мм). Также котел отлично работает на пеллетах любого качества.'
    },
    {
      q: 'Что будет, если котел сломается в -40°C?',
      a: 'Наш дежурный инженер на связи 24/7. 95% вопросов решаются по видеосвязи за 5 минут: от сброса ошибки до настройки реверсивного хода. Для остальных 5% у нас есть склад запчастей в 45 городах — мы организуем срочную доставку.'
    }
  ];

  return (
    <footer className="bg-anthracite-dark border-t border-white/5 pt-24 pb-12 relative overflow-hidden" id="contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-brand-green/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-serif font-bold text-white mb-8">
              Частые <span className="text-brand-green-light">Вопросы</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-anthracite border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => setOpenFaq(index === openFaq ? -1 : index)}
                >
                  <div className="p-6 flex justify-between items-center bg-anthracite-light/30">
                    <h4 className="text-white font-medium pr-8">{faq.q}</h4>
                    <span className={`transform transition-transform duration-300 flex-shrink-0 text-brand-green-light ${openFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-4 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-brand-green/10 border border-brand-green/30 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-2">Мы рядом в -40°C</h3>
              <p className="text-brand-green-light mb-6">Запчасти в наличии в 45 городах РФ</p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-anthracite-dark flex items-center justify-center border border-white/10">🛡️</span>
                  <div>
                    <p className="text-white font-medium text-sm">Расширенная гарантия</p>
                    <p className="text-gray-400 text-xs">5 лет на теплообменник</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-anthracite-dark flex items-center justify-center border border-white/10">📞</span>
                  <div>
                    <p className="text-white font-medium text-sm">Поддержка 24/7</p>
                    <p className="text-gray-400 text-xs">Прямой номер дежурного инженера</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-anthracite-light p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10">
              <h3 className="text-3xl font-serif font-bold text-white mb-4">
                Закажите <span className="text-brand-green-light">Расчет</span>
              </h3>
              <p className="text-gray-400 mb-8">
                Оставьте заявку, и мы пришлем точный расчет мощности по СНиП и смету до конца дня.
              </p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Как к вам обращаться?</label>
                  <input type="text" placeholder="Иван Иванов" className="w-full bg-anthracite border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green-light transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Телефон (для связи в WhatsApp)</label>
                  <input type="tel" placeholder="+7 (999) 000-00-00" className="w-full bg-anthracite border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green-light transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Регион / Город (для логистики)</label>
                  <input type="text" placeholder="Красноярск" className="w-full bg-anthracite border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green-light transition-colors" />
                </div>
                
                <button type="submit" className="w-full py-4 bg-brand-green hover:bg-brand-green-light text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(4,120,87,0.4)] hover:shadow-[0_0_30px_rgba(5,150,105,0.6)] group">
                  <span className="flex items-center justify-center gap-2">
                    Получить смету
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                </p>
              </form>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-serif font-bold text-white tracking-widest">[Бренд]</div>
          <div className="text-gray-500 text-sm">
            &copy; 2026 SIBERIA FORCE. Все права защищены.
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">ВК</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Telegram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
