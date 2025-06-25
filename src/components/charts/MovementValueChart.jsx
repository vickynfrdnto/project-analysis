import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const MovementValueChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["FAST MOVING", "SLOW MOVING"],
        datasets: [{
          label: "Stock Value (Rp)",
          data: [8087044419, 5628919447],
          backgroundColor: ["#10b981", "#f59e0b"],
          borderColor: ["#047857", "#d97706"],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                const percent = Math.round(ctx.raw * 100 / total);
                return `Rp ${(ctx.raw / 1e9).toFixed(2)}B (${percent}%)`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: "#9ca3af",
              callback: val => `Rp ${(val / 1e9).toFixed(1)}B`
            },
            grid: { color: "#374151" }
          },
          x: {
            ticks: { color: "#9ca3af" },
            grid: { color: "#374151" }
          }
        },
        animation: { duration: 2000 }
      }
    });

    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
};

export default MovementValueChart;