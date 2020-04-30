import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
	return (
		<div>
			
		</div>
	)
}
const Child =()=> {
	return (
		<p>{value}</p>
	)
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
