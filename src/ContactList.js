import React, {
    Component
  } from 'react';
  import './style.css';

class ContactDetail extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        const {onDelete , first_name} = this.props; 
        onDelete(first_name);
    }
    render() {
        const {first_name,avatar_url, phone } = this.props;
        return (
                <li className="list">
                    <img src={avatar_url} alt={first_name} height="42"></img>
                    <p>{first_name}</p>
                    <p>{phone}</p>
                    <button onClick={this.onClick}>Details</button>
                    <button onClick={this.onClick}>Edit</button>
                    <button onClick={this.onClick}>Delete</button>
                </li>
        );
    }
}

export default ContactDetail;