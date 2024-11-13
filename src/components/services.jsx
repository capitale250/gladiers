import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="" style={{ gridColumn: 'span 1'}}>
                  {" "}
                  <i className={d.icon}></i>
                  <div className="" style={{ textAlign: 'center', padding: '15px'}}>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
