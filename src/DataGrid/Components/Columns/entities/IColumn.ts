import { IDictionary } from "../../../../common/entities";

interface IColumn {
  // id: string;
  name: string;
  caption: IDictionary<string> | React.ReactElement | string;
  order: number;
  isUniqDataField: boolean;
  type: string;
}

export { IColumn };
