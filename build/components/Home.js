'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Home;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableStats = require('./TableStats');

var _TableStats2 = _interopRequireDefault(_TableStats);

var _QueriesStats = require('./QueriesStats');

var _QueriesStats2 = _interopRequireDefault(_QueriesStats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home(props) {
    var data = props.data;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Table sizes (>1MB)'
        ),
        _react2.default.createElement(_TableStats2.default, { tableSizes: data ? data.tableSizes : [] }),
        _react2.default.createElement(
            'h1',
            null,
            'Slow queries'
        ),
        _react2.default.createElement(_QueriesStats2.default, { queries: data ? data.slowQueries : [] }),
        _react2.default.createElement(
            'h1',
            null,
            'Costly queries'
        ),
        _react2.default.createElement(_QueriesStats2.default, { queries: data ? data.costlyQueries : [] })
    );
}