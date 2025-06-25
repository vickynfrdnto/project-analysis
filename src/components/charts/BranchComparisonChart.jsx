import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BranchComparisonChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // FIX 1: Pastikan canvas ada dan punya ukuran
    if (!canvas) return;
    canvas.height = canvas.offsetHeight || 400; // fallback tinggi jika kosong

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // FIX 2: destroy chart sebelumnya jika ada
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // FIX 3: Buat radar chart
    chartRef.current = new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Banten", "Sumut", "Bengkulu", "Jatim", "Jakarta", "Sulsel", "Jabar"],
        datasets: [
          {
            label: "Stock",
            data: [15.83, 8.76, 8.11, 7.21, 6.55, 5.49, 4.3],
            backgroundColor: "rgba(96, 165, 250, 0.2)",
            borderColor: "rgba(96, 165, 250, 1)",
            borderWidth: 2,
          },
          {
            label: "Sales",
            data: [13.8, 9, 8, 6.5, 5.2, 4.8, 3.7],
            backgroundColor: "rgba(34, 197, 94, 0.2)",
            borderColor: "rgba(34, 197, 94, 1)",
            borderWidth: 2,
          },
          {
            label: "Purchases",
            data: [12, 8, 7, 6.2, 5.9, 4.5, 3.8],
            backgroundColor: "rgba(168, 85, 247, 0.2)",
            borderColor: "rgba(168, 85, 247, 1)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // FIX 4: Jangan pakai aspectRatio
        elements: {
          line: {
            tension: 0.3,
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#ddd",
            },
          },
        },
        scales: {
          r: {
            angleLines: {
              color: "#666",
            },
            grid: {
              color: "#444",
            },
            pointLabels: {
              color: "#ccc",
            },
            ticks: {
              color: "#ccc",
              backdropColor: "transparent",
            },
          },
        },
      },
    });

    // FIX 5: Destroy chart saat unmount
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

export default BranchComparisonChart;