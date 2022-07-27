import { IEditingProps } from "../../../entities";
import { IColumn } from "../../Columns";

interface IBodyProps {
    rows: any[];
    columns: IColumn[];
    editing: IEditingProps
}

export { IBodyProps }