export const glyphs = {
  squares: ["🬅", "🬊", "🬔", "🬛", "🬰", "🬴", "🬮", "🬗"],
  shapes: ["🭀", "🭯", "🭫", "🭔", "🭮", "🭮", "🮋", "🮂"],
  pics: ["👁", "🍽", "🎜", "🏖", "🕷", "🎕", "🕱", "🗩", "🏍"]
} 

export const setGlyphs = (set) => {
  const result = glyphs[set].sort(() => 0.5 - Math.random())
  return result
}
