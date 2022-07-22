import { IDictionary } from "../../common/entities";

interface IDataGridBaseComponentsProps {

    captiton?: React.ReactElement;
    rows: IDictionary<any>;
    columns: any;//;
    pagination?: any; //

}

export { IDataGridBaseComponentsProps };