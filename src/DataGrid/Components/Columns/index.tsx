import React from "react";
import { IColumn, IColumnsProps } from "./entities";



class Columns extends React.Component<IColumnsProps, {}> {
    constructor(props: IColumnsProps) {
        super(props);
    }

    render() {
        return (
            <React.Fragment></React.Fragment>
        );
    }
}

export { Columns, IColumnsProps, IColumn };