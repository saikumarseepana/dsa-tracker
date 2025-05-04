import React from 'react';

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
    return (
        <div>
            <h2>DSA Topics</h2>
            <ul>
                {topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                ))}
            </ul>
        </div>
    );
};

export default TopicList;