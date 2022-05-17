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