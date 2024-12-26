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
      {/* <div className="mb-3">
        <label htmlFor="date" className="form-label">Date:</label>
        <input
          type="date"
          id="date"
          className="form-control"
        />
      </div> */}
        {/* <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Activity</th>
            <th scope="col">Notes</th>
          </tr>
        </thead> */}
        {/* <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>
                <input
                  type="text"
                  value={item.activity}
                  onChange={(e) =>
                    handleScheduleChange(index, 'activity', e.target.value)
                  }
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.notes}
                  onChange={(e) => handleScheduleChange(index, 'notes', e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
          ))}
        </tbody> */}
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
      </div> 

     

      <h2 className="text-center mb-2">Top Priorities</h2>
      <textarea
        rows={3}
        className="form-control mb-4"
        placeholder="Enter top priorities, one per line"
        value={topPriorities.join('\n')}
        onChange={handleTopPrioritiesChange}
      />

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