# Church Slavery Atlas

**Live map:** https://nemarvin.github.io/church-slavery-atlas/

An interactive world map of 18th-century ecclesiastical slaveholding records, drawn from two datasets of Catholic religious communities across the Atlantic world.

## Features

- **254 entries** plotted across both datasets
- **Point size** scales with the number of enslaved persons recorded
- **Point color** indicates colonial empire:
  - Red — British/U.S.
  - Blue — French
  - Yellow — Spanish
  - Dark green — Portuguese
- **Keyword search** filters by country, community, note, or reference
- **Dataset toggles** show/hide each source independently
- **Hover any point** for a popup with full details including source citation and historical notes; popup flips below the point when it would overlap the control bar
- **Clustering** groups nearby points at lower zoom levels — click a cluster to zoom in
- **Year range filter** narrows records by approximate date
- **Search highlighting** marks matching text within open popups
- **Basemap selector** switches between an Antique (parchment/cartographic) style and a Modern topographic basemap
- **Geographic labels** toggle 18th-century place names at zoom-appropriate sizes

## Technical

The map is a single static HTML file with no build step.

- **[Leaflet 1.9.4](https://leafletjs.com/)** — map rendering and interaction
- **[Leaflet.markercluster 1.5.3](https://github.com/Leaflet/Leaflet.markercluster)** — proximity-based point clustering
- **[MapLibre GL 4.5](https://maplibre.org/)** — vector tile rendering (used by the ESRI vector basemap layers)
- **[ESRI Leaflet 3](https://developers.arcgis.com/esri-leaflet/)** — ESRI raster tile integration
- **[ESRI Leaflet Vector 4](https://developers.arcgis.com/esri-leaflet/api-reference/layers/vector-tile-layer/)** — ESRI vector tile layer integration
- **[PapaParse 5.4.1](https://www.papaparse.com/)** — CSV parsing in the browser
- **Basemaps:** two options switchable via a dropdown — *Antique* (a stacked ESRI Khaki Basemap with hillshade, dark bathymetry, parchment grain, and folded-paper crease textures composited via CSS `mix-blend-mode`) and *Modern* (ESRI World Topo Map raster tiles)
- **Geographic labels** (`labels.js`) — 18th-century place names rendered as `L.divIcon` markers on a dedicated pane, shown/hidden by zoom range and a toggle
- **Markers** are `L.marker` instances with `L.divIcon` circle icons sized proportionally to enslaved-person counts (square-root scale, 8–40 px radius)
- **Popups** are rendered from inline HTML strings; search terms are highlighted via a regex replace wrapping matches in `<mark>` tags

## Datasets

| File | Description | Rows |
|------|-------------|------|
| `world_eccl.csv` | Global survey of ecclesiastical slaveholders | 97 |
| `french_clergy.csv` | French colonial clergy slaveholding records | 157 |

## Running Locally

```bash
cd church-slavery-atlas
python3 -m http.server
```

Then open http://localhost:8000.
