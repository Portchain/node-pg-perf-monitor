import React from 'react';

export default function QueriesStats(props) {

    const { queries } = props;
    
    return (
      <table>
        <thead>
          <tr>
            <th>Query</th>
            <th>calls</th>
            <th>totalTime (ms)</th>
            <th>minTime (ms)</th>
            <th>maxTime (ms)</th>
            <th>meanTime (ms)</th>
            <th>rows</th>
            <th>percentCacheHit</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query, i) =>
            <tr key={'slow-query-' + i}>
                <td><div className="scrollable">{query.query}</div></td>
                <td>{query.calls}</td>
                <td>{Math.round(query.totalTime)}</td>
                <td>{Math.round(query.minTime)}</td>
                <td>{Math.round(query.maxTime)}</td>
                <td>{Math.round(query.meanTime)}</td>
                <td>{query.rows}</td>
                <td>{Math.round(query.hitPercent)}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
}