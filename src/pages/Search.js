import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    if (searchText === '') {
      setErrorMessage('Input cannot be empty');
    } else {
      navigate("/results")
    }
  }

  return (
    <div>
      <div>
        <h1 className='w-full h-full flex font-bold text-3xl p-4'>
          Let the journey begin now
        </h1>

        <form className='w-full'>
              <div className='flex flex-col my-2 text-left'>
                <label>Destination</label>
                  <input className='border rounded-md p-2 text-black'
                  type='text'
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search...">
                  </input>
              </div>
              <div className='flex flex-col my-2 text-left'>
                  <label>Arrival</label>
                  <input className='border rounded-md p-2 text-black' type="date" />
              </div>
              <div className='flex flex-col my-2 text-left'>
                  <label>Budget</label>
                  <input className='border rounded-md p-2 text-black' type="number" min="0" />
              </div>
                <button className='w-full my-4' onClick={(handleSearch)}>Search Now!</button>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
          </form>

      </div>
    </div>
  );
};