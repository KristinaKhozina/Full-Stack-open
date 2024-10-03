import { useState, useEffect } from 'react'
import personService from './services/persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterString, setFilterString] = useState('')

  useEffect(() =>{
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(person.id)
        .then(deletedPerson => {
          setPersons(persons.filter(p => p.id !== deletedPerson.id))      
        })
    }
  }

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
      <Persons persons={persons} filterString={filterString} handleDelete={handleDelete}/>
    </div>
  )
}

export default App