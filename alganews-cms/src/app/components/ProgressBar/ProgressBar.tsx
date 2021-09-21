import * as PB from './ProgressBar.styles'

export interface ProgressBarProps {
  title: string;
  progress: number;
  theme: 'primary' | 'secondary';
  width?: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <PB.ProgressBarWrapper style={{ width: props.width || 'auto' }}>
      <PB.TextShadow progress={props.progress} theme={props.theme}>
        {props.title}
      </PB.TextShadow>
      <PB.CurrentProgress progress={props.progress} theme={props.theme}>
        <span>{props.title}</span>
      </PB.CurrentProgress>
    </PB.ProgressBarWrapper>
  );
}


