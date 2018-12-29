export const GET_PROJ = "GET_PROJ";
export const PROJ_BTN_CLICKED = "PROJ_BTN_CLICKED";

export const getProj = (name: string) => ({
  type: GET_PROJ,
  data: name
});

export const projButtonClicked = () => ({
  type: PROJ_BTN_CLICKED,
  data: {}
});