import { render, screen } from '@testing-library/react';
import Dropdown from '../Pages/Molecules/Header/DropDown';

test('DropDown test case', () => {
  render(<Dropdown />);
  const linkElement = screen.getByTestId('dropdown');
  expect(linkElement).toBeInTheDocument();
});
