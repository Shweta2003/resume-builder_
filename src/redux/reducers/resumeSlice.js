import { createSlice } from "@reduxjs/toolkit";

const initialLinkState = {
  name: "",
  url: "",
};

const initialState = {
  personalInformation: {
    showDetails: true,
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "1234567890",
    jobTitle: "Software Engineer",
    links: [],
  },
  education: {
    showDetails: false,
  },
  experiences: {
    showDetails: false,
  },
  skills: {
    showDetails: false,
  },
  projects: {
    showDetails: false,
  },
  achievements: {
    showDetails: false,
  },
  additionalInformation: {
    showDetails: false,
  },
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    toggleDetails: (state, action) => {
      state[action.payload].showDetails = !state[action.payload].showDetails;
    },
    addName: (state, action) => {
      state.personalInformation.name = action.payload;
    },
    addEmail: (state, action) => {
      state.personalInformation.email = action.payload;
    },
    addPhone: (state, action) => {
      state.personalInformation.phone = action.payload;
    },
    addJobTitle: (state, action) => {
      state.personalInformation.jobTitle = action.payload;
    },
    addLink: (state, action) => {
      state.personalInformation.links.push(action.payload);
      // console.log(state.personalInformation.links);
    },
    addLinkName: (state, action) => {
      state.personalInformation.links.push(action.payload);
      // console.log(state.personalInformation.links);
    },
    saveUpdatedLink: (state, action) => {
      // console.log(typeof state.personalInformation.links);
      state.personalInformation.links.map((link) => {
        if (link.name === action.payload.name) {
          link.url = action.payload.url;
        }
      });
      console.log(state.personalInformation.links.length);
    },
    deleteLink: (state, action) => {
      console.log(action.payload);
      state.personalInformation.links.filter(
        (link) => link.name !== action.payload
      );
    },
  },
});

export const {
  toggleDetails,
  addName,
  addEmail,
  addPhone,
  addJobTitle,
  addLink,
  addLinkName,
  saveUpdatedLink,
  deleteLink,
} = resumeSlice.actions;

export default resumeSlice.reducer;
