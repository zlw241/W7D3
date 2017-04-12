

const thunk = ({state, dispatch}) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, state);
  }
  return next(action);
}

export default thunk;
