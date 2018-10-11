import * as constants from './constants';

export const chooseProject = (project: string) => {
  return {
    type: constants.CHOOSE_PROJECT,
    payload: project
  };
};