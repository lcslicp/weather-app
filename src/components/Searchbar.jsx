import { useRef, useEffect } from 'react';
import SearchIcon from '../assets/icons/search-icon.svg';

const Searchbar = ({ setQuery }) => {
  const inputRef = useRef(null);
  const handleSubmit = () => {
    setQuery(inputRef.current.value);
  };

  useEffect(() => {
    const handleEnterPress = (event) => {
      if (event.key === 'Enter') {
        handleSubmit(event);
      }
    };
    document.addEventListener('keydown', handleEnterPress);
    return () => {
      document.removeEventListener('keydown', handleEnterPress);
    };
  }, [handleSubmit]);

  return (
    <section className='search-container flex-row'>
      <input
        type='search'
        className='searchbar'
        placeholder='Enter Location'
        ref={inputRef}
      />
      <button type='submit' onClick={handleSubmit} onKeyDown={handleSubmit}>
        <img src={SearchIcon} className='searchbtn' />
      </button>
    </section>
  );
};

export default Searchbar;
