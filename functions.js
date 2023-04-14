export const randomMessage = (arr) => {
  const i = Math.round(Math.random() * (arr.length - 1));
  return arr[i];
};

[];

export const navigate = (url, keystroke) => {
  const pages = ["noughts-crosses.html", "memory.html"];
  let position = pages.indexOf(url);

  if (keystroke === 37) {
    position = position === 0 ? pages.length - 1 : position - 1;
  } else if (keystroke === 39) {
    position = position === pages.length - 1 ? 0 : position + 1;
  }

  parent.location = pages[position];
};
