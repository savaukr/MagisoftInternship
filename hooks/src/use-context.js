import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MyContext = React.createContext();


const App = () => {
	return (
		<MyContext.Provider value="Hello world(use Context)">
				<Child />
		</MyContext.Provider>
	)
}
const Child =()=> {
	const value = useContext(MyContext)
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
