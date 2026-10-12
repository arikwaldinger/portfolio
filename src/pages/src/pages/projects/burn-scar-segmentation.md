---
layout: '../../layouts/Layout.astro'
title: "WISCLAND 2.0 High-Resolution Update"
---

# WISCLAND 2.0 High-Resolution Land Cover Update

[← Back to Portfolio](/portfolio/)

---

## 📌 Executive Summary
Scaled Wisconsin’s statewide land cover classification from 30m (Landsat) to 10m (Sentinel-2) spatial resolution across **1.4 billion pixels (35 million acres)**. Developed within Google Earth Engine (GEE), this project processed over **218 GB** of multi-sensor satellite imagery to support natural resource management, wildlife habitat modeling, and agricultural tracking across the state.

---

## 🛠️ Tech Stack & Methods
- **Platform:** Google Earth Engine (GEE JavaScript API)
- **Data Sources:** Sentinel-2 MSI (Optical), Sentinel-1 (C-Band SAR), USGS SRTM Elevation, SSURGO Soils
- **Machine Learning Architecture:** 5-Tier Hierarchical Random Forest Classifier
- **Accuracy Metrics:** 88% – 93% species-level precision across test validation folds

---

## 🔬 Methodology & Workflow

1. **Multi-Sensor Data Fusion:**
   - Preprocessed multi-temporal Sentinel-2 surface reflectance composite imagery across peak phenological windows.
   - Integrated Sentinel-1 dual-polarization (VV/VH) synthetic aperture radar (SAR) backscatter to differentiate wetland vegetation and canopy structures.

2. **Hierarchical Random Forest Classification:**
   - Engineered a multi-stage classification pipeline separating Level 1 broad classes (Forest, Water, Agriculture, Urban) down to Level 3 forest tree species level.

3. **Validation & Confusion Matrices:**
   - Evaluated model output against 10,000+ ground-truth reference points across Wisconsin eco-regions.

---

## 🗺️ Interactive Web Map / StoryMap Embed

<iframe 
  src="https://storymaps.arcgis.com/stories/YOUR_STORYMAP_ID_HERE" 
  width="100%" 
  height="600px" 
  style="border: none; border-radius: 8px; margin: 20px 0;">
</iframe>

---

## 💻 Code & Deliverables
- **GEE Script Repository:** [View GEE Code](https://code.earthengine.google.com)
- **Project Report PDF:** [Download Full Report PDF](/portfolio/assets/wiscland_report.pdf)

---

[← Return to Main Portfolio](/portfolio/)
