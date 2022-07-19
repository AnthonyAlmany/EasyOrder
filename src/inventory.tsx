import { v4 as uuidv4 } from 'uuid';

const suppliers = {
    "Milk Supplier": {
        emailAddress: 'milkSupplier@email.com',
        canSendEmail: true,
        items: [{
            name: "Full Cream Milk",
            type: "",
            pack: "btl",
            qty: 0,
            id: uuidv4()
        },
        {
            name: "Skim Milk",
            type: "",
            pack: "btl",
            qty: 0,
            id: uuidv4()
        },
        {
            name: "Soy Milk",
            type: "",
            pack: "btl",
            qty: 0,
            id: uuidv4()
        },
        {
            name: "Almond Milk",
            type: "",
            pack: "btl",
            qty: 0,
            id: uuidv4()
        },]
    },
    "Juices & Co.": {
        emailAddress: 'juicesupplier@juices.com.au',
        canSendEmail: true,
        items: [
            {
                name: "Apple",

                type: "",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Pineapple",

                type: "",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Cranberry",

                type: "",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Apple Mandarin Passionfruit",

                type: "",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Lemon",

                type: "",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Lime",

                type: "",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Fresh Lemonade",

                type: "",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            }]
    },
    "Food & Packaging": {
        emailAddress: 'goods@goods.com.au',
        canSendEmail: true,
        items: [
            {
                name: "Limes",

                type: "Fruits",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Apples",

                type: "Fruits",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Oranges",

                type: "Fruits",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Pineapples",

                type: "Fruits",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Lime Juice",

                type: "Fruits",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Strawberries",

                type: "Fruits",
                pack: "pack",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Frozen Passion fruit pulp",

                type: "Fruits",
                pack: "ctn",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Frozen Mango",

                type: "Fruits",
                pack: "ctn",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Lychees",

                type: "Fruits",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Containers 1000mL",

                type: "Dry goods",
                pack: "sleeve",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Containers 500mL",

                type: "Dry goods",
                pack: "sleeve",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Rectangular Lids",

                type: "Dry goods",
                pack: "sleeve",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Kids cups + Lids",

                type: "Dry goods",
                pack: "sleeve",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Coffee cups + Lids",

                type: "Dry goods",
                pack: "sleeve",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Dinner napkins",

                type: "Dry goods",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Cocktail napkins",

                type: "Dry goods",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            
            {
                name: "Long Black Straws",

                type: "Dry goods",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Cocktail Black Straws",

                type: "Dry goods",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },

        ]
    },
   
}



export default suppliers;
