# Pokédex App

A Pokémon Pokédex built with React 18 + Vite + Redux + React Router v6 + Tailwind CSS. Consumes the [PokeAPI](https://pokeapi.co/).

## Features

- **Name form** — Enter your trainer name to access the Pokédex
- **Pokédex list** — Paginated grid (8 per page) of all Pokémon with type-colored cards
- **Type filter** — Filter Pokémon by type via dropdown
- **Search** — Look up any Pokémon by name or ID
- **Detail view** — Full stats, types, abilities, and moves for each Pokémon
- **Protected routes** — Redirects to login if no trainer name is set
- **Type color system** — Each card background reflects its primary type with a gradient

## Tech Stack

| Library | Version |
|---|---|
| React | 18 |
| Vite | 5 |
| Redux | 5 |
| React Router | 6 |
| Tailwind CSS | 3 |
| Axios | 1.6 |

## Getting Started

```bash
npm install
npm run dev       # development server at localhost:5173
npm run build     # production build to dist/
npm run preview   # preview production build
```

## Project Structure

```
src/
├── main.jsx                   # Entry point (React 18 createRoot + Redux store)
├── App.jsx                    # Router config (/, /poke, /poke/:id)
├── styles.css                 # Tailwind directives + global styles
├── utils/
│   └── typeColors.js          # Type → color map for card gradients
├── redux/
│   └── main.jsx               # Redux store (SET_NAME action)
├── components/
│   ├── NameForm.jsx           # Landing page — trainer name input
│   ├── Pokedex.jsx            # Main list — pagination, type filter, search
│   ├── PokemonInfo.jsx        # Card component — type-colored gradient
│   ├── PokemonDetails.jsx     # Detail view — stats, types, abilities, moves
│   └── ProtectedRoutes.jsx    # Auth guard — checks Redux name state
└── img/                       # Static assets (logos, trainer images)
```

## Deployment

The project includes a `netlify.toml` for one-click deploy to Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/luiseer/entregable5)

## API

All data comes from [PokéAPI](https://pokeapi.co/) v2.
