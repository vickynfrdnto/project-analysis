import MovementValueChart from "./charts/MovementValueChart";
import MovementSalesChart from "./charts/MovementSalesChart";

const MovementAnalysis = () => {
  return (
    <section
      id="movement-analysis"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 section-title">
            2. Movement Analysis (FM vs SM)
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Stock classification based on stock value vs average monthly sales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Stock Value by Classification
            </h3>
            <div className="chart-container h-64">
              <MovementValueChart />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-sm text-gray-400">FAST MOVING</p>
                <p className="text-lg font-bold">Rp 8.09B</p>
                <p className="text-green-400">58.9%</p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-sm text-gray-400">SLOW MOVING</p>
                <p className="text-lg font-bold">Rp 5.63B</p>
                <p className="text-yellow-400">41.1%</p>
              </div>
            </div>
          </div>

          <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Monthly Sales by Classification
            </h3>
            <div className="chart-container h-64">
              <MovementSalesChart />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-sm text-gray-400">FAST MOVING</p>
                <p className="text-lg font-bold">Rp 2.42B</p>
                <p className="text-green-400">72.4%</p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-sm text-gray-400">SLOW MOVING</p>
                <p className="text-lg font-bold">Rp 921M</p>
                <p className="text-yellow-400">27.6%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 card-3d">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Key Findings
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-gray-300">
                  Most stock value is in FM (58.9%), but the proportion of monthly sales is even greater
                  (72.4%) → fast moving.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-gray-300">
                  SM products account for nearly half of stock value but only 27% of sales → need special
                  attention (promotion/discount).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovementAnalysis;
