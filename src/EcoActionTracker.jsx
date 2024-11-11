import React, { useState, useEffect } from 'react';
import ActionList from './ActionList';
import ImpactSummary from './ImpactSummary';
import './styles.css';

const ECO_ACTIONS = [
  { id: 1, name: 'Use a reusable water bottle', co2: 0.5 },
  { id: 2, name: 'Take public transport', co2: 2.6 },
  { id: 3, name: 'Eat a plant-based meal', co2: 0.8 },
  { id: 4, name: 'Use energy-efficient light bulbs', co2: 0.1 },
  { id: 5, name: 'Recycle paper', co2: 0.2 },
];

const EcoActionTracker = () => {
  const [trackedActions, setTrackedActions] = useState(() => {
    const saved = localStorage.getItem('trackedActions');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('trackedActions', JSON.stringify(trackedActions));
  }, [trackedActions]);

  const handleAddAction = (action) => {
    setTrackedActions(prev => [...prev, { ...action, timestamp: Date.now() }]);
  };

  const handleRemoveAction = (timestamp) => {
    setTrackedActions(prev => prev.filter(action => action.timestamp !== timestamp));
  };

  const handleClearAll = () => {
    setTrackedActions([]);
  };

  return (
    <div className="eco-tracker">
      <h1 className='eco-tracker-heading'>Eco Action Tracker</h1>
      
      <ActionList 
        actions={ECO_ACTIONS} 
        onAddAction={handleAddAction} 
      />
      
      <ImpactSummary 
        trackedActions={trackedActions}
        onClearAll={handleClearAll}
        onRemoveAction={handleRemoveAction}
      />
    </div>
  );
};

export default EcoActionTracker;