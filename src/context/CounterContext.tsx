import React, { ReactNode, createContext, useContext, useReducer } from 'react';

type CounterState = {
  count: number;
};

type CounterAction = {
  type: 'INCREMENT' | 'DECREMENT';
};

const initialState: CounterState = {
  count: 0,
};

const CounterContext = createContext<
  | {
      state: CounterState;
      dispatch: React.Dispatch<CounterAction>;
    }
  | undefined
>(undefined);

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export function CounterProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>;
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}
