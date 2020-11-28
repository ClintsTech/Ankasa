import {GET_DESTINATION} from '../type/destination';
import axios from 'axios';
import {URI} from '../../utils';

export const getDestination = () => async (dispatch) => {
  const res = await axios.get(`${URI}/destination`);

  dispatch({type: GET_DESTINATION, payload: res.data.data});
};
