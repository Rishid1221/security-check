import React from "react";
import { Camera, Lock, Users, AlertTriangle, Activity } from "lucide-react";

interface TimelineEvent {
  label: string;
  time: string;
  color: string;
  icon: JSX.Element;
}

interface CameraData {
  camera: string;
  events: TimelineEvent[];
}

const cameraTimelineData: CameraData[] = [
  {
    camera: "Camera - 01",
    events: [
      { label: "Unauthorised Access", time: "01:00", color: "bg-orange-900", icon: <Lock size={14} /> },
      { label: "Face Recognised", time: "03:00", color: "bg-blue-800", icon: <Users size={14} /> },
      { label: "4 Multiple Events", time: "10:00", color: "bg-gray-700", icon: <AlertTriangle size={14} /> },
      { label: "Unauthorised Access", time: "14:30", color: "bg-orange-900", icon: <Lock size={14} /> },
      { label: "Gun Threat", time: "15:00", color: "bg-red-800", icon: <Activity size={14} /> },
    ],
  },
  {
    camera: "Camera - 02",
    events: [
      { label: "Unauthorised Access", time: "01:00", color: "bg-orange-900", icon: <Lock size={14} /> },
      { label: "Face Recognised", time: "08:00", color: "bg-blue-800", icon: <Users size={14} /> },
    ],
  },
  {
    camera: "Camera - 03",
    events: [
      { label: "Traffic congestion", time: "04:00", color: "bg-emerald-700", icon: <Activity size={14} /> },
      { label: "Unauthorised Access", time: "13:00", color: "bg-orange-900", icon: <Lock size={14} /> },
    ],
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="bg-[#121212] text-white p-16 rounded-md w-full">
     
      <div className="grid grid-cols-12 mb-2 pl-2">
   
        <div className="col-span-2 text-white font-semibold text-sm flex items-center gap-2">
          <Camera size={16} />
          Camera List
        </div>

       
        <div className="col-span-10 grid grid-cols-12 text-xs text-gray-400 pl-4">
          {Array.from({ length: 17 }).map((_, i) => (
            <div key={i} className="text-center">
              {i.toString().padStart(2, "0")}:00
            </div>
          ))}
        </div>
      </div>

     
      <div className="relative border-t border-gray-600 pt-3">
    
        <div className="absolute top-0 bottom-0 border-l-2 border-yellow-400 z-10" style={{ left: `calc((3 + 12/60 + 37/3600)/17 * 100% + 16.6667%)` }}>
          <div className="absolute -top-6 -left-6 text-xs text-yellow-400 font-bold whitespace-nowrap pt-5">
            03:12:37s
          </div>
        </div>

       
        {cameraTimelineData.map((camera, index) => (
          <div key={index} className="grid grid-cols-12 items-center py-2 border-t border-gray-700">
          
            <div className="col-span-2 flex items-center gap-2 text-gray-200 pl-2">
              <Camera size={16} />
              {camera.camera}
            </div>

       
            <div className="col-span-10 relative flex items-center h-10">
              {camera.events.map((event, i) => {
                const hour = parseInt(event.time.split(":")[0]);
                const leftOffset = (hour / 17) * 100;
                return (
                  <div
                    key={i}
                    className={`absolute text-xs px-2 py-1 rounded-md flex items-center gap-1 whitespace-nowrap ${event.color}`}
                    style={{ left: `${leftOffset}%` }}
                  >
                    {event.icon}
                    {event.label}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
