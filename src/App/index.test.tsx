/*
 * @Author: Yang Li 
 * @Date: 2020-02-02 10:48:28 
 * @Last Modified by:   Yang Li 
 * @Last Modified time: 2020-02-02 10:48:28 
 */
import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
