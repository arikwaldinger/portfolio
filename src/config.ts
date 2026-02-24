export const siteConfig = {
  name: "Arik Waldinger",
  title: "M.S. UW-Madison",
  description: "Portfolio website of Arik Waldinger",
  accentColor: "#1d4ed8",
  social: {
    email: "awaldinger9@gmail.com",
    linkedin: "https://www.linkedin.com/in/arik-waldinger/",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/arikwaldinger",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "U-Net Semantic Segmentation of Burn Scars",
      description:
        "U-Net convolutional neural network for semantic segmentation of burn scars from satellite imagery",
      link: "U_Net_Semantic_Segmentation_of_Burn_Scars.ipynb",
      skills: ["Machine Learning", "Python", "Remote Sensing"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Wisconsin Department of Natural Resources (DNR)",
      title: "Conservation Biologist// Advanced Wildlife Technician",
      dateRange: "Sept 2025 - June 2026",
      bullets: [
        "Conducted habitat restoration and ecological management on Wisconsin’s State Natural Areas (SNAs), focusing on the conservation of rare and endangered species.",
        "Performed vegetation surveys and habitat assessments for rare, threatened, and endangered species, contributing to the Natural Heritage Inventory database.",
        "Assisted in prescribed fire operations, including firebreak construction, ignition, mop-up, and overnight monitoring.",
      ],
    },
    {
      company: "Morchella LLC.",
      title: "Lead Restoration Technician",
      dateRange: "Mar 2023 - Sept 2025",
      bullets: [
        "Created GIS maps using QGIS and Avenza Maps to visualize project sites, track key features, and share progress with stakeholders.",
        "Partnered with private landowners, government agencies, and non-profit organizations to plan and implement ecological restoration projects across diverse landscapes.",
        "Led field crews in land management activities, ensuring projects were executed efficiently and met ecological objectives.",
      ],
    },
    {
      company: "Mississippi Valley Conservancy",
      title: "Land Management Technician (Crew Leader)",
      dateRange: "Feb 2023 - Aug 2023",
      bullets: [
        "Implemented habitat restoration projects across 5,000+ acres of nature preserves, focusing on timber stand improvement, prescribed burning, invasive species control, and brush removal.",
        "Utilized GIS software (ArcGIS & Avenza Maps) to track project progress, survey rare species, and map restoration sites, ensuring data-driven decision-making.",
        "Led a seasonal intern crew in land management activities, providing hands-on training in chainsaw operation, herbicide application, and restoration techniques.",
      ],
    },
  ],
  education: [
    {
      school: "University of Wisconsin-Madison",
      degree: "Master of Science in Environmental Conservation: Emviornmental Observation and Informatics",
      dateRange: "2025 - 2026",
      ],
    },
    {
      school: "University of Wisconsin-La Crosse",
      degree: "Bachelor of Science in Biology",
      dateRange: "2016 - 2020",
      ],
    },
  ],
};
