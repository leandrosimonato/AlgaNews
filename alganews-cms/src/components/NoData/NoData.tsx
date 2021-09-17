import * as DA from './NoData.styles';

export interface NoDataProps {
  height?: number;
}

export default function NoData({ height = 120 }: NoDataProps) {
  return <DA.NodataWrapper height={height}>
    <DA.Message>Sem dados para exibir</DA.Message>
    <DA.SadFace>:(</DA.SadFace>
  </DA.NodataWrapper>
}

