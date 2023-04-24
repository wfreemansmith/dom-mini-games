export const getURL = () => {
  const url = window.location.href.match(/[a-z\-]+\.html/g);
  return url === null ? null : url[0];
};

export const getQuery = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const mode = urlParams.get("mode");
  const hue = urlParams.get("hue");
  return {mode, hue};
};

export const randomise = (arr) => {
  return Math.round(Math.random() * (arr.length - 1))
}

export const navigate = (move, hue) => {
  const pages = ["noughts-crosses.html", "memory.html"];
  const grid = document.getElementById("grid-container");

  const dark = grid.classList.contains("dark") ? "mode=dark" : "";
  const colour = hue ? `hue=${hue}` : ""
  const q = dark.length > 0 || hue > 0 ? "?" : "";
  const and = dark.length > 0 && hue > 0 ? "&" : "";

  const url = getURL();

  let i =
    url === null
      ? randomise(pages)
      : pages.indexOf(url);

  if (move < 0) {
    i = i === 0 ? pages.length - 1 : i + move;
  } else if (move > 0) {
    i = i === pages.length - 1 ? 0 : i + move;
  }

  parent.location = `${pages[i]}${q}${dark}${and}${colour}`;
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

export const changeHue = (hue = 48, shift) => {
  if (!Number.isInteger(+hue)) return 

  console.log("changeHue", {hue, shift})
  if (shift) hue += shift;
  document.body.style.backgroundColor = `hsl(${hue}, 81%, 59%)`;
  return hue
}

export const randomMessage = (messages) => {
  const i = randomise(messages);
  return messages[i];
};
