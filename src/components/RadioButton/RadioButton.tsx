
import React, { Dispatch, ReactElement, useContext, useState, useEffect, useRef } from 'react';
import { CommonProps, StateTuple } from '../../types';
import './RadioButton.scss'

interface RadioButtonsState { selected: string }
type RadioButtonsContextValue =  StateTuple<RadioButtonsState>
const RadioButtonsContext = React.createContext<RadioButtonsContextValue>([{selected: ""}, () => {}])

interface RadioButtonCommonProps extends CommonProps {
  size?: 'small' | 'medium' | 'large'
}

interface RadioButtonsProps extends RadioButtonCommonProps {
  value?: string, 
  valueChanged?: Dispatch<string>, 
  children:ReactElement<RadioButtonProps>[],
};
export const RadioButtons: React.FC<RadioButtonsProps> = (props) => {

  const {value, valueChanged} = props;
  const commonProps = {size: props.size};
  const [state, setState] = useState<RadioButtonsState>({selected: value ?? ""});
  const valueRef = useRef(value);

  useEffect(() => {
    if (!valueChanged || valueRef.current === state.selected) return;
    valueChanged(state.selected);
    valueRef.current = state.selected;
  }, [state.selected, valueChanged]);

  useEffect(() => {
    if (value === valueRef.current) return;
    setState(s => ({...s, selected: value ?? ""}));
    valueRef.current = value;
  }, [value, valueRef]);

  return (
    <RadioButtonsContext.Provider value={[state, setState]}>
      <div className="chy-radiobuttons" style={props.style}>
      {props.children.map(c => ({...c, props: {...c.props, ...commonProps }}) )}
      </div>
    </RadioButtonsContext.Provider>
  )
}

interface RadioButtonProps extends RadioButtonCommonProps { value: string }
type RadioButtonType =  React.FC<RadioButtonProps>;

export const RadioButton: RadioButtonType = (props) => {
  const {value, size} = props;
  const [state, setState] = useContext(RadioButtonsContext);
  const checked = props.value === state.selected;

  const btnChange = () => setState(s => s.selected === value ? s : {selected: value});

  return (<div className={`chy-radiobutton${checked?' checked':''}${size?` chy-mod-${size}`:''}`} style={props.style}>
    <label>
      <input type="radio" checked={checked} onChange={() => btnChange()} />
      {props.children}
    </label>
  </div>)
}

export const Radio = RadioButtons as (React.FC<RadioButtonsProps> & {Button: RadioButtonType});
Radio.Button = RadioButton;

// export { Radio };