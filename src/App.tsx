import React from 'react';

import './App.css';
import { Button, Radio } from './components';

function App() {
  return (
    <div className="App">
      <h3 style={{marginTop: '4px'}}>Buttons</h3>
<div style={{minHeight: '60px', padding: '10px'}}>
      <Button primary>Primary</Button>
      <Button>Not as important</Button>
      </div>

      <h3 style={{marginTop: '4px'}}>Radio Buttons</h3>
<div style={{borderRadius: '3px', background: '#eae7e1', border: '1px solid #d0c7b6', maxWidth: '400px', textAlign: 'left', margin: '20px', padding: '20px'}}>
      <h3 style={{marginTop: '4px'}}>Very imortant questions</h3>
      <label>How do you feel about cookies?</label>

      <Radio initial="">
        <Radio.Button value="love">Love 'em</Radio.Button>
        <Radio.Button value="hate">Hate 'em</Radio.Button>
        <Radio.Button value="other">Ask me later</Radio.Button>
      </Radio>

    </div>
    </div>
  );
}



export default App;
