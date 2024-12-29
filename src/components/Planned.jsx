import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PlannedPage() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/plans');
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };
    fetchPlans();
  }, []);

  return (
    <div className='container' style={{ padding: '20px', width: '76%', marginLeft: '23%', marginTop: '4%' }}>
     <h3 className="mb-4">Your Daily Plans</h3>
      <div className="row">
        {plans.slice(0, 10).map((plan, index) => ( // Show only 3 plans for mini version
          <div key={index} className="col-4 mb-4">
            <div className="border p-3" style={{ backgroundColor: '#f8f9fa' }}>
              <h5>{plan.date}</h5>
              <div>
                <strong>Schedule:</strong>
                <ul>
                  {plan.schedule.slice(0, 5).map((item, idx) => (
                    <li key={idx}>{item.time}: {item.activity}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Tasks:</strong>
                <ul>
                  {plan.tasks.slice(0, 3).map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Mood:</strong>
                <span>{["😢", "🙁", "😐", "🙂", "😁"][plan.mood]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlannedPage;
