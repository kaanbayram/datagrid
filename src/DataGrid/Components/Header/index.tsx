import React from "react";
import { IDictionary, LanguageManager } from "../../../common";
import { IHeaderProps } from "./entities";



class Header extends React.Component<IHeaderProps, {}>{


    constructor(props: IHeaderProps) {
        super(props);

        this.getColumnHeaders = this.getColumnHeaders.bind(this);
        this.getColumns = this.getColumns.bind(this);
    }

    getColumnHeaders() {

        return (
            <thead>
                <tr>
                    <th style={{ width: "50px" }}></th>
                    {this.getColumns()}
                </tr>
            </thead>
        );
    }

    getColumns() {

        const orderedColumns = this.props.columns.sort((a, b) => b.order - a.order);

        return orderedColumns.map((column) => {

            if (!column.caption) {
                return <th></th>;
            }
            else if (typeof column.caption === "string") {
                return <th>{column.caption}</th>
            }
            else if (typeof column.caption === 'object') {
                return <th>{LanguageManager.getText(column.caption as IDictionary<string>)}</th>
            }
            return (
                <th>{column.caption as any}</th>
            );
        });
    }

    render() {
        return (
            <>
                <thead>

                    <div>Header, ToolbarButtons</div>

                </thead>

                {this.getColumnHeaders()}
            </>
        );
    }
}

export { Header, IHeaderProps }