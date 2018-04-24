import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const homeUrl = "http://events.restdesc.org/";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {data: []}
    }

    loadData(){
        fetch(homeUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({data: data})
            })
            .catch(err => console.error(this.props.url, err.toString()))
    }


    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to the event planner extravaganza</h1>
                </header>
                <p className="App-intro">
                    <ul><a href={this.state.data.events}>events</a></ul>
                    <ul><a href={this.state.data.people}>people</a></ul>
                </p>
            </div>
        );
    }
}


export default App;
