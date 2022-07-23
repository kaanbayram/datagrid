import { IBodyProps } from "./entities";
import React from "react";



class Body extends React.Component<IBodyProps, {}>{

    constructor(props: any) {
        super(props);
    }


    render() {
        return (<>
            <tbody>

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
                </tr>

                <tr>

                    <th></th>

                    <th>3</th>
                    <th>4</th>
                </tr>

            </tbody>
        </>
        );
    }
}

export { Body, };