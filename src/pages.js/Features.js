import Hero from '../components.js/hero';
import Subfeatures from '../components.js/subfeatures';
import Dowloadlinks from '../components.js/dowloadLinks';
import FrequentlyAskedQuestions from '../components.js/FAQS';
import Subscription from '../components.js/email-subscription';
import Footer from '../components.js/footer';
import { questionsData } from '../components.js/questionsData';
import { useState } from 'react';
export default function Features() {
  const [questions, setQuestions] = useState(questionsData);

  let questionsAndAnsewrs = questions.map((item) => {
    return <FrequentlyAskedQuestions key={item.id} {...item} />;
  });
  return (
    <section>
      <Hero />
      <Subfeatures />
      <Dowloadlinks />
      <article className="questions-container">
        <div>
          <h2>Frequently Asked Questions</h2>
          <p className="title">
            Here are some of our FAQs. If you have any other questions <br />{' '}
            you'd like answered please feel free to email us
          </p>
        </div>
        {questionsAndAnsewrs}
      </article>
      <Subscription />
      <Footer />
    </section>
  );
}
