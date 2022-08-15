import React from "react";
import { IDictionary, LanguageManager } from "../../../common";
import { IHeaderProps } from "./entities";
import IconAdd from '../../../assets/plus-solid.svg';


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
""
                <thead style={{ width: "100px" }}>

                    <tr style={{ width: "100" }}>
                        <div style={{ width: "100%", display: "flex", borderStyle: "solid", borderWidth: "0.5px" }}>
                            <div style={{ width: "100%", cursor: "pointer", display: "flex", float: "right" }} >Add <div><IconAdd /></div></div>
                        </div>
                        {/* <th style={{ widows:"100%"}}> <div style={{ width: "100%", cursor: "pointer" }} >Add <div style={{ float: "right" }}><IconAdd /></div></div></th> */}
                    </tr>

                    {/* 
                    <th style={{ border: "none" }}> <div style={{ width: "100%", cursor: "pointer" }} >Add <div style={{ float: "right" }}><IconAdd /></div></div></th>

                    <th style={{ border: "none" }}> <div style={{ width: "100%", cursor: "pointer" }} >Add <div style={{ float: "right" }}><IconAdd /></div></div></th>

                    <th style={{ border: "none" }}> <div style={{ width: "100%", cursor: "pointer" }} >Add <div style={{ float: "right" }}><IconAdd /></div></div></th>

                    <th style={{ border: "none" }}> <div style={{ width: "100%", cursor: "pointer" }} >Add <div style={{ float: "right" }}><IconAdd /></div></div></th> 
                    */}

                </thead>
                {this.getColumnHeaders()}
            </>
        );
    }
}

export { Header, IHeaderProps }