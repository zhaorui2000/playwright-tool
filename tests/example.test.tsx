import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { act } from 'react-test-renderer';
import Link from './Link';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page='http://www.facebook.com'>Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  if (tree === null) {
    return;
  }
  act(() => {
    'props' in tree ? tree.props.onMouseEnter() : null;
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  if (tree === null) {
    return;
  }
  
  // manually trigger the callback
  act(() => {
    'props' in tree ? tree.props.onMouseLeave() : null;
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
