import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const MonthlyTrendChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ✅ Destroy chart sebelumnya jika ada
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // ✅ Inisialisasi Chart.js
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["April", "May", "June"],
        datasets: [
          {
            label: "Sales",
            data: [130000, 145000, 127000],
            borderColor: "#22c55e",
            backgroundColor: "rgba(34, 197, 94, 0.2)",
            fill: true,
            tension: 0.4,
          },
          {
            label: "Purchases",
            data: [88000, 91000, 97500],
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#e5e7eb", // 💡 warna label untuk dark mode
              font: {
                size: 12,
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) =>
                `${ctx.dataset.label}: ${ctx.raw.toLocaleString()} units`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: false,
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

    // ✅ Destroy chart saat unmount
    return () => {
      chartRef.current?.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default MonthlyTrendChart;