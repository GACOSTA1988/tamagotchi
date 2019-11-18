import { Tamagotchi } from './../src/tamagotchi.js';

describe('Fuzzy', () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new Tamagotchi("Fuzzy", 10, 10);
    fuzzy.setHealth();
    fuzzy.setFood();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name, food level of 10 and health level of 10 when it is created', () => {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
    expect(fuzzy.healthLevel).toEqual(10);

  });

  test('should kill tamagotchi if 10 seconds pass with no health level increase', function() {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.didTamagotchiDie()).toEqual(true);
  });

  test('should keep tamagotchi alive', function() {
    jest.advanceTimersByTime(9001);
    fuzzy.hug();
    jest.advanceTimersByTime(2001);
    expect(fuzzy.didTamagotchiDie()).toEqual(false);
  });

  test('should kill tamagotchi if 10 seconds pass with no food level increase', function() {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.didTamagotchiLive()).toEqual(true);
  });

  test.only('should keep tamagotchi alive', function() {
    jest.advanceTimersByTime(9001);
    fuzzy.feed();
    jest.advanceTimersByTime(4001);
    expect(fuzzy.didTamagotchiLive()).toEqual(true);
  });


});
