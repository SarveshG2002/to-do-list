import React, { useState, useEffect, useCallback } from 'react';
import { BASE_URL } from './Host.jsx';
import axios from 'axios';
import '../assets/css/History.css';

export default function History() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadTasks = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/api/getCombinedTasksByDate`, {
        username: localStorage.getItem('username'),
        date: '2023-07-01', // Replace with actual date or make it dynamic
        page: page,
        limit: 5 // Number of items per page
      });
      console.log(response);
      const newTasks = response.data.tasks;

      setTasks(prevTasks => [...prevTasks, ...newTasks]);
      setPage(prevPage => prevPage + 1);
      setHasMore(newTasks.length > 0);
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page]);

  useEffect(() => {
    loadTasks(); // Initial load
  }, []);

  // Function to handle scroll
  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;

    // Check if user has scrolled to the bottom
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      loadTasks();
    }
  }, [loadTasks]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);


  

  return (
    <div className='HistoryDiv'>

      <div>
        <h1>History</h1>
        <hr style={{ borderTop: "0.5px solid grey" }} />
        <div className='Data'>
        {tasks.map((task,index) => (
          <div key={index} className='DataDiv'>
          
            <div className='DataTask'>
              <textarea readOnly className='form-control' defaultValue={task.task}></textarea>
            </div>
            <div className='Info'>
            <span className='badge badge-primary '>{task.created_at}</span> &nbsp;
            <span className={`badge ${task.status === 'Pending' ? 'badge-danger' : 'badge-success'}`}>
              {task.status === 'Pending' ? 'Pending' : 'Updated'}
            </span> &nbsp;
              <span className={`badge ${task.source=="todays_daily_task" ? "badge-warning":"badge-info"}`}>
              {`${task.source=="todays_daily_task" ? "Daily Task":"Today's Task"}`}
              </span>
            </div>
            <hr style={{ borderTop: "0.5px solid grey" }} />
            
          </div>
          
        ))}

        {loading && <p>Loading...</p>}
      {!hasMore && <p>No more tasks to load.</p>}

        </div>
      </div>

      
    </div>
  );
}