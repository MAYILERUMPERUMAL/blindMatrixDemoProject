import {post} from '../../../ApiService';
import {GET_PRODUCT_DATA} from '../../../ApiService/EndPoint';

export const getProducts = async (params, onSuccess, onFailure) => {
  try {
    const response = await post(GET_PRODUCT_DATA, params);
    if (response.data.status) {
      onSuccess(response.data.data);
    } else {
      onFailure(response);
    }
  } catch {
    console.log('network error');
  }
};
