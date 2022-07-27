import { IBodyProps } from "./entities";
import React from "react";
// import { ReactComponent as PlusSolidIcon } from '../../../assets/plus-solid.svg';
import PlusSolidIcon from '../../../assets/plus-solid.svg';


class Body extends React.Component<IBodyProps, {}>{

    constructor(props: any) {
        super(props);

        this.getRows = this.getRows.bind(this);
    }

    getActionButtons() {



        return (
            // <></>
            <div>
                <PlusSolidIcon />
            </div>
            // <img src={PlusSolidIcon}></img>
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