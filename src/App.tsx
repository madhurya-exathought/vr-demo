import './App.css';
import { CounterProvider } from './context/CounterContext';
import AppRouter from './navigation/AppRouter';

const App = () => {
  return (
    <div>
      <CounterProvider>
        <AppRouter />
      </CounterProvider>
    </div>
  );
};

export default App;
