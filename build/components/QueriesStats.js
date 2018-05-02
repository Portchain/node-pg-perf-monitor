'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = QueriesStats;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function QueriesStats(props) {
  var queries = props.queries;


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
          'Query'
        ),
        _react2.default.createElement(
          'th',
          null,
          'calls'
        ),
        _react2.default.createElement(
          'th',
          null,
          'totalTime (ms)'
        ),
        _react2.default.createElement(
          'th',
          null,
          'minTime (ms)'
        ),
        _react2.default.createElement(
          'th',
          null,
          'maxTime (ms)'
        ),
        _react2.default.createElement(
          'th',
          null,
          'meanTime (ms)'
        ),
        _react2.default.createElement(
          'th',
          null,
          'rows'
        ),
        _react2.default.createElement(
          'th',
          null,
          'percentCacheHit'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      queries.map(function (query, i) {
        return _react2.default.createElement(
          'tr',
          { key: 'slow-query-' + i },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              'div',
              { className: 'scrollable' },
              query.query
            )
          ),
          _react2.default.createElement(
            'td',
            null,
            query.calls
          ),
          _react2.default.createElement(
            'td',
            null,
            Math.round(query.totalTime)
          ),
          _react2.default.createElement(
            'td',
            null,
            Math.round(query.minTime)
          ),
          _react2.default.createElement(
            'td',
            null,
            Math.round(query.maxTime)
          ),
          _react2.default.createElement(
            'td',
            null,
            Math.round(query.meanTime)
          ),
          _react2.default.createElement(
            'td',
            null,
            query.rows
          ),
          _react2.default.createElement(
            'td',
            null,
            Math.round(query.hitPercent)
          )
        );
      })
    )
  );
}