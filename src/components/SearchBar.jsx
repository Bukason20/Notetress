function SearchBar({filterText, handleFilter}) {
    return (
        <div className = "search-bar">
            <input type="search" name="" id="" placeholder = "Search notes" onKeyUp = {((e) => handleFilter(e.target.value))} defaultValue = {filterText}/>
        </div>
    )
}

export default SearchBar
