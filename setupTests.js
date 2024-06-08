import 'jest-canvas-mock';
global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  