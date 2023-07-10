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
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  a: 'KeyA',
  b: 'KeyB',
  A: 'KeyA',
  B: 'KeyB',
};

const arraysEqual = (
  a: (KeyCode | undefined)[],
  b: (KeyCode | undefined)[]
): boolean => {
  return JSON.stringify(a) === JSON.stringify(b);
};

const lastKeyPressed = readable(
  new Array<KeyCode | undefined>(),
  function initialize(_set, update) {
    const handleKeyDown = (event: KeyboardEvent): void => {
      const keyPressed = keyMap[event.key];

      update((currentSequence: (KeyCode | undefined)[]) => {
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
  ($pressedKeys: (KeyCode | undefined)[]) => {
    const hasKonamiCodeBeenEntered = arraysEqual($pressedKeys, konamiCode);
    return hasKonamiCodeBeenEntered;
  }
);
