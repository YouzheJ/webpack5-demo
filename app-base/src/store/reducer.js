const initialState = {
  taskList: []
  // {
  //   name: '',
  //   time: '',
  //   detail: ''
  // }
};

const ADD_TASK_INFO = 'ADD_TASK_INFO';

const addTaskInfoAction = (taskInfo) => {
  return { type: ADD_TASK_INFO, payload: taskInfo };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK_INFO: {
      return {
        ...state,
        taskList: [...state.taskList, action.payload]
      };
    }
  }
  return state;
};

export { addTaskInfoAction };

export default reducer;
