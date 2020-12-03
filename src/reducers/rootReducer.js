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
    {
      title: "Damn",
      content: "Lorem ipsum dolor sit amet.",
      date: Date.now(),
      key: 3,
    },
    {
      title: "Oh boy",
      content: "Ut fermentum ullamcorper est, eget.",
      date: Date.now(),
      key: 4,
    },
    {
      title: "Damn",
      content: "Lorem ipsum dolor sit amet.",
      date: Date.now(),
      key: 5,
    },
    {
      title: "Oh boy",
      content: "Ut fermentum ullamcorper est, eget.",
      date: Date.now(),
      key: 6,
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;


