export const randomMessage = (arr) => {
  const i = Math.round(Math.random() * (arr.length - 1));
  return arr[i];
};

[];

export const navigate = (url, keystroke) => {
  const pages = ["noughts-crosses.html", "memory.html"];
  let i =
    url === "index.html"
      ? Math.round(Math.random() * (pages.length - 1))
      : pages.indexOf(url);

  if (keystroke === 37) {
    i = i === 0 ? pages.length - 1 : i - 1;
  } else if (keystroke === 39) {
    i = i === pages.length - 1 ? 0 : i + 1;
  }

  parent.location = pages[i];
};