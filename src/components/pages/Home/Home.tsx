import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../common/Header';
import Button from '../../common/cta/Button';
import { getConfig } from '../../../config/envConfig';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../services/user/userService';
import { RootState } from '../../../store/store';
import { Constants } from '../../../constants';

function Home() {
  const currentEnv = process.env.REACT_APP_ENV as keyof typeof Constants.ENVIRONMENT;
  const [count, setCount] = useState<number>(0);
  const navigate = useNavigate();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const configForCurrentEnv = getConfig(currentEnv);
  useEffect(() => {
    console.log(configForCurrentEnv.apiUrl);
  }, [configForCurrentEnv]);

  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);

  const handleClick = () => {
    try {
      fetchUsers(dispatch).then(() => {});
    } catch (error) {}
  };

  useEffect(() => {
    console.log('Users:', users);
  }, [users, dispatch]);

  const navigateToContextAPI = () => {
    navigate('/contextAPI');
  };

  return (
    <div className="text-center">
      <Header />
      <div className="flex justify-center text-3xl m-10">{count}</div>
      <div className="flex justify-center">
        <Button className="bg-primary m-3" handleClick={increment} buttonText="Increment" />
        <Button className="bg-secondary m-3" handleClick={decrement} buttonText="Decrement" />
      </div>
      <div>
        <Button handleClick={navigateToContextAPI} buttonText="Counter with Context API" className="bg-tertiary m-3" />
      </div>
      <Button handleClick={handleClick} buttonText="Redux Toolkit Example" className="bg-tertiary m-3" />
    </div>
  );
}

export default Home;
