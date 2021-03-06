import { fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useWindowSize from '../useWindowSize';

test('should return new size of window', () => {
  const { result } = renderHook(() => useWindowSize());

  expect(result.current.width).toBe(1024);
  expect(result.current.height).toBe(768);

  act(() => {
    // Change the viewport to 500px.
    window.innerWidth = 500;
    window.innerHeight = 500;

    // Trigger the window resize event.
    // window.dispatchEvent(new Event('resize'))
    fireEvent(window, new Event('resize'));
  });

  // console.log(`result: ${JSON.stringify(result.current, null, 2)}`)
  expect(result.current.width).toBe(500);
  expect(result.current.height).toBe(500);
});
