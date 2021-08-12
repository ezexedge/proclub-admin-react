import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { useTheme } from '@material-ui/core';

const ResourcesAlarmChart = ({ data: dataProp, labels, ...rest }) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        label: 'Patients',
        backgroundColor: 'transparent',
        data: dataProp.previous,
        borderColor: theme.palette.primary.main,
        pointBorderWidth: 0,
        pointRadius: 0,
        pointHoverRadius: 0,
        type: 'line'
      },
      {
        label: 'Consultations',
        backgroundColor: 'transparent',
        data: dataProp.current,
        borderColor: theme.colors.error.main,
        pointBorderWidth: 0,
        pointRadius: 0,
        pointHoverRadius: 0,
        lineTension: 0.01
      }
    ],
    labels
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cornerRadius: 6,
    animation: false,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false,
            beginAtZero: true,
            min: 0,
            maxTicksLimit: 5
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            display: false,
            beginAtZero: true,
            min: 0,
            maxTicksLimit: 5
          }
        }
      ]
    },
    tooltips: {
      enabled: false
    },
    hover: {
      mode: 'nearest',
      intersect: true
    }
  };

  return (
    <div {...rest}>
      <Line data={data} options={options} />
    </div>
  );
};

ResourcesAlarmChart.propTypes = {
  data: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired
};

export default ResourcesAlarmChart;
