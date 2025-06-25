import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BrandValueChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["RELIABLE", "RELIWEAR"],
        datasets: [{
          data: [9475161766, 4240802100],
          backgroundColor: ["#3b82f6", "#8b5cf6"],
          borderColor: ["#1e40af", "#5b21b6"],
          borderWidth: 1
        }]
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
              label: ctx => {
                const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                const percent = Math.round(ctx.raw * 100 / total);
                return `${ctx.label}: Rp ${(ctx.raw / 1e9).toFixed(2)}B (${percent}%)`;
              }
            }
          }
        },
        animation: { animateScale: true, animateRotate: true }
      }
    });

    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
};

export default BrandValueChart;