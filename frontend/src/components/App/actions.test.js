/* eslint-disable no-undef */
import * as actions from '../../actions/posts';
import * as types from '../../constants';

describe('readed action', () => {
  it('should create a set readed action for a certain id', () => {
    const id = 'test';
    const expectedAction = {
      type: types.SET_READED,
      payload: id
    };
    expect(actions.setReaded(id)).toEqual(expectedAction);
  });
});

describe('dismiss all action', () => {
  it('should create a dismiss all action', () => {
    const expectedAction = {
      type: types.DISMISS_ALL
    };
    expect(actions.dismissAll()).toEqual(expectedAction);
  });
});
