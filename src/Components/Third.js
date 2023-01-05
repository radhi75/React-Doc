import React from "react";

const Third = () => {
  return (
    <div>
      <section id="third">
        <h2>The world's biggest healthcare platform</h2>
        <p>
          We work from 7 offices all over the world, bringing Docplanner Group
          to life in a dozen countries.
        </p>

        <div className="flag">
          <img src="https://www.docplanner.com/img/flag.png" alt="flag" />
          <h3>Leader in 12 countries</h3>
          <p>
            Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech
            Republic, Portugal, Argentina, Peru and Chile
          </p>
        </div>
        <div className="visits">
          <img src="https://www.docplanner.com/img/visits.png" alt="logo" />
          <h3>7 million appointments</h3>
          <p>booked last month</p>
        </div>
        <div className="patients">
          <img src="https://www.docplanner.com/img/patients.png" alt="logo" />
          <h3>60 mln patients</h3>
          <p>visit our websites each month</p>
        </div>
        <div className="doctors">
          <img src="https://www.docplanner.com/img/doctors.png" alt="logo" />
          <h3>109k active doctors</h3>
          <p>trust our solutions</p>
        </div>
      </section>
    </div>
  );
};

export default Third;
