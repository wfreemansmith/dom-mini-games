export const randomMessage = (arr) => {
  const i = Math.round(Math.random() * (arr.length - 1));
  return arr[i];
};

export const getURL = () => {
  const url = window.location.href.match(/[a-z\-]+\.html/g);
  return url === null ? null : url[0]
};

export const getQuery = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const mode = urlParams.get("mode");
  return mode
};

export const navigate = (move) => {
  const pages = ["noughts-crosses.html", "memory.html"];
  const grid = document.getElementById("grid-container");
  const dark = grid.classList.contains("dark") ? "?mode=dark" : "";

  const url = getURL()

  let i =
    url === null
      ? Math.round(Math.random() * (pages.length - 1))
      : pages.indexOf(url);

  if (move < 0) {
    i = i === 0 ? pages.length - 1 : i + move;
  } else if (move > 0) {
    i = i === pages.length - 1 ? 0 : i + move;
  }

  parent.location = `${pages[i]}${dark}`;
};

export const handleKeyDown = (key) => {
  // Spacebar: 32
  // Up: 38
  // Down: 40
  // Tab: 9
  key === 9 || key === 38
    ? darkMode()
    : key === 37
    ? navigate(-1)
    : key === 39
    ? navigate(1)
    : key === 9
    ? darkMode()
    : console.log({ key });
};

export const darkMode = () => {
  let elements = document.querySelectorAll("*");
  let toggle = document.getElementById("dark-toggle");

  toggle.innerHTML = toggle.classList.contains("dark") ? "☀" : "☂";

  elements.forEach((element) => {
    element.classList.toggle("dark");
  });
};
