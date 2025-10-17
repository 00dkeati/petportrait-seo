import { ServiceEntry } from '@/types/service';

interface ComparisonTableProps {
  services: ServiceEntry[];
}

export default function ComparisonTable({ services }: ComparisonTableProps) {
  const criteria = [
    'Price Range',
    'Delivery Time',
    'Quality Rating',
    'Customer Reviews',
    'Style Options',
    'Availability'
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Service Comparison
          </h2>
          <p className="text-lg text-gray-600">
            Compare the top pet portrait services side by side
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service</th>
                {criteria.map((criterion, index) => (
                  <th key={index} className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    {criterion}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {services.map((service, index) => (
                <tr key={index} className={index === 0 ? 'bg-blue-50' : 'hover:bg-gray-50'}>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        service.rank === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {service.rank}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{service.name}</div>
                        {service.rank === 1 && (
                          <div className="text-xs text-blue-600 font-medium">🏆 Top Choice</div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">{service.price_range}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">{service.delivery_time}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-600">{service.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">{service.review_count}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">{service.specialties.length}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      service.rank <= 2 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {service.rank <= 2 ? 'High' : 'Medium'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why The Family Portrait Company is Our #1 Choice
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              After extensive research and customer feedback analysis, The Family Portrait Company 
              consistently delivers the best combination of quality, value, and service. Their 
              quick turnaround times and affordable prices make them the clear winner.
            </p>
            <a
              href="https://familyportraitcompany.com/?utm_source=petportrait.co&utm_medium=editorial&utm_campaign=comparison-table"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Try The Family Portrait Company
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
