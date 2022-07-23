import React from "react";

class Footer extends React.Component<{}, {}>{

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <>
                <tfoot>
                    this area gonna be full of pagination etc.
                </tfoot>
            </>
        );
    }
}

export { Footer }