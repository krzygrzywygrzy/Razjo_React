const initState = {
  notes: [
    {
      title: "Title",
      content:
        " Sed congue justo non gravida feugiat. Donec quis velit at quam laoreet vestibulum.",
      color: "yellow",
      id: "1",
    },
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu lacus, molestie eu quam in, lobortis tempor metus. Quisque purus ligula, eleifend ac maximus a, lacinia nec diam. Nulla placerat iaculis dignissim. Phasellus suscipit eu ipsum ut accumsan. Donec et vestibulum risus. Etiam porta condimentum risus eget tincidunt. Etiam ac porttitor justo, vitae luctus neque. Curabitur at consequat felis, ac luctus ex. Pellentesque ut fermentum eros. ",
      color: "green",
      id: "2",
    },
    {
      title: "Title",
      content:
        "Aliquam dictum ultrices elit vel vehicula. Sed ullamcorper turpis tempus dignissim sodales. Vestibulum tortor nibh, pharetra sit amet nisi ac, faucibus tempus purus. Quisque vel urna mattis, dapibus ante sed, egestas felis. Donec imperdiet orci quis massa cursus elementum. Donec et est velit. Mauris dolor augue, tristique id tempus et, malesuada convallis purus. Sed tempus massa et ligula interdum, quis cursus purus finibus. Etiam placerat ullamcorper magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at gravida enim. Integer justo elit, porta non purus quis, pulvinar ornare tortor.",
      color: "pink",
      id: "3",
    },
  ],
  privateNotes: [
    {
      title: "Title",
      content:
        "Aliquam dictum ultrices elit vel vehicula. Sed ullamcorper turpis tempus dignissim sodales. Vestibulum tortor nibh, pharetra sit amet nisi ac, faucibus tempus purus. Quisque vel urna mattis, dapibus ante sed, egestas felis. Donec imperdiet orci quis massa cursus elementum. Donec et est velit. Mauris dolor augue, tristique id tempus et, malesuada convallis purus. Sed tempus massa et ligula interdum, quis cursus purus finibus. Etiam placerat ullamcorper magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at gravida enim. Integer justo elit, porta non purus quis, pulvinar ornare tortor.",
      color: "blue",
      id: "1",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  if(action.type === 'ADD_PRIVATE'){
    let notes = state.privateNotes;
    notes = [...notes, action.note];
    return {
      notes: state.notes,
      privateNotes: notes,
    };
  }
  return state;
};

export default rootReducer;
