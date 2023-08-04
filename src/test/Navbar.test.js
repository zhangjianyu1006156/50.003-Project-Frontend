const React = require("react");
const { render } = require("@testing-library/react");
const{ NavbarSimple } =  require("../components/Navbar");
const { MemoryRouter } = require("react-router-dom");

console.error = jest.fn();

beforeEach(() => {
  console.error.mockClear();
});

test("renders NavbarSimple without errors", () => {
    render(
      <MemoryRouter>
        <NavbarSimple />
      </MemoryRouter>
    );
});
