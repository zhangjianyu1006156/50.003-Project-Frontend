import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import { Search } from "../pages/Search";

test('display error message when search input is empty', () =>{
    const { getByText, getByPlaceholderText } = render(<Search />);
    const searchButton = getByText('Search Now!');
    
    fireEvent.click(searchButton);

    expect(getByText('Input cannot be empty')).toBeInTheDocument();
})

test('does not display error message when the input is not empty', () => {
    const { getByText, getByPlaceholderText } = render(<Search />);
    const searchButton = getByText('Search Now!');
    const searchInput = getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'some search query' } });
    fireEvent.click(searchButton);
    expect(queryByText('Input cannot be empty')).toBeNull();
});