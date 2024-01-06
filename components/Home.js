// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import i1 from "./imgs/image1.jpg";
import i2 from "./imgs/image2.jpeg";
import i3 from "./imgs/image3.jpg";
import './Home.css'; // Import the CSS file

function Home() {
  return (


    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/report">Report</Link> {/* Updated link to ReportForm */}
          </li>
          <li>
            <Link to="/cyberawarness">Awarness</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div id='karun'>
        <Carousel showArrows={true}>
          <div className="slide">
            <img src={i1} alt="Image 1" />
          </div>
          <div className="slide">
            <img src={i2} alt="Image 2" />
          </div>
          <div className="slide">
            <img src={i3} alt="Image 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
