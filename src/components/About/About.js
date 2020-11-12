import React from 'react';
import './About.css';
import aboutAvatar from '../../images/about__avatar.jpg';

function About() {
  return (
    <section className="about">
      <img className="about__avatar" src={aboutAvatar} alt="Автор проекта." />
      <div>
        <h2 className="about__title">Об&nbsp;авторе</h2>
        <p className="about__text">
          Это блок с&nbsp;описанием автора проекта. Здесь следует указать, как вас зовут,
          чем вы&nbsp;занимаетесь, какими технологиями разработки владеете.
        </p>
        <p className="about__text">
          Также можно рассказать о&nbsp;процессе обучения в&nbsp;Практикуме,
          чему вы&nbsp;тут научились, и&nbsp;чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </section>
  );
}

export default About;
