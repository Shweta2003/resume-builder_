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
    experienceDetails: [],
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
    addOrUpdateInstitution: (state, action) => {
      state.education.educationDetails.forEach((educationDetail) => {
        if (educationDetail._id === action.payload._id) {
          educationDetail.institution = action.payload.institution;
        }
      });
    },
    addOrUpdateDegree: (state, action) => {
      state.education.educationDetails.forEach((educationDetail) => {
        if (educationDetail._id === action.payload._id) {
          educationDetail.degree = action.payload.degree;
        }
      });
    },
    addOrUpdateCourse: (state, action) => {
      state.education.educationDetails.forEach((educationDetail) => {
        if (educationDetail._id === action.payload._id) {
          educationDetail.course = action.payload.course;
        }
      });
    },
    addOrUpdateStartDate: (state, action) => {
      state.education.educationDetails.forEach((educationDetail) => {
        if (educationDetail._id === action.payload._id) {
          educationDetail.startDate = action.payload.startDate;
        }
      });
    },
    addOrUpdateEndDate: (state, action) => {
      state.education.educationDetails.forEach((educationDetail) => {
        if (educationDetail._id === action.payload._id) {
          educationDetail.endDate = action.payload.endDate;
        }
      });
    },
    addOrUpdateCgpa: (state, action) => {
      state.education.educationDetails.forEach((educationDetail) => {
        if (educationDetail._id === action.payload._id) {
          educationDetail.cgpa = action.payload.cgpa;
        }
      });
    },
    deleteEducation: (state, action) => {
      state.education.educationDetails =
        state.education.educationDetails.filter(
          (educationDetail) => educationDetail._id !== action.payload._id
        );
    },
    addExperience: (state, action) => {
      state.experiences.experienceDetails.push(action.payload);
    },
    addOrUpdateCompany: (state, action) => {
      state.experiences.experienceDetails.forEach((experienceDetail) => {
        if (experienceDetail._id === action.payload._id) {
          experienceDetail.company = action.payload.company;
        }
      });
    },
    addOrUpdateJobTitle: (state, action) => {
      state.experiences.experienceDetails.forEach((experienceDetail) => {
        if (experienceDetail._id === action.payload._id) {
          experienceDetail.jobTitle = action.payload.jobTitle;
        }
      });
    },
    addOrUpdateStartDateJob: (state, action) => {
      state.experiences.experienceDetails.forEach((experienceDetail) => {
        if (experienceDetail._id === action.payload._id) {
          experienceDetail.startDate = action.payload.startDate;
        }
      });
    },
    addOrUpdateEndDateJob: (state, action) => {
      state.experiences.experienceDetails.forEach((experienceDetail) => {
        if (experienceDetail._id === action.payload._id) {
          experienceDetail.endDate = action.payload.endDate;
        }
      });
    },
    addOrUpdateDescription: (state, action) => {
      state.experiences.experienceDetails.forEach((experienceDetail) => {
        if (experienceDetail._id === action.payload._id) {
          experienceDetail.description = action.payload.description;
        }
      });
    },
    deleteExperience: (state, action) => {
      state.experiences.experienceDetails =
        state.experiences.experienceDetails.filter(
          (experienceDetail) => experienceDetail._id !== action.payload._id
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
  AddOrUpdateLinkName,
  AddOrUpdateLinkUrl,
  deleteLink,
  addEducation,
  addOrUpdateInstitution,
  addOrUpdateDegree,
  addOrUpdateCourse,
  addOrUpdateStartDate,
  addOrUpdateEndDate,
  addOrUpdateCgpa,
  deleteEducation,
  addExperience,
  addOrUpdateCompany,
  addOrUpdateJobTitle,
  addOrUpdateStartDateJob,
  addOrUpdateEndDateJob,
  addOrUpdateDescription,
  deleteExperience,
} = resumeSlice.actions;

export default resumeSlice.reducer;
