// // NutritionPlansPage.js
// import React from 'react';

// const NutritionPlansPage = () => {
//   return (
//     <div className="nutrition-plans-container">
//       <h2>Nutrition Plans</h2>
//       <p>Customized nutrition plans tailored to your specific goals, ensuring you reach optimal health and fitness.</p>
//     </div>
//   );
// };

// export default NutritionPlansPage;


import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to enable navigation

const NutritionPlansPage = () => {
  // List of nutrition plans
  const nutritionPlans = [
    {
      id: 1,
      name: 'Weight Loss Plan',
      description: 'A calorie-deficit diet aimed at shedding body fat while maintaining muscle mass.',
    },
    {
      id: 2,
      name: 'Muscle Gain Plan',
      description: 'A high-protein diet focused on gaining lean muscle with strength training.',
    },
    {
      id: 3,
      name: 'Keto Plan',
      description: 'A low-carb, high-fat diet that promotes fat burning by entering ketosis.',
    },
    {
      id: 4,
      name: 'Vegan Nutrition Plan',
      description: 'A plant-based diet with balanced macros to support overall health.',
    },
  ];

  return (
    <div className="nutrition-plans-container">
      <h2>Nutrition Plans</h2>
      <p>Choose a customized nutrition plan to help you reach your health and fitness goals.</p>
      
      {/* Display the list of nutrition plans */}
      <div className="nutrition-plan-list">
        {nutritionPlans.map(plan => (
          <div key={plan.id} className="nutrition-plan-item">
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            {/* Link to subscription page */}
            <Link to={`/subscribe/${plan.id}`} className="subscribe-link">
              Subscribe to {plan.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionPlansPage;
