import logo from './logo.svg';
import './App.css';
import './getYear';
import { getYear } from './getYear';
import { createElement } from 'react';

function App() {
	let currentYear = getYear();
  return (
  	 createElement(
		 "div",
		 { className: "App" },
      createElement(
			"header",
			{ className:"App-header" },
        createElement("img", { src: logo, className:"App-logo", alt: "logo" }),
			createElement("p", null, "Edit src/App.js and save to reload"),
			createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank",
			rel: "nooperer noreferrer"}, "Lern React"),
			createElement("p", null, currentYear),
        createElement("h1", null, "Гаврила был примерным мужем")
			)
		 )
	);
};
export default App;
