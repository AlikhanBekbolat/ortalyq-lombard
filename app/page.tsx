/* eslint-disable @next/next/no-img-element */

const branches = [
  {
    address: "Пушкина 13",
    hours: "24/7",
    status: "Круглосуточно",
    map: "https://2gis.kz/almaty/search/%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD%D0%B0%2013",
  },
  {
    address: "Айнабулак-3 98б",
    hours: "24/7",
    status: "Круглосуточно",
    map: "https://2gis.kz/almaty/search/%D0%90%D0%B9%D0%BD%D0%B0%D0%B1%D1%83%D0%BB%D0%B0%D0%BA-3%2098%D0%B1",
  },
  {
    address: "Жунисова 4/2",
    hours: "24/7",
    status: "Круглосуточно",
    map: "https://2gis.kz/almaty/search/%D0%96%D1%83%D0%BD%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%204%2F2",
  },
  {
    address: "Аксай 4 22а",
    hours: "9:00 - 20:00",
    status: "Ежедневно",
    map: "https://2gis.kz/almaty/search/%D0%90%D0%BA%D1%81%D0%B0%D0%B9%204%2022%D0%B0",
  },
  {
    address: "Ташкентский тракт 17к/6",
    hours: "9:00 - 20:00",
    status: "Ежедневно",
    map: "https://2gis.kz/almaty/search/%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B9%20%D1%82%D1%80%D0%B0%D0%BA%D1%82%2017%D0%BA%2F6",
  },
];

const acceptedItems = [
  "Ювелирные изделия",
  "Телефоны",
  "Ноутбуки",
  "Наушники",
  "Часы",
  "Телевизоры",
  "PlayStation 4 и 5",
];

const phoneHref = "tel:+77716464641";
const whatsappHref = "https://wa.me/77716464641";

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="site-title">
        <nav className="topbar" aria-label="Основная навигация">
          <a className="brand-link" href="#top" aria-label="ORTALYQ Ломбард">
            <img
              className="brand-logo-small"
              src="/ortalyq-logo.png"
              alt="ORTALYQ"
              width="64"
              height="64"
            />
            <span>Ломбард</span>
          </a>
          <div className="nav-actions">
            <a href="#addresses">Адреса</a>
            <a href={phoneHref}>Позвонить</a>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Алматы • 5 филиалов</p>
            <h1 id="site-title">ORTALYQ Ломбард</h1>
            <p className="lead">
              Быстрая оценка и прием техники, электроники и ювелирных изделий.
              Три отделения работают круглосуточно.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href={phoneHref}>
                8 771 64 64 641
              </a>
              <a
                className="secondary-action"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a className="secondary-action" href="#addresses">
                Смотреть адреса
              </a>
            </div>
          </div>

          <div className="logo-lockup" aria-label="Логотип ORTALYQ Ломбард">
            <img
              src="/ortalyq-logo.png"
              alt="ORTALYQ"
              width="640"
              height="640"
            />
          </div>
        </div>
      </section>

      <section className="quick-strip" aria-label="Ключевая информация">
        <div>
          <strong>24/7</strong>
          <span>Пушкина, Айнабулак, Жунисова</span>
        </div>
        <div>
          <strong>9:00 - 20:00</strong>
          <span>Аксай и Ташкентский тракт</span>
        </div>
        <div>
          <strong>@Ortalyq_almaty</strong>
          <span>Instagram</span>
        </div>
      </section>

      <section className="section intro-section">
        <div>
          <p className="eyebrow">Что принимаем</p>
          <h2>Техника, украшения и электроника</h2>
        </div>
        <div className="item-list" aria-label="Список принимаемых товаров">
          {acceptedItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section addresses-section" id="addresses">
        <div className="section-heading">
          <p className="eyebrow">Филиалы</p>
          <h2>Адреса и режим работы</h2>
        </div>

        <div className="branches-grid">
          {branches.map((branch) => (
            <article className="branch-card" key={branch.address}>
              <div>
                <p>{branch.status}</p>
                <h3>{branch.address}</h3>
              </div>
              <div className="branch-footer">
                <span>{branch.hours}</span>
                <a href={branch.map} target="_blank" rel="noreferrer">
                  Открыть карту
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-band">
        <div>
          <p className="eyebrow">Связь</p>
          <h2>Уточните оценку перед визитом</h2>
          <p>
            Позвоните в ORTALYQ, напишите в WhatsApp или Instagram, чтобы
            заранее проверить условия по вашему товару.
          </p>
        </div>
        <div className="contact-actions">
          <a className="primary-action light" href={phoneHref}>
            Позвонить
          </a>
          <a
            className="secondary-action light"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="secondary-action light"
            href="https://www.instagram.com/Ortalyq_almaty/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
