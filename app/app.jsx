var React = require('react');
var ReactDOM = require('react-dom');
//Destructuring syntax for initalizing multiple variables
//How it works?
// var Route = require('react-router.Route'); or var Router = require('react-router.Router');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//Making Router or configuring URLs
var Main = require('Main');

ReactDOM.render(
	<Router history = {hashHistory} >
		//Root of our Application
		<Route path ="/" component={Main}>

		</Route>
	</Router>,
	document.getElementById('app')
);
