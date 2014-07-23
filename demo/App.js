/** @jsx React.DOM */
'use strict';
var React = require('react');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Header = require('./Header');
var Multiselect = require('../index.js');
var fileContent = require('./AppContent').content;

var App = React.createClass({
	getInitialState: function () {
		var large = [];
		for (var i = 0; i < 100; i++) {
			large.push({value: 'Item ' + i});
		}
		return {
			groups: [
				{title:'Group One',children:[{value:'One'},{value:'Two'},{value:'Three'},{value:'Four',label:'Four Label'}]},
				{title:'Group Two',children:[{value:'One'},{value:'Two'},{value:'Three'},{value:'Four',label:'Four Label'}]},
				{title:'Group Three',children:[{value:'One'},{value:'Two'},{value:'Three'},{value:'Four',label:'Four Label'}]}
			],
			large: large,
			list: [{value:'One',selected:true},{value:'Two'},{value:'Three'},{value:'Four',label:'Four Label'}]
		};
	},
	handleChange: function () {
		this.setState({
			list: [{value:'One'},{value:'Two'},{value:'Three'},{value:'Four',label:'Four Label'}]
		});
	},
	render: function () {
		return (
			<Grid>
				<Header />
				<Row>
					<Col md={3}>
						<h2>Demo:</h2>
						<h4>no optgroups:</h4>
						<Multiselect onChange={this.handleChange} data={this.state.list} multiple />
						<h4>with optgroups:</h4>
						<Multiselect onChange={this.handleChange} data={this.state.groups} multiple />
						<h4>single select:</h4>
						<Multiselect onChange={this.handleChange} data={this.state.groups} />
						<h4>large list:</h4>
						<Multiselect onChange={this.handleChange} data={this.state.large} multiple />
					</Col>
					<Col md={9}>
						<h2>Demo Source Code:</h2>
						<textarea className="form-control" style={{width:'100%',height:'500px'}} readOnly value={fileContent} />
					</Col>
				</Row>
			</Grid>
		);
	}
});

// init our demo app
React.renderComponent(<App />, document.getElementById('app'));

// we are using browserify. setup the browser.
exports.React = window.React = React;
