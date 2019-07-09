import React, {
    Component
  } from 'react';
  import './style.css';
import UpdateContact from './UpdateContact';

class ContactDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            props: this.props
        }
    }
    onClick = () => {
        const {onDelete , first_name} = this.props; 
        onDelete(first_name);
    }
    onEdit = () => {
            this.setState({
            isEdit: true,
        })
    }
    afterEdit = () => {
        this.setState({
        isEdit: false,
    })
}
  
    render() {

        const {first_name, avatar_url, phone } = this.props;
        return (
                <li className="list">
                    {
                        this.state.isEdit 
                        ? (
                          <UpdateContact
                          contact={this.state.props}
                          edit={this.afterEdit}
                          />                        
                        )
                        :(
                            <div className="flex">
                                <img src={avatar_url} alt={first_name} height="42"></img>
                                <p>{first_name}</p>
                                <p>{phone}</p>
                                <button onClick= {this.onEdit}>Edit</button>
                                <button onClick={this.onClick}>Delete</button>
                                <br></br><hr></hr>
                            </div>
                        )
                    }
                   
                </li>
        );
    }
}

export default ContactDetail;