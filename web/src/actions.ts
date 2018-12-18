export const GET_PROJ = "GET_PROJ";

export const getProj = (name: string) => {
  return {
    type: GET_PROJ,
    projName: name
  }
}; 