import React from 'react';

import TableStats from './TableStats';
import QueriesStats from './QueriesStats';

export default function Home(props) {

    const { data } = props;
    return (
        <div>
            <TableStats tableSizes={data ? data.tableSizes : []}/>
            <h1>Slow queries</h1>
            <QueriesStats queries={data ? data.slowQueries : []}/>
            <h1>Costly queries</h1>
            <QueriesStats queries={data ? data.costlyQueries : []}/>
        </div>
    );
}