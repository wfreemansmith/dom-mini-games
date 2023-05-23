export const glyphs = {
  "🍽": ["👁", "🍽", "🎜", "🏖", "🕷", "🎕", "🕱", "🗩", "🏍"],
  "🬗": ["🬅", "🬊", "🬔", "🬛", "🬰", "🬴", "🬮", "🬗", "🬇"],
  "🭫": ["🭀", "🭯", "🭫", "🭔", "🭮", "🭮", "🮋", "🮂", "🮛"],
  "●": ["●", "◍", "◎", "◐", "◓", "◔", "◕", "○", "◉"]
} 

export const setGlyphs = (set) => {
  console.log(set)
  const result = glyphs[set].sort(() => 0.5 - Math.random())
  return result
}
