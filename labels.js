// Geographic labels for the Church Slavery Atlas
// Font size tiers for geographic labels
const LABEL_SZ = {
  CONTINENT: 20,
  OCEAN:     17,
  REGION:    15,
  ISLAND:    13,
  CITY:      11,
  TOWN:      10,
};

// Zoom thresholds
const ZOOM = {
  CONTINENT_MIN:    2,
  OCEAN_MIN:        2,
  REGION_MIN:       3,
  ISLAND_MIN:       4,
  CITY_MIN:         5,
  TOWN_MIN:         6,
  ISLAND_CITY_MIN: 10,  // cities/towns situated inside islands
  MAX:             18,
};

// 18th-century cartographic place names relevant to the dataset
const GEO_LABELS = [
  // ── Continents ─────────────────────────────────────────────────────────────
  { text: 'EUROPE',          lat:  50,    lon:  10,    size: LABEL_SZ.CONTINENT, ls: '0.18em', minZoom: ZOOM.CONTINENT_MIN, maxZoom: 7  },
  { text: 'AFRICA',          lat:  15,    lon:  12,    size: LABEL_SZ.CONTINENT, ls: '0.18em', minZoom: ZOOM.CONTINENT_MIN, maxZoom: 6  },
  { text: 'NORTH AMERICA',   lat:  40,    lon: -115,   size: LABEL_SZ.CONTINENT, ls: '0.14em', minZoom: ZOOM.CONTINENT_MIN, maxZoom: 4  },
  { text: 'SOUTH AMERICA',   lat: -13,    lon: -74,    size: LABEL_SZ.CONTINENT, ls: '0.14em', minZoom: ZOOM.CONTINENT_MIN, maxZoom: 5  },

  // ── Oceans ─────────────────────────────────────────────────────────────────
  { text: 'ATLANTIC  OCEAN', lat:  30,    lon: -60,    size: LABEL_SZ.OCEAN,     ls: '0.22em', minZoom: ZOOM.OCEAN_MIN, maxZoom: 5  },
  { text: 'PACIFIC  OCEAN',  lat:   5,    lon: -145,   size: LABEL_SZ.OCEAN,     ls: '0.22em', minZoom: ZOOM.OCEAN_MIN, maxZoom: 5  },
  { text: 'INDIAN  OCEAN',   lat: -20,    lon:  75,    size: LABEL_SZ.OCEAN,     ls: '0.20em', minZoom: ZOOM.OCEAN_MIN, maxZoom: 5  },

  // ── Major colonial regions — zoom 3+ ────────────────────────────────────────
  { text: 'New France',      lat:  48,    lon: -80,    size: LABEL_SZ.REGION,                  minZoom: ZOOM.REGION_MIN, maxZoom: 8  },
  { text: 'Louisiana',       lat:  33,    lon: -92,    size: LABEL_SZ.REGION,                  minZoom: ZOOM.REGION_MIN, maxZoom: 8  },
  { text: 'New Spain',       lat:  23,    lon: -103,   size: LABEL_SZ.REGION,                  minZoom: ZOOM.REGION_MIN, maxZoom: 7  },
  { text: 'Brazil',          lat: -10,    lon: -52,    size: LABEL_SZ.REGION,                  minZoom: ZOOM.REGION_MIN, maxZoom: 6  },
  { text: 'Guinea',          lat:   10,    lon: -10,    size: LABEL_SZ.REGION,                  minZoom: ZOOM.REGION_MIN, maxZoom: 6  },
  { text: 'Senegambia',      lat:  13.5,  lon: -14,    size: LABEL_SZ.REGION,                  minZoom: ZOOM.REGION_MIN, maxZoom: 7  },
  { text: 'Angola',          lat:  -12,    lon:  15,    size: LABEL_SZ.REGION,                  minZoom: ZOOM.REGION_MIN, maxZoom: 7  },
  { text: 'Gulf of Mexico',  lat:  24.5,  lon: -90,    size: LABEL_SZ.REGION,    ls: '0.05em', minZoom: ZOOM.REGION_MIN, maxZoom: 7  },
  { text: 'Caribbean Sea',   lat:  14.5,  lon: -72,    size: LABEL_SZ.REGION,    ls: '0.05em', minZoom: ZOOM.REGION_MIN, maxZoom: 6  },

  // ── Islands & smaller territories — zoom 4+ ─────────────────────────────────
  { text: 'Saint-Domingue',  lat:  19,    lon: -72.5,  size: LABEL_SZ.ISLAND,                  minZoom: ZOOM.ISLAND_MIN, maxZoom: 9  },
  { text: 'Cuba',            lat:  22,    lon: -79.5,  size: LABEL_SZ.ISLAND,                  minZoom: ZOOM.ISLAND_MIN, maxZoom: ZOOM.MAX },
  { text: 'Jamaica',         lat:  17.9,  lon: -77.3,  size: LABEL_SZ.ISLAND,                  minZoom: ZOOM.ISLAND_MIN, maxZoom: ZOOM.MAX },
  { text: 'Martinique',      lat:  14.6,  lon: -61,    size: LABEL_SZ.ISLAND,                  minZoom: ZOOM.ISLAND_MIN, maxZoom: 9  },
  { text: 'Guadeloupe',      lat:  16.3,  lon: -61.5,  size: LABEL_SZ.ISLAND,                  minZoom: ZOOM.ISLAND_MIN, maxZoom: 9  },
  { text: 'Cayenne',         lat:   4.9,  lon: -52.3,  size: LABEL_SZ.ISLAND,                  minZoom: ZOOM.ISLAND_MIN, maxZoom: ZOOM.MAX },
  { text: 'Bourbon Island',  lat: -21.13,    lon:  55.4,  size: LABEL_SZ.ISLAND,                  minZoom: ZOOM.ISLAND_MIN, maxZoom: 9  },
  { text: 'Isle of France',  lat: -20.3,  lon:  57.5,  size: LABEL_SZ.ISLAND,                  minZoom: ZOOM.ISLAND_MIN, maxZoom: 9  },
  { text: 'Dominica',        lat:  15.4,  lon: -61.3,  size: LABEL_SZ.ISLAND,                  minZoom: 5,               maxZoom: ZOOM.MAX },
  { text: 'Grenada',         lat:  12.1,  lon: -61.7,  size: LABEL_SZ.ISLAND,                  minZoom: 5,               maxZoom: ZOOM.MAX },
  { text: 'St. Lucia',       lat:  13.9,  lon: -61,    size: LABEL_SZ.ISLAND,                  minZoom: 5,               maxZoom: ZOOM.MAX },
  { text: 'St. Barthélémy',  lat:  17.9,  lon: -62.83, size: LABEL_SZ.ISLAND,                  minZoom: 5,               maxZoom: ZOOM.MAX },
  { text: 'St. Martin',      lat:  18.08, lon: -63.05, size: LABEL_SZ.ISLAND,                  minZoom: 5,               maxZoom: ZOOM.MAX },
  { text: 'St. Croix',       lat:  17.75, lon: -64.76, size: LABEL_SZ.ISLAND,                  minZoom: 5,               maxZoom: ZOOM.MAX },
  { text: 'Marie-Galante',   lat:  15.92, lon: -61.26, size: LABEL_SZ.ISLAND,                  minZoom: 5,               maxZoom: ZOOM.MAX },
  { text: 'Les Saintes',     lat:  15.86, lon: -61.59, size: LABEL_SZ.ISLAND,                  minZoom: 6,               maxZoom: ZOOM.MAX },
  { text: 'La Désirade',     lat:  16.32, lon: -61.05, size: LABEL_SZ.ISLAND,                  minZoom: 6,               maxZoom: ZOOM.MAX },
  { text: 'São Tomé',        lat:   0.34, lon:   6.73, size: LABEL_SZ.ISLAND,                  minZoom: 5,               maxZoom: ZOOM.MAX },
  { text: 'Cape Verde',      lat:  15.11, lon: -23.62, size: LABEL_SZ.ISLAND,                  minZoom: 5,               maxZoom: ZOOM.MAX },

  // ── European ports — zoom 5+ ────────────────────────────────────────────────
  { text: 'Lisbon',          lat:  38.71, lon:  -9.14, size: LABEL_SZ.CITY,                    minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Seville',         lat:  37.39, lon:  -5.98, size: LABEL_SZ.CITY,                    minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Canada — zoom 5+ ────────────────────────────────────────────────────────
  { text: 'Quebec',          lat:  46.82, lon: -71.22, size: LABEL_SZ.CITY,                    minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Montreal',        lat:  45.50, lon: -73.57, size: LABEL_SZ.CITY,                    minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Three Rivers',    lat:  46.35, lon: -72.55, size: LABEL_SZ.CITY,                    minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Louisbourg',      lat:  45.89, lon: -59.99, size: LABEL_SZ.CITY,                    minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Louisiana & Mississippi Valley — zoom 5+ ────────────────────────────────
  { text: 'New Orleans',     lat: 29.96, lon: -90.06, size: LABEL_SZ.CITY,                    minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Kaskaskia',       lat: 37.55, lon: -89.91, size: LABEL_SZ.CITY,                    minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Cahokia',         lat: 38.56, lon: -90.17, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.TOWN_MIN, maxZoom: ZOOM.MAX },
  { text: 'Grand Coteau',    lat: 30.43, lon: -92.04, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.TOWN_MIN, maxZoom: ZOOM.MAX },
  { text: 'St. Louis',       lat: 38.64, lon: -90.23, size: LABEL_SZ.CITY,                    minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Eastern Seaboard & Great Lakes — zoom 5+ ────────────────────────────────
  { text: 'Baltimore',       lat: 39.28, lon: -76.62, size: LABEL_SZ.CITY,                    minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Fort Detroit',    lat: 42.32, lon: -83.08, size: LABEL_SZ.CITY,                    minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Fort Michilimackinac', lat: 45.79, lon: -84.74, size: LABEL_SZ.TOWN,               minZoom: ZOOM.TOWN_MIN, maxZoom: ZOOM.MAX },

  // ── Mexico & Central America — zoom 5+ ─────────────────────────────────────
  { text: 'Mexico',          lat: 19.43, lon: -99.13, size: LABEL_SZ.CITY,                    minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Cuba — zoom 10+ (island interior) ──────────────────────────────────────
  { text: 'Havana',          lat: 23.11, lon: -82.37, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Santiago de Cuba',lat: 20.02, lon: -75.83, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Hispaniola (Saint-Domingue / Santo Domingo) — zoom 10+ (island interior) ─
  { text: 'Cap-Haïtien',     lat: 19.74, lon: -72.21, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Port-au-Prince',  lat: 18.59, lon: -72.31, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Les Cayes',       lat: 18.20, lon: -73.75, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Jérémie',         lat: 18.64, lon: -74.12, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Jacmel',          lat: 18.24, lon: -72.53, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Saint-Marc',      lat: 19.10, lon: -72.69, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Port-de-Paix',    lat: 19.94, lon: -72.83, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Gonaïves',        lat: 19.44, lon: -72.69, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Léogâne',         lat: 18.51, lon: -72.63, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Santo Domingo',   lat: 18.46, lon: -69.94, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  // Smaller Haitian towns — zoom 10+
  { text: 'Fort Dauphin',    lat: 19.66, lon: -71.83, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Môle-Saint-Nicolas', lat: 19.81, lon: -73.38, size: LABEL_SZ.TOWN,                 minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Limbé',           lat: 19.71, lon: -72.40, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Limonade',        lat: 19.67, lon: -72.11, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Trou-du-Nord',    lat: 19.62, lon: -72.02, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Ounaminthe',      lat: 19.55, lon: -71.73, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Plaine-du-Nord',  lat: 19.68, lon: -72.27, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Acul-du-Nord',    lat: 19.68, lon: -72.32, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Grande-Rivière-du-Nord', lat: 19.58, lon: -72.17, size: LABEL_SZ.TOWN,             minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Borgne',          lat: 19.84, lon: -72.52, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Port-Margot',     lat: 19.75, lon: -72.46, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Jean-Rabel',      lat: 19.86, lon: -73.19, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Gros-Morne',      lat: 19.67, lon: -72.67, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Dondon',          lat: 19.52, lon: -72.27, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Quartier-Morin',  lat: 19.68, lon: -72.18, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Arcahaie',        lat: 18.77, lon: -72.51, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Verrettes',       lat: 19.05, lon: -72.47, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Petite-Rivière',  lat: 19.12, lon: -72.48, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Mirebalais',      lat: 18.84, lon: -72.10, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Croix-des-Bouquets', lat: 18.58, lon: -72.23, size: LABEL_SZ.TOWN,                 minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Grand-Goâve',     lat: 18.42, lon: -72.77, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Petit-Goâve',     lat: 18.43, lon: -72.85, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Anse-à-Veau',     lat: 18.50, lon: -73.35, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Fonds-des-Nègres',lat: 18.37, lon: -73.23, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Aquin',           lat: 18.28, lon: -73.40, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Cavaillon',       lat: 18.30, lon: -73.66, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Torbeck',         lat: 18.16, lon: -73.81, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Tiburon',         lat: 18.32, lon: -74.40, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Côteaux',         lat: 18.21, lon: -74.04, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Bainet',          lat: 18.19, lon: -72.76, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Jacmel (Cayes)',  lat: 18.23, lon: -72.40, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Terrier-Rouge',   lat: 19.63, lon: -71.92, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Saint-Louis-du-Nord', lat: 19.93, lon: -72.72, size: LABEL_SZ.TOWN,                minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Saint-Louis-du-Sud', lat: 18.26, lon: -73.55, size: LABEL_SZ.TOWN,                 minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Petit-Trou',      lat: 18.53, lon: -73.51, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Martinique — zoom 10+ (island interior) ─────────────────────────────────
  { text: 'Saint-Pierre',    lat: 14.78, lon: -61.18, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Fort-Royal',      lat: 14.61, lon: -61.07, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Sainte-Marie',    lat: 14.73, lon: -61.02, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Le Diamant',      lat: 14.48, lon: -61.03, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Le Marin',        lat: 14.47, lon: -60.87, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Les Trois-Îlets', lat: 14.54, lon: -61.03, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Rivière-Pilote',  lat: 14.48, lon: -60.91, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Saint-Esprit',    lat: 14.56, lon: -60.94, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Lamentin',        lat: 14.62, lon: -61.00, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Guadeloupe — zoom 10+ (island interior) ─────────────────────────────────
  { text: 'Basse-Terre',     lat: 16.00, lon: -61.73, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Pointe-à-Pitre',  lat: 16.24, lon: -61.53, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Le Moule',        lat: 16.33, lon: -61.34, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Sainte-Anne',     lat: 16.23, lon: -61.38, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Capesterre',      lat: 16.04, lon: -61.57, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Sainte-Rose',     lat: 16.33, lon: -61.70, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Deshaies',        lat: 16.31, lon: -61.79, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Anse-Bertrand',   lat: 16.47, lon: -61.51, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Petit-Canal',     lat: 16.38, lon: -61.48, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Bouillante',      lat: 16.10, lon: -61.75, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Port-Louis',      lat: 16.42, lon: -61.53, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Petit-Bourg',     lat: 16.19, lon: -61.59, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Goyave',          lat: 16.13, lon: -61.57, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Baie-Mahault',    lat: 16.27, lon: -61.59, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Vieux-Habitants', lat: 16.06, lon: -61.76, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Lamentin (Gpe)',  lat: 16.27, lon: -61.63, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Réunion — zoom 10+ (island interior) ────────────────────────────────────
  { text: 'Saint-Denis',     lat: -20.89, lon: 55.45, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Saint-Paul',      lat: -21.01, lon: 55.27, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Saint-Pierre',    lat: -21.34, lon: 55.48, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Sainte-Marie',    lat: -20.90, lon: 55.55, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Sainte-Suzanne',  lat: -20.91, lon: 55.61, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Saint-André',     lat: -20.96, lon: 55.65, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Saint-Benoît',    lat: -21.03, lon: 55.71, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Saint-Joseph',    lat: -21.38, lon: 55.62, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Saint-Louis',     lat: -21.29, lon: 55.41, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Saint-Leu',       lat: -21.17, lon: 55.29, size: LABEL_SZ.TOWN,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Mauritius — zoom 10+ (island interior) ──────────────────────────────────
  { text: 'Port-Louis',      lat: -20.16, lon: 57.50, size: LABEL_SZ.CITY,                    minZoom: ZOOM.ISLAND_CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Colombia — zoom 5+ ─────────────────────────────────────────────────────
  { text: 'Cartagena',       lat:  10.40, lon: -75.50, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Medellín',        lat:   6.24, lon: -75.58, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Ecuador — zoom 5+ ──────────────────────────────────────────────────────
  { text: 'Quito',           lat:  -0.23, lon: -78.52, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Peru — zoom 5+ ─────────────────────────────────────────────────────────
  { text: 'Arequipa',        lat: -16.40, lon: -71.54, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Argentina — zoom 5+ ────────────────────────────────────────────────────
  { text: 'Buenos Aires',    lat: -34.60, lon: -58.38, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Córdoba',         lat: -31.42, lon: -64.19, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Paraguay — zoom 5+ ─────────────────────────────────────────────────────
  { text: 'Asunción',        lat: -25.28, lon: -57.64, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Chile — zoom 5+ ────────────────────────────────────────────────────────
  { text: 'Santiago',        lat: -33.45, lon: -70.67, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Brazil cities — zoom 5+ ────────────────────────────────────────────────
  { text: 'Rio de Janeiro',  lat: -22.91, lon: -43.20, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Recife',          lat:  -8.05, lon: -34.90, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Olinda',          lat:  -8.00, lon: -34.88, size: LABEL_SZ.TOWN,                   minZoom: ZOOM.TOWN_MIN, maxZoom: ZOOM.MAX },
  { text: 'São Paulo',       lat: -23.55, lon: -46.63, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },

  // ── Africa — zoom 5+ ───────────────────────────────────────────────────────
  { text: 'Luanda',          lat:  -8.84, lon:  13.23, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Soyo',            lat:  -6.13, lon:  12.37, size: LABEL_SZ.TOWN,                   minZoom: ZOOM.TOWN_MIN, maxZoom: ZOOM.MAX },
  { text: 'Quelimane',       lat: -17.88, lon:  36.89, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Tete',            lat: -16.17, lon:  33.60, size: LABEL_SZ.TOWN,                   minZoom: ZOOM.TOWN_MIN, maxZoom: ZOOM.MAX },

  // ── India — zoom 5+ ────────────────────────────────────────────────────────
  { text: 'Goa',             lat:  15.50, lon:  73.91, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Pondicherry',     lat:  11.94, lon:  79.81, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Bassein',         lat:  19.33, lon:  72.82, size: LABEL_SZ.TOWN,                   minZoom: ZOOM.TOWN_MIN, maxZoom: ZOOM.MAX },
  { text: 'Daman',           lat:  20.42, lon:  72.85, size: LABEL_SZ.TOWN,                   minZoom: ZOOM.TOWN_MIN, maxZoom: ZOOM.MAX },
  { text: 'Diu',             lat:  20.71, lon:  70.98, size: LABEL_SZ.TOWN,                   minZoom: ZOOM.TOWN_MIN, maxZoom: ZOOM.MAX },
  { text: 'Thana',           lat:  19.17, lon:  72.96, size: LABEL_SZ.TOWN,                   minZoom: 7,             maxZoom: ZOOM.MAX },

  // ── East Asia — zoom 5+ ────────────────────────────────────────────────────
  { text: 'Macau',           lat:  22.20, lon: 113.54, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Manila',          lat:  14.58, lon: 120.97, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
  { text: 'Nagasaki',        lat:  32.75, lon: 129.88, size: LABEL_SZ.CITY,                   minZoom: ZOOM.CITY_MIN, maxZoom: ZOOM.MAX },
];
