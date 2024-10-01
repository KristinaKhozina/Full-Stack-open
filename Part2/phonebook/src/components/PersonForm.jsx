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

  export default PersonForm