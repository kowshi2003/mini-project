// import React from 'react';
// import './hp.css';
// import ScrollArrow from './ScrollArrow';
// import instagramLogo from './download (1).jpeg';
// import Membership from './Membership';
// import { useNavigate } from 'react-router-dom';
// import img from './assets/mat-removebg-preview.png';
// import Review from './Review';  // Import the Review component

// const Home = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/homed');
//   };

//   const handlePersonalTrainingClick = () => {
//     navigate('/personal-training');
//   };

//   const handleGroupClassesClick = () => {
//     navigate('/group-classes');
//   };

//   const handleNutritionPlansClick = () => {
//     navigate('/nutrition-plans');
//   };

//   return (
//     <div className="home-container">
//       <nav className="navbar">
//         <img src={img} width={80} height={80} />
//         <div className="logo">Matrix Gym</div>
//         <div className="nav-auth-container">
//           <ul className="nav-links">
//             <li><a href="#about">About Us</a></li>
//             <li><a href="/contactpage">Contact</a></li>
//             <li><a href="/membership">Membership</a></li>
//             <li><a href="#reviews">Reviews</a></li> {/* Add this link in your navbar */}

//           </ul>
//           <button className="logout-btn" onClick={handleLogout}>Logout</button>
//         </div>
//       </nav>

//       <section className="hero">
//         <div className="hero-content">
//           <h1>Welcome to Matrix Gym</h1>
//           <p>Your journey to fitness starts here.</p>
//         </div>
//       </section>

//       <section className="services">
//         <h2>Our Services</h2>
//         <div className="services-grid">
//           <div className="service" onClick={handlePersonalTrainingClick}>
//             <h3>Personal Training</h3>
//             <p>Get one-on-one guidance from our expert trainers.</p>
//           </div>
//           <div className="service" onClick={handleGroupClassesClick}>
//             <h3>Group Classes</h3>
//             <p>Join our group classes and stay motivated with others.</p>
//           </div>
//           <div className="service" onClick={handleNutritionPlansClick}>
//             <h3>Nutrition Plans</h3>
//             <p>Customized nutrition plans to help you achieve your goals.</p>
//           </div>
//         </div>
//       </section>

//       <section className="facilities">
//         <h2>Our Facilities</h2>
//         <div className="facilities-grid">
//           <div className="facility">
//             <h3>State-of-the-Art Gym Equipment</h3>
//             <p>Experience the latest in gym technology with our modern equipment.</p>
//           </div>
//           <div className="facility">
//             <h3>Specialised Trainers</h3>
//             <p>Specialised trainers to help you achieve your goals.</p>
//           </div>
//           <div className="facility">
//             <h3>Yoga Studio</h3>
//             <p>Join our yoga classes in a serene and peaceful environment.</p>
//           </div>
//           <div className="facility">
//             <h3>Cardio</h3>
//             <p>Engage yourself in a cardio session to challenge yourself.</p>
//           </div>
//         </div>
//       </section>

//       <section className="about" id="about">
//         <h2>About Us</h2>
//         <p>
//           Matrix Gym is dedicated to helping you achieve your fitness goals with
//           personalized training plans, a variety of group classes, and state-of-the-art
//           facilities. Our mission is to provide a welcoming and motivating environment
//           for all fitness levels.
//         </p>
//       </section>

//       <Review id="reviews" /> {/* Add id here */}


      

//       <div className="instagram-logo-container">
//         <a href="https://www.instagram.com/your_instagram_page" target="_blank" rel="noopener noreferrer">
//           <img src={instagramLogo} alt="Instagram Logo" className="instagram-logo" />
//         </a>
//       </div>

//       <ScrollArrow />
//     </div>
//   );
// };

// export default Home;



// import React, { useRef } from 'react';
// import './hp.css';
// import ScrollArrow from './ScrollArrow';
// import instagramLogo from './download (1).jpeg';
// import { useNavigate } from 'react-router-dom';
// import img from './assets/mat-removebg-preview.png';
// import Review from './Review';  // Import the Review component

// const Home = () => {
//   const navigate = useNavigate();

//   // Create a reference for the reviews section
//   const reviewSectionRef = useRef(null);

//   const handleLogout = () => {
//     navigate('/homed');
//   };

//   const handlePersonalTrainingClick = () => {
//     navigate('/personal-training');
//   };

//   const handleGroupClassesClick = () => {
//     navigate('/group-classes');
//   };

//   const handleNutritionPlansClick = () => {
//     navigate('/nutrition-plans');
//   };

//   // Scroll to the reviews section when the link is clicked
//   const handleScrollToReviews = () => {
//     if (reviewSectionRef.current) {
//       reviewSectionRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="home-container">
//       <nav className="navbar">
//         <img src={img} width={80} height={80} />
//         <div className="logo">Matrix Gym</div>
//         <div className="nav-auth-container">
//           <ul className="nav-links">
//             <li><a href="#about">About Us</a></li>
//             <li><a href="/contactpage">Contact</a></li>
//             <li><a href="/membership">Membership</a></li>
//             <li><a href="#reviews" onClick={handleScrollToReviews}>Reviews</a></li> {/* Link to scroll to reviews */}
//           </ul>
//           <button className="logout-btn" onClick={handleLogout}>Logout</button>
//         </div>
//       </nav>

//       <section className="hero">
//         <div className="hero-content">
//           <h1>Welcome to Matrix Gym</h1>
//           <p>Your journey to fitness starts here.</p>
//         </div>
//       </section>

//       <section className="services">
//         <h2>Our Services</h2>
//         <div className="services-grid">
//           <div className="service" onClick={handlePersonalTrainingClick}>
//             <h3>Personal Training</h3>
//             <p>Get one-on-one guidance from our expert trainers.</p>
//           </div>
//           <div className="service" onClick={handleGroupClassesClick}>
//             <h3>Group Classes</h3>
//             <p>Join our group classes and stay motivated with others.</p>
//           </div>
//           <div className="service" onClick={handleNutritionPlansClick}>
//             <h3>Nutrition Plans</h3>
//             <p>Customized nutrition plans to help you achieve your goals.</p>
//           </div>
//         </div>
//       </section>

//       <section className="facilities">
//         <h2>Our Facilities</h2>
//         <div className="facilities-grid">
//           <div className="facility">
//             <h3>State-of-the-Art Gym Equipment</h3>
//             <p>Experience the latest in gym technology with our modern equipment.</p>
//           </div>
//           <div className="facility">
//             <h3>Specialised Trainers</h3>
//             <p>Specialised trainers to help you achieve your goals.</p>
//           </div>
//           <div className="facility">
//             <h3>Yoga Studio</h3>
//             <p>Join our yoga classes in a serene and peaceful environment.</p>
//           </div>
//           <div className="facility">
//             <h3>Cardio</h3>
//             <p>Engage yourself in a cardio session to challenge yourself.</p>
//           </div>
//         </div>
//       </section>

//       <section className="about" id="about">
//         <h2>About Us</h2>
//         <p>
//           Matrix Gym is dedicated to helping you achieve your fitness goals with
//           personalized training plans, a variety of group classes, and state-of-the-art
//           facilities. Our mission is to provide a welcoming and motivating environment
//           for all fitness levels.
//         </p>
//       </section>

//       {/* Review Section with ref */}
//       <section id="reviews" ref={reviewSectionRef}>
//         <Review /> {/* Your Review Component */}
//       </section>

//       <div className="instagram-logo-container">
//         <a href="https://www.instagram.com/your_instagram_page" target="_blank" rel="noopener noreferrer">
//           <img src={instagramLogo} alt="Instagram Logo" className="instagram-logo" />
//         </a>
//       </div>

//       <ScrollArrow />
//     </div>
//   );
// };

// export default Home;


import React, { useRef } from 'react';
import './hp.css';
import ScrollArrow from './ScrollArrow';
import instagramLogo from './download (1).jpeg';
import { useNavigate } from 'react-router-dom';
import img from './assets/mat-removebg-preview.png';
import Review from './Review';  // Import the Review component

const Home = () => {
  const navigate = useNavigate();

  // Create a reference for the reviews section
  const reviewSectionRef = useRef(null);

  const handleLogout = () => {
    navigate('/homed');
  };

  const handlePersonalTrainingClick = () => {
    navigate('/personal-training');
  };

  const handleGroupClassesClick = () => {
    navigate('/group-classes');
  };

  const handleNutritionPlansClick = () => {
    navigate('/nutrition-plans');
  };

  const handleGalleryClick = () => {
    navigate('/gallery');
  };

  // Scroll to the reviews section when the link is clicked
  const handleScrollToReviews = () => {
    if (reviewSectionRef.current) {
      reviewSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <img src={img} width={80} height={80} />
        <div className="logo">MATRIX GYM</div>
        <div className="nav-auth-container">
          <ul className="nav-links">
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contactpage">Contact</a></li>
            <li><a href="/membership">Membership</a></li>
            <li><a href="#reviews" onClick={handleScrollToReviews}>Reviews</a></li> {/* Link to scroll to reviews */}
            <li><a href="#" onClick={handleGalleryClick}>Gallery</a></li> {/* New Gallery Link */}
          </ul>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Matrix Gym</h1>
          <p>Your journey to fitness starts here.</p>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service" onClick={handlePersonalTrainingClick}>
            <h3>Personal Training</h3>
            <p>Get one-on-one guidance from our expert trainers.</p>
          </div>
          <div className="service" onClick={handleGroupClassesClick}>
            <h3>Group Classes</h3>
            <p>Join our group classes and stay motivated with others.</p>
          </div>
          <div className="service" onClick={handleNutritionPlansClick}>
            <h3>Nutrition Plans</h3>
            <p>Customized nutrition plans to help you achieve your goals.</p>
          </div>
        </div>
      </section>

      <section className="facilities">
        <h2>Our Facilities</h2>
        <div className="facilities-grid">
          <div className="facility">
            <h3>State-of-the-Art Gym Equipment</h3>
            <p>Experience the latest in gym technology with our modern equipment.</p>
          </div>
          <div className="facility">
            <h3>Specialised Trainers</h3>
            <p>Specialised trainers to help you achieve your goals.</p>
          </div>
          <div className="facility">
            <h3>Yoga Studio</h3>
            <p>Join our yoga classes in a serene and peaceful environment.</p>
          </div>
          <div className="facility">
            <h3>Cardio</h3>
            <p>Engage yourself in a cardio session to challenge yourself.</p>
          </div>
        </div>
      </section>

      {/* <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          Matrix Gym is dedicated to helping you achieve your fitness goals with
          personalized training plans, a variety of group classes, and state-of-the-art
          facilities. Our mission is to provide a welcoming and motivating environment
          for all fitness levels.
        </p>
      </section> */}

      {/* Review Section with ref */}
      <section id="reviews" ref={reviewSectionRef}>
        <Review /> {/* Your Review Component */}
      </section>

      <div className="instagram-logo-container">
        <a href="https://www.instagram.com/your_instagram_page" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram Logo" className="instagram-logo" />
        </a>
      </div>

      <ScrollArrow />
    </div>
  );
};

export default Home;
