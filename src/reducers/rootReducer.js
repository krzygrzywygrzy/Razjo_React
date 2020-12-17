const initState = {
  notes: [
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at consequat sapien. Sed arcu lacus, laoreet a turpis nec, bibendum aliquam dolor. Fusce dapibus mauris sit amet elit tempor laoreet sed sit amet ex. Donec posuere libero quis erat placerat, ornare semper erat scelerisque. Proin tristique elit a mi dapibus, at luctus dui pretium. Cras ultricies arcu ex, eget fringilla tortor porta at. Integer rhoncus nibh libero, nec condimentum felis auctor ut. In hac habitasse platea dictumst. Sed congue justo non gravida feugiat. Donec quis velit at quam laoreet vestibulum.",
      color: "yellow",
      id: "1",
    },
    {
      title: "Title",
      content: "Content",
      color: "green",
      id: "2",
    },
    {
      title: "Title",
      content: "Content",
      color: "pink",
      id: "3",
    },
  ],
  privateNotes: [],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
