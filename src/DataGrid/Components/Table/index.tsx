import React from "react";
import { ITableProps } from "./entities";

class Table extends React.Component<ITableProps, {}> {

    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <table>
                {this.props.caption}
                {this.props.header}
                {this.props.body}
                {this.props.footer}
            </table>
        );
    }
}

export { Table, ITableProps }