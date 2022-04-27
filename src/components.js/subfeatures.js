import { data } from './tabsData';
import { useState, useRef } from 'react';

export default function Subfeatures() {
  const [features, setFeatures] = useState(data[0]);
  const image = features.img;
  const activeContainer = useRef();

  const findTab = (e) => {
    let check = e.target.innerText;
    let services = data.find((item) => check === item.tittle);
    setFeatures(services);
  };

  return (
    <section>
      <div className="features">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.{' '}
        </p>
      </div>
      <article className="features-sections">
        <div className="features-title-desktop">
          {data.map((item) => {
            return (
              <div key={item.id} className="features-title">
                <p onClick={findTab}>{item.tittle}</p>
              </div>
            );
          })}
        </div>
        <div>
          <section className="section-details">
            <div className="features-section-image">
              <img src={require(`../images/${image}`)} alt="" />
            </div>
            <div className="description">
              <h2 className="features-description">{features.description}</h2>
              <p className="features-info">{features.info}</p>
              <button className="more-info-btn">More Info</button>
            </div>
          </section>
        </div>
      </article>
    </section>
  );
}
