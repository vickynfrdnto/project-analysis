import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ComparisonChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Stock", "Sales", "Purchases"],
        datasets: [
          {
            label: "Units",
            data: [479558, 402076, 274446],
            backgroundColor: ["#8b5cf6", "#22c55e", "#3b82f6"],
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (ctx) =>
                `${ctx.label}: ${ctx.raw.toLocaleString()} units`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: "#9ca3af",
              callback: (val) => val.toLocaleString(),
            },
            grid: {
              color: "#374151",
            },
          },
          x: {
            ticks: {
              color: "#9ca3af",
            },
            grid: {
              color: "#374151",
            },
          },
        },
        animation: {
          duration: 2000,
        },
      },
    });

    return () => chartRef.current?.destroy();
  }, []);

  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default ComparisonChart;