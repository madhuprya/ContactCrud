
import React, {
    Component
  } from 'react';
class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar_url: "https://robohash.org/quistemporeconsequatur.png?size=100x100&set=set1",
            first_name: '',
            last_name: '',
            email: '',
            phone: 0
        };
      }
    
      handleChange=(event)=> {
        const target = event.target;

        this.setState({
            [target.name]:target.value
        });
      }
    
      handleSubmit = (event) => {
        const {onSave} = this.props; 
        event.preventDefault();
        const contact = {
            first_name : this.state.first_name , 
            last_name: this.state.last_name , 
            email: this.state.email , 
            avatar_url: this.state.avatar_url , 
            phone: this.state.phone
        }
        onSave(contact);
      }
    

    
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="contact-form">
               <hr></hr>
                <label id="profile">
                    <div id="prof-img">
                    <select value={this.state.avatar_url} name="avatar_url" onChange={this.handleChange} id="save">
                        <option value="https://robohash.org/iustoautemfacere.png?size=100x100&set=set1">avatar1</option>
                        <option value="https://robohash.org/temporibusilloamet.png?size=100x100&set=set1">avatar2</option>
                        <option value="https://robohash.org/etquiaquia.png?size=100x100&set=set1">avatar3</option>
                        <option value="https://robohash.org/quistemporeconsequatur.png?size=100x100&set=set1">avatar4</option>
                    </select>
                    <img src={this.state.avatar_url} alt="abc"></img>  
                    <input id="save" type="submit" value="Submit" />             
                    </div> 
                </label>
                <div id="form">
                    <input name="first_name" type="text" value={this.state.first_name} placeholder="first name" onChange={this.handleChange} />
                    <input name="last_name" type="text" value={this.state.last_name} placeholder="last name" onChange={this.handleChange} /> 
                    <input name="email" type="email" value={this.state.email} placeholder="email" onChange={this.handleChange} />
                    <input name="phone" type="number" placeholder="phone no" value={this.state.phone} onChange={this.handleChange} />
                </div>
                <hr></hr>
            </form>
        );
    }
}

export default AddContact;