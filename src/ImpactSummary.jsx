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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
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