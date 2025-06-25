import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const MovementSalesChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Stock Value", "Monthly Sales"],
        datasets: [
          {
            label: "FAST MOVING",
            data: [58.9, 72.4],
            backgroundColor: "rgba(16, 185, 129, 0.2)",
            borderColor: "#10b981",
            pointBackgroundColor: "#10b981",
            borderWidth: 2,
            pointRadius: 5
          },
          {
            label: "SLOW MOVING",
            data: [41.1, 27.6],
            backgroundColor: "rgba(245, 158, 11, 0.2)",
            borderColor: "#f59e0b",
            pointBackgroundColor: "#f59e0b",
            borderWidth: 2,
            pointRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: "#e5e7eb", font: { size: 12 } }
          },
          tooltip: {
            callbacks: {
              label: ctx => `${ctx.dataset.label}: ${ctx.raw}%`
            }
          }
        },
        scales: {
          r: {
            angleLines: { color: "#374151" },
            grid: { color: "#374151" },
            pointLabels: { color: "#9ca3af" },
            ticks: {
              color: "#9ca3af",
              backdropColor: "transparent"
            }
          }
        },
        animation: { duration: 2000 }
      }
    });

    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
};

export default MovementSalesChart;