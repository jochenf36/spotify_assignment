import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MockedProvider } from '@apollo/client/testing';

test('renders learn react link', () => {
  const { getByText } = render(
    <MockedProvider addTypename={false}>
      <App />
    </MockedProvider>
  );
  const linkElement = getByText(/Search Artists/i);
  expect(linkElement).toBeInTheDocument();
});
