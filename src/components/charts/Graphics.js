export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: "null",
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 0.5,
        to: 0,
        loop: true
      }
    }
  };

export let data = {
    labels: [], 
    datasets: [
      {
        label: "",
        data: [],
       // tension: 0.5
      },
    ],
  };