import React from "react";
import MonthlyTrendChart from "./charts/MonthlyTrendChart";
import ComparisonChart from "./charts/ComparisonChart";

const SalesSummary = () => {
  return (
    <section
      id="sales-summary"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 section-title">
            Sales and Purchasing Summary
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Sales and purchasing data for the last 3 months
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <SummaryCard
            title="Total Sales"
            value="402,076"
            unit="units"
            subtitle="134,025 units/month"
            color="text-green-400"
          />
          <SummaryCard
            title="Total Purchases"
            value="274,446"
            unit="units"
            subtitle="91,482 units/month"
            color="text-blue-400"
          />
          <SummaryCard
            title="Remaining Stock"
            value="479,558"
            unit="units"
            subtitle="83.8% of sales"
            color="text-purple-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ChartCard title="Monthly Trend">
            <MonthlyTrendChart />
          </ChartCard>
          <ChartCard title="Stock vs Sales vs Purchases">
            <ComparisonChart />
          </ChartCard>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 card-3d">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Key Findings</h3>
          <Finding
            iconColor="bg-green-500"
            text="Monthly sales are higher than purchases → indicates products are moving (positive)."
          />
          <Finding
            iconColor="bg-yellow-500"
            text="There is high stock accumulation (479 thousand units), meaning the goods outflow cycle needs to be more optimized for certain categories, especially SM."
          />
        </div>
      </div>
    </section>
  );
};

const SummaryCard = ({ title, value, unit, subtitle, color }) => (
  <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
    <h3 className="text-xl font-semibold mb-4 text-blue-400">{title}</h3>
    <div className="flex items-center justify-center h-40">
      <div className="text-center">
        <p className={`text-4xl font-bold ${color}`}>{value}</p>
        <p className="text-gray-400">{unit}</p>
        <p className="text-gray-300 mt-2">{subtitle}</p>
      </div>
    </div>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="card-3d bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
    <h3 className="text-xl font-semibold mb-4 text-blue-400">{title}</h3>
    <div className="chart-container h-64">{children}</div>
  </div>
);

const Finding = ({ iconColor, text }) => (
  <div className="flex items-start space-y-4">
    <div className="flex-shrink-0 mt-1">
      <div className={`h-5 w-5 rounded-full ${iconColor} flex items-center justify-center`}>
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
      <p className="text-gray-300">{text}</p>
    </div>
  </div>
);

export default SalesSummary;