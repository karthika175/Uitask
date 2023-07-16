import React from 'react';
import { render, screen } from '@testing-library/react';
import DashBoard from '../Pages/DashBoard';
test('DashBoard unit testcase', () => {
  render(<DashBoard />);
  const header = screen.getByText('Growfin');
  expect(header).toBeInTheDocument();
  const content = screen.getByTestId('Dashboard');
  expect(content).toBeInTheDocument();
});
