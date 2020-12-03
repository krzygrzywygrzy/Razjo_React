const initState = {
  notes: [
    {
      title: "Damn",
      content: "Lorem ipsum dolor sit amet.",
      date: Date.now(),
      key: 1,
    },
    {
      title: "Oh boy",
      content: "Ut fermentum ullamcorper est, eget.",
      date: Date.now(),
      key: 2,
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;


