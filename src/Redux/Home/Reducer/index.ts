import * as ActionTypes from '../ActionTypes';

const initialState = {
  currentScreen: 'LoginScreen',
  listingData: undefined,
  selectedListItem: undefined,
};

const NavigationReducer = (state = initialState, action: any) => {
  console.log('44444=====>', action, state);

  switch (action.type) {
    case ActionTypes.NAVIGATE_SCREEN:
      console.log('actionmmmmmmm==>', action.payload);

      state = {...state, currentScreen: action.payload};
      break;
    case ActionTypes.LISTING_DATA_SUCCESS:
      console.log('actionmmmmmmm==>', action.payload);

      state = {...state, listingData: action.payload};
      break;

    case ActionTypes.LISTING_DATA_FAILURE:
      console.log('actionmmmmmmm==>', action.payload);

      state = {...state, listingData: action.payload};
      break;

    case ActionTypes.SET_SELECTED_ITEM:
      console.log('actionmmmmmmm111111111111==>', action.payload);

      state = {...state, selectedListItem: action.payload};
      break;
    default:
      state = state;
      break;
  }
  return state;
};

export {NavigationReducer};
