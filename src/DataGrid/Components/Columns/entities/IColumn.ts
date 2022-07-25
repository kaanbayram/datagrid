import { IDictionary } from "../../../../common/entities";

interface IColumn {
  // id: string;
  name: string;
  caption: IDictionary<string> | React.ReactElement | string;
}

export { IColumn };
