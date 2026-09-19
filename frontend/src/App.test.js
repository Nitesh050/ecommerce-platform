import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import products from './data/products';

const renderApp = (route = '/') =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );

test('renders the product grid', () => {
  renderApp();
  expect(screen.getByText(products[0].name)).toBeInTheDocument();
});

test('adds a product to the cart and shows it when opened', () => {
  renderApp();

  const addButtons = screen.getAllByRole('button', { name: /add to cart/i });
  fireEvent.click(addButtons[0]);

  fireEvent.click(screen.getByRole('button', { name: /toggle cart/i }));

  expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
  expect(screen.getAllByText(products[0].name).length).toBeGreaterThan(0);
});

test('renders the login page at /login', () => {
  renderApp('/login');
  expect(screen.getByRole('heading', { name: /log in/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /continue with google/i })).toBeInTheDocument();
});

test('renders the signup page at /signup', () => {
  renderApp('/signup');
  expect(screen.getByRole('heading', { name: /sign up/i })).toBeInTheDocument();
});

test('signup form flags mismatched passwords', () => {
  renderApp('/signup');

  fireEvent.change(screen.getByLabelText(/^name$/i), { target: { value: 'Test User' } });
  fireEvent.change(screen.getByLabelText(/^email$/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/^password$/i), { target: { value: 'password123' } });
  fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'password456' } });
  fireEvent.click(screen.getByRole('button', { name: /^sign up$/i }));

  expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
});
