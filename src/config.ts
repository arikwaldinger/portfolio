export const siteConfig = {
  name: "Arik Waldinger",
  title: "Geospatial Specialist | M.S. Environmental Observation & Informatics",
  description: "Portfolio of Arik Waldinger — Spatial Data Specialist, Remote Sensing Analyst, and Natural Resource Operator.",
  accentColor: "#1b4332",

  social: {
    email: "awaldinger9@gmail.com",
    linkedin: "https://www.linkedin.com/in/arik-waldinger/",
    github: "https://github.com/arikwaldinger",
  },

  aboutMe:
    "Spatial data specialist, remote sensing analyst, and natural resource manager holding an M.S. in Environmental Observation & Informatics from UW-Madison. Brings over 5 years of operational experience across Midwestern ecosystems, bridging high-performance spatial computational tools—Google Earth Engine (GEE), PyTorch deep learning, and Esri enterprise GIS—with on-the-ground prescribed fire execution, ecological restoration, and land stewardship management.",

  skills: [
    "Google Earth Engine (GEE)",
    "ArcGIS Pro / AGOL / FieldMaps",
    "Python (PyTorch, ArcPy, Pandas)",
    "R (sf, terra, ggplot2)",
    "Remote Sensing & LiDAR Processing",
    "QGIS & Avenza Maps",
    "Random Forest & U-Net CNNs",
    "NWCG Wildland Fire (S-130/190/211/219/290)",
    "Spatial Database Management",
    "Ecological Field Methods & Botany",
  ],

  projects: [
    {
      name: "WISCLAND 2.0 High-Resolution Update",
      description:
        "Scaled Wisconsin's land cover classification from 30m to 10m resolution in Google Earth Engine across 1.4 billion pixels (35 million acres). Engineered a 5-tier hierarchical Random Forest model achieving 88%–93% species-level precision.",
      link: "/portfolio/projects/wiscland",
      skills: ["Google Earth Engine", "JavaScript", "Random Forest", "Multi-Sensor Fusion"],
    },
    {
      name: "U-Net Semantic Segmentation of Burn Scars",
      description:
        "Trained a PyTorch U-Net convolutional neural network with a ResNet50 encoder and mixed-precision training on Sentinel-2 satellite imagery to automate burn scar delineation and post-fire damage severity mapping.",
      link: "/portfolio/projects/burn-scar-segmentation",
      skills: ["PyTorch", "Python", "Deep Learning", "Sentinel-2"],
    },
    {
      name: "Driftless Area Land Conservancy Master Plan",
      description:
        "Architected a multi-criteria spatial decision framework (Restoration & Protection Priority Indices) in ArcGIS Pro to guide capital allocation and conservation strategies across a 245-acre preserve.",
      link: "/portfolio/projects/dalc-master-plan",
      skills: ["ArcGIS Pro", "Multi-Criteria Evaluation", "LiDAR", "Land Protection"],
    },
    {
      name: "Full-Cycle Fire Intelligence & Soil Risk Model",
      description:
        "Engineered a GEE pipeline fusing Sentinel-2, SRTM DEMs, and SSURGO soil datasets with machine learning to evaluate prescribed burn effectiveness and model post-fire soil erosion risk.",
      link: "/portfolio/projects/fire-intelligence",
      skills: ["GEE", "Soil Stability", "Logic Gates", "Multi-Sensor Fusion"],
    },
  ],

 experience: [
    {
      company: "Private Estate",
      title: "Private Land Stewardship Consultant",
      dateRange: "May 2026 - Sept 2026",
      bullets: [
        "Formulated a comprehensive property management plan, establishing long-term ecological restoration benchmarks and land-use strategies across a 17-acre prairie and woodland estate.",
        "Deployed integrated chemical/mechanical herbaceous control, timber stand improvements (TSI), native plantings, and trail maintenance.",
        "Managed independent contract operations, including project scoping, competitive bidding, budget and expense tracking, and direct landowner consultation to align ecological outcomes with client goals.",
      ],
    },
    {
      company: "Wisconsin Department of Natural Resources",
      logo: "/portfolio/logos/WI-DNR.png",
      title: "Fire Rider LTE",
      dateRange: "Feb 2026 - May 2026",
      bullets: [
        "Executed tactical wildland fire suppression and prescribed burn operations, managing line construction, ignition sequences, fire behavior monitoring, and mop-up under strict NWCG safety standards.",
        "Operated and maintained heavy tactical apparatus and fire equipment—including engines, tractor plows, portable pumps, chainsaws, and hose lays—ensuring constant mission readiness during peak fire windows.",
        "Led hazardous fuels reduction and burn unit preparation across state natural areas, conducting brush thinning, fuel inventory reporting, and water/additive line securing for public safety and ecological restoration.",
      ],
    },
    {
      company: "Wisconsin Department of Natural Resources",
      logo: "/portfolio/logos/WI-DNR.png",
      title: "Conservation Biologist / Advanced Wildlife Technician",
      dateRange: "Sept 2024 - Present",
      bullets: [
        "Executed habitat restoration and ecological management on State Natural Areas (SNAs) across Southern Wisconsin, targeting rare and endangered species protection.",
        "Conducted vegetation surveys and habitat assessments for rare, threatened, and endangered species, contributing structured records to the Natural Heritage Inventory database.",
        "Served on prescribed fire crews in wildland ignition, firebreak construction, holding, mop-up, and overnight monitoring operations.",
      ],
    },
    {
      company: "Morchella LLC",
      logo: "/portfolio/logos/Morchella.jpg",
      title: "Field Operations Manager",
      dateRange: "Mar 2023 - Sept 2025",
      bullets: [
        "Created custom GIS mapping products using QGIS and Avenza Maps for site visualization, project tracking, and stakeholder reporting.",
        "Partnered with private landowners, non-profit organizations, and government agencies to design and execute land stewardship plans across diverse Midwestern landscapes.",
        "Supervised field teams in timber stand improvement, invasive species eradication, and ecological restoration execution.",
      ],
    },
    {
      company: "Mississippi Valley Conservancy",
      logo: "/portfolio/logos/MVC.png",
      title: "Land Management Technician (Crew Leader)",
      dateRange: "Feb 2023 - Aug 2023",
      bullets: [
        "Managed ecological stewardship across 5,000+ acres of nature preserves in the Driftless Area, conducting prescribed burning, timber stand improvement, and invasive plant management.",
        "Utilized ArcGIS Pro and Avenza Maps to map restoration zones, record rare species occurrences, and evaluate project impact.",
        "Led and mentored seasonal crew members in chainsaw operations, herbicide application, safety compliance, and field restoration protocols.",
      ],
    },
    {
      company: "Center for Environmental Management of Military Lands (CEMML)",
      logo: "/portfolio/logos/CEMML.png",
      title: "Lead Fisheries Technician (Fort McCoy)",
      dateRange: "May 2021 - Aug 2022",
      bullets: [
        "Managed aquatic resource and fisheries databases to fulfill military installation environmental compliance and natural resource management standards.",
        "Directed crew execution of stream habitat surveys, water quality monitoring, electrofishing, and public angler surveys.",
      ],
    },
  ],

  education: [
    {
      school: "University of Wisconsin–Madison",
      degree: "Master of Science in Environmental Conservation: Environmental Observation and Informatics",
      dateRange: "2024 - 2026",
      achievements: [
        "Specialized in spatial data science, satellite remote sensing, machine learning, and conservation GIS.",
        "Featured project work: High-resolution land cover scaling and deep learning burn scar segmentation.",
      ],
    },
    {
      school: "University of Wisconsin–La Crosse",
      degree: "Bachelor of Science in Biology (Minor: Environmental Studies)",
      dateRange: "2016 - 2020",
      achievements: [
        "Emphasis on botany, natural resource management, ecological field methods, and conservation biology.",
      ],
    },
  ],
};

export const config = siteConfig;
