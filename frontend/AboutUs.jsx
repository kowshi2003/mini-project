import React from 'react';
import './abt-d.css'; 

function AboutUs() {
  const sections = [
    { 
      title: "EQUIPPMENTS", 
      content: "At our gym, we pride ourselves on offering a diverse range of state-of-the-art equipment designed to cater to all fitness levels and goals. Our facility features an extensive selection of cardiovascular machines, including treadmills, stationary bikes, and elliptical trainers, perfect for heart health and endurance training.", 
      imageUrl: "https://tse1.mm.bing.net/th?id=OIP.Y0XfHBcFUrFUFMgRxOO3hgHaHa&pid=Api&P=0&h=180" // Replace with actual image path
    },
    { 
      title: "MOTTO", 
      content: "At MATRIX our motto is to empower individuals to achieve their fitness goals and lead healthier lives in a supportive and motivating environment. We believe that fitness is not just a destination but a journey that enhances physical, mental, and emotional well-being.", 
      imageUrl: "https://tse4.mm.bing.net/th?id=OIP.QZRY9xpVFET7k0q7zrVikQHaHa&pid=Api&P=0&h=180" // Replace with actual image path
    },
    { 
      title: "TRAINERS", 
      content: "Our certified personal trainers are dedicated to helping you reach your fitness goals. With a wealth of experience and expertise, they provide personalized training programs tailored to your needs. Whether you’re a beginner or an experienced athlete, our trainers will motivate and support you every step of the way.", 
      imageUrl: "https://tse4.mm.bing.net/th?id=OIP.aY_RMXFdnI-VbLFzXWUW_QHaE8&pid=Api&P=0&h=180" // Replace with actual image path
    },
    { 
      title: "VISION", 
      content: "Our vision at MATRIX is to empower individuals to lead healthier, more active lives through comprehensive fitness solutions and a supportive community. We aspire to create an inclusive environment where everyone, regardless of their fitness level, feels welcomed and inspired to pursue their wellness goals. ", 
      imageUrl: "https://tse4.mm.bing.net/th?id=OIP.qJEAyOgjt_4i3UUwxFNhnAHaEL&pid=Api&P=0&h=180" // Replace with actual image path
    }
  ];

  return (
    <div className='bg'>
      <div className="about-container">
        {sections.map((section, index) => (
          <div key={index} className={`content ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
            <section className="sections">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </section>
            <div className="photo">
              <img src={section.imageUrl} alt={section.title} width={150} height={220} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
