import { IDictionary } from "../../common/entities";

interface IDataGridBaseComponentsProps {

    captiton?: React.ReactElement;
    rows: IDictionary<any>;
    columns: any;//;
    pagination?: any; //
    editing: IEditingProps
}

interface IEditingProps {
    enabled: boolean;
    allowAdd: boolean;
    allowDelete: boolean;
    allowEdit: boolean;
}

export { IDataGridBaseComponentsProps, IEditingProps };