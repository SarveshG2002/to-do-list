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