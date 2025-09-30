import { service } from "../data";
import './service.css';

export default function Service () {
  return (
    <>
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInUp">My Quality Services</h2>
            <p className=" wow fadeInUp" data-wow-delay=".4s">
              We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
            </p>
          </div>

          <div className="services-widget position-relative">
            {service.map((item) => (
              <div className={`service-item flexSB`} key={item.id}>
                <div className="left-box">
                  <span className="number">0{item.id}</span>
                  <h3 className="service-title">{item.title}</h3>
                </div>
                <div className="right-box">
                  <p>{item.text}</p>
                </div>
                <i>
                  < div className="icon-keyboard_arrow_up" style={{width:"40"}}></div>
                </i>
                <button className="service-link modal-popup"></button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
