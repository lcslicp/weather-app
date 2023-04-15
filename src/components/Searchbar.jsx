import SearchIcon from '../assets/icons/search-icon.svg';

const Searchbar = ({ setQuery }) => {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section className='search-container'>
      <input type='search' className='searchbar' placeholder='Enter Location' onChange={handleInputChange} />
      <button type='submit'>
        <img src={SearchIcon} className='searchbtn' />
      </button>
    </section>
  );
};

export default Searchbar;
