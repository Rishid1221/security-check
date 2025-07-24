import React from 'react';
import { Shield, Video, Camera, AlertTriangle, Users } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Shield },
    { id: 'cameras', label: 'Cameras', icon: Video },
    { id: 'scenes', label: 'Scenes', icon: Camera },
    { id: 'incidents', label: 'Incidents', icon: AlertTriangle },
    { id: 'users', label: 'Users', icon: Users }
  ];

  return (
    <nav className="bg-black border-b border-gray-800 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="text-white text-xl font-bold">MANDLACX</div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? 'text-yellow-500 bg-yellow-500/10'
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="text-white font-medium">Mohammed Ajhas</div>
            <div className="text-gray-400 text-sm">ajhas@mandlacx.com</div>
          </div>
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">MA</span>
          </div>
        </div>
      </div>
    </nav>
  );
};