import { Component } from "react";
import check from './check.jpg';

export class GroceryList extends Component {
    state = {
        userInput: '',
        groceryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
        console.log(e)
    }

    addItem(acc) {
        if(acc === '') {
            alert('Please enter an item')
        } else {
        let listArray = this.state.groceryList;
        listArray.push(acc)
        this.setState({groceryList: listArray, userInput: '' })
        }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        //listArray.length = 0;
        this.setState({groceryList: listArray})
    }

    crossedWord(event) {
        const apple = event.target;
        apple.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                placeholder="What do you want to buy today?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput} />
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={check} width='40px' alt="Check" />
                        {item}
                    </li>
                ))}
            </ul>
            <div className="container">
            <button onClick = {() => this.deleteItem()} className="btn delete">Delete</button>
            </div>
            </form>
            </div>
        )
    }
}