import React, {
    Component
  } from 'react';
  import './style.css';

class ContactDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            avatar_url: this.props.avatar_url,
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            email: this.props.email,
            phone: this.props.phone
        }
    }
    onClick = () => {
        const {onDelete , first_name} = this.props; 
        onDelete(first_name);
    }
    onEdit = () => {
        const contact = {
            id: this.props.id,
            first_name : this.state.first_name , 
            last_name: this.state.last_name , 
            email: this.state.email , 
            avatar_url: this.state.avatar_url , 
            phone: this.state.phone
        } 
        this.props.onEdit(contact);
    }
    render() {

        const {first_name, avatar_url, phone } = this.props;
        return (
                <li className="list">
                   
                    {
                        <div className="flex" id="flex">
                            <img src={avatar_url} alt={first_name} height="42"></img>
                            <p>{first_name}</p>
                            <p>{phone}</p>
                            <button onClick= {this.onEdit}>Edit</button>
                            <button onClick={this.onClick}>Delete</button>
                            <br></br><hr></hr>
                        </div>
                    }
                </li>
        );
    }
}

export default ContactDetail;