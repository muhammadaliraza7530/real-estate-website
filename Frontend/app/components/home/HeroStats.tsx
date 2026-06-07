// frontend/src/components/home/HeroStats.tsx
'use client';

import { Users, Home, Clock } from 'lucide-react';

const HeroStats = () => {
  const stats = [
    {
      icon: Users,
      value: '200+',
      label: 'Happy Customers',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Home,
      value: '10k+',
      label: 'Properties For Clients',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Clock,
      value: '16+',
      label: 'Years of Experience',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="mt-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 flex items-center">
                
                {/* Text Content */}
                <div>
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-900 to-indigo-900 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroStats;