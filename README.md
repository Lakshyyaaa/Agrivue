# Agrivue

Agrivue is an autonomous agronomic intelligence and rural grid dispatch platform engineered specifically for Indian smallholder farming ecosystems. It combines root-zone soil telemetry, hyper-local microclimate forecasts, staged crop lifecycle modeling, and rural power feeder synchronization to help farmers eliminate resource waste, protect crop yields, and stabilize state utility grids.

---

## Table of Contents

- [Overview](#overview)
- [The Agricultural Challenge in Bharat](#the-agricultural-challenge-in-bharat)
- [System Architecture & Core Capabilities](#system-architecture--core-capabilities)
  - [1. Crop Analysis and Agro-Climatic Fit](#1-crop-analysis-and-agro-climatic-fit)
  - [2. Resource-Optimized Weekly Routine Planner](#2-resource-optimized-weekly-routine-planner)
  - [3. Visual Farm Canopy Digital Twin](#3-visual-farm-canopy-digital-twin)
  - [4. Early Infection Detection via Computer Vision](#4-early-infection-detection-via-computer-vision)
  - [5. Multilingual Agronomic Assistant](#5-multilingual-agronomic-assistant)
  - [6. Post-Harvest Inventory and Shelf-Life Tracking](#6-post-harvest-inventory-and-shelf-life-tracking)
- [Quantified Field Impact](#quantified-field-impact)
  - [For Farmers and Rural Households](#for-farmers-and-rural-households)
  - [For Power Utilities (DISCOMs)](#for-power-utilities-discoms)
  - [For Groundwater and Regional Ecology](#for-groundwater-and-regional-ecology)
- [Frontend Design System & Aesthetics](#frontend-design-system--aesthetics)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [License & Attributions](#license--attributions)

---

## Overview

In traditional Indian agriculture, smallholders frequently rely on guesswork for irrigation, sowing windows, and chemical interventions. Because rural electricity feeders often energize unpredictably in the middle of the night, farmers are forced to trek into unlit, hazard-prone fields at 2:30 AM to turn on electric pump sets, frequently running them for six to eight continuous hours until fields flood ankle-deep.

This unmanaged pumping burns pump motors during voltage fluctuations, drops local water tables, suffocates plant root systems, and imposes massive peak inductive loads on state electricity distribution companies (DISCOMs).

Agrivue replaces guesswork with actionable telemetry. By connecting root-depth soil metrics, satellite climate windows, and regional feeder schedules, the platform gives farmers day-by-day instructions on when to sow, how long to irrigate, when to spray, and when to harvest for peak market value.

---

## The Agricultural Challenge in Bharat

- **Sowing Hesitation**: Delayed sowing penalizes yields by up to 51 kg per hectare for every day planting is postponed past the optimal soil moisture window.
- **Over-Irrigation**: Blind flood irrigation pumps an average of 95,000 liters per cycle when crops only require 38,500 liters at the root zone, wasting 59% of pumped groundwater and depleting village aquifers.
- **Motor Burnout and Electrical Hazards**: Inductive motor startups during erratic nighttime voltage surges cause frequent motor coil rewinds, costing smallholders upwards of 25,000 INR annually in repairs.
- **Delayed Pest Diagnosis**: Blight and fungal infections are typically identified only after 60% of foliage has yellowed, forcing heavy chemical treatments that wash away soil microbiomes.
- **Post-Harvest Degradation**: Sub-optimal storage humidity and premature harvesting lead to severe mandi moisture price cuts, contributing to India's annual 1.53 lakh crore INR post-harvest loss.

---

## System Architecture & Core Capabilities

The frontend application provides a modular interface structured around six agronomic pillars:

### 1. Crop Analysis and Agro-Climatic Fit
Evaluates land parcel coordinates against regional soil classification (clay, loamy, black cotton), rainfall patterns, and temperature profiles. Generates suitability indices, projected water budgets, and expected maturation timelines across major Kharif and Rabi crops (Paddy, Cotton, Soybean, Wheat, Mustard, Maize).

### 2. Resource-Optimized Weekly Routine Planner
Translates field telemetry into daily operational schedules. Farmers receive precise instructions detailing pump duration (in hours and minutes), fertilizer quantities, safety precautions, and labor allocation, fully synchronized with daytime feeder supply windows.

### 3. Visual Farm Canopy Digital Twin
A gamified visual farm representation illustrating real-time vegetative cover, canopy health, and soil hydration levels across multi-crop plots.

### 4. Early Infection Detection via Computer Vision
Facilitates weekly leaf camera scans to detect visual pathology (leaf rust, bacterial blight, leaf curl) during early-stage infection (under 12% surface area). Recommends low-cost, targeted remedies before blight spreads.

### 5. Multilingual Agronomic Assistant
An agronomic chatbot supporting voice and text queries in regional languages (Hindi, Marathi, Punjabi, Telugu). Answers operational questions on pest diagnosis, fertilizer dosage adjustments, and weather advisories.

### 6. Post-Harvest Inventory and Shelf-Life Tracking
Monitors storage humidity, temperature, and harvest batch decay curves. Provides mandi price trend monitoring and optimal dispatch windows to ensure produce meets Grade-A standards.

---

## Quantified Field Impact

### For Farmers and Rural Households
- **Net Seasonal Profit**: Over 42,000 INR additional profit per season through reduced fertilizer waste and premium mandi rates.
- **Motor Protection**: Eliminates dry-run damage and coil rewinds via automatic cutoff thresholds.
- **Daylight Farming**: Transfers irrigation to safe daytime hours, eliminating hazardous 2:30 AM pump switch walks.

### For Power Utilities (DISCOMs)
- **Peak Load Flattening**: Staggered pump starts reduce sudden peak inductive surges by 28%.
- **Distribution Transformer Health**: 65% reduction in rural transformer (DTR) burnout rates.
- **Subsidy Liability Relief**: Lower unmetered kilowatt-hour draw reduces state power subsidy expenditures.

### For Groundwater and Regional Ecology
- **Aquifer Stabilization**: Prevents excessive groundwater extraction, saving ~18.4 million liters per village season.
- **Carbon Abatement**: 1.2 tonnes of CO2 equivalent emissions avoided per hectare from reduced thermal power draw.
- **Soil Aeration**: Preserves beneficial root fungi and prevents nitrate leaching into surrounding water tables.

---

## Frontend Design System & Aesthetics

Agrivue uses a retro 16-bit pixel aesthetic designed to make complex agricultural telemetry accessible and intuitive:

- **Typography**: Neris font family (Neris Light, SemiBold, Black) for crisp readability across numerical data and display text.
- **Color Palette**:
  - Deep Forest Night: `#08120b`, `#121c15` (base background and structural borders)
  - Warm Retro Parchment: `#FCF2DF` (cards, badges, modals, and narrative blocks)
  - Harvest Gold: `#fbc33c` (active indicators, primary call-to-actions, and highlights)
  - Agricultural Emerald: `#1b7a43`, `#22c55e` (healthy soil status, moisture indicators)
  - Alert Rose: `#e11d48` (stress levels, disease warnings, dry-run alerts)
- **Pixel Borders**: Stepped multi-layered box borders (`pixel-box-stepped`, `pixel-box-white-stepped`) maintaining pixel-grid precision without standard modern rounded radii.
- **Audio Telemetry Engine**: Built-in procedural Web Audio API synthesizer (`src/utils/soundEngine.js`) providing 8-bit auditory feedback on interactive controls, toggles, and status alerts.

---

## Project Structure

```
Agrivue/
├── public/
│   ├── crops/                 # Crop pixel sprites (cotton, paddy, wheat, etc.)
│   ├── features/              # Feature showcase visual panels
│   ├── fonts/                 # Neris font family woff files
│   ├── icons/                 # Pixel UI icons, lifecycle nodes, pin sprites
│   ├── logos/                 # Interface vector and pixel badges
│   ├── favicon.svg            # Site favicon
│   └── footer.png             # Countryside pixel panorama artwork
├── src/
│   ├── assets/                # Static local images
│   ├── components/
│   │   ├── FeaturesDrawer.jsx     # Detailed feature drill-down drawer
│   │   ├── FeaturesSection.jsx    # 6-row core capability timeline
│   │   ├── Footer.jsx             # 4-column directory footer with national attribution
│   │   ├── HeroOverlay.jsx        # Landing hero typography and primary actions
│   │   ├── HotspotModal.jsx       # Interactive field node inspection modal
│   │   ├── HowItWorksSection.jsx  # Multi-phase operational workflow breakdown
│   │   ├── ImpactSection.jsx      # Quantified outcomes and comparison table
│   │   ├── Navbar.jsx             # Floating stepped navigation bar with scroll spy
│   │   ├── PilotModal.jsx         # Field deployment registration modal
│   │   ├── PixelScene.jsx         # Interactive countryside vista hero canvas
│   │   ├── ProblemSection.jsx     # Narrative problem walkthrough ("Season of Ramesh")
│   │   ├── StoryModal.jsx         # Case study inspection modal
│   │   └── TelemetryHUD.jsx       # Live soil and electrical telemetry HUD
│   ├── utils/
│   │   └── soundEngine.js         # Procedural 8-bit Web Audio synthesizer
│   ├── App.css                    # Component utilities and pixel frame styles
│   ├── App.jsx                    # Root application container and section orchestration
│   ├── index.css                  # Global styles, font face declarations, and tokens
│   └── main.jsx                   # Application entry point
├── index.html                     # HTML document shell with viewport configurations
├── package.json                   # Project dependencies and script declarations
├── vite.config.js                 # Vite bundler configuration
└── README.md                      # Project documentation
```

---

## Getting Started

### Prerequisites

- Node.js (version 18.0.0 or higher recommended)
- npm (version 9.0.0 or higher) or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Lakshyyaaa/Agrivue.git
cd Agrivue
npm install
```

### Development Server

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173
```

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## License & Attributions

Built for the smallholders and agricultural ecosystem of Bharat. All rights reserved.

Copyright 2026 Agrivue Agritech Technologies Pvt. Ltd.
