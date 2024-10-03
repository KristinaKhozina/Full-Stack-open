import personService from '../services/persons'

const PersonForm = ({persons, setPersons, newName, setNewName, newPhone, setNewPhone}) => {
    const addPerson = (event) => {
      event.preventDefault()

      const foundedPerson = persons.find(p => p.name === newName)
      if (foundedPerson) {
        if (foundedPerson.number === newPhone){
          alert(`${newName}is already added to phonebook`)
        }
        else {
          if (window.confirm(
            `${foundedPerson.name} already added to the phonebook, replace the old number with a new one?`
          )) {
            const changedPerson = {...foundedPerson, number: newPhone}
            personService
              .update(foundedPerson.id, changedPerson)
              .then(returnedPerson => {
                setPersons(persons.map(p => p.id !== changedPerson.id ? p : returnedPerson))
              })
          }
        }
      }
      else {
        const newPerson = {
          name: newName,
          number: newPhone
        }
        personService
          .create(newPerson)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewPhone('')
          })
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
            name='name'
            value={newName} 
            onChange={handleNameChange} />
        </div>
        <div>
          number: <input
            name='phone'
            value={newPhone}
            onChange={handlePhoneChange}
          />
        </div>
        <div><button type="submit">add</button></div>
      </form>
    )
  }

  export default PersonForm