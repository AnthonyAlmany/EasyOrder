export interface supplierList {
    suppliers: {
      [key: string]:{
        emailAddress: string;
        canSendEmail: boolean;
        
        items:{
          name: string;
          type: string;
          pack: string;
          qty: number;
          id: string;
        }[]     
      }
    }
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
  }

  export interface groupType {
    inventory: newStateType[];
    increaseHandler : (e :React.MouseEvent<HTMLButtonElement>) => void;
    decreaseHandler: (e :React.MouseEvent<HTMLButtonElement>) => void;
    type: string;
  }