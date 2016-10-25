'use strict';

describe('GallerByReactFanyApp', () => {
  let React = require('react/addons');
  let GallerByReactFanyApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GallerByReactFanyApp = require('components/GallerByReactFanyApp.js');
    component = React.createElement(GallerByReactFanyApp);
  });

  it('should create a new instance of GallerByReactFanyApp', () => {
    expect(component).toBeDefined();
  });
});
