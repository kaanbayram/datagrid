import React from "react";
import { ICaptionProps } from "./entities";


class Caption extends React.Component<ICaptionProps, {}> {

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <caption>
                {this.props.caption}
            </caption>
        );
    }
}

export { Caption, ICaptionProps }