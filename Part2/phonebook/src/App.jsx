import { useState } from 'react'

const Filter = ({filter, setFilter}) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <form>
      filter shown with <input 
        value={filter}
        onChange={handleFilterChange}
      />
    </form>
  )
}

const PersonForm = ({persons, setPersons, newName, setNewName, newPhone, setNewPhone}) => {
  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find(p => p.name === newName)) {
      alert(`${newName}is already added to phonebook`)
    }
    else {
      const person = {
        name: newName,
        number: newPhone
      }
      setPersons(persons.concat(person))
      setNewName('')
      setNewPhone('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <form onSubmit={addPerson} >
      <div>
        name: <input 
          value={newName} 
          onChange={handleNameChange} />
      </div>
      <div>
        number: <input
          value={newPhone}
          onChange={handlePhoneChange}
        />
      </div>
      <div><button type="submit">add</button></div>
    </form>
  )
}

const Persons = ({persons, filterString}) => {
  const filteredPersons = persons.filter(person =>
    person.name.toLocaleLowerCase().includes(filterString.toLocaleLowerCase()))

  return (
    <div>
      {filteredPersons.map(person =>
        <p key={person.name}>{person.name} {person.number}</p>
      )}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterString, setFilterString] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filterString} setFilter={setFilterString}/>
      <h2>Add new</h2>
      <PersonForm 
        persons={persons} setPersons={setPersons}
        newName={newName} setNewName={setNewName}
        newPhone={newPhone} setNewPhone={setNewPhone}   
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterString={filterString}/>
    </div>
  )
}

export default App