import React from 'react';

export default function QueriesStats(props) {

    const { queries } = props;
    
    return (
      <table>
        <thead>
          <tr>
            <th>Query</th>
            <th>calls</th>
            <th>totalTime</th>
            <th>minTime</th>
            <th>maxTime</th>
            <th>meanTime</th>
            <th>rows</th>
            <th>percentCacheHit</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query, i) =>
            <tr key={'slow-query-' + i}>
                <td>{query.query}</td>
                <td>{query.calls}</td>
                <td>{query.totalTime}</td>
                <td>{query.minTime}</td>
                <td>{query.maxTime}</td>
                <td>{query.meanTime}</td>
                <td>{query.rows}</td>
                <td>{query.hitPercent}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
}