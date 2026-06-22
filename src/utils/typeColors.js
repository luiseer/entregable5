export const TYPE_COLORS = {
  fire:     { bg: '#FF9741', light: '#FFCC80', text: '#7C2D00' },
  water:    { bg: '#3692DC', light: '#90CAF9', text: '#0D2F5E' },
  grass:    { bg: '#38BF4B', light: '#A5D6A7', text: '#1B5E20' },
  electric: { bg: '#FBD100', light: '#FFF59D', text: '#5C4000' },
  psychic:  { bg: '#FF6675', light: '#FFCDD2', text: '#7C0020' },
  ice:      { bg: '#70D0F0', light: '#B3E5FC', text: '#01437C' },
  dragon:   { bg: '#7038F8', light: '#CE93D8', text: '#2A0078' },
  dark:     { bg: '#3C3C54', light: '#90A4AE', text: '#E0E0E0' },
  fairy:    { bg: '#F8A8C8', light: '#FCE4EC', text: '#7C0038' },
  fighting: { bg: '#C03028', light: '#EF9A9A', text: '#F8F8F8' },
  poison:   { bg: '#A040A0', light: '#CE93D8', text: '#F8F8F8' },
  ground:   { bg: '#E0C068', light: '#FFF8E1', text: '#4E342E' },
  rock:     { bg: '#B8A038', light: '#F0E68C', text: '#3E2A00' },
  bug:      { bg: '#A8B820', light: '#DCEDC8', text: '#33691E' },
  ghost:    { bg: '#705898', light: '#D1C4E9', text: '#F8F8F8' },
  steel:    { bg: '#B8B8D0', light: '#ECEFF1', text: '#1C313A' },
  flying:   { bg: '#A890F0', light: '#E8EAF6', text: '#1A237E' },
  normal:   { bg: '#A8A878', light: '#F5F5F5', text: '#3E3E3E' },
}

export const getTypeColor = (typeName) =>
  TYPE_COLORS[typeName] ?? TYPE_COLORS.normal
