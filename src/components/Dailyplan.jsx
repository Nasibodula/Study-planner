import React, { useState } from 'react';

function StudyPlanner() {
  const [schedule, setSchedule] = useState([
    { time: '7:00 AM', activity: '', notes: '' },
    { time: '8:00 AM', activity: '', notes: '' },
    { time: '9:00 AM', activity: '', notes: '' },
    { time: '10:00 AM', activity: '', notes: '' },
    { time: '11:00 AM', activity: '', notes: '' },
    { time: '12:00 PM', activity: '', notes: '' },
    { time: '1:00 PM', activity: '', notes: '' },
    { time: '2:00 PM', activity: '', notes: '' },
    { time: '3:00 PM', activity: '', notes: '' },
    { time: '4:00 PM', activity: '', notes: '' },
    { time: '5:00 PM', activity: '', notes: '' },
    { time: '6:00 PM', activity: '', notes: '' },
    { time: '7:00 PM', activity: '', notes: '' },
    { time: '8:00 PM', activity: '', notes: '' },
    { time: '9:00 PM', activity: '', notes: '' },
    { time: '10:00 PM', activity: '', notes: '' }
  ]);
  const [toDoList, setToDoList] = useState([]);
  const [topPriorities, setTopPriorities] = useState([]);
  const [notes, setNotes] = useState([]);

  const handleScheduleChange = (index, field, value) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index][field] = value;
    setSchedule(updatedSchedule);
  };

  const handleToDoListChange = (event) => {
    setToDoList(event.target.value.split('\n'));
  };

  const handleTopPrioritiesChange = (event) => {
    setTopPriorities(event.target.value.split('\n'));
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value.split('\n'));
  };
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="container " style={{padding: '20px', width: '79%', marginLeft: '20%', marginTop:'3%'}}>
      <h1 className="text-center mb-4">DAILY PLAN</h1>


        <div className='row'>
          <div className="col-6"> 
            <h5 className='mb-4'>TODAY'S SCHEDULE</h5>
            <table className="table border-0">
              <tbody>
                {schedule.slice(0, 13).map((item, index) => (
                  <tr key={index}>
                    <td className="border-end border-dark">{item.time}</td>
                    <td>
                      <input 
                        type="text" 
                        value={item.activity} 
                        onChange={(e) => 
                          handleScheduleChange(index, 'activity', e.target.value) 
                        } 
                        className="form-control border-0 " 
                      /> 
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>  
          <div className="col-6">
              {/* To-Do List */}
              <h5>TO DO</h5>
              <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Enter a task" 
                value={newTask} 
                onChange={handleInputChange} 
              />
              <button 
                className="btn btn-primary" 
                type="button" 
                onClick={handleAddTask}
              >
                Add
              </button>
            </div>
            <div className="list-container border rounded p-2 mb-3" style={{height: "200px", overflowY: "auto" }}>
              <ul className="list-group" style={{height:'3%'}}>
                {tasks.map((task, index) => (
                  <li 
                    key={index} 
                    className="list-group-item d-flex align-items-center" 
                    style={{ backgroundColor: ['lightblue', 'lightgreen', 'lightpink'][index % 3] }} 
                  >
                    <span className="bullet">●</span> {task} 
                  </li>
                ))}
                </ul>
              </div> 
                        {/* Top Priorities */}
            <div className="mb-3">
                <h6>Top Priorities:</h6>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      className="form-control mb-2"
                      placeholder={`Priority ${index + 1}`}
                    />
                  ))}
            </div> 
                      {/* Notes */}
          <div className="mb-3">
            <h6>Notes:</h6>
            <textarea className="form-control" rows="3"></textarea>
          </div>    
          </div>
      </div>   
      <h2 className="text-center mb-2">Notes</h2>
      <textarea
        rows={5}
        className="form-control"
        placeholder="Enter general notes"
        value={notes.join('\n')}
        onChange={handleNotesChange}
      />
    </div>
  );
}

export default StudyPlanner;

// import React from "react";

// const DailyPlan = () => {
//   return (
//     <div className="container my-4">
//       <div className="row">
//         {/* Header */}
//         <div className="col-12 text-center mb-3">
//           <h2>DAILY PLAN</h2>
//         </div>
//       </div>

//       <div className="row">
//         {/* Left Section: Schedule */}
//         <div className="col-md-6 border-end">
//           <h5>Today's Schedule:</h5>
//           <ul className="list-unstyled">
//             {Array.from({ length: 16 }).map((_, index) => {
//               const hour = 7 + index;
//               const ampm = hour >= 12 ? "PM" : "AM";
//               const displayHour = hour > 12 ? hour - 12 : hour;
//               return (
//                 <li key={index} className="d-flex justify-content-between py-1">
//                   <span>{`${displayHour}:00 ${ampm}`}</span>
//                   <span className="flex-grow-1 border-bottom mx-2"></span>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         {/* Right Section: To-Do, Priorities, Notes, Mood Tracker */}
//         <div className="col-md-6">
//           {/* Date */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Date:</label>
//             <input type="date" className="form-control" />
//           </div>

//           {/* Day Selector */}
//           <div className="d-flex justify-content-between mb-3">
//             {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
//               <div
//                 key={index}
//                 className="rounded-circle d-flex justify-content-center align-items-center border border-dark text-center"
//                 style={{ width: "30px", height: "30px" }}
//               >
//                 {day}
//               </div>
//             ))}
//           </div>

//           {/* To-Do List */}
//           <div className="mb-3">
//             <h6>To Do:</h6>
//             {Array.from({ length: 5 }).map((_, index) => (
//               <div key={index} className="form-check">
//                 <input type="checkbox" className="form-check-input" />
//                 <label className="form-check-label"></label>
//               </div>
//             ))}
//           </div>

//           {/* Top Priorities */}
//           <div className="mb-3">
//             <h6>Top Priorities:</h6>
//             {Array.from({ length: 4 }).map((_, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder={`Priority ${index + 1}`}
//               />
//             ))}
//           </div>

          // {/* Notes */}
          // <div className="mb-3">
          //   <h6>Notes:</h6>
          //   <textarea className="form-control" rows="3"></textarea>
          // </div>

//           {/* Mood Tracker */}
//           <div>
//             <h6>Mood Tracker:</h6>
//             <div className="d-flex justify-content-between">
//               {["😢", "🙁", "😐", "🙂", "😁"].map((emoji, index) => (
//                 <div key={index} className="text-center">
//                   <div>{emoji}</div>
//                   <input
//                     type="radio"
//                     name="mood"
//                     value={index}
//                     className="form-check-input"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DailyPlan;

