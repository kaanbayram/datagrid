import { IDictionary } from "../../../../common/entities";

interface IColumn {
    id: string,
    name: string,
    caption: IDictionary<string>
}

export { IColumn }