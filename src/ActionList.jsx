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
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionList;