import '@testing-library/jest-dom';

import Footer from './Footer';
import rendererWithProviders from '../../tests/helpers/rendererWithProviders';

describe('Footer Tests', () => {
  test('renders the Footer component', () => {
    const snapshot = rendererWithProviders(<Footer />);
    expect(snapshot).toMatchSnapshot();
  });
});
