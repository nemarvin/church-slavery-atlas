# Church Slavery Atlas

**Live map:** https://nemarvin.github.io/church-slavery-atlas/

An interactive world map of 18th-century ecclesiastical slaveholding records, drawn from two datasets of Catholic religious communities across the Atlantic world.

## Features

- **254 locations** plotted across both datasets
- **Point size** scales with the number of enslaved persons recorded
- **Point color** indicates colonial empire:
  - Red — British/U.S.
  - Blue — French
  - Yellow — Spanish
  - Dark green — Portuguese
- **Keyword search** filters by country, community, note, or reference
- **Dataset toggles** show/hide each source independently
- **Click any point** for full details including source citation and historical notes

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
