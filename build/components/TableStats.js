'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableStats;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableStats(props) {
  var tableSizes = props.tableSizes;


  return _react2.default.createElement(
    'table',
    null,
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Table'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Size'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      tableSizes.map(function (tableSize, i) {
        return _react2.default.createElement(
          'tr',
          { key: tableSize.relation },
          _react2.default.createElement(
            'td',
            null,
            tableSize.relation
          ),
          _react2.default.createElement(
            'td',
            null,
            tableSize.totalSize
          )
        );
      })
    )
  );
}