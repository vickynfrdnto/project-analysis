import React from "react";

const Recommendations = () => {
  return (
    <section
      id="recommendations"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 section-title">Recommendations</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Actionable insights based on the analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1 */}
          <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-blue-500 glow">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-blue-500 bg-opacity-20 mr-4">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Promote SM Products</h3>
            </div>
            <p className="text-gray-300">
              Focus on increasing promotion of SLOW MOVING products, especially Reliwear brand.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-purple-500 glow">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-purple-500 bg-opacity-20 mr-4">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Discount Strategy</h3>
            </div>
            <p className="text-gray-300">
              Reduce SM stock through discounts/promotional bundling before it stays too long in the warehouse.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-green-500 glow">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-green-500 bg-opacity-20 mr-4">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Maintain RE Stock</h3>
            </div>
            <p className="text-gray-300">
              Reliable (RE) brand can be the mainstay of distribution and sales - keep it available.
            </p>
          </div>

          {/* Card 4 */}
          <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-yellow-500 glow">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-yellow-500 bg-opacity-20 mr-4">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Regular Review</h3>
            </div>
            <p className="text-gray-300">
              Evaluate FM and SM products monthly to keep classifications relevant.
            </p>
          </div>
        </div>

        {/* Implementation Roadmap Table */}
        <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Implementation Roadmap</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Timeline
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Responsible
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    SM product promotion campaign
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-400">
                    High
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Next 2 weeks</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Marketing Team</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    Review purchasing strategy
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-400">
                    Medium
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Next month</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Procurement</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    Monthly classification review
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-400">
                    Ongoing
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Monthly</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Analytics Team</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    Branch performance optimization
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-400">
                    High
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Quarterly</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Regional Managers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;