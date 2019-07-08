import React, {
    Component
  } from 'react';
import ContactDetail from './ContactList';
import contacts from './contacts.json';
import AddContact from './AddContact';

localStorage.setItem('contactList', JSON.stringify(contacts));
const cont = JSON.parse(localStorage.getItem('contactList'));
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: cont,
            showAddContact: false,
            search: ''
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
        // alert(contact.avatar_url);
        contact["id"]= this.state.contacts.length + 1;
        contacts.unshift(contact);
        this.setState({contacts,showAddContact: !this.state.showAddContact})
    }
    updateSubmit =(con) => {
        console.log(con)
        // alert(con.first_name);
        let contacts = this.getProducts();
        contacts = contacts.map(contact => {
            if(contact.id === con.id){
                contact = {...con} ;
            }
            return contact; 
        })

        this.setState({contacts})
    }
    onSearch = (event) => {
        this.setState({
            search: event.target.value
        })
        console.log(this.state.search);
    }
    render() {
        let filterContact = this.state.contacts.filter((contact) => {
            return contact.first_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });

        return (
            <div className="App">
                <h1>
                    Contact List
                </h1>
                <input type="search" placeholder="search name" className="search" value={this.state.search} onChange={this.onSearch}></input>
                <button className="add" onClick={this.toggleAddContact}>Add Contact</button>
                {this.state.showAddContact ? 
                    <AddContact
                    onSave={this.onSave}
                    />
                    : null
                }
                <ul className="contact-list">
                {
                    filterContact.map(contact => {
                        return(
                            <ContactDetail
                                key={contact.id}
                                {...contact}
                                onDelete={this.onDelete}
                                updateSubmit={this.updateSubmit}
                            />             
                        );
                    })
                }
                </ul>
              
            </div>
        );
    }
}

export default App;