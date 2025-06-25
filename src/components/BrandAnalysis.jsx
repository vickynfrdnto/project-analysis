import React from "react";
import BrandUnitChart from "./charts/BrandUnitChart";
import BrandValueChart from "./charts/BrandValueChart";

const BrandAnalysis = () => {
  return (
    <section
      id="brand-analysis"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title & Intro */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 section-title">
            Brand Analysis (RELIABLE vs RELIWEAR)
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Distribution of stock and stock value by brand
          </p>
        </div>

        {/* Chart Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Unit Chart */}
          <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Stock Distribution by Unit
            </h3>
            <div className="h-64">
              <BrandUnitChart />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <StatBox label="RELIABLE" value="319,591 units" percent="66.6%" color="text-blue-400" />
              <StatBox label="RELIWEAR" value="159,967 units" percent="33.4%" color="text-purple-400" />
            </div>
          </div>

          {/* Value Chart */}
          <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Stock Value Distribution
            </h3>
            <div className="h-64">
              <BrandValueChart />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <StatBox label="RELIABLE" value="Rp 9.48B" percent="69.1%" color="text-blue-400" />
              <StatBox label="RELIWEAR" value="Rp 4.24B" percent="30.9%" color="text-purple-400" />
            </div>
          </div>
        </div>

        {/* Key Findings */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 card-3d">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Key Findings</h3>
          <div className="space-y-4">
            {[
              "Products Reliable (RE) dominate warehouse stock both in units and value.",
              "The proportion is more than 2x compared to Reliwear (RW).",
            ].map((text, i) => (
              <FindingItem key={i} text={text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-komponen kecil agar lebih rapi

const StatBox = ({ label, value, percent, color }) => (
  <div className="bg-gray-700 p-3 rounded-lg">
    <p className="text-sm text-gray-400">{label}</p>
    <p className="text-lg font-bold">{value}</p>
    <p className={`font-semibold ${color}`}>{percent}</p>
  </div>
);

const FindingItem = ({ text }) => (
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
      <p className="text-gray-300">{text}</p>
    </div>
  </div>
);

export default BrandAnalysis;