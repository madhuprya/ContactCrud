import React, {
    Component
  } from 'react';
  import './style.css';

class ContactDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            avatar_url: this.props.avatar_url,
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            email: this.props.email,
            phone: this.props.phone
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        const {onDelete , first_name} = this.props; 
        onDelete(first_name);
    }
    onUpdate = (event) => {
        const target = event.target;    
        this.setState({
            isEdit: true,
          [target.name]: target.value
        });
    }
    onUpdateSubmit = (event) => {
        console.log(this.props.id);
        event.preventDefault();
        const contact = {
            id: this.props.id,
            first_name : this.state.first_name , 
            last_name: this.state.last_name , 
            email: this.state.email , 
            avatar_url: this.state.avatar_url , 
            phone: this.state.phone
        } 
        this.props.updateSubmit(contact);
        this.setState({
            isEdit: false,
            
        });
    
    }
    render() {

        const {first_name, avatar_url, phone } = this.props;
        return (
                <li className="list">
                    {
                        this.state.isEdit 
                        ? (
                            <form onSubmit={this.onUpdateSubmit} id="form">
                                    <select value={this.state.avatar_url} name="avatar_url" onChange={this.onUpdate} id="save">
                                        <option value="https://robohash.org/iustoautemfacere.png?size=100x100&set=set1">avatar1</option>
                                        <option value="https://robohash.org/temporibusilloamet.png?size=100x100&set=set1">avatar2</option>
                                        <option value="https://robohash.org/etquiaquia.png?size=100x100&set=set1">avatar3</option>
                                        <option value="https://robohash.org/quistemporeconsequatur.png?size=100x100&set=set1">avatar4</option>
                                    </select>
                                    <img src={this.state.avatar_url} alt="abc" height="42" width="42"></img>  
                                    <input name="first_name" type="text" value={this.state.first_name} placeholder="first name" onChange={this.onUpdate} />
                                    <input name="last_name" type="text" value={this.state.last_name} placeholder="last name" onChange={this.onUpdate} />
                                    <input name="email" type="email" value={this.state.email} placeholder="email" onChange={this.onUpdate} />
                                    <input name="phone" type="text" placeholder="phone no" value={this.state.phone} onChange={this.onUpdate} />
                                    <input id="save" type="submit" value="Save" />             
                            </form>
                        )
                        :(
                            <div>
                                <img src={avatar_url} alt={first_name} height="42"></img>
                                <p>{first_name}</p>
                                <p>{phone}</p>
                                <button onClick={ (event) => {this.onUpdate(event)}}>Edit</button>
                                <button onClick={this.onClick}>Delete</button>
                            </div>
                        )
                    }
                   
                </li>
        );
    }
}

export default ContactDetail;