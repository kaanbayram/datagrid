import React from "react";
import { IHeaderProps } from "./entities";



class Header extends React.Component<IHeaderProps, {}>{


    constructor(props: IHeaderProps) {
        super(props);

    }

    render() {
        return (
            <>
                <thead>

                    <div>Header, ToolbarButtons</div>

                </thead>

                <thead>
                    <tr>

                        <th>ActionButtons</th>
                        <th>Column1</th>
                        <th>Column2</th>

                    </tr>
                </thead></>
        );
    }
}

export { Header, IHeaderProps }