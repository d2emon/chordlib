import React from 'react';

const TodoFilterLink = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            margin: '4px',
        }}
    >
        {children}
    </button>
);

export default TodoFilterLink;
