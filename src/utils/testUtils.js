import toJson from 'enzyme-to-json';

export function checkSnapshot(tree) {
  expect(toJson(tree)).toMatchSnapshot();
}
