import { IBodyProps } from "./entities";
import React from "react";



class Body extends React.Component<IBodyProps, {}>{

    constructor(props: any) {
        super(props);

        this.getRows = this.getRows.bind(this);
    }



    getRows() {

        const sortedColumns = this.props.columns.sort((a, b) => b.order - a.order);

        return this.props.rows.map((row) => {

            const rowValues: any[] = [<th></th>];

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

                    {/* <tr>

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
                    </tr> */}

                </tbody>
            </>
        );
    }
}

export { Body, };