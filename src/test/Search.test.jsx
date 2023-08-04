const React = require('react');
const { render, fireEvent } = require("@testing-library/react");
const{ Search } = require("../pages/Search");

test('display error message when search input is empty', () =>{
    const { getByText, getByPlaceholderText } = render(<Search />);
    const searchButton = getByText(/Search Now!/i);
    
    
    fireEvent.click(searchButton);

    expect(getByText('Input cannot be empty')).toBeInTheDocument();
})

test('does not display error message when the input is not empty', () => {
    const { getByText, getByPlaceholderText } = render(<Search />);
    const searchButton = getByText(/Search Now!/i);
    const searchInput = getByPlaceholderText('Destination');
    fireEvent.change(searchInput, { target: { value: 'some search query' } });
    fireEvent.click(searchButton);
    expect(queryByText('Input cannot be empty')).toBeNull();
});