import React from 'react';
import { DataGridBaseComponent } from './DataGrid/Components';
import { rows, columns } from './assets/dummyData'


export default class App extends React.Component {

    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <React.Fragment>
                <DataGridBaseComponent
                    captiton={<div>Test</div>}
                    rows={rows}
                    columns={columns}
                />
            </React.Fragment>
        );
    }
}
