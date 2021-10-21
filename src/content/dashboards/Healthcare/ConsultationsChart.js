import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from '@material-ui/core';

const ConsultationsChart = ({ data: dataProp, ...rest }) => {
  const theme = useTheme();

  const data = {
    datasets: dataProp.datasets.map((dataset) => ({
      ...dataset,
      borderColor: theme.palette.common.white,
      hoverBorderColor: theme.palette.common.white,
      borderWidth: 10,
      hoverBorderWidth: 10
    })),
    labels: dataProp.labels
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 70,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    tooltips: {
      enabled: true,
      caretSize: 6,
      displayColors: false,
      mode: 'label',
      intersect: true,
      yPadding: 8,
      xPadding: 16,
      borderWidth: 4,
      bodySpacing: 10,
      borderColor: theme.palette.common.black,
      backgroundColor: theme.palette.common.black,
      titleFontColor: theme.palette.common.white,
      bodyFontColor: theme.palette.common.white,
      footerFontColor: theme.palette.common.white,
      callbacks: {
        label(tooltipItem, _data) {
          const label = _data.labels[tooltipItem.index];
          const value = _data.datasets[0].data[tooltipItem.index];

          return `${label}: ${value} appointments`;
        }
      }
    }
  };

  return <Doughnut data={data} options={options} {...rest} />;
};

ConsultationsChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default ConsultationsChart;
