export const randomMessage = (arr) => {
  const i = Math.round(Math.random() * (arr.length - 1));
  return arr[i];
};

[];

export const navigate = (url, key) => {
  const pages = ["noughts-crosses.html", "memory.html"];
  let i =
    url === "index.html"
      ? Math.round(Math.random() * (pages.length - 1))
      : pages.indexOf(url);

  if (key === 37) {
    i = i === 0 ? pages.length - 1 : i - 1;
  } else if (key === 39) {
    i = i === pages.length - 1 ? 0 : i + 1;
  }

  parent.location = pages[i];
};

export const handleKeyDown = (url, key) => {
    // Spacebar: 32
  // Up: 38
  // Down: 40
  // Tab: 9
  key === 37 || key === 39
    ? navigate(url, key)
    : key === 9
    ? console.log("Toggle between light and dark here")
    : console.log({key});
}