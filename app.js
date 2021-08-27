const bgSelector = document.querySelector("#change-background");

function onWindowWidthChange() {
  const WINDOW_WIDTH = window.innerWidth;
  if (WINDOW_WIDTH < 300) {
    bgSelector.classList.add("first");
    bgSelector.classList.remove("second");
  } else if (WINDOW_WIDTH >= 300 && WINDOW_WIDTH < 400) {
    bgSelector.classList.remove("first");
    bgSelector.classList.add("second");
    bgSelector.classList.remove("third");
  } else if (WINDOW_WIDTH >= 400 && WINDOW_WIDTH < 500) {
    bgSelector.classList.remove("second");
    bgSelector.classList.add("third");
    bgSelector.classList.remove("fourth");
  } else if (WINDOW_WIDTH >= 500 && WINDOW_WIDTH < 600) {
    bgSelector.classList.remove("third");
    bgSelector.classList.add("fourth");
    bgSelector.classList.remove("fifth");
  } else if (WINDOW_WIDTH >= 600) {
    bgSelector.classList.remove("fourth");
    bgSelector.classList.add("fifth");
  }
}

onWindowWidthChange();
window.addEventListener("resize", onWindowWidthChange);
