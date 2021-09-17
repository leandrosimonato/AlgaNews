import * as CC from './CircleChart.styles'

export interface CircleChartProps {
  size: number;
  progress: number;
  caption?: string;
  theme?: 'default' | 'primary';
  strokeWidth?: number;
}

function CircleChart(props: CircleChartProps) {
  return <CC.Wrapper>
    todo: Circle Chart
  </CC.Wrapper>
}


export default CircleChart;