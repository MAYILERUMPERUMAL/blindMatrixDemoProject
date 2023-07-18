import * as ActionType from '../ActionTypes';

export const navigateScreen = (response: any) => {
  console.log('ress000=======>', response);

  return {
    type: ActionType.NAVIGATE_SCREEN,
    payload: response,
  };
};

export const listingDataSuccess = (response: any) => {
  console.log('ress000=======>', response);

  return {
    type: ActionType.LISTING_DATA_SUCCESS,
    payload: response,
  };
};

export const listingDataFailure = (response: any) => {
  return {
    type: ActionType.LISTING_DATA_FAILURE,
    payload: response,
  };
};

export const setSelectedItem = (data: any) => {
  console.log('data===>', data);

  return {
    type: ActionType.SET_SELECTED_ITEM,
    payload: data,
  };
};
