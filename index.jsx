import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
import 'weui';

const {Button} = WeUI;

class App extends React.Component{
	render(){
		return(
			<Button type="warn" size="normal">hello</Button>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.querySelector('#root')
)