// @flow
export const GET_PROJ = 'GET_PROJ';
export const PROJ_BTN_CLICKED = 'PROJ_BTN_CLICKED';

export const getProj = (name: string, projData: any) => ({
  type: GET_PROJ,
  data: name,
  projData: projData,
});

export const projButtonClicked = () => ({
  type: PROJ_BTN_CLICKED,
  data: {},
});

export const getProjData = (name: string) => {
  try {
    return async (dispatch: any) => {
      // handle usage if env vars
      const SERVER_URL = process.env.SERVER_URL || 'fallback';
      const response = await fetch(`http://${SERVER_URL}/proj?projName=${name}`);
      const projData = response.json();
      dispatch(getProj(name, projData));
    };
  } catch (error) {
    console.log(error);
    console.log('Failed to get project Data');
    return {};
  }
};
