import React, {Component} from 'react'

import './additem.css'

export default class AddItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {
        return (
            <form className="item__add-form d-flex"
            onSubmit={this.onSubmit}>
                <input type="text" 
                className='form-control'
                onChange={this.onLabelChange}
                placeholder="input me"
                value={this.state.label}/>
                <button 
                className="btn btn__additem"
                >AddItem</button>
            </form>
        )
    }
}