import {
  useState,
  useEffect,
  useContext,
  useReducer,
  createContext,
} from 'react';
import initialState from '../initialStates/initialFilterState';
import reducer from '../reducers/FilterReducer';
import axios from 'axios';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${state.userInfo.token}`,
        },
      };
      const { data } = await axios.get('/api/products', config);
      await setProducts(data);
      console.log('data', products);
    };
    fetchData();
  }, []);

  return (
    <FilterProvider.Provider value={{}}>{children}</FilterProvider.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
