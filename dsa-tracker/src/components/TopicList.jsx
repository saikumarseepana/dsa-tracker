import React, { useState, useEffect } from 'react';

//sample list of DSA topics
const topics = [
    'Arrays',
    'Linked Lists',
    'Stacks',
    'Queues',
    'Trees',
    'Graphs',
    'Hashing',
    'Dynamic Programming'
];

const TopicList = () => {
    
    //created state to track the topics
    const [completedTopics, setCompletedTopics] = useState([]);

    //Loads from local storage on component mount
    useEffect(() => {
        const saved = localStorage.getItem('completedTopics');
        if(saved) {
            setCompletedTopics(JSON.parse(saved));
        }else {
            setCompletedTopics(new Array(topics.length).fill(false));
        }
    }, []);

    //Updating local storage whenever state changes
    useEffect(() => {
        if(completedTopics.length){
            localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
        }
    }, [completedTopics]);

    //Toggle completion of a topic
    const toggleCompletion = (index) => {
        const updated = [...completedTopics];
        updated[index] = !updated[index];
        setCompletedTopics(updated); //updating the state
    }
    return (
        <div>
            <h2>DSA Topics</h2>
            <ul>
                {topics.map((topic, index) => (
                    <li key={index} style={{ backgroundColor: completedTopics[index] ? '#d3ffd3' : '#f4f4f4' }}>
                    <input 
                    type = "checkbox"
                    checked = {completedTopics[index]}
                    onChange={() => toggleCompletion(index)}
                    />
                    {topic}
                    </li>

                ))}
            </ul>
        </div>
    );
};

export default TopicList;