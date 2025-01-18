// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function DashboardPage() {
//   const [plans, setPlans] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend (assuming the backend route is correct)
//     const fetchPlans = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/plans');
//         setPlans(response.data); // Assuming the response is an array of plans
//       } catch (error) {
//         console.error('Error fetching plans:', error);
//       }
//     };

//     fetchPlans();
//   }, []);

//   return (
//     <div className="container" style={{ padding: '20px', width: '80%', marginLeft: '10%', marginTop: '4%' }}>
//       <h3 className="mb-4">Your Daily Plans</h3>
//       <div className="row">
//         {plans.slice(0, 3).map((plan, index) => ( // Show only 3 plans for mini version
//           <div key={index} className="col-4 mb-4">
//             <div className="border p-3" style={{ backgroundColor: '#f8f9fa' }}>
//               <h5>{plan.date}</h5>
//               <div>
//                 <strong>Schedule:</strong>
//                 <ul>
//                   {plan.schedule.slice(0, 3).map((item, idx) => (
//                     <li key={idx}>{item.time}: {item.activity}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <strong>Tasks:</strong>
//                 <ul>
//                   {plan.tasks.slice(0, 2).map((task, idx) => (
//                     <li key={idx}>{task}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <strong>Mood:</strong>
//                 <span>{["😢", "🙁", "😐", "🙂", "😁"][plan.mood]}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;

 
import React from 'react';
import { ProgressBar, Card } from 'react-bootstrap';

const Dashboard = () => {
  const tasks = {
    total: 8,
    notStarted: 2,
    onHold: 2,
    inProgress: 2,
    done: 4,
  };

  const categories = [
    { name: 'Personal', count: 0 },
    { name: 'Family/Relationships', count: 2 },
    { name: 'Health', count: 1 },
    { name: 'Home', count: 1 },
    { name: 'Money', count: 2 },
    { name: 'Fun/Adventure', count: 1 },
    { name: 'Work/Business', count: 1 },
    { name: 'Misc', count: 0 },
  ];

  return (
    <div className="p-4">
      <h3>Welcome Back Friend!</h3>
      <div className="d-flex align-items-center mb-4">
        <div className="progress-circle me-3">
          <div className="circle-text">50%</div>
        </div>
        <h5>Your task list is 50% complete</h5>
      </div>

      <div className="d-flex justify-content-between mb-4">
        {Object.entries(tasks).map(([key, value]) => (
          <Card className="p-3 text-center" style={{ width: '12rem' }} key={key}>
            <Card.Title>{key.replace(/([A-Z])/g, ' $1')}</Card.Title>
            <Card.Text>{value}</Card.Text>
          </Card>
        ))}
      </div>

      <h5>Categories</h5>
      <div className="d-flex flex-wrap">
        {categories.map((category) => (
          <div
            key={category.name}
            className="category-card p-3 m-2 border rounded"
          >
            <strong>{category.name}</strong>
            <p>{category.count} tasks</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
