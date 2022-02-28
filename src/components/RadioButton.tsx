
import React, { ReactElement, useContext, useState } from 'react';
import { StateTuple } from '../types';
import './RadioButton.scss'

interface RadioButtonsState { selected: string }
type RadioButtonsContextValue = StateTuple<RadioButtonsState>
const RadioButtonsContext = React.createContext<RadioButtonsContextValue>([{selected: ""}, () => {}])

interface RadioButtonsProps {initial: string,children:ReactElement<RadioButtonProps>[]}
export const RadioButtons: React.FC<RadioButtonsProps> = (props) => {

  const [state, setState] = useState<RadioButtonsState>({selected: props.initial});

  return (
    <RadioButtonsContext.Provider value={[state, setState]}>
      <div className="chy-radiobuttons">
      {props.children}
      </div>
    </RadioButtonsContext.Provider>
  )
}

interface RadioButtonProps { value: string }
type RadioButtonType =  React.FC<RadioButtonProps>;

export const RadioButton: RadioButtonType = (props) => {
  const [state, setState] = useContext(RadioButtonsContext);
  const checked = props.value === state.selected;

  const btnChange = () => {
    console.log("Button changed!", props.value);
    setState(s => s.selected === props.value ? s : {selected: props.value})
  }

  return (<div className={`chy-radiobutton${checked?' checked':''}`}><label>
    <input type="radio" checked={checked} onChange={() => btnChange()} />
    {props.children}
  </label></div>)
}

export const Radio = RadioButtons as (React.FC<RadioButtonsProps> & {Button: RadioButtonType});
Radio.Button = RadioButton;

// export { Radio };