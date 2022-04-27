export default function Hero() {
  const hero = require('../images/illustration-hero.svg');
  console.log(hero);
  return (
    <>
      <article className="top-hero-section">
        <img src={hero.default} alt="hero" />
        <div className="hero-background-color">hello</div>
      </article>
      <article className="hero-text section">
        <h2>A Simple Bookmark Manager</h2>
        <p>
          A clean and simple interface to organise your favourite websites. Open
          a new browser tab and see your site load instantly.try it for free.
        </p>
        <div className="btn-container">
          <button className="btn-chrome">Get it on Chrome</button>
          <button className="btn-firefox">Get it on Firefox</button>
        </div>
      </article>
    </>
  );
}
