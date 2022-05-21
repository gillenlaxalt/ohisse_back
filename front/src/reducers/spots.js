// == import

// npm

// local
import { CHANGE_FIELD, CHANGE_INPUT_SPOT, FETCH_SPOT_BY_ID, SAVE_SPOTS } from "../actions/spots";

export const initialState = {
  search: [
    {
    inputValue: '',
    },
  ],
  spotsList: [],
  inputCurrentSpot:{
    id:'',
    name:'',
    number:'',
    street:'',
    zipcode:'',
    city:'',
    country:'',
    type:'',
    rock_type:'',
    discipline:'',
    latitude:'',
    longitude:'',
    min_difficulty:'',
    max_difficulty:'',
    various:'',
    reputation:'',
    picture:'',
  }
};

const spotsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
    return {
      ...state,
      [action.name]: action.value,
    };
    case SAVE_SPOTS:
      return {
        ...state,
        spotsList: action.data,
      }
    case FETCH_SPOT_BY_ID:
      return{
        ...state,
        inputCurrentSpot:{
          ...state.inputCurrentSpot,
          id:action.data.id,
          name:action.data.name,
          number:action.data.number,
          street:action.data.street,
          zipcode:action.data.zipcode,
          city:action.data.city,
          country:action.data.country,
          type:action.data.type,
          rock_type:action.data.rock_type,
          discipline:action.data.discipline,
          latitude:action.data.latitude,
          longitude:action.data.longitude,
          min_difficulty:action.data.min_difficulty,
          max_difficulty:action.data.max_difficulty,
          various:action.data.various,
          reputation:action.data.reputation,
          picture:action.data.picture,

        }
      }
    case CHANGE_INPUT_SPOT:
      return {
        ...state,
        inputCurrentSpot:{
          ...state.inputCurrentSpot,
          [action.name]: action.value,
        }
      }
    default:
      return state;
  }
};

export default spotsReducer;