import "@testing-library/jest-dom";  // Make sure this is at the top of your test file
import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';  // Adjust the path to match where Home.js is located

test('it is exported as a default export', () => {
  // Render the Home component
  const { container } = render(<Home />);

  // Ensure that rendering Home doesn't throw any errors
  expect(container).toBeInTheDocument();
});
