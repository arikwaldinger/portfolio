export const siteConfig = {
  name: "Arik Waldinger",
  title: "Geospatial Specialist | M.S. Environmental Observation & Informatics",
  description: "Portfolio of Arik Waldinger — Spatial Data Specialist, Remote Sensing Analyst, and Conservation Operator.",
  accentColor: "#1b4332",

  social: {
    email: "awaldinger9@gmail.com",
    linkedin: "https://www.linkedin.com/in/arik-waldinger/",
    github: "https://github.com/arikwaldinger",
  },

  aboutMe:
    "Spatial data specialist and natural resource practitioner holding an M.S. in Environmental Observation & Informatics from UW-Madison. Proven expertise in Google Earth Engine (GEE), spatial machine learning (Random Forest, PyTorch U-Net), multi-sensor remote sensing fusion (Sentinel-1/2, Landsat, LiDAR), and Esri GIS architectures. Demonstrated track record scaling statewide land cover classifications across 1.4 billion pixels, developing spatial decision-support tools, and leading complex on-the-ground land stewardship across Midwest ecosystems.",

  skills: [
    "Google Earth Engine (GEE)",
    "ArcGIS Pro / AGOL / FieldMaps",
    "Python (PyTorch, ArcPy, Pandas)",
    "R (sf, terra, ggplot2)",
    "Remote Sensing & LiDAR Processing",
    "QGIS & Avenza Maps",
    "Random Forest & U-Net CNNs",
    "NWCG Wildland Fire (S-130/190)",
  ],

  projects: [
    {
      name: "U-Net Semantic Segmentation of Burn Scars",
      description:
        "Implemented a PyTorch U-Net convolutional neural network with ResNet50 encoder and mixed-precision training on Sentinel-2 satellite imagery for automated burn scar segmentation and damage severity mapping.",
      link: "https://github.com/arikwaldinger/portfolio/blob/main/U_Net_Semantic_Segmentation_of_Burn_Scars.ipynb",
      skills: ["PyTorch", "Python", "Deep Learning", "Remote Sensing"],
    },
    {
      name: "WISCLAND 2.0 High-Resolution Update",
      description:
        "Scaled Wisconsin's land cover classification from 30m to 10m in GEE across 1.4 billion pixels (35 million acres). Engineered a 5-tier hierarchical Random Forest architecture achieving 88%–93% species-level precision.",
      link: "https://github.com/arikwaldinger",
      skills: ["Google Earth Engine", "JavaScript", "Random Forest", "Sentinel-1/2"],
    },
    {
      name: "Driftless Area Land Conservancy Master Plan",
      description:
        "Architected a multi-criteria spatial decision framework (Restoration Priority Index & Protection Priority Index) in ArcGIS Pro to prioritize capital allocation and land protection across a 245-acre preserve.",
      link: "https://github.com/arikwaldinger",
      skills: ["ArcGIS Pro", "Multi-Criteria Evaluation", "LiDAR", "Land Protection"],
    },
    {
      name: "Full-Cycle Fire Intelligence & Soil Risk Model",
      description:
        "Engineered a GEE workflow fusing Sentinel-2, SRTM DEMs, and SSURGO soil data with machine learning to evaluate prescribed burn effectiveness and model post-fire soil erosion risk.",
      link: "https://github.com/arikwaldinger",
      skills: ["GEE", "Soil Stability", "Logic Gates", "Multi-Sensor Fusion"],
    },
  ],

  experience: [
    {
      company: "Wisconsin Department of Natural Resources (DNR)",
      title: "Conservation Biologist / Advanced Wildlife Technician",
      dateRange: "Sept 2024 - Present",
      bullets: [
        "Conducted habitat restoration and ecological management on Wisconsin’s State Natural Areas (SNAs), focusing on the conservation of rare and endangered species.",
        "Performed vegetation surveys and habitat assessments for rare, threatened, and endangered species, contributing to the Natural Heritage Inventory database.",
        "Assisted in prescribed fire operations, including firebreak construction, ignition, mop-up, and overnight monitoring.",
      ],
    },
    {
      company: "Morchella LLC",
      title: "Field Operations & Lead Restoration Technician",
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
      school: "University of Wisconsin–Madison",
      degree: "Master of Science in Environmental Conservation: Environmental Observation and Informatics",
      dateRange: "2025 - 2026",
      achievements: [
        "Specialization in spatial data science, satellite image processing, computer vision, and conservation GIS.",
      ],
    },
    {
      school: "University of Wisconsin–La Crosse",
      degree: "Bachelor of Science in Biology (Minor: Environmental Studies)",
      dateRange: "2016 - 2020",
      achievements: [
        "Focus on ecological field methods, botany, natural resource management, and environmental science.",
      ],
    },
  ],
};

export const config = siteConfig;
