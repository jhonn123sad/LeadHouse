import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FlowExample } from '../types';

interface FlowCardProps {
  flow: FlowExample;
}

export const FlowCard: React.FC<FlowCardProps> = ({ flow }) => {
  const Icon = flow.icon;

  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-glass border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full w-full">
      <div className="mb-4 p-3 bg-red-50 rounded-xl w-fit">
        <Icon className="w-6 h-6 text-crimson" />
      </div>
      
      <h3 className="text-lg md:text-xl font-bold text-dark mb-2 font-sans leading-tight">{flow.title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow font-body leading-relaxed">{flow.description}</p>
      
      {/* Flow Mini Map */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100 w-full overflow-hidden">
        <div className="flex items-center space-x-2 text-xs text-gray-500 whitespace-nowrap overflow-x-auto scrollbar-hide pb-1">
            {flow.steps.map((step, idx) => (
                <React.Fragment key={idx}>
                    <span className="flex-shrink-0 font-medium">{step}</span>
                    {idx < flow.steps.length - 1 && <ArrowRight size={10} className="text-gray-300 flex-shrink-0" />}
                </React.Fragment>
            ))}
        </div>
      </div>

      <div className="flex items-center pt-4 border-t border-gray-100">
         <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded-md border border-green-100">
            {flow.kpi}
         </span>
      </div>
    </div>
  );
};