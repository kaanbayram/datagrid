import { IBodyProps } from "./entities";
import React from "react";



class Body extends React.Component<IBodyProps, {}>{

    constructor(props: any) {
        super(props);

        this.getRows = this.getRows.bind(this);
    }



    getRows() {

        const columnLength = this.props.columns.length;
        

        

        this.props.rows.forEach((row) => {

            
            
            const rows: any[] = [];


            
                <tr>
                    <th></th>
                    <th>{row.id}</th>
                    <th>{row.name}</th>
                    <th>{row.surname}</th>
                    <th>{row.birthDate}</th>
                </tr>
            
        })
        return rows;
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