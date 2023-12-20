import { render, screen } from '@testing-library/react';
import App from "../src/App";
import React from 'react';
describe('App', () => {
it('renders headline', () => {
render(<App />);
const headline = screen.getByText(
/Click on the Vite and React logos to learn more/i
);
expect(headline).toBeInTheDocument();
});
});