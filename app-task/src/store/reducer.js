const initialState = {
  taskInfo: {
    name: '',
    time: '',
    detail: ''
  }
};

const UPDATE_TASK_INFO = 'UPDATE_TASK_INFO';

const updateTaskInfoAction = (taskInfo) => {
  return { type: UPDATE_TASK_INFO, payload: taskInfo };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TASK_INFO: {
      return {
        ...state,
        taskInfo: action.payload,
      };
    }
  }
  return state;
};

export { updateTaskInfoAction };

export default reducer;
