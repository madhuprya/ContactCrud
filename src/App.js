import React, {
    Component
  } from 'react';
import ContactDetail from './ContactList';
import contacts from './contacts.json';
import AddContact from './AddContact';
import UpdateContact from './UpdateContact';

localStorage.setItem('contactList', JSON.stringify(contacts));
const cont = JSON.parse(localStorage.getItem('contactList'));

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            contacts: cont,
            showAddContact: false,
            search: '',
            editData: null
        };
        this.onDelete = this.onDelete.bind(this);
    }
    onDelete(name){
        const contacts = this.state.contacts;
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
        const contacts = this.state.contacts;
        // alert(contact.avatar_url);
        contact["id"]= this.state.contacts.length + 1;
        contacts.unshift(contact);
        this.setState({contacts,showAddContact: !this.state.showAddContact})
    }
    onEdit = (contact) => {   
        this.setState({
            isEdit: true,
            editData: contact
        })
    }
    afterEdit = () => {
        this.setState({
            isEdit: false,
        })
    }
    updateSubmit =(con) => {
        console.log(con)
        // alert(con.first_name);
        let contacts = this.state.contacts;
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
                <h2>
                    Contact List
                </h2>
                <input type="search" placeholder="search name" className="search" value={this.state.search} onChange={this.onSearch}></input>
                <button className="add" onClick={this.toggleAddContact}>Add Contact</button>
                {this.state.showAddContact ? 
                    <AddContact
                    onSave={this.onSave}
                    />
                    : null
                }
                {
                    this.state.isEdit 
                        ? 
                        <UpdateContact
                        onEdit = {this.state.editData}
                        afterEdit={this.afterEdit}
                        updateSubmit={this.updateSubmit}
                        />                        
                        :  null
                }
               <ul className="contact-list">
                {
                    filterContact.map(contact => {
                        return(
                            <ContactDetail ref="child"
                                key={contact.id}
                                {...contact}
                                onDelete={this.onDelete}
                                updateSubmit={this.updateSubmit}
                                onEdit = {this.onEdit}
                            />             
                        );
                    })
                }
                </ul>
            </div>
        )
    }
}

export default App;