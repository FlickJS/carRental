import { useReducer } from 'react';

interface Car {
  title: string;
  pricePerMonth: number;
  image: string;
  fuel: string;
  power: string;
  year: string;
  alt: string;
  location: string;
  link: string;
}

interface RentCarState {
  showPopup: boolean;
  selectedCar: Car | null;
  rentDate: string;
  returnDate: string;
  paymentMethod: 'cash' | 'card';
  insurance: boolean;
  fullService: boolean;
}

type RentCarAction =
  | { type: 'SHOW_POPUP'; payload: Car }
  | { type: 'HIDE_POPUP' }
  | { type: 'SET_RETURN_DATE'; payload: string }
  | { type: 'SET_PAYMENT_METHOD'; payload: 'cash' | 'card' }
  | { type: 'TOGGLE_INSURANCE' }
  | { type: 'TOGGLE_FULL_SERVICE' };

const initialState: RentCarState = {
  showPopup: false,
  selectedCar: null,
  rentDate: new Date().toISOString().slice(0, 10),
  returnDate: '',
  paymentMethod: 'cash',
  insurance: false,
  fullService: false,
};

function rentCarReducer(state: RentCarState, action: RentCarAction): RentCarState {
  switch (action.type) {
    case 'SHOW_POPUP':
      return { ...state, showPopup: true, selectedCar: action.payload };
    case 'HIDE_POPUP':
      return { ...state, showPopup: false, selectedCar: null };
    case 'SET_RETURN_DATE':
      return { ...state, returnDate: action.payload };
    case 'SET_PAYMENT_METHOD':
      return { ...state, paymentMethod: action.payload };
    case 'TOGGLE_INSURANCE':
      return { ...state, insurance: !state.insurance };
    case 'TOGGLE_FULL_SERVICE':
      return { ...state, fullService: !state.fullService };
    default:
      return state;
  }
}

export function useRentCar() {
  const [state, dispatch] = useReducer(rentCarReducer, initialState);

  const showPopup = (car: Car) => dispatch({ type: 'SHOW_POPUP', payload: car });
  const hidePopup = () => dispatch({ type: 'HIDE_POPUP' });
  const setReturnDate = (date: string) => dispatch({ type: 'SET_RETURN_DATE', payload: date });
  const setPaymentMethod = (method: 'cash' | 'card') => dispatch({ type: 'SET_PAYMENT_METHOD', payload: method });
  const toggleInsurance = () => dispatch({ type: 'TOGGLE_INSURANCE' });
  const toggleFullService = () => dispatch({ type: 'TOGGLE_FULL_SERVICE' });

  const confirmRent = () => {
    if (state.selectedCar) {
      const carData = {
        ...state.selectedCar,
        rentDate: state.rentDate,
        returnDate: state.returnDate,
        paymentMethod: state.paymentMethod,
        insurance: state.insurance,
        fullService: state.fullService,
      };
      const existingCars = JSON.parse(localStorage.getItem('rentedCars') || '[]');
      const updatedCars = [...existingCars, carData];
      localStorage.setItem('rentedCars', JSON.stringify(updatedCars));
      hidePopup();
    }
  };

  return {
    state,
    showPopup,
    hidePopup,
    setReturnDate,
    setPaymentMethod,
    toggleInsurance,
    toggleFullService,
    confirmRent,
  };
}
