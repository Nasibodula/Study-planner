import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substr(0, 10));
  const [highlightedDay, setHighlightedDay] = useState(new Date().getDay());
  const [toDoList, setToDoList] = useState([]);
  const [topPriorities, setTopPriorities] = useState([]);
  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [waterAmount, setWaterAmount] = useState(0);
  const [selectedMood, setSelectedMood] = useState(null);


  const handleScheduleChange = (index, field, value) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index][field] = value;
    setSchedule(updatedSchedule);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value.split('\n'));
  };

  const handleSavePlan = async (e) => {
    e.preventDefault(); // Prevents the page from reloading
  
    const planData = {
      date: selectedDate,
      schedule,
      tasks,
      waterAmount,
      mood: selectedMood,
      topPriorities,
    };
  
    try {
      await axios.post('http://localhost:5000/api/save', planData);
      console.log("Plan saved successfully!");
  
      // Optionally reset specific fields
      setTasks([]);
      setNotes([]);
      setNewTask("");
      // Do not reset schedule unless necessary
    } catch (error) {
      console.error('Error saving plan:', error);
    }
  };
  // Update the mood when a user selects it
  const handleMoodChange = (event) => {
    setSelectedMood(event.target.value);
  };
  const handleInputChange = (event) => {
    setNewTask(event.target.value);  // Update the new task with the input value
  };
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
  };
  return (
    <div className="container " style={{ padding: '20px', width: '76%', marginLeft: '23%', marginTop: '4%' }}>
      <div className='row'>
        <div className="col-6">
          <h2 className="mb-4">DAILY PLAN</h2>
          <div className="mb-4">TODAY'S SCHEDULE</div>
          <table className="table border-0">
            <tbody>
              {schedule.slice(0, 13).map((item, index) => (
                <tr key={index} style={{ height: '40px' }}>
                  <td 
                    className="border-end border-dark text-nowrap" 
                    style={{ width: '80px', textAlign: 'center', verticalAlign: 'middle' }}
                  >
                    {item.time}
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.activity}
                      onChange={(e) => handleScheduleChange(index, 'activity', e.target.value)}
                      className="form-control border-0"
                      style={{ maxWidth: '100%', fontSize: '0.9rem', height: '30px', padding: '0.25rem' }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <h5>Water Drank</h5>
            <div className="d-flex justify-content-between">
              {["💧", "💧💧", "💧💧💧", "💧💧💧💧", "💧💧💧💧💧"].map((emoji, index) => (
                <div key={index} className="text-center">
                  <div>{emoji}</div>
                  <input
                    type="radio"
                    name="water"
                    value={(index + 1) * 500}
                    onChange={(e) => setWaterAmount(e.target.value)}
                    className="form-check-input"
                  />
                  <div className="fw-bold">{(index + 1) * 500} ml</div>
                </div>
              ))}
            </div>
          </div>
                {/* Submit Button */}
      <div className="mt-4 text-center">
        <button 
          onClick={handleSavePlan}
          className="btn btn-primary"
          style={{
            backgroundColor: "#6A9EB4",
            borderColor: "#6A9EB4",
            color: "#FFF",
          }}
        >
          Save Daily Plan
        </button>
      </div>
        </div>
        <div className="col-6">
          {/* Date */}
          <div className="mb-3 d-flex justify-content-end align-items-center">
            <label className="form-label fw-bold me-3">Date:</label>
            <input
              type="date"
              className="form-control"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{ maxWidth: '200px' }}
            />
          </div>
          {/* Day Selector */}
          <div className="d-flex justify-content-between mb-3">
            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
              <div
              key={index}
              className={`rounded-circle d-flex justify-content-center align-items-center border border-dark text-center`}
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: highlightedDay === index ? "#6A9EB4" : "transparent",
                color: highlightedDay === index ? "#FFF" : "#000",
                cursor: "pointer",
              }}
              onClick={() => setHighlightedDay(index)} // Ensure you have this function in your state
            >
                {day}
              </div>
            ))}
          </div>
          {/* To-Do List */}
          <h5>TO DO:</h5>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a task"
              value={newTask}
              onChange={handleInputChange}
            />
            <button
              className="btn"
              type="button"
              onClick={handleAddTask}
              style={{
                backgroundColor: "#6A9EB4",
                borderColor: "#6A9EB4",
                color: "#FFF",
              }}
            >
              Add
            </button>
          </div>
          <div className="list-container border rounded p-2 mb-3" style={{ height: "200px", overflowY: "auto" }}>
            <ul className="list-group" style={{ height: '3%' }}>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex align-items-center mb-2"
                  style={{height:"30px",backgroundColor: ['#C0DBE6','#6A9EB4', '#46A3CC', '#0EBFE1', '#0098B4'][index % 5] }}
                >
                  <span className="bullet d-flex align-items-center mb-2" 
                    style={{
                      fontSize: "2rem",
                      color: ['#6A9EB4', '#0EBFE1', '#0098B4','#46A3CC','#C0DBE6'][index % 5],
                      marginRight: '5px' 
                    }}>●</span> {task}
                  <button
                  onClick={() => handleDeleteTask(index)}
                  className=" "
                  style={{
                    padding: 0,
                    fontWeight: "bold",
                    background: "transparent",
                    border: "none",
                    color: "red",

                  }} >
                    X
                  </button>
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
                style={{height:"30px"}}
              />
            ))}
          </div>
          {/* Notes */}
          <div className="mb-3">
            <h6>Notes:</h6>
            <textarea
              rows={5}
              className="form-control"
              value={notes.join('\n')}
              onChange={handleNotesChange}
              style={{
                backgroundColor: '#C0DBE6',
                border: 'none',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',
                width: '100%',
                resize: 'none',
                fontFamily: 'Arial, sans-serif',
              }}
            />
          </div>
                {/* Mood Tracker */}
          <div>
            <h6>Mood Tracker:</h6>
            <div className="d-flex justify-content-between">
              {["😢", "🙁", "😐", "🙂", "😁"].map((emoji, index) => (
                <div key={index} className="text-center">
                  <div>{emoji}</div>
                  <input
                    type="radio"
                    name="mood"
                    value={index}
                    checked={selectedMood == index}  // Ensure radio button is selected if the value matches
                    onChange={handleMoodChange}  // Handle the mood change
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyPlanner;
