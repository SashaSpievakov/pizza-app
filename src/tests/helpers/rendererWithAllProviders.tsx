import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { darkTheme } from '../../styles/Themes.styled';
import { store } from '../../store/store';

const rendererWithAllProviders = (compenent: ReactElement) => {
  return {
    ...renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <ThemeProvider theme={darkTheme}>{compenent}</ThemeProvider>
          </MemoryRouter>
        </Provider>,
      )
      .toJSON(),
  };
};

export default rendererWithAllProviders;
