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
        const {first_name,avatar_url, last_name, phone } = this.props;
        return (
            <ul className="list">
                <li><img src={avatar_url} alt="avatar"></img></li>
                <li>{first_name}</li>
                <li>{last_name}</li>
                <li>{phone}</li>
                <button onClick={this.onClick}>Delete</button>
            </ul>
        );
    }
}

export default ContactDetail;