import React, {
    Component
  } from 'react';
import ContactDetail from './ContactList';
import contacts from './contacts.json';
import AddContact from './AddContact';

localStorage.setItem('contactList', JSON.stringify(contacts));
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: JSON.parse(localStorage.getItem('contactList')),
            showAddContact: false
        };
        this.onDelete = this.onDelete.bind(this);
    }
    componentWillMount(){
        const contacts = this.getProducts();
        this.setState({contacts});
    }
    getProducts(){
        return this.state.contacts;
    }
    onDelete(name){
        const contacts = this.getProducts();
        const filterContacts = contacts.filter(contact => {
            return contact.first_name !== name; 
        });
        this.setState({contacts:filterContacts});
    }
    toggleAddContact = ()=> {
        this.setState({
            
            showAddContact: !this.state.showAddContact
        });
    }
    onSave = (contact) =>{
        const contacts = this.getProducts();
        alert(contact.avatar_url);
        contact["id"]= this.state.contacts.length + 1;
        contacts.push(contact);
        this.setState({contacts})
    }
    render() {
        return (
            <div className="App">
                <h1>
                    Contact List
                </h1>
                <button className="add" onClick={this.toggleAddContact}>Add Contact</button>
                <ul className="contact-list">
                    <li className="head">
                        <p>Profile Image</p>
                        <p>First Name</p>
                        <p>Phone</p>
                        <p>Details</p>
                        <p>Edit</p>
                        <p>Delete</p>
                    </li>
                {
                    this.state.contacts.map(contact => {
                        return(
                            <ContactDetail
                                key={contact.id}
                                {...contact}
                                onDelete={this.onDelete}
                            />             
                        );
                    })
                }
                </ul>
                {this.state.showAddContact ? 
                    <AddContact
                    saveAndClose={this.togglePopup}
                    onSave={this.onSave}
                    />
                    : null
                }
            </div>
        );
    }
}

export default App;