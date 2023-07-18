import {post} from '../../../ApiService';
import {GET_LISTING_DATA} from '../../../ApiService/EndPoint';
import {listingDataSuccess} from '../../../Redux';
import {listingDataFailure} from '../../../Redux';

export const getListItem = async (params, onSuccess, onFailure) => {
  try {
    const response = await post(GET_LISTING_DATA, params);
    console.log('response====>', JSON.stringify(response));
    if (response.data.status) {
      console.log('3333333333=====>', JSON.stringify(response.data.data));
      onSuccess(response.data.data);
    } else {
      onFailure(response);
    }
  } catch {
    console.log('network error');
  }
};
