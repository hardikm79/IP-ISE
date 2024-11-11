import React from 'react';

const ImpactSummary = ({ trackedActions, onClearAll, onRemoveAction }) => {
  const totalCO2 = trackedActions.reduce((sum, action) => sum + action.co2, 0);
  
  const getImpactColor = (co2) => {
    if (co2 < 0.5) return 'red';
    if (co2 < 1) return 'orange';
    return 'green';
  };

  const treesPlanted = Math.floor(totalCO2 / 10);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Your Impact</h2>
        <button className="button button-clear" onClick={onClearAll}>
          Clear All
        </button>
      </div>
      
      {trackedActions.length === 0 ? (
        <div className="empty-state">
          No actions tracked yet. Start by adding some eco-friendly actions!
        </div>
      ) : (
        <>
          {trackedActions.map((action) => (
            <div key={action.timestamp} className="action-item">
              <div className="action-info">
                <span>{action.name}</span>
                <span className="co2-value">
                  1 × {action.co2} kg = {action.co2} kg CO2
                </span>
              </div>
              <button 
                className="button-icon" 
                onClick={() => onRemoveAction(action.timestamp)}
                title="Remove action"
              >
                ✕
              </button>
            </div>
          ))}

          <div className="impact-summary">
            <div className="impact-total">
              <span>🌱 Total CO2 Saved</span>
              <span className={`impact-value ${getImpactColor(totalCO2)}`}>
                {totalCO2.toFixed(1)} kg
              </span>
            </div>
            <div className="tree-message">
              You've saved the equivalent of {treesPlanted} trees planted!
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ImpactSummary;