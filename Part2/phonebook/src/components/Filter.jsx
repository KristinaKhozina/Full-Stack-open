const Filter = ({filter, setFilter}) => {
    const handleFilterChange = (event) => {
      setFilter(event.target.value)
    }
  
    return (
      <form>
        filter shown with <input
            name='filter'
            value={filter}
            onChange={handleFilterChange}
        />
      </form>
    )
  }

  export default Filter