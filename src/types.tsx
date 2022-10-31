
export interface supplierList {
  suppliers: {
    [key: string]:{
      emailAddress: string;
      canSendEmail: boolean;
      
      items: {
        qty: number;
        id: string;
        pack: string;
        name: string;
        type: string; 
      }[]
    }
  }
}

export enum QtyOperation {
  Increase,
  Decrease
}

export interface supplierParams {
  supplierName: string
}

export interface thisType {
  id : string;
  qty: number;
}

export interface newStateType {
  qty: number;
  id: string;
  pack?: string;
  name?: string;
  type?: string;
}

export interface propsItem {
  item: newStateType;
  increaseHandler : (e :React.MouseEvent<HTMLButtonElement>) => void;
  decreaseHandler: (e :React.MouseEvent<HTMLButtonElement>) => void;
  deleteToggle?: boolean;
  deleteItem?: (e :React.MouseEvent<SVGSVGElement>) => void;
}

export interface groupType {
  inventory: newStateType[];
  increaseHandler : (e :React.MouseEvent<HTMLButtonElement>) => void;
  decreaseHandler: (e :React.MouseEvent<HTMLButtonElement>) => void;
  type: string;
}

export interface supplierDetails{
  emailAddress: string;
  canSendEmail: boolean;
  items: newStateType[];
}

export interface newItemInput{
  name: string;
  pack: string;
}

export interface optionsType{
  inventory: newStateType[];
  supplierName: string;
  supplierDetails: supplierDetails;
  deleteToggle: boolean;
  setDeleteToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInventory: React.Dispatch<React.SetStateAction<newStateType[]>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}