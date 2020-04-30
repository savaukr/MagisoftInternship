import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const HookSwitcher = ()=> {
	const [ backgrColor, setBackgrColor ] = useState('gray');
	const [fontSize, setFontSize ] = useState(14);
	return (
		<div style = {{padding: '10px',
					 width: '300px',
					 background: backgrColor,
					 fontSize: `${fontSize}px`}}>
			Hello World!
			<button onClick={() => setBackgrColor('black')}>Dark</button>
			<button onClick={() => setBackgrColor('white')}>Light</button>
			<button onClick={()=> setFontSize((prevS)=>prevS+2)}>Increase font</button>
		</div>
	)
}
const App = () => {
	return (
		<div>
			<HookSwitcher/>
		</div>
	)
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
