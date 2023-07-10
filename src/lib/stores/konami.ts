import { type Readable, readable, derived } from 'svelte/store';

type KeyCode =
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'KeyB'
  | 'KeyA';

const konamiCode: KeyCode[] = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

const keyMap: Record<string, KeyCode> = {
  arrowup: 'ArrowUp',
  arrowdown: 'ArrowDown',
  arrowleft: 'ArrowLeft',
  arrowright: 'ArrowRight',
  b: 'KeyB',
  a: 'KeyA',
};

const arraysEqual = (a: KeyCode[], b: KeyCode[]): boolean => {
  return JSON.stringify(a) === JSON.stringify(b);
};

const lastKeyPressed = readable(
  new Array<KeyCode>(),
  function initialize(_set, update) {
    const handleKeyDown = (event: KeyboardEvent): void => {
      const keyPressed = keyMap[event.key.toLowerCase()];

      update((currentSequence: KeyCode[]) => {
        const next = currentSequence.concat(keyPressed);

        if (next.length > konamiCode.length) {
          next.splice(0, 1);
        }

        return next;
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return function stop() {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }
);

export const isKonamiCodePressed: Readable<boolean> = derived(
  lastKeyPressed,
  ($pressedKeys: KeyCode[]) => {
    const hasKonamiCodeBeenEntered = arraysEqual($pressedKeys, konamiCode);
    return hasKonamiCodeBeenEntered;
  }
);
