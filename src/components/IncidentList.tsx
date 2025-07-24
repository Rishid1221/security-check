import React from 'react';
import { AlertTriangle, Shield, ChevronRight } from 'lucide-react';
import download from '../../dist/assets/download.jpeg'

interface Incident {
  id: string;
  type: 'unauthorized' | 'gun-threat';
  title: string;
  timeRange: string;
  date: string;
  camera: string;
  thumbnail: string;
  resolved: boolean;
}

interface IncidentListProps {
  onResolve: (incidentId: string) => void;
}

export const IncidentList: React.FC<IncidentListProps> = ({ onResolve }) => {
  const [incidents] = React.useState<Incident[]>([
    {
      id: '1',
      type: 'unauthorized',
      title: 'Unauthorised Access',
      timeRange: '14:35 - 14:37',
      date: '7-Jul-2025',
      camera: 'Shop Floor Camera A',
      thumbnail: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=200',
      resolved: false
    },
    {
      id: '2',
      type: 'gun-threat',
      title: 'Gun Threat',
      timeRange: '14:35 - 14:37',
      date: '7-Jul-2025',
      camera: 'Shop Floor Camera A',
      thumbnail: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=200',
      resolved: false
    },
    {
      id: '3',
      type: 'unauthorized',
      title: 'Face Recognised',
      timeRange: '14:35 - 14:37',
      date: '7-Jul-2025',
      camera: 'Shop Floor Camera A',
      thumbnail: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=200',
      resolved: false
    },
    {
      id: '4',
      type: 'unauthorized',
      title: 'Unauthorised Access',
      timeRange: '14:35 - 14:37',
      date: '7-Jul-2025',
      camera: 'Shop Floor Camera A',
      thumbnail: '../../dist/assets/download.jpeg' ,
      resolved: false
    },
    {
      id: '5',
      type: 'unauthorized',
      title: 'Unauthorised Access',
      timeRange: '14:35 - 14:37',
      date: '7-Jul-2025',
      camera: 'Shop Floor Camera A',
      thumbnail: 'https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=200',
      resolved: false
    }
  ]);

  const getIncidentIcon = (type: string) => {
    switch (type) {
      case 'gun-threat':
        return '🔫';
      case 'unauthorized':
        return '🚫';
      default:
        return '🚫';
    }
  };

  const getIncidentColor = (type: string) => {
    switch (type) {
      case 'gun-threat':
        return 'bg-red-600';
      case 'unauthorized':
        return 'bg-orange-600';
      default:
        return 'bg-orange-600';
    }
  };

  const unresolvedCount = incidents.filter(i => !i.resolved).length;
  const resolvedCount = 5;

  return (
    <div className="bg-black rounded-lg h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-white font-semibold flex items-center">
            <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
            15 Unresolved Incidents
          </h2>
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-orange-400">🚫</span>
            <span className="text-blue-400">👤</span>
            <span className="text-green-400">✓ 4 resolved incidents</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
          >
            <div className="flex items-start space-x-3">
            
              <div className="flex-shrink-0">
                <img
                  src={incident.thumbnail}
                  alt={incident.title}
                  className="w-16 h-12 object-cover rounded"
                />
              </div>

          
              <div className="flex-1 min-w-0">
               
                <div className="flex items-center justify-between mb-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white ${getIncidentColor(incident.type)}`}>
                    {getIncidentIcon(incident.type)} {incident.title}
                  </span>
                  <button
                    onClick={() => onResolve(incident.id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded text-xs font-medium transition-colors duration-200 flex items-center"
                  >
                    Resolve
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </button>
                </div>

              
                <div className="space-y-1 text-xs text-gray-300">
                  <div className="flex items-center">
                    <span>📍 {incident.camera}</span>
                  </div>
                  <div className="flex items-center">
                    <span>⏰ {incident.timeRange} on {incident.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};