import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Particles from 'react-particles-js';
import configs from './particleJSconfig.json';
import moon from './assets/moonpng.png';
import meteor from './assets/meteor2.png';

import Navbar from './components/navbar/Navbar';
import Routes from './components/Routes';

import './App.css';

class App extends Component {


	componentDidMount() {
		this.canvas = document.querySelector('.canvasWrapper');
		this.body = document.body;
		this.html = document.documentElement;
		this.updateCanvasHeight();
		this.checkForUpdate = setInterval(this.updateCanvasHeight, 3000);
	}

	componentWillUnmount() {
		clearInterval(this.checkForUpdate);
	}

	updateCanvasHeight = () => {
		let ht = Math.max( this.body.scrollHeight, this.body.offsetHeight, this.html.clientHeight, this.html.scrollHeight, this.html.offsetHeight );
		this.canvas.style.height = `${ht}px`;
	}

	render() {
	  	return (
		  	<BrowserRouter>
		  		<img src={moon} className="moon" />
		  		<img src={meteor} className="meteor" />

		  		<Navbar />

		        <Particles 
		            params={configs}
		            className = "canvasWrapper"
		        />

		        <Routes />
		    </BrowserRouter>
		);
	}
}

export default App;
