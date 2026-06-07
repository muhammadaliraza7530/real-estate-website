'use client';

import { 
  Home, 
  TrendingUp, 
  Settings, 
  Brain, 
  ArrowRight 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  color: string;
  gradient: string;
}

const ServiceCard = ({ icon: Icon, title, color, gradient }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Background Gradient Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
      </div>

      <div className="relative p-6">
        {/* Icon Container */}
        <div className={`${color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Learn More Link */}
        <button className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

const HeroCards = () => {
  const cards = [
    {
      icon: Home,
      title: 'Find Your Dream Home',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: TrendingUp,
      title: 'Unlock Property Value',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Settings,
      title: 'Effortless Property Management',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Brain,
      title: 'Smart Investments, Informed Decisions',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="mt-20">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <ServiceCard
            key={index}
            icon={card.icon}
            title={card.title}
            color={card.color}
            gradient={card.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCards;
