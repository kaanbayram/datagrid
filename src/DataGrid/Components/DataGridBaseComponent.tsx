import React from 'react';
import { IDataGridBaseComponentsProps } from '../entities';
import '../assets/dataGridBaseComponentStyles.scss'

export default class DataGridBaseComponent extends React.Component<IDataGridBaseComponentsProps, {}>{

    constructor(props: IDataGridBaseComponentsProps) {
        super(props);
    }

    render() {
        return (
            <table>

                <caption>DataGrid Caption</caption>
                
                <thead>

                    <div>Header, ToolbarButtons</div>

                </thead>

                <thead>
                    <tr>

                        <th>ActionButtons</th>
                        <th>Column1</th>
                        <th>Column2</th>

                    </tr>
                </thead>

                <tbody>

                    <tr>

                        <th></th>

                        <th>3</th>
                        <th>4</th>

                    </tr>

                    <tr>
                        <th></th>

                        <th>3</th>
                        <th>4</th>
                    </tr>

                    <tr>

                        <th></th>

                        <th>3</th>
                        <th>4</th>
                    </tr>

                    <tr>

                        <th></th>

                        <th>3</th>
                        <th>4</th>
                    </tr>

                </tbody>

                <tfoot>
                    this area gonna be full of pagination etc.
                </tfoot>
            </table>
        )
    }
}