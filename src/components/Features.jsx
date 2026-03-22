import React from 'react';

const FeatureBlock = ({ title, highlight, infoList, reverse, img, fallbackIcon }) => (
  <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 my-24 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className="w-full md:w-1/2 relative group">
      <div className="absolute inset-0 bg-brand-green/20 rounded-3xl blur-[80px] group-hover:bg-brand-green/30 transition duration-700"></div>
      <div 
        className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-anthracite-light border border-white/10 flex items-center justify-center bg-cover bg-center"
        style={img ? { backgroundImage: `url(${img})` } : {}}
      >
        {!img && <span className="text-8xl text-brand-green/30">{fallbackIcon}</span>}
        {/* Overlay subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-anthracite-dark/60 to-transparent mix-blend-multiply"></div>
      </div>
    </div>
    
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6 leading-tight">
        {title}
      </h2>
      
      {highlight && (
        <div className="mb-8 p-6 bg-white/5 border-l-4 border-brand-green-light rounded-r-xl">
          <p className="text-brand-green-light font-medium text-lg italic">"{highlight}"</p>
        </div>
      )}
      
      <ul className="space-y-6">
        {infoList.map((info, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <span className="mt-1 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-brand-green/20 text-brand-green-light text-sm font-bold">
              ✓
            </span>
            <div>
              <h4 className="text-white font-serif font-semibold text-xl mb-1">{info.label}</h4>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">{info.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Features = () => {
  return (
    <section className="py-24 bg-anthracite-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <FeatureBlock 
          title="Забудьте о роли «истопника» — шнековая подача заменит 14 часов ручного труда в неделю"
          fallbackIcon="⏳"
          img="/images/clean_room.png"
          infoList={[
            { label: "Факт", text: "Бункер объемом 300 литров обеспечивает автономную работу системы до 240 часов." },
            { label: "Результат", text: "Вы тратите на обслуживание отопления всего 15 минут в неделю — только чтобы досыпать уголь или пеллеты и забрать золу." },
            { label: "Цифра", text: "Экономия личного времени — более 600 часов за один отопительный сезон." }
          ]}
        />

        <FeatureBlock 
          title="Система не закипит и не взорвется, даже если во всем поселке отключат свет"
          reverse={true}
          img="/images/safety.png"
          infoList={[
            { label: "Механизм защиты", text: "При остановке насосов срабатывает энергонезависимый клапан аварийного сброса тепла. Температура в рубашке котла падает до безопасной за 90 секунд." },
            { label: "Конкретика", text: "Котел полностью совместим с ИБП. При скачке напряжения автоматика сохраняет настройки и перезапускает цикл горения самостоятельно." },
            { label: "Гарантия", text: "0% риска повреждения системы отопления при полном блэкауте." }
          ]}
        />

        <FeatureBlock 
          title="Заходите в котельную в белой рубашке: герметичность дверцы 100%"
          fallbackIcon="👔"
          img="/images/hero.png"
          infoList={[
            { label: "Проблема", text: "Пыль и запах гари в жилых комнатах." },
            { label: "Наше решение", text: "Керамический уплотнитель и регулируемые прижимы дверцы исключают просачивание дыма. Система очистки колосников приводится в действие внешним рычагом." },
            { label: "Результат", text: "Воздух в доме остается чистым, а на стенах котельной не оседает копоть." }
          ]}
        />

        <FeatureBlock 
          title="Котловая сталь 09Г2С толщиной 6 мм: этот котел переживет три обычных «железки»"
          reverse={true}
          fallbackIcon="🏗️"
          img="/images/steel.png"
          infoList={[
            { label: "Факт", text: "Мы используем только высокопрочную сталь, устойчивую к термической деформации и коррозии. Сварка швов выполняется роботами-манипуляторами." },
            { label: "Цифра", text: "Срок службы корпуса — от 20 лет. Каждый котел проходит опрессовку давлением 4 Бар, что вдвое выше рабочего режима." }
          ]}
        />
        
        <FeatureBlock 
          title="Исключаем конденсат и «плач» трубы: даем пошаговый чек-лист для вашего монтажника"
          fallbackIcon="✅"
          infoList={[
            { label: "Решение проблемы", text: "80% поломок случаются из-за неправильной обвязки. Мы предоставляем готовую видео-инструкцию и чек-лист из 12 пунктов." },
            { label: "Сервис", text: "Если ваша бригада сомневается — наш инженер проконсультирует их по видеосвязи прямо с объекта бесплатно." }
          ]}
        />

        <FeatureBlock 
          title="Окупаемость за 2 сезона за счет КПД 92%"
          reverse={true}
          fallbackIcon="💰"
          infoList={[
            { label: "Сравнение", text: "Обычные котлы выбрасывают до 40% тепла «в трубу». Наша система вторичного дожига и сложный теплообменник задерживают энергию внутри." },
            { label: "Результат в деньгах", text: "Вы снижаете расход топлива на 30–60% по сравнению с классическими ТТ-котлами. Котел экономит вам от 45 000 до 80 000 рублей в год." }
          ]}
        />

      </div>
    </section>
  );
};

export default Features;
