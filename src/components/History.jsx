import React, { useState, useEffect, useCallback } from 'react';
import { BASE_URL } from './Host.jsx';
import axios from 'axios';

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
        username: localStorage.getItem('username'), // Replace with actual username
        date: '2023-07-01', // Replace with actual date or make it dynamic
        page: page,
        limit: 1 // Number of items per page
      });
      console.log(response)
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
    loadTasks();
  }, []);

  // Function to handle scroll
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      loadTasks();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadTasks]);

  return (
    <div>
      <h1>History</h1>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.task}</h3>
          <p>Status: {task.status}</p>
          <p>Created at: {task.created_at}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more tasks to load.</p>}
    </div>
  );
}