import * as reactRedux from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let useSelectorMock;
let useDispatchMock;
beforeEach(() => {
  useSelectorMock = null;
  useDispatchMock = null;
});

test('renders Hello Manuel text', () => {
  useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  useSelectorMock.mockReturnValue({ state: { counter: 0, isLogged: false } });
  useDispatchMock.mockRejectedValue({});
  act(() => {
    render(<App />);
  });
  const linkElement = screen.getByText(/Hello Manuel/i);
  expect(linkElement).toBeInTheDocument();
});
