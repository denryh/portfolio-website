import { FormEvent } from "react";
import "./Main.css";

const Main: React.FunctionComponent = () => {
  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
  };

  return (
    <main>
      <section id="about" className="about">
        <div className="about-text">
          <div style={{ fontSize: "1.2em" }}>
            <h1>Hi, It's Denryh</h1>
            <h2>I'm a software engineer</h2>
            <p>Focusing in web development</p>
          </div>
        </div>
      </section>
      <section id="projects" className="projects">
        <div className="projects-grid">
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="contact-list">
          <h2>Contact me</h2>
          <ul>
            <li>Email: dg.thdat@gmail.com</li>
            <li>Phone: (+84) 901 208 303</li>
            <ul>
              <li>
                <a href="https://github.com/denryh">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/dgthanhdat/">LinkedIn</a>
              </li>
            </ul>
          </ul>
        </div>
        <form onSubmit={onSubmit} className="contact-form">
          <h2>Get in touch</h2>
          <input name="name" placeholder="What is your name?" />
          <input name="phone" placeholder="What is your phone number?" />
          <input name="email" placeholder="What is your email?" />
          <input name="message" placeholder="Leave a message" />
          <button>Send</button>
        </form>
      </section>
    </main>
  );
};

export default Main;
