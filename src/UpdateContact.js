import React, {
    Component
  } from 'react';
  import './style.css';

class UpdateContact extends Component {
    constructor(props){
        super(props);
        this.state = {
            cont: this.props.onEdit,
            avatar_url: this.props.onEdit.avatar_url,
            first_name: this.props.onEdit.first_name,
            last_name: this.props.onEdit.last_name,
            email: this.props.onEdit.email,
            phone: this.props.onEdit.phone
        }
        console.log(this.state.cont)
    }
    onUpdate = (event) => {
        const target = event.target;    
        this.setState({
          [target.name]: target.value
        });
    }
    onUpdateSubmit = (event) => {
        console.log(this.props.id);
        event.preventDefault();
        const contact = {
            id: this.props.onEdit.id,
            first_name : this.state.first_name , 
            last_name: this.state.last_name , 
            email: this.state.email , 
            avatar_url: this.state.avatar_url , 
            phone: this.state.phone
        } 
        this.props.updateSubmit(contact);
        this.props.afterEdit();
    }
    render() {
        return (
            <form onSubmit={this.onUpdateSubmit} className="update-form">
                    <select value={this.state.avatar_url} name="avatar_url" onChange={this.onUpdate} id="save">
                        <option value="https://robohash.org/iustoautemfacere.png?size=100x100&set=set1">avatar1</option>
                        <option value="https://robohash.org/temporibusilloamet.png?size=100x100&set=set1">avatar2</option>
                        <option value="https://robohash.org/etquiaquia.png?size=100x100&set=set1">avatar3</option>
                        <option value="https://robohash.org/quistemporeconsequatur.png?size=100x100&set=set1">avatar4</option>
                    </select>
                    <img src={this.state.avatar_url} alt="abc" height="42" width="42" id="u-img"></img>  
                    <input name="first_name" type="text" value={this.state.first_name} placeholder="first name" onChange={this.onUpdate} />
                    <input name="last_name" type="text" value={this.state.last_name} placeholder="last name" onChange={this.onUpdate} />
                    <input name="email" type="email" value={this.state.email} placeholder="email" onChange={this.onUpdate} />
                    <input name="phone" type="text" placeholder="phone no" value={this.state.phone} onChange={this.onUpdate} />
                    <input id="save" type="submit" value="Save" />          
                    <hr></hr>
            </form>
        );
    }
}

export default UpdateContact;