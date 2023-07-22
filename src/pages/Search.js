import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1 className='w-full h-full flex font-bold text-3xl p-4'>
          Let the journey begin now
        </h1>

        <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <select className='border rounded-md p-2 text-black'>
                      <option>Fuji-Q Highland</option>
                      <option>Osaka</option>
                      <option>Disneyland</option>
                      <option>Universal Studio Japan</option>
                  </select>
              </div>
              <div className='flex flex-col my-2 text-left'>
                  <label>Arrival</label>
                  <input className='border rounded-md p-2 text-black' type="date" />
              </div>
              <div className='flex flex-col my-2 text-left'>
                  <label>Budget</label>
                  <input className='border rounded-md p-2 text-black' type="number" min="0" />
              </div>
                <button className='w-full my-4' onClick={() => {navigate("/Results");
              }}>Search Now!</button>
          </form>

      </div>
    </div>
  );
};