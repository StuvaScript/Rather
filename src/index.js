import './normalize.css';
import './style.css';

const buttonOne = document.querySelector('#btn-1');
const buttonTwo = document.querySelector('#btn-2');

const initialSizes = getSizes();
moveButton(initialSizes);

//? **`` EVENT LISTENERS ``**

window.addEventListener('resize', () => {
  console.log('Yooooo!!');

  const newSizes = getSizes();
  moveButton(newSizes);
});

//? **`` I think on resize, it should return the button to it's original position. Then calculate free space to move. That might fix it.
//todo **`` Might need to mess with devicePixelRatio because the cell screens are more dense pixels than the widescreen.
//! **`` When you resize the screen a bunch of times then click the button, it console logs like a thousand random generated numbers. Might have an impure function in there.

function moveButton(sizes) {
  console.log('window.devicePixelRatio');
  console.log(window.devicePixelRatio);
  buttonOne.addEventListener('click', () => {
    const { height, width } = generateRandomNumbers(
      sizes.availableRoomToMoveDown,
      sizes.availableRoomToMoveUp,
      sizes.availableRoomToMoveRight,
      sizes.availableRoomToMoveLeft,
    );

    buttonOne.style.transform = `translate(${width}px, ${height}px)`;
    buttonOne.style.transition = '200ms ease-out';
  });
}

//? **`` FUNCTIONS ``**

//* **`` This gets all our computed sizes for the scree, button, and then the remaining room the button can move.
function getSizes() {
  //todo NEED TO ADD THE CODE BELOW TO A WINDOW.ONCHANGE LISTENER
  //todo **********************************************************

  //* **`` This gets our button's position from the left and from the top of the window.
  const rect = buttonOne.getBoundingClientRect();
  const buttonFromLeftScreen = rect.x;
  const buttonFromTopScreen = rect.y;
  console.log({ buttonFromLeftScreen });
  console.log({ buttonFromTopScreen });

  //* **`` This gets our button's computed width and height.
  const buttonHeight = buttonOne.offsetHeight;
  const buttonWidth = buttonOne.offsetWidth;
  console.log({ buttonHeight });
  console.log({ buttonWidth });

  //* **`` This gets our screen height and width.
  // const screenHeight = screen.height;
  // const screenWidth = screen.width;
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  console.log({ screenHeight });
  console.log({ screenWidth });

  //* **`` These are the computed values that tell us how much room we can let our button move.
  const availableRoomToMoveLeft = buttonFromLeftScreen * -1;
  console.log({ availableRoomToMoveLeft });
  const availableRoomToMoveUp = buttonFromTopScreen * -1;
  console.log({ availableRoomToMoveUp });
  const availableRoomToMoveRight =
    screenWidth - (buttonFromLeftScreen + buttonWidth);
  console.log({ availableRoomToMoveRight });
  const availableRoomToMoveDown =
    screenHeight - (buttonFromTopScreen + buttonHeight);
  console.log({ availableRoomToMoveDown });

  //todo **********************************************************
  return {
    availableRoomToMoveDown,
    availableRoomToMoveLeft,
    availableRoomToMoveRight,
    availableRoomToMoveUp,
  };
}

//* **`` We feed this our available screen space sizes and it spits out random numbers that do not exceed the screen size.
function generateRandomNumbers(minHeight, maxHeight, minWidth, maxWidth) {
  console.log('rando numz');
  console.log(minHeight);
  console.log(maxHeight);
  console.log(minWidth);
  console.log(maxWidth);

  const height = Math.floor(
    Math.random() * (maxHeight - minHeight) + minHeight,
  );
  const width = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);

  return { height, width };
}
