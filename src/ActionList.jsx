import React from 'react';

const ActionList = ({ actions, onAddAction }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Eco-Friendly Actions</h2>
      </div>
      <div>
        {actions.map((action) => (
          <div key={action.id} className="action-item">
            <div className="action-info">
              <span>{action.name}</span>
              <span className="co2-value">{action.co2} kg CO2</span>
            </div>
            <button 
              className="button-icon" 
              onClick={() => onAddAction(action)}
              title="Add action"
            >
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"/></svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionList;