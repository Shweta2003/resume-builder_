import { createSlice } from "@reduxjs/toolkit";

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
    educationDetails: [],
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
    },
    AddOrUpdateLinkName: (state, action) => {
      state.personalInformation.links.forEach((link) => {
        if (link._id === action.payload._id) {
          link.name = action.payload.name;
        }
      });
    },
    AddOrUpdateLinkUrl: (state, action) => {
      state.personalInformation.links.forEach((link) => {
        if (link._id === action.payload._id) {
          link.url = action.payload.url;
        }
      });
    },
    deleteLink: (state, action) => {
      state.personalInformation.links = state.personalInformation.links.filter(
        (link) => link._id !== action.payload._id
      );
    },
    addEducation: (state, action) => {
      state.education.educationDetails.push(action.payload);
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
  AddOrUpdateLinkName,
  AddOrUpdateLinkUrl,
  deleteLink,
  addEducation,
} = resumeSlice.actions;

export default resumeSlice.reducer;
