"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _TodaysDate = _interopRequireDefault(require("../../components/TodaysDate"));

var _HomeView = _interopRequireDefault(require("./HomeView"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Setup enzyme's react adapter
_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

describe("<TodaysDate /> component shallow only methods ", function () {
  it("renders without crashing", function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_TodaysDate.default, null)); // expect(wrapper).toBe({});
    //this 2 lines below don't make a lot of sense
    // expect(wrapper).toBe(true)
    //   ReactDOM.render(<List />, div);
  });
});