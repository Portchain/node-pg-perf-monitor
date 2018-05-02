import React from 'react';

export default function TableStats(props) {

    const { tableSizes } = props;
    
    return (
      <table>
        <thead>
          <tr>
            <th>Table</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {tableSizes.map((tableSize, i) =>
            <tr key={tableSize.relation}>
              <td>{tableSize.relation}</td>
              <td>{tableSize.totalSize}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
}