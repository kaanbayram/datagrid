import React from 'react';
import { DataGridBaseComponent } from './DataGrid/Components';
import { rows, columns, DataGridProps } from './assets/dummyData'


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
                    editing={{
                        enabled: DataGridProps.editing.enabled,
                        // mode: DataGridProps.editing.mode,
                        allowAdd: DataGridProps.editing.allowAdd,
                        allowDelete: DataGridProps.editing.allowDelete,
                        allowEdit: DataGridProps.editing.allowEdit
                    }}
                />
            </React.Fragment>
        );
    }
}
