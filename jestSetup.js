// React 16 needs rAF
global.requestAnimationFrame = () => {};

// Enzume needs some kind of adapter for React 16
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: new Adapter() });
