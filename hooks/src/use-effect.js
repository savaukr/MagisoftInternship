import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const App = () => {
	const [value, setValue ] =  useState(0);
	const [visible, setVisible ] = useState(true);
	if (visible) {
		return (
			<div>
				<button onClick={ ()=>setValue((v)=>v+1) }>+</button>
				<button onClick={()=>setVisible(false)}>hide</button>
				{/*<ClassCounter value={value}/>*/}
				{/*<HookCounter value={value}/>*/}
				<Notification/>
			</div>
		)
	}	else {
		return <button onClick={()=> setVisible(true)}>show</button>
	} 
}

class ClassCounter extends Component {
	componentDidMount() {
		console.log('class: mount')
	}
	componentDidUpdate(props) {
		console.log('class: update');
	}
	componentWillUnmount() {
		console.log('class: unmount')
	}
	render() {
		return <p>Class counter: {this.props.value}</p>
	}
}
const HookCounter = ({value}) => {
	const [messageVie, setMessageVie] = useState('block')
	useEffect(()=> {
		console.log('useEffect - didMount');
		return ()=>console.log('clear mount')
	}, [])
	useEffect(()=> {
		console.log('useEffect - didUpdate');
		return ()=>console.log('clear update')
	}, [value])
	
	return (
		<>
			<p>Hook counter: {value}</p>
			<p style={{ display:`${messageVie}`, fontSize:'25px' }}>Visible message</p>
			<button onClick={()=>{
				setMessageVie( (prevVie)=>{return  prevVie === 'block' ? 'none': 'block'})
			}}>hide message</button>
		</>
	)
}

const Notification = () => {
	const [vie, setVie]= useState('block')
	useEffect(()=>{
		const timeout = setTimeout(() => setVie('none'), 3000);
		return ()=> clearTimeout(timeout);
	}, [])
	return <div>
		<p style={{display:`${vie}`}}>New message</p>
	</div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
