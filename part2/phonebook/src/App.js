import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filterName, setFilterName] = useState('');

    const addPerson = (event) => {
        event.preventDefault();

        let found = false;
        persons.forEach((person) => {
            if (JSON.stringify(person.name) === JSON.stringify(newName)) {
                alert(`${newName} is already added to the phonebook`);
                found = true;
            }
        });

        if (found) {
            setNewName('');
            setNewNumber('');
            return;
        }

        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        };

        setPersons(persons.concat(personObject));
        setNewName('');
        setNewNumber('');
    };

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const handleFilter = (event) => {
        setFilterName(event.target.value);
    };

    const personsToShow = !filterName
        ? persons
        : persons.filter((person) =>
              person.name.toLowerCase().includes(filterName.toLowerCase())
          );

    return (
        <div>
            <h2>PhoneBook</h2>
            <Filter filter={filterName} handleFilter={handleFilter} />
            <h2>add a new</h2>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            <Persons persons={personsToShow} />
        </div>
    );
};

export default App;
