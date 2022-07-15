import React from 'react';
import { DataGridBaseComponent } from './DataGrid/Components';


export default class App extends React.Component {

    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <React.Fragment>
                <DataGridBaseComponent />
            </React.Fragment>
        );
    }
}
