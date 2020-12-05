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
  ],
  privateNotes: [
    {
      title: "123",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      key: 1,
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
