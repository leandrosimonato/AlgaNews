import { Line } from 'react-chartjs-2';
import Heading from '../Typography/Heading';
import * as CH from './Chart.styles'

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Receitas',
      data: [500, 400, 600, 100, 800, 20],
      fill: true,
      backgroundColor: '#0099FF',
      borderColor: '#0099FF',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
    {
      label: 'Despesas',
      data: [100, 200, 250, 500, 1000, 600],
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#274060',
      yAxisID: 'cashflow',
    },
  ],
};

const options: Chart.ChartOptions = {
  maintainAspectRatio: true,
  elements: {
    line: {
      tension: 0
    }
  },
  legend: {
    display: true,
    position: 'bottom',
    align: 'center',
    labels: {
      usePointStyle: true,
    },
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false,
        }
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: false,
        position: 'left',
        id: 'cashflow',
      }
    ],
  },
};

export interface ChartProps {}

export default function Chart() {
  return (
    <CH.ChartWrapper style={{ width: 700}}>
      <div style={{ marginBottom: 16 }}>
        <Heading level={3}>
          {'Média de performance nos útimos 12 meses'}
        </Heading>
      </div>
      <Line type='line' height={139} width={600} data={data} options={options} />
    </CH.ChartWrapper>
  );
}

