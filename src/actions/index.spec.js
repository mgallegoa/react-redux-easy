import { increment, decrement } from './';

describe('Redux Actions', () => {
  test('Return the correct action for increment', () => {
    const incrementActionMock = { type: 'INCREMENT', payload: 5 };
    const incrementAction = increment(5);
    expect(incrementAction).toStrictEqual(incrementActionMock);
  });
  test('Return the correct action for decrement', () => {
    const decrementActionMock = { type: 'DECREMENT' };
    const decrementAction = decrement();
    expect(decrementAction.type).toBe(decrementActionMock.type);
  });
});
