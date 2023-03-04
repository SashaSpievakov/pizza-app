import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CartItemsMockProps } from 'src/tests/mocks/mockData/mockData';
import Modal from './Modal';
import rendererWithAllProviders from '../../../tests/helpers/rendererWithProviders';
import renderWithProviders from '../../../tests/helpers/renderWithProviders';

describe('Modal Tests', () => {
  test('renders the Modal UI component', () => {
    const snapshot = rendererWithAllProviders(<Modal setIsOpen={jest.fn()} />);
    expect(snapshot).toMatchSnapshot();
  });

  describe('checks Modal logic', () => {
    beforeEach(() => {
      renderWithProviders(null, true, '/cart', {
        cart: CartItemsMockProps,
      });
    });

    test('checks Modal opening', () => {
      const buyButton = screen.getByRole('button', {
        name: /buy now/i,
      });

      userEvent.click(buyButton);

      expect(
        screen.getByRole('heading', {
          name: 'Order',
        }),
      ).toBeInTheDocument();
    });

    test('closes Modal by clicking on the cross', () => {
      const buyButton = screen.getByRole('button', {
        name: /buy now/i,
      });

      userEvent.click(buyButton);

      const cross = screen.getByTestId('modalCross');

      userEvent.click(cross);

      expect(
        screen.queryByRole('heading', {
          name: 'Order',
        }),
      ).not.toBeInTheDocument();
    });

    test('checks required fields error', async () => {
      const buyButton = screen.getByRole('button', {
        name: /buy now/i,
      });

      userEvent.click(buyButton);

      const sumbitBtn = screen.getByRole('button', {
        name: /send/i,
      });

      userEvent.click(sumbitBtn);

      expect(
        await screen.findAllByText(/this field is required/i),
      ).toHaveLength(3);
    });

    test('checks min characters phone input error', async () => {
      const buyButton = screen.getByRole('button', {
        name: /buy now/i,
      });

      userEvent.click(buyButton);

      const sumbitBtn = screen.getByRole('button', {
        name: /send/i,
      });
      const phoneInput = screen.getByRole('spinbutton');

      userEvent.type(phoneInput, '12353');
      userEvent.click(sumbitBtn);

      expect(
        await screen.findByText(/the phone number should have 10 characters/i),
      ).toBeInTheDocument();
    });

    test('checks max characters phone input error', async () => {
      const buyButton = screen.getByRole('button', {
        name: /buy now/i,
      });

      userEvent.click(buyButton);

      const sumbitBtn = screen.getByRole('button', {
        name: /send/i,
      });
      const phoneInput = screen.getByRole('spinbutton');

      userEvent.type(phoneInput, '12345678901');
      userEvent.click(sumbitBtn);

      expect(
        await screen.findByText(/the phone number should have 10 characters/i),
      ).toBeInTheDocument();
    });

    test('successfully sumbits data', async () => {
      const buyButton = screen.getByRole('button', {
        name: /buy now/i,
      });

      userEvent.click(buyButton);

      const sumbitBtn = screen.getByRole('button', {
        name: /send/i,
      });
      const inputs = screen.getAllByRole('textbox');
      const phoneInput = screen.getByRole('spinbutton');

      userEvent.type(phoneInput, '4730395859');
      userEvent.type(inputs[0], 'Alex');
      userEvent.type(inputs[1], 'Toronto');
      userEvent.type(inputs[2], 'some address');
      userEvent.click(sumbitBtn);

      expect(
        await screen.findByText(/thank you for your order!/i),
      ).toBeInTheDocument();
    });

    test('closes the success modal', async () => {
      const buyButton = screen.getByRole('button', {
        name: /buy now/i,
      });

      userEvent.click(buyButton);

      const sumbitBtn = screen.getByRole('button', {
        name: /send/i,
      });
      const inputs = screen.getAllByRole('textbox');
      const phoneInput = screen.getByRole('spinbutton');

      userEvent.type(phoneInput, '4730395859');
      userEvent.type(inputs[0], 'Alex');
      userEvent.type(inputs[1], 'Toronto');
      userEvent.type(inputs[2], 'some address');
      userEvent.click(sumbitBtn);

      const returnBtn = await screen.findByText(/return/i);

      userEvent.click(returnBtn);

      expect(
        screen.queryByText(/thank you for your order!/i),
      ).not.toBeInTheDocument();
    });
  });
});
