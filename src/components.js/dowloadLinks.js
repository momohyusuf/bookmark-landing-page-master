export default function Dowloadlinks() {
  return (
    <section>
      <article className="links">
        <div className="download-section">
          <h2>Download the extention</h2>
          <p>
            {' '}
            We,ve got more the browsers in the pipeline please do let us know if{' '}
            <br />
            you've got a favourite you'd like us to priortize.
          </p>
        </div>
        <article className="links-container">
          <div className="browser-container chrome">
            <img src={require('../images/chrome-web-browser.png')} alt="" />
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
            <button className="link-btn">Add & install Extension</button>
          </div>
          {/* ///////////////////////// */}
          <div className="browser-container firefox">
            <img src={require('../images/firefox-web-browser.png')} alt="" />
            <h3>Add to Firefox</h3>
            <p>Minimum version 55</p>

            <button className="link-btn">Add & install Extension</button>
          </div>
          {/* ///////////////// */}
          <div className="browser-container opera">
            <img src={require('../images/opera-web-browser.png')} alt="" />
            <h3>Add to Opera</h3>
            <p>Minimum version 46</p>

            <button className="link-btn">Add & install Extension</button>
          </div>
        </article>
      </article>
    </section>
  );
}
