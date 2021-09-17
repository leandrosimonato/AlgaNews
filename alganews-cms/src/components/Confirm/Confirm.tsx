import * as COM from './Confirm.styles'
import Button from '../Button/Button';

export interface ConfirmProps {
  title: string;
  onConfirm: () => any;
  onCancel: () => any;
}

export default function Confirm(props: ConfirmProps) {
  return (
    <COM.ConfirmWrapper>
      <COM.ConfirmTitle>{props.title}</COM.ConfirmTitle>
      <COM.ConfirmButtonDisplay>
        <Button variant='danger' label='Não' onClick={props.onCancel} />
        <Button variant='primary' label='Sim' onClick={props.onConfirm} />
      </COM.ConfirmButtonDisplay>
    </COM.ConfirmWrapper>
  );
}

