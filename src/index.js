import './normalize.css';
import './style.css';

const buttonOne = document.querySelector('#btn-1');
const buttonTwo = document.querySelector('#btn-2');

//* **`` We feed this our available screen space sizes and it spits out random numbers that do not exceed the screen size.
function generateRandomNumbers(minHeight, maxHeight, minWidth, maxWidth) {
  const height = Math.floor(
    Math.random() * (maxHeight - minHeight) + minHeight,
  );
  const width = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);

  return { height, width };
}
//todo NEED TO ADD THE CODE BELOW TO A WINDOW.ONCHANGE LISTENER
//todo **********************************************************

//* **`` This gets our button's position from the left and from the top of the window.
const rect = buttonOne.getBoundingClientRect();
const buttonFromLeftScreen = rect.x;
const buttonFromTopScreen = rect.y;
// console.log({ buttonFromLeftScreen });
// console.log({ buttonFromTopScreen });

//* **`` This gets our button's computed width and height.
const buttonHeight = buttonOne.offsetHeight;
const buttonWidth = buttonOne.offsetWidth;
//   console.log({ buttonHeight });
// console.log({ buttonWidth });

//* **`` This gets our screen height and width.
const screenHeight = screen.height;
const screenWidth = screen.width;
//   console.log({ screenHeight });
// console.log({ screenWidth });

//* **`` These are the computed values that tell us how much room we can let our button move.
const availableRoomToMoveLeft = buttonFromLeftScreen * -1;
// console.log({ availableRoomToMoveLeft });
const availableRoomToMoveUp = buttonFromTopScreen * -1;
// console.log({ availableRoomToMoveUp });
const availableRoomToMoveRight =
  screenWidth - (buttonFromLeftScreen + buttonWidth);
// console.log({ availableRoomToMoveRight });
const availableRoomToMoveDown =
  screenHeight - (buttonFromTopScreen + buttonHeight);
// console.log({ availableRoomToMoveDown });

//todo **********************************************************

buttonOne.addEventListener('click', () => {
  const { height, width } = generateRandomNumbers(
    availableRoomToMoveUp,
    availableRoomToMoveDown,
    availableRoomToMoveLeft,
    availableRoomToMoveRight,
  );

  buttonOne.style.transform = `translate(${width}px, ${height}px)`;
  buttonOne.style.transition = '200ms ease-out';
});
