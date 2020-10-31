/* eslint-disable no-undef */
import expect from 'expect';

import { DISMISS_POST } from '../../constants';
import posts from '../../reducer/posts';

const initialState = {
  data: [{ id: 1 }, { id: 2 }],
  isLoading: false,
  error: false,
  lastFetched: null,
  allDismissed: false
};

describe('posts reducer', () => {
  it('should return the initial state', () => {
    expect(posts(undefined, {})).toEqual({
      data: [],
      isLoading: false,
      error: false,
      lastFetched: null,
      allDismissed: false
    });
  });

  it('should handle DISMISS_POST', () => {
    expect(
      posts(initialState, {
        type: DISMISS_POST,
        payload: 1
      })
    ).toEqual({
      ...initialState,
      data: initialState.data.filter((post) => post.id !== 1)
    });
  });
});
