import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'

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
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterString, setFilterString] = useState('')

  useEffect(() =>{
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])

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