import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  focus: false,
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
    educationDetails: [
      {
        cgpa : "enter cgpa",
        course : "engineering",
        degree : "B. E.",
        endDate : "July, 2025",
        startDate : "Dec, 2021",
        institution : "Enter Institution name",
        _id : "Education_0011"
      }
    ],
  },
  experiences: {
    showDetails: false,
    experienceDetails: [
      {
        company : "ABC Solutions",
        duration : "January 2017 - May 2019",
        jobTitle : "Junior Developer",
        description : "Developed and maintained code for client websites, focusing on frontend features using HTML, CSS, and JavaScript.\nAssisted in the development of an internal project management tool that improved team productivity by 15%.\nProvided regular maintenance and updates for client websites, ensuring 99% uptime and rapid bug fixes.",
        _id : "0012"
      },
      {
        company : "Oswal Tech",
        duration : "June, 2019 - Present",
        jobTitle : "Software Engineer",
        description : "Led a team of 5 engineers in developing a new feature for our client's SAAS project, resulting in a 20% increase in user engagement.\nImplemented efficient code solutions, reducing system load time by 30% and enhancing user experience.\nCollaborated with the UX/UI team to redesign the application interface, improving usability scores by 25%.",
        _id : "0011"
      }
    ],
  },
  skills: {
    showDetails: false,
    languages: [
      {
        language : "C++",
        _id : "prog_001"
      },
      {
        language : "Python",
        _id : "prog_002"
      }
    ],
  },
  projects: {
    showDetails: false,
    projectDetails: [
      {
        description : "We have attempted to create an application for the ease of senior citizens.\nLearned about project lifecycle, market survey and data analysis",
        github : "https://github.com/Shweta2003/Helper",
        link : "https://github.com/Shweta2003/Helper",
        name : "Helper",
        technologies : "Java | android studio | firebase",
        _id : "project_001"
      },
      {
        description : "Search for menu from different shops Order food online and then go and pickup food on time displayed to avoid queuing.\nLearned how to do surveys, communicating with stakeholders.",
        github : "https://github.com/Shweta2003/Street-Treat",
        link : "https://github.com/Shweta2003/Street-Treat",
        name : "Street Treat",
        technologies : "Kotlin | Jetpack Compose | android studio",
        _id : "project_002"
      },
    ],
  },
  certificates: {
    showDetails: false,
    certificatesDetails: [
      {
        authority : "Enter Authority name",
        link : "www.google.com",
        name : "Google Cloud",
        _id : "certificate_001"
      },
      {
        authority : "Enter Authority name",
        link : "www.google.com",
        name : "Cyber Security",
        _id : "certificate_002"
      }
    ],
  },
  languages: {
    showDetails: false,
    languagesDetails: [
      {
        language : "English",
        _id : "lang_001"
      },
      {
        language : "Hindi",
        _id : "lang_002"
      }
    ],
  },
  additionalInformation: {
    showDetails: false,
    additionalInformationDetails: [
      {
        award : "Enter Award Category/name",
        _id : "awards_001"
      }
    ],
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
    toggleFocus: (state, action) => {
      state.focus = !state.focus;
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
  toggleFocus
} = resumeSlice.actions;

export default resumeSlice.reducer;
