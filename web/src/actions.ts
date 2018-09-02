import * as constants from './constants/index';

export const chooseProject = (project: string) => {
  return {
    type: constants.CHOOSE_PROJECT,
    payload: project
  };
};