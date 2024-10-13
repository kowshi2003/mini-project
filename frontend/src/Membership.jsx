// // // // Membership.js
// // // import React, { useState } from 'react';
// // // // import { useHistory } from 'react-router-dom';
// // // import './Membership.css'; // Adjust the path if needed

// // // const Membership = () => {
// // //     const [selectedPlan, setSelectedPlan] = useState(null);
// // //     const history = useHistory();

// // //     const plans = [
// // //         {
// // //             title: 'Basic Plan',
// // //             price: 1000 * 100, // Price in smallest currency unit
// // //             benefits: ['Access to gym equipment', 'Free group classes'],
// // //         },
// // //         {
// // //             title: 'Monthly Plan',
// // //             price: 2500 * 100,
// // //             benefits: ['All Basic Plan benefits', 'Access to premium classes'],
// // //         },
// // //         {
// // //             title: 'Ultimate Plan',
// // //             price: 5000 * 100,
// // //             benefits: ['All Monthly Plan benefits', 'Personal training sessions'],
// // //         },
// // //         {
// // //             title: 'Fitness Enthusiast Plan',
// // //             price: 3500 * 100,
// // //             benefits: ['All Monthly Plan benefits', 'Access to special workshops', 'Nutritional guidance'],
// // //         },
// // //         {
// // //             title: 'Family Plan',
// // //             price: 8000 * 100,
// // //             benefits: ['All Ultimate Plan benefits', 'Family workout sessions', 'Discounted rates for additional members'],
// // //         },
// // //         {
// // //             title: 'Annual Plan',
// // //             price: 25000 * 100,
// // //             benefits: ['All Ultimate Plan benefits', 'Free entry to all special events', '2 complimentary guest passes per month'],
// // //         },
// // //     ];

// // //     const handlePlanSelect = (plan) => {
// // //         setSelectedPlan(plan);
// // //         // Navigate to the form page with the selected plan
// // //         history.push('/user-details', { plan });
// // //     };

// // //     return (
// // //         <div className="membership-container">
// // //             <h1 className="membership-title">Choose Your Membership Plan</h1>
// // //             <div className="membership-plans">
// // //                 {plans.map((plan, index) => (
// // //                     <div key={index} className="membership-plan">
// // //                         <h2 className="plan-title">{plan.title}</h2>
// // //                         <p className="plan-price">{plan.price / 100} RS</p>
// // //                         <ul className="plan-benefits">
// // //                             {plan.benefits.map((benefit, idx) => (
// // //                                 <li key={idx} className="benefit-item">{benefit}</li>
// // //                             ))}
// // //                         </ul>
// // //                         <button onClick={() => handlePlanSelect(plan)} className="btn-signup">Subscribe</button>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default Membership;




// // // Membership.js
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// // import './Membership.css'; // Adjust the path if needed

// // const Membership = () => {
// //     const [selectedPlan, setSelectedPlan] = useState(null);
// //     const navigate = useNavigate(); // Initialize useNavigate

// //     const plans = [
// //         {
// //             title: '1 Month Plan',
// //             price: 1000 * 100, // Price in the smallest currency unit
// //             benefits: ['Access to gym equipment', 'Free group classes'],
// //         },
// //         {
// //             title: '4 Month Plan',
// //             price: 3000 * 100,
// //             benefits: ['All Monthly plan benefits'],
// //         },
// //         {
// //             title: '6 Month Plan',
// //             price: 4000 * 100,
// //             benefits: ['All Monthly Plan benefits', 'Supersaver pack'],
// //         },
// //         {
// //             title: 'Fitness Enthusiast Plan',
// //             price: 3500 * 100,
// //             benefits: ['All Monthly Plan benefits',  'Personal training sessions', 'Nutritional guidance'],
// //         },
// //         {
// //             title: 'Family Plan',
// //             price: 8000 * 100,
// //             benefits: ['All Monthly Plan benefits', 'Family workout sessions', 'Discounted rates for additional members'],
// //         },
// //         {
// //             title: 'Annual Plan',
// //             price: 9000 * 100,
// //             benefits: ['All Monthly Plan benefits'],
// //         },
// //     ];

// //     const handlePlanSelect = (plan) => {
// //         setSelectedPlan(plan);
// //         // Navigate to the form page with the selected plan
// //         navigate('/user-details', { state: { plan } }); // Use navigate to route to user details page with state
// //     };

// //     return (
// //         <div className="membership-container">
// //             <h1 className="membership-title">Choose Your Membership Plan</h1>
// //             <div className="membership-plans">
// //                 {plans.map((plan, index) => (
// //                     <div key={index} className="membership-plan">
// //                         <h2 className="plan-title">{plan.title}</h2>
// //                         <p className="plan-price">{plan.price / 100} RS</p>
// //                         <ul className="plan-benefits">
// //                             {plan.benefits.map((benefit, idx) => (
// //                                 <li key={idx} className="benefit-item">{benefit}</li>
// //                             ))}
// //                         </ul>
// //                         <button onClick={() => handlePlanSelect(plan)} className="btn-signup">Subscribe</button>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // }

// // export default Membership;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Membership.css';

// const Membership = () => {
//     const [selectedPlan, setSelectedPlan] = useState(null);
//     const [hoveredPlan, setHoveredPlan] = useState(null);
//     const navigate = useNavigate();

//     const plans = [
//         {
//             title: '1 Month Plan',
//             price: 1000 * 100,
//             benefits: ['Access to gym equipment', 'Free group classes'],
//             description: 'Ideal for beginners looking to try out the gym. This plan gives you the freedom to explore various workouts and classes without a long-term commitment.'
//         },
//         {
//             title: '4 Month Plan',
//             price: 3000 * 100,
//             benefits: ['All Monthly plan benefits'],
//             description: 'Perfect for those looking to commit for a few months. This plan helps you establish a solid fitness routine while enjoying a range of facilities and classes.'
//         },
//         {
//             title: '6 Month Plan',
//             price: 4000 * 100,
//             benefits: ['All Monthly Plan benefits', 'Supersaver pack'],
//             description: 'Best value for those serious about fitness. This plan combines affordability with extensive benefits, including exclusive access to special events.'
//         },
//         {
//             title: 'Fitness Enthusiast Plan',
//             price: 3500 * 100,
//             benefits: ['All Monthly Plan benefits', 'Personal training sessions', 'Nutritional guidance'],
//             description: 'Tailored for fitness enthusiasts who want more support. Get personalized training and dietary advice to reach your goals more effectively.'
//         },
//         {
//             title: 'Family Plan',
//             price: 8000 * 100,
//             benefits: ['All Monthly Plan benefits', 'Family workout sessions', 'Discounted rates for additional members'],
//             description: 'Great for families who want to work out together. Enjoy family sessions and special pricing for additional family members to promote a healthy lifestyle for everyone.'
//         },
//         {
//             title: 'Annual Plan',
//             price: 9000 * 100,
//             benefits: ['All Monthly Plan benefits'],
//             description: 'A year of commitment at the best price. This plan is designed for dedicated members looking for maximum value and flexibility in their fitness journey.'
//         },
//     ];

//     const handlePlanSelect = (plan) => {
//         setSelectedPlan(plan);
//         navigate('/user-details', { state: { plan } });
//     };

//     return (
//         <div className="membership-container">
//             <h1 className="membership-title">Choose Your Membership Plan</h1>
//             <div className="membership-plans">
//                 {plans.map((plan, index) => (
//                     <div
//                         key={index}
//                         className="membership-plan"
//                         onMouseEnter={() => setHoveredPlan(plan.title)}
//                         onMouseLeave={() => setHoveredPlan(null)}
//                     >
//                         <h2 className="plan-title">{plan.title}</h2>
//                         <p className="plan-price">{plan.price / 100} RS</p>
//                         <ul className="plan-benefits">
//                             {plan.benefits.map((benefit, idx) => (
//                                 <li key={idx} className="benefit-item">{benefit}</li>
//                             ))}
//                         </ul>
//                         <button onClick={() => handlePlanSelect(plan)} className="btn-signup">Subscribe</button>
//                         {hoveredPlan === plan.title && (
//                             <div className="plan-description">
//                                 {plan.description}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Membership;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Membership.css';

const Membership = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [hoveredPlan, setHoveredPlan] = useState(null);
    const [favoritePlans, setFavoritePlans] = useState([]); // State for favorite plans
    const navigate = useNavigate();

    const plans = [
        {
            title: '1 Month Plan',
            price: 1000 * 100,
            benefits: ['Access to gym equipment', 'Free group classes'],
            description: [
                'Ideal for beginners looking to try out the gym.',
                'This plan gives you the freedom to explore various workouts and classes.',
                'No long-term commitment required.'
            ]
        },
        {
            title: '4 Month Plan',
            price: 3000 * 100,
            benefits: ['All Monthly plan benefits'],
            description: [
                'Perfect for those looking to commit for a few months.',
                'Helps establish a solid fitness routine.',
                'Enjoy a range of facilities and classes.'
            ]
        },
        {
            title: '6 Month Plan',
            price: 4000 * 100,
            benefits: ['All Monthly Plan benefits', 'Supersaver pack'],
            description: [
                'Best value for serious fitness enthusiasts.',
                'Combines affordability with extensive benefits.',
                'Includes exclusive access to special events.'
            ]
        },
        {
            title: 'Fitness Enthusiast Plan',
            price: 3500 * 100,
            benefits: ['All Monthly Plan benefits', 'Personal training sessions', 'Nutritional guidance'],
            description: [
                'Tailored for fitness enthusiasts who want extra support.',
                'Includes personalized training and dietary advice.',
                'Helps you reach your goals more effectively.'
            ]
        },
        {
            title: 'Family Plan',
            price: 8000 * 100,
            benefits: ['All Monthly Plan benefits', 'Family workout sessions', 'Discounted rates for additional members'],
            description: [
                'Great for families who want to work out together.',
                'Enjoy family sessions and special pricing for additional family members.',
                'Promotes a healthy lifestyle for everyone.'
            ]
        },
        {
            title: 'Annual Plan',
            price: 9000 * 100,
            benefits: ['All Monthly Plan benefits'],
            description: [
                'A year of commitment at the best price.',
                'Designed for dedicated members seeking maximum value.',
                'Offers flexibility in your fitness journey.'
            ]
        },
    ];

    // Handle plan selection and navigation
    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
        navigate('/user-details', { state: { plan } });
    };

    // Toggle favorite plans
    const toggleFavorite = (planTitle) => {
        setFavoritePlans(prevFavorites => 
            prevFavorites.includes(planTitle)
                ? prevFavorites.filter(title => title !== planTitle) // Remove from favorites
                : [...prevFavorites, planTitle] // Add to favorites
        );
    };

    return (
        <div className="membership-container">
            <h1 className="membership-title">Choose Your Membership Plan</h1>
            <div className="membership-plans">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="membership-plan"
                        onMouseEnter={() => setHoveredPlan(plan.title)}
                        onMouseLeave={() => setHoveredPlan(null)}
                    >
                        {/* Favorite symbol */}
                        <div className="plan-header">
                            <h2 className="plan-title">{plan.title}</h2>
                            <span 
                                className={`favorite-icon ${favoritePlans.includes(plan.title) ? 'favorited' : ''}`}
                                onClick={() => toggleFavorite(plan.title)}
                            >
                                {favoritePlans.includes(plan.title) ? '❤️' : '🤍'}
                            </span>
                        </div>

                        <p className="plan-price">{plan.price / 100} RS</p>

                        {/* Benefits list */}
                        <ul className="plan-benefits">
                            {plan.benefits.map((benefit, idx) => (
                                <li key={idx} className="benefit-item">{benefit}</li>
                            ))}
                        </ul>

                        {/* Subscribe button */}
                        <button onClick={() => handlePlanSelect(plan)} className="btn-signup">Subscribe</button>

                        {/* Description as bullet points */}
                        {hoveredPlan === plan.title && (
                            <div className="plan-description">
                                <ul>
                                    {plan.description.map((desc, idx) => (
                                        <li key={idx}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Membership;
