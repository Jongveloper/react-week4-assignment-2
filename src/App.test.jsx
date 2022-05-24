import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders headline', () => {
    const { getByRole } = render(<App />);
    const element = getByRole('heading');
    expect(element).toHaveTextContent(/Restaurants/i);
  });

  it('renders a list of restaurants', () => {
    const { getByRole } = render(<App />);
    const element = getByRole('list');

    expect(element).toHaveTextContent(/마녀주방 | 한식 | 서울시 강남구/i);
    expect(element).toHaveTextContent(/시카고피자 | 양식 | 이태원동/i);
    expect(element).toHaveTextContent(/키와미 | 일식 | 분당구 정자동/i);
  });
});
