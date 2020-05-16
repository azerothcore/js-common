import {object, pathUtils, EventManager, EventType} from '../index';

test('object.isObject({}) == true', () => {
  expect(object.isObject({})).toEqual(true);
});

test('object.mergeDeep test', () => {
  expect(
      object.mergeDeep(
          {value1: 1, nestedObj: {nestedValue: 3}, value3: 3},
          {
            value2: 2,
            nestedObj: {nestedValue: 4, nestedValue2: 5},
            nestedObj2: {value4: 4},
          },
      ),
  ).toEqual({
    value1: 1,
    nestedObj: {nestedValue: 4, nestedValue2: 5},
    nestedObj2: {value4: 4},
    value2: 2,
    value3: 3,
  });
});

test('object.mergeDeep test (else case)', () => {
  expect(object.mergeDeep({value: 1}, 1)).toEqual({value: 1});
});

test('pathUtils root', () => {
  expect(pathUtils.resolvePath('/')).toEqual('/');
});

test('pathUtils relative', () => {
  expect(pathUtils.resolvePath('src/__tests__')).toEqual(__dirname);
});

test('pathUtils fromAppRoot', () => {
  expect(pathUtils.fromAppRoot('src/__tests__')).toEqual(__dirname);
});

test('EventManager', async () => {
  const EVENTS = {
    dummy: EventType('dummy'),
  };

  const eventMgr = new EventManager(EVENTS);

  expect(
      eventMgr.on(EVENTS.dummy, () => {
        return 'dummy';
      }),
  ).toStrictEqual(eventMgr);

  expect(
      await eventMgr.emit(EVENTS.dummy, () => {
        return 'dummy';
      }),
  ).toStrictEqual(eventMgr);
});

