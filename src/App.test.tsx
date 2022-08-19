import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders table title', () => {
  render(<App />);
  const UsersTitleElement = screen.getByText(/User/i);
  expect(UsersTitleElement).toBeInTheDocument();
});
