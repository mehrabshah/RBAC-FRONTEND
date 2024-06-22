import {authApiClient} from '../services/appClient';

export const createProfileAdmin  = async () => {
  try {
    const response = await authApiClient.get('/admin/createProfile');
    console.log("create profile admin",response.data)
    return response.data;
  } catch (err) {
    throw err.response ? err.response.data : 'Server error';
  }
};
