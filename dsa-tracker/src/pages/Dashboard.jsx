import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [topics, setTopics] = useState([
    { id: 1, name: 'Arrays' },
    { id: 2, name: 'Strings' },
    { id: 3, name: 'Linked Lists' },
    // Add more topics here
  ]);

  const handleAddTopic = () => {
    const newTopic = { id: topics.length + 1, name: 'New Topic' };
    setTopics([...topics, newTopic]);
  };

  const handleDeleteTopic = (id) => {
    setTopics(topics.filter(topic => topic.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Welcome to the Dashboard</h2>
      
      {user.isAdmin && (
        <div className="admin-controls">
          <button
            onClick={handleAddTopic}
            className="bg-green-500 text-white p-2 rounded"
          >
            Add Topic
          </button>
        </div>
      )}

      <ul className="topic-list">
        {topics.map((topic) => (
          <li key={topic.id} className="flex justify-between">
            <span>{topic.name}</span>
            {user.isAdmin && (
              <button
                onClick={() => handleDeleteTopic(topic.id)}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>

      <button onClick={logout} className="bg-red-500 text-white p-2 rounded mt-4">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
