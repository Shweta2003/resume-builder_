import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fontFamily: "",
  isSmart: false,
  personalInformation: {
    showDetails: true,
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "1234567890",
    jobTitle: "Software Engineer",
    links: [],
    about:
      "Dedicated software engineer with [X years] of experience in designing and implementing scalable and efficient solutions.Proficient in JavaScript and passionate about leveraging innovative technologies to solve complex problems. Committed to continuous learning to deliver high-quality software solutions.",
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
    languages: [],
    frameworks: [],
    tools: [],
    databases: [],
    otherSkills: [],
  },
  projects: {
    showDetails: false,
    projectDetails: [],
  },
  certificates: {
    showDetails: false,
    certificatesDetails: [],
  },
  languages: {
    showDetails: false,
    languagesDetails: [],
  },
  additionalInformation: {
    showDetails: false,
    additionalInformationDetails: [],
  },
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    changeFontFamily: (state, action) => {
      if(action.payload.fontFamily === "Arvo"){
        state.fontFamily = "'Arvo', serif";
      }
      else if(action.payload.fontFamily === "Jaldi"){
        state.fontFamily = "'Jaldi', sans-serif";
      }
      else{
        state.fontFamily = action.payload.fontFamily;
      }
    },
    toggleIsSmart: (state, action) => {
      state.isSmart = !state.isSmart;
    },
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
      state.personalInformation.jobTitle = action.payload.jobTitle;
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
    addAbout: (state, action) => {
      state.personalInformation.about = action.payload;
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
    addOrUpdateJobDuration: (state, action) => {
      state.experiences.experienceDetails.forEach((experienceDetail) => {
        if (experienceDetail._id === action.payload._id) {
          experienceDetail.duration = action.payload.duration;
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
    addLanguage: (state, action) => {
      state.skills.languages.push(action.payload);
    },

    deleteLanguage: (state, action) => {
      state.skills.languages = state.skills.languages.filter(
        (language) => language._id !== action.payload._id
      );
    },
    addFramework: (state, action) => {
      state.skills.frameworks.push(action.payload);
    },
    deleteFramework: (state, action) => {
      state.skills.frameworks = state.skills.frameworks.filter(
        (framework) => framework._id !== action.payload._id
      );
    },
    addTool: (state, action) => {
      state.skills.tools.push(action.payload);
    },
    deleteTool: (state, action) => {
      state.skills.tools = state.skills.tools.filter(
        (tool) => tool._id !== action.payload._id
      );
    },
    addDatabase: (state, action) => {
      state.skills.databases.push(action.payload);
    },
    deleteDatabase: (state, action) => {
      state.skills.databases = state.skills.databases.filter(
        (database) => database._id !== action.payload._id
      );
    },
    addOtherSkill: (state, action) => {
      state.skills.otherSkills.push(action.payload);
    },
    deleteOtherSkill: (state, action) => {
      state.skills.otherSkills = state.skills.otherSkills.filter(
        (otherSkill) => otherSkill._id !== action.payload._id
      );
    },
    addProject: (state, action) => {
      state.projects.projectDetails.push(action.payload);
    },
    addOrUpdateProjectName: (state, action) => {
      state.projects.projectDetails.forEach((projectDetail) => {
        if (projectDetail._id === action.payload._id) {
          projectDetail.name = action.payload.name;
        }
      });
    },
    addOrUpdateProjectTechnologies: (state, action) => {
      state.projects.projectDetails.forEach((projectDetail) => {
        if (projectDetail._id === action.payload._id) {
          projectDetail.technologies = action.payload.technologies;
        }
      });
    },
    addOrUpdateProjectDescription: (state, action) => {
      state.projects.projectDetails.forEach((projectDetail) => {
        if (projectDetail._id === action.payload._id) {
          projectDetail.description = action.payload.description;
        }
      });
    },
    addOrUpdateProjectLink: (state, action) => {
      state.projects.projectDetails.forEach((projectDetail) => {
        if (projectDetail._id === action.payload._id) {
          projectDetail.link = action.payload.link;
        }
      });
    },
    addOrUpdateProjectGithub: (state, action) => {
      state.projects.projectDetails.forEach((projectDetail) => {
        if (projectDetail._id === action.payload._id) {
          projectDetail.github = action.payload.github;
        }
      });
    },
    deleteProject: (state, action) => {
      state.projects.projectDetails = state.projects.projectDetails.filter(
        (projectDetail) => projectDetail._id !== action.payload._id
      );
    },
    addCertificate: (state, action) => {
      state.certificates.certificatesDetails.push(action.payload);
    },
    addOrUpdateCertificateName: (state, action) => {
      state.certificates.certificatesDetails.forEach((certificateDetail) => {
        if (certificateDetail._id === action.payload._id) {
          certificateDetail.name = action.payload.name;
        }
      });
    },
    addOrUpdateCertificateAuthority: (state, action) => {
      state.certificates.certificatesDetails.forEach((certificateDetail) => {
        if (certificateDetail._id === action.payload._id) {
          certificateDetail.authority = action.payload.authority;
        }
      });
    },
    addOrUpdateCertificateLink: (state, action) => {
      state.certificates.certificatesDetails.forEach((certificateDetail) => {
        if (certificateDetail._id === action.payload._id) {
          certificateDetail.link = action.payload.link;
        }
      });
    },
    deleteCertificate: (state, action) => {
      state.certificates.certificatesDetails =
        state.certificates.certificatesDetails.filter(
          (certificateDetail) => certificateDetail._id !== action.payload._id
        );
    },
    addAward: (state, action) => {
      state.additionalInformation.additionalInformationDetails.push(
        action.payload
      );
    },
    addOrUpdateAward: (state, action) => {
      state.additionalInformation.additionalInformationDetails.forEach(
        (awardDetail) => {
          if (awardDetail._id === action.payload._id) {
            awardDetail.award = action.payload.award;
          }
        }
      );
    },
    deleteAward: (state, action) => {
      state.additionalInformation.additionalInformationDetails =
        state.additionalInformation.additionalInformationDetails.filter(
          (awardDetail) => awardDetail._id !== action.payload._id
        );
    },
    addCommunicationLanguage: (state, action) => {
      state.languages.languagesDetails.push(action.payload);
    },
    deleteCommunicationLanguage: (state, action) => {
      state.languages.languagesDetails =
        state.languages.languagesDetails.filter(
          (language) => language._id !== action.payload._id
        );
    },
  },
});

export const {
  toggleIsSmart,
  toggleDetails,
  addName,
  addEmail,
  addPhone,
  addJobTitle,
  addLink,
  AddOrUpdateLinkName,
  AddOrUpdateLinkUrl,
  deleteLink,
  addAbout,
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
  addOrUpdateJobDuration,
  addOrUpdateDescription,
  deleteExperience,
  addLanguage,
  deleteLanguage,
  addFramework,
  deleteFramework,
  addTool,
  deleteTool,
  addDatabase,
  deleteDatabase,
  addOtherSkill,
  deleteOtherSkill,
  addProject,
  addOrUpdateProjectName,
  addOrUpdateProjectTechnologies,
  addOrUpdateProjectDescription,
  addOrUpdateProjectLink,
  addOrUpdateProjectGithub,
  deleteProject,
  addCertificate,
  addOrUpdateCertificateName,
  addOrUpdateCertificateAuthority,
  addOrUpdateCertificateLink,
  deleteCertificate,
  addAward,
  addOrUpdateAward,
  deleteAward,
  changeFontFamily,
  addCommunicationLanguage,
  deleteCommunicationLanguage,
} = resumeSlice.actions;

export default resumeSlice.reducer;
