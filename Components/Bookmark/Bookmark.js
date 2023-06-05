export function Bookmark(props) {
  const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
  if (props.active) {
    bookmarkButton.classList.add("bookmark--active");
  }

  bookmarkButton.addEventListener("click", props.onClick);
  return bookmarkButton;
  // function onClick(event) {
  //   bookmarkButton.classList.toggle("color");
  // });
}
