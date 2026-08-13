function SearchBar({ searchQuery, onSearchChange }) {
    return (
        <input type="text" placeholder="Search products..." value={searchQuery} onChange={onSearchChange} />
    )
}

export default SearchBar