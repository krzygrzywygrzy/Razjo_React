const initState = {
  notes: [
    {
      title: "Damn",
      content: "Lorem ipsum dolor sit amet.",
      date: "1.09.1939",
      key: 1,
    },
    {
      title: "Oh boy",
      content: "Ut fermentum ullamcorper est, eget.",
      date: "27.06.2020",
      key: 2,
    },
    {
      title: "Damn",
      content: "Lorem ipsum dolor sit amet.",
      date: "13.12.1989",
      key: 3,
    },
  ],
  privateNotes: [
    {
      title: "123",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      key: 1,
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
