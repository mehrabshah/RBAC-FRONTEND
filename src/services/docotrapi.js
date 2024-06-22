import {authApiClient} from '../services/appClient';

export const createProfileDoctor  = async () => {
  try {
    const response = await authApiClient.get('/doctor/createProfile');
    console.log("create profile doctor",response.data)
    return response.data;
  } catch (err) {
    throw err.response ? err.response.data : 'Server error';
  }
};