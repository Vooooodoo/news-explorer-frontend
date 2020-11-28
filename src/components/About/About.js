import React from 'react';
import aboutAvatar from '../../images/about__avatar.jpg';
import './About.css';

function About() {
  return (
    <section className="about">
      <img className="about__avatar" src={aboutAvatar} alt="Автор проекта." />
      <div>
        <h2 className="about__title">Об&nbsp;авторе</h2>
        <p className="about__text">
          Привет! Меня зовут Роман, я&nbsp;начинающий фронтенд-разработчик.
          Благодаря опытным наставникам из&nbsp;команды Яндекс.Практикум, освоил
          современные веб-технологии и&nbsp;инструменты разработки.
          Вот&nbsp;мой стек: <b>HTML5, CSS3, JavaScript ES6, React, Node.js, Express, MongoDB,
          Git, Bash, DevTools, Webpack, Figma, NPM, Nginx, Postman</b>.
        </p>
        <p className="about__text">
          Умею отзывчиво верстать, по&nbsp;БЭМ стилизовать и&nbsp;объектно-ориентированно программировать.
          Буду рад поделиться своими знаниями и&nbsp;умениями!
        </p>
      </div>
    </section>
  );
}

export default About;
