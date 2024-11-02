console.log("chart2.js loaded");
const ctc = document.getElementById("doughnut").getContext("2d");

new Chart(ctc, {
  type: "doughnut",
  data: {
    labels: ["Academic", "Non-academic", "Administration", "Others"],
    datasets: [
      {
        label: "Employees",
        data: [42, 12, 8, 6],
        backgroundColor: [
          "rgba(41,155,99,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(120,46,139,1)",
        ],
        borderColor: [
          "rgba(41,155,99,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(120,46,139,1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
