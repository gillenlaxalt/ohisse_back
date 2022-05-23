export const CHANGE_FIELD = 'CHANGE_FIELD';
export const changeField = (value, name) => ({
  type : CHANGE_FIELD,
  value,
  name
})

// action type FETCH_SPOTS
// call FETCH_SPOTS in axios that saveSPOTS if return ok
export const FETCH_SPOTS = 'FETCH_SPOTS';
// action creator : call FETCH_SPOTS to SPOTSAPI
export const fetchSpots = () => ({
  type: FETCH_SPOTS,
})

// action type SAVE_SPOTS
export const SAVE_SPOTS = 'SAVE_SPOTS';
// action creator call in axios to received spots list. In store SPOTS
export const saveSpots = (data) => ({
  type : SAVE_SPOTS,
  data,
});

// action type fetchSpotById
export const FETCH_SPOT_BY_ID = 'FETCH_SPOT_BY_ID';
export const fetchSpotById = (dataSpotById) => ({
  type : FETCH_SPOT_BY_ID,
  data: dataSpotById,
})

// action type changeInputSpot
export const CHANGE_INPUT_SPOT = 'CHANGE_INPUT_SPOT';
// action creator changeInputSpot
export const changeInputSpot = (value, name) => ({
  type: CHANGE_INPUT_SPOT,
  value,
  name,
})

//action type updateSpot
export const UPDATE_SPOT = 'UPDATE_SPOT';
//action creator updateSpot
export const updateSpot = () => ({
  type: UPDATE_SPOT,
})

// action type deleteSpot
export const DELETE_SPOT = 'DELETE_SPOT';
// action creator deleteSpot
export const deleteSpot = (id, city) => ({
  type: DELETE_SPOT,
  id : id,
  city : city
})

// action type addInputSpot
export const ADD_INPUT_SPOT = 'ADD_INPUT_SPOT';
// action creator addInputSpot
export const addInputSpot = (value, name) => ({
  type : ADD_INPUT_SPOT,
  value,
  name
})

// action type addSpot
export const ADD_SPOT = 'ADD_SPOT';
// actin creator addSpot
export const addSpot = () => ({
  type : ADD_SPOT,
})

// action type recoverLatLng
export const RECOVER_LATLNG = 'RECOVER_LATLNG';
// action creator recoverLatLng
export const recoverLatLng = (data) => ({
  type : RECOVER_LATLNG,
  data,
})

// action type emptyfield
export const EMPTY_FIELD = 'EMPTY_FIELD';
export const emptyfield = () => ({
  type: EMPTY_FIELD
})
