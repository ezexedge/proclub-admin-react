import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const UsageChart = ({ data: dataProp, ...rest }) => {
  const data = {
    datasets: dataProp.datasets.map((dataset) => ({
      ...dataset,
      borderWidth: 0,
      hoverBorderWidth: 0
    })),
    labels: dataProp.labels
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 60,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    tooltips: {
      enabled: false
    }
  };

  return <Doughnut data={data} options={options} {...rest} />;
};

UsageChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default UsageChart;
