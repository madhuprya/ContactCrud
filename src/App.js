import React, {
    Component
  } from 'react';
import ContactDetail from './ContactDetail';
import contacts from './contacts.json';
// import AddContact from './AddContact';

localStorage.setItem('contactList', JSON.stringify(contacts));
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: JSON.parse(localStorage.getItem('contactList'))
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
    render() {
        return (
            <div className="App">
                <h1>
                    Contact List
                </h1>
                {/* <AddContact
                    /> */}
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

            </div>
        );
    }
}

export default App;