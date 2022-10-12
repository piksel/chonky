
import './App.scss';
import { Section} from '../components';

import { ChipsExample } from './ChipsExample';
import { ColorsExample } from './ColorsExample';
import { ButtonsExample } from './ButtonsExample';
import { TextboxesExample } from './TextboxesExample';
import { RadioExample } from './RadioExample';
import { TableExample } from './TableExample';
import { DialogsExample } from './DialogsExample';



function App() {

  return (
    <div className="App">

      <Section collapsible open header="Buttons">
          <ButtonsExample />
      </Section>

      <Section collapsible header="Radio Buttons">
        <RadioExample />
      </Section>

      <Section collapsible header="Textboxes">
        <TextboxesExample />
      </Section>

      <Section collapsible header="Chips">
        <ChipsExample />
      </Section>

      <Section collapsible open header="Colors">
        <ColorsExample />
      </Section>

      <Section collapsible open header="Dialogs">
        <DialogsExample />
      </Section>

      <Section collapsible header="Table">
        <TableExample />
      </Section>
    </div>
  );
}



export default App;
