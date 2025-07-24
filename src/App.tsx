import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { VideoPlayer } from './components/VideoPlayer';
import { IncidentList } from './components/IncidentList';
import  Timeline  from './components/Timeline';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentCamera, setCurrentCamera] = useState(1);

  const handleResolveIncident = (incidentId: string) => {
    console.log('Resolving incident:', incidentId);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="p-4">
        <div className="grid grid-cols-12 gap-4 h-[calc(100vh-200px)]">
          
          <div className="col-span-8">
            <VideoPlayer 
              currentCamera={currentCamera} 
              onCameraChange={setCurrentCamera} 
            />
          </div>

       
          <div className="col-span-4">
            <IncidentList onResolve={handleResolveIncident} />
          </div>
        </div>

   
        <div className="mt-4">
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default App;