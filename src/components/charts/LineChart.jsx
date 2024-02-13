import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Filler } from "chart.js";

ChartJS.register(CategoryScale, LineElement, PointElement, LinearScale, Title, Filler)
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    animations: {
      tension: {
        duration: 3000,
        easing: 'linear',
        from: 0.5,
        to: 0,
        loop: true
      }
    }
  };

const LineChart = ({data}) => {
    return (
        <div style={{width:'90%', margin: 'auto'}}>
                <Line options={options} data={data}></Line>
        </div>
    )
}

export default LineChart;