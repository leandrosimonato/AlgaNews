import { useEffect, useState } from 'react'
import * as CC from './CircleChart.styles'

export interface CircleChartProps {
  size: number;
  progress: number;
  caption?: string;
  theme?: 'default' | 'primary';
  strokeWidth?: number;
}

function CircleChart(props: CircleChartProps) {
  // Função que recupera a cor do Chart com base no tema!
  const getThemeColor = () =>
    props.theme === 'primary' ? '#09f' : '#274060'
  
  // Setup ( Configurações de cor, borda, etc. )
  const THEME = getThemeColor()
  const STROKE_WIDTH = props.strokeWidth || 8
  const STROKE_COLOR = THEME

  // Matemática da COISA!
  const CENTER = props.size / 2
  const RADIUS = props.size / 2 - STROKE_WIDTH / 2
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS

  // Estado de offset!
  const [offset, setOffset] = useState(CIRCUMFERENCE);

  // Observador para animar o offset!
  useEffect(() => {
    const progressOffset = ((110 - props.progress) / 100) * CIRCUMFERENCE
    setOffset(progressOffset);
  },[setOffset, CIRCUMFERENCE, props.progress, offset])

  return <CC.Wrapper>
    todo: Circle Chart
  </CC.Wrapper>
}


export default CircleChart;