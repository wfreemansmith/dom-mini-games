export const randomMessage = (arr) => {
  const i = Math.round(Math.random() * (arr.length - 1));
  return arr[i];
};

[];

export const navigate = (url, move) => {
  const pages = ["noughts-crosses.html", "memory.html"];
  let i =
    url === "index.html"
      ? Math.round(Math.random() * (pages.length - 1))
      : pages.indexOf(url);

  if (move < 0) {
    i = i === 0 ? pages.length - 1 : i + move;
  } else if (move > 0) {
    i = i === pages.length - 1 ? 0 : i + move;
  }

  parent.location = pages[i];
};

export const handleKeyDown = (url, key) => {
  // Spacebar: 32
  // Up: 38
  // Down: 40
  // Tab: 9
  key === 9 || key === 38
    ? darkMode()
    : key === 37
    ? navigate(url, -1)
    : key === 39
    ? navigate(url, 1)
    : key === 9
    ? console.log("Toggle between light and dark here")
    : console.log({ key });
};

export const darkMode = () => {
  let elements = document.querySelectorAll("*");
  let toggle = document.getElementById("dark-toggle");

  toggle.innerHTML = toggle.classList.contains("dark") ? "☀" : "☂";

  elements.forEach((element) => {
    element.classList.contains("dark")
      ? element.classList.remove("dark")
      : element.classList.add("dark");
  });
};
