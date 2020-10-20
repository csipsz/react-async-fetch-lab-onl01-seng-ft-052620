import React, {Component} from 'react'

class App extends Component {

    state = {
        fetchContainer: []
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(obj => this.setState({ fetchContainer: obj.people}) )
    }

    render(){

        const people = this.state.fetchContainer.map((p, id) => <div key={id}>{p.name}</div>)

        return(
        <div>{people}</div>
        )
    }

}

export default App

