import React from "react";
import { ICaptionProps } from "./entities";
import IconAdd from '../../../assets/plus-solid.svg';


class Caption extends React.Component<ICaptionProps, {}> {

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <caption>

                
                <div style={{ width: "100%", height: "70px", position: "relative", borderStyle: "solid", borderWidth: "0.5px", borderColor: "#bfbfbf" }}>
                    <div style={{
                        margin: "auto", position: "absolute", top: 0, bottom: 0, right: 10,
                        height: "30px", width: "30px", cursor: "pointer", float: "right", display: "flex",
                        textAlign: "center", justifyContent: "center", alignItems: "center"
                    }} >

                        <div>
                            <IconAdd />
                        </div>
                    </div>
                </div>
            </caption>
        );
    }
}

export { Caption, ICaptionProps }