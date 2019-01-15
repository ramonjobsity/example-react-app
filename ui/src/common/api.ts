import { create } from 'apisauce';
import { ValuesData } from '../Models';

export default ( baseURL = 'https://localhost:44340' ) => {
  const api = create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache, no-store',
      'Pragma': 'no-cache',
      'Expire': 0
    }    
  });

  const getCurrencyRates = () => {
    return api.get('api/currency');
  }

  const getStoredValues = () => {
    return api.get('api/stored-values');
  }

  const postStoredValues = (data: ValuesData) => {
    return api.post('api/stored-values', data);
  }

  return {
    getCurrencyRates,
    getStoredValues,
    postStoredValues
  }
}