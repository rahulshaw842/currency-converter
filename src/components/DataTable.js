import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    {
        field: 'currency',
        headerName: 'Currency Name',
        width: 150,
    },
    {
        field: 'rate',
        headerName: 'Rate',
        type: 'number',
        width: 150,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        type: 'number',
        width: 150,
    },
];


export default function DataTable({ data }) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
            />
        </div>
    );
}