import { render, screen } from '@testing-library/react';
import SafeDepositBox from './SafeDepositBox';
import { Provider } from 'react-redux';
import store from '../store';

test('renders all app elements', () => {
  render(
    <Provider store={store}>
        <SafeDepositBox />
    </Provider>
    );
    
  const StatusLine = screen.getByText(/Unlocked/i);
  const Key0 = screen.getByText(/0/i);
  const Key1 = screen.getByText(/1/i);
  const Key2 = screen.getByText(/2/i);
  const Key3 = screen.getByText(/3/i);
  const Key4 = screen.getByText(/4/i);
  const Key5 = screen.getByText(/5/i);
  const Key6 = screen.getByText(/6/i);
  const Key7 = screen.getByText(/7/i);
  const Key8 = screen.getByText(/8/i);
  const Key9 = screen.getByText(/9/i);
  const KeyAsterisk = screen.getByText('*');
  const KeyL = screen.getByText('L');
  
  expect(StatusLine).toBeInTheDocument();
  expect(Key0).toBeInTheDocument();
  expect(Key1).toBeInTheDocument();
  expect(Key2).toBeInTheDocument();
  expect(Key3).toBeInTheDocument();
  expect(Key4).toBeInTheDocument();
  expect(Key5).toBeInTheDocument();
  expect(Key6).toBeInTheDocument();
  expect(Key7).toBeInTheDocument();
  expect(Key8).toBeInTheDocument();
  expect(Key9).toBeInTheDocument();
  expect(KeyAsterisk).toBeInTheDocument();
  expect(KeyL).toBeInTheDocument();
});
