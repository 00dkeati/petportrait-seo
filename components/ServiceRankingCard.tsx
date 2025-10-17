import { ServiceEntry } from '@/types/service';

interface ServiceRankingCardProps {
  service: ServiceEntry;
  isTopChoice?: boolean;
}

export default function ServiceRankingCard({ service, isTopChoice = false }: ServiceRankingCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${isTopChoice ? 'ring-2 ring-blue-500' : ''}`}>
      {isTopChoice && (
        <div className="bg-blue-600 text-white text-center py-2 font-semibold">
          🏆 Our Top Choice
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                service.rank === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {service.rank}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
            </div>
            <p className="text-gray-600 mb-4">{service.summary}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
            <ul className="space-y-1">
              {service.pros.map((pro, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
            <ul className="space-y-1">
              {service.cons.map((con, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm text-gray-600">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold text-gray-900">{service.price_range}</span>
            <span className="text-sm text-gray-500">{service.delivery_time}</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-gray-600">{service.rating}</span>
            <span className="text-sm text-gray-500">({service.review_count} reviews)</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {service.specialties.map((specialty, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
            >
              {specialty}
            </span>
          ))}
        </div>
        
        <a
          href={service.url}
          className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-colors ${
            isTopChoice 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          Visit {service.name}
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
