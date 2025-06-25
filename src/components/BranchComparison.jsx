import React from "react";
import BranchComparisonChart from "./charts/BranchComparisonChart";

const BranchComparison = () => {
  return (
    <section
      id="branch-comparison"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 section-title">Branch Comparison</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Percentage distribution per branch - Stock, Sales, and Purchases
          </p>
        </div>

        <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 mb-12 h-96">
          <h3 className="text-xl font-semibold mb-6 text-blue-400">
            Branch Performance Overview
          </h3>
          <BranchComparisonChart />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Top Stock */}
          <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Top Stock</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">BANTEN</span>
                <span className="font-bold text-blue-400">15.83%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">SUMUT</span>
                <span className="font-bold text-blue-400">8.76%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">BENGKULU</span>
                <span className="font-bold text-blue-400">8.11%</span>
              </div>
            </div>
          </div>

          {/* Top Sales */}
          <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Top Sales</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">SUMUT</span>
                <span className="font-bold text-green-400">~9%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">BANTEN</span>
                <span className="font-bold text-green-400">~13-14%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">BENGKULU</span>
                <span className="font-bold text-green-400">~8%</span>
              </div>
            </div>
          </div>

          {/* Top Purchases */}
          <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Top Purchases</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">BANTEN</span>
                <span className="font-bold text-purple-400">~12%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">SUMUT</span>
                <span className="font-bold text-purple-400">~8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">BENGKULU</span>
                <span className="font-bold text-purple-400">~7%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Findings */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 card-3d">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Key Findings</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
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
                  The company has quite high stock, even though sales have reached 83% of total stock.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
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
                  Purchasing strategy is quite careful (57%), this is good to avoid overstock.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
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
                  Need to review SM items, because high stock value but slow movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchComparison;