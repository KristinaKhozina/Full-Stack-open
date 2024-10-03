const Persons = ({persons, filterString, handleDelete}) => {
    const filteredPersons = persons.filter(person =>
      person.name.toLocaleLowerCase().includes(filterString.toLocaleLowerCase()))
  
    return (
      <div>
        {filteredPersons.map(person =>
          <div className='contact' key={person.name}>
            <p>{person.name} {person.number}</p>
            <button onClick={() => handleDelete(person)}>delete</button>
          </div>
        )}
      </div>
    )
  }

  export default Persons