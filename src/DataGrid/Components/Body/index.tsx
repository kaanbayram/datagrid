import { IBodyProps } from "./entities";
import React from "react";
import AddIcon from '../../../assets/plus-solid.svg';
import EditIcon from '../../../assets/pencil-solid.svg';
import DeleteIcon from '../../../assets/trash-can-solid.svg';
import CheckIcon from '../../../assets/check-solid.svg';


class Body extends React.Component<IBodyProps, {}>{

    constructor(props: any) {
        super(props);

        this.getRows = this.getRows.bind(this);
    }

    getActionButtons() {

        const style = { display: "flex", width: "100%", justifyContent: "center", alignItems: "center" };

        return (
            <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                {/* {this.props.editing.allowAdd && <div style={{ margin: "6px", ...style }}><CheckIcon /></div>} */}
                {this.props.editing.allowDelete && <div style={{ margin: "6px", ...style }}><DeleteIcon /></div>}
                {this.props.editing.allowEdit && <div style={{ margin: "6px", ...style }}> <EditIcon /></div>}
            </div>
        );
    }


    getRows() {

        const sortedColumns = this.props.columns.sort((a, b) => b.order - a.order);

        return this.props.rows.map((row) => {

            const rowValues: any[] = [<th>{this.getActionButtons()}</th>];

            sortedColumns.forEach((column) => {
                rowValues.push(<th>{row[column.name]}</th>);
            });

            return (
                <tr>
                    {[...rowValues]}
                </tr>
            )
        });
    }


    render() {
        return (
            <>
                <tbody>
                    {this.getRows()}
                </tbody>
            </>
        );
    }
}

export { Body, };