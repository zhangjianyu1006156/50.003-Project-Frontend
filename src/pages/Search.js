import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarSimple } from "../components/Navbar";

export const Search = () => {
  const [query, setQuery] = useState({ dest: "", date: "", budget: "" });
  const navigate = useNavigate();

  const toResults = () => {
    navigate("/Results", {
      state: { dest: query.dest, date: query.date, budget: query.budget },
    });
    console.log(query.date);
  };

  function changeQuery(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <NavbarSimple />
      <div>
        <h1 className="w-full h-full flex font-bold text-3xl p-4">
          Let the journey begin now
        </h1>

        <form className="w-full">
          <div className="flex flex-col my-2 text-left">
            <label>Destination</label>
            <input
              type="text"
              name="dest"
              value={query.dest}
              className="border rounded-md p-2 text-black"
              onChange={changeQuery}
            ></input>
          </div>
          <div className="flex flex-col my-2 text-left">
            <label>Arrival</label>
            <input
              className="border rounded-md p-2 text-black"
              type="date"
              name="date"
              value={query.date}
              onChange={changeQuery}
            />
          </div>
          <div className="flex flex-col my-2 text-left">
            <label>Budget</label>
            <input
              className="border rounded-md p-2 text-black"
              type="number"
              name="budget"
              value={query.budget}
              onChange={changeQuery}
              min="0"
            />
          </div>
          <button className="w-full my-4" onClick={toResults}>
            Search Now!
          </button>
        </form>
      </div>
    </div>
  );
};
