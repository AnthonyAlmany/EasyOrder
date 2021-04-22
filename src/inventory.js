import { v4 as uuidv4 } from 'uuid';

const suppliers = {
    Socrates: {
        emailAddress: 'foo@socrates.com.au',
        canSendEmail: false,
        items: [{
            name: "San Pellegrino",
            type: "",
            pack: "box",
            qty: 0,
            id: uuidv4()
        },
        {
            name: "Aqua Panna",
            type: "",
            pack: "box",
            qty: 0,
            id: uuidv4()
        },
        {
            name: "Red Bull",
            type: "",
            pack: "box",
            qty: 0,
            id: uuidv4()
        },
        {
            name: "Ginger Beer",
            type: "",
            pack: "box",
            qty: 0,
            id: uuidv4()
        },
        {
            name: "Bonsoy Milk",
            type: "",
            pack: "box",
            qty: 0,
            id: uuidv4()
        },
        {
            name: "Almond Milk Lab",
            type: "",
            pack: "box",
            qty: 0,
            id: uuidv4()
        },]
    },
    Juices: {
        emailAddress: 'foo@juices.com.au',
        canSendEmail: false,
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
            }]
    },
    SFP: {
        emailAddress: 'foo@sfp.com.au',
        canSendEmail: false,
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
                name: "Orange Juice",

                type: "Fruits",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Fresh Lemonade",

                type: "Fruits",
                pack: "btl",
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

                type: "dry goods",
                pack: "sleeve",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Containers 500mL",

                type: "dry goods",
                pack: "sleeve",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Rectangular Lids",

                type: "dry goods",
                pack: "sleeve",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Kids cups + Lids",

                type: "dry goods",
                pack: "sleeve",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Coffee cups + Lids",

                type: "dry goods",
                pack: "sleeve",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Dinner napkins",

                type: "dry goods",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Cocktail napkins",

                type: "dry goods",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Chuck Brown",

                type: "dry goods",
                pack: "roll",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Golf skewers 9mm",

                type: "dry goods",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Aluminium foil",

                type: "dry goods",
                pack: "roll",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Long Black Straws",

                type: "dry goods",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Cocktail Black Straws",

                type: "dry goods",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Black bin bags 85L",

                type: "dry goods",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Black bin bags 240L",

                type: "dry goods",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Agave Syrup",

                type: "dry goods",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            }

        ]
    },
    Wolfman: {
        emailAddress: 'tim@wolfman.com.au',
        canSendEmail: true,
        items: [
            {
                name: "Peroni",

                type: "Beer",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Corona",

                type: "Beer",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Heineken",

                type: "Beer",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Guinness",

                type: "Beer",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Stone & Wood",

                type: "Beer",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "James Boages",

                type: "Beer",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "James Squire 150 Lashes",

                type: "Beer",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Pure Blonde",

                type: "Beer",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Coopers Light",

                type: "Beer",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Hillbily Apple cider",

                type: "Beer",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Hillbily Pear Cider",

                type: "Beer",
                pack: "box",
                qty: 0,
                id: uuidv4()
            },
            // WOLFMAN ------------------------------------------------------- 
            // HOUSE SPIRITS   -------------------------------------------------------
            {
                name: "House Vodka",

                type: "House Spirit",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "House Gin",

                type: "House Spirit",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "House Tequila",

                type: "House Spirit",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            // WOLFMAN ------------------------------------------------------- 
            // GIN   -------------------------------------------------------
            {
                name: "Beefeater",

                type: "Gin",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Bombay Sapphire",

                type: "Gin",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Hendricks",

                type: "Gin",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Tanqueray",

                type: "Gin",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Tanqueray No 10",

                type: "Gin",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            // WOLFMAN ------------------------------------------------------- 
            // VODKA   -------------------------------------------------------
            {
                name: "Absolute Vodka",

                type: "Vodka",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Absolute Vanilla",

                type: "Vodka",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Absolute Raspberry",

                type: "Vodka",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Belvedere",

                type: "Vodka",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Grey Goose",

                type: "Vodka",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            // WOLFMAN ------------------------------------------------------- 
            // TEQUILA   -------------------------------------------------------
            {
                name: "Herradurra Plato",

                type: "Tequila",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Jose Cuervo Silver",

                type: "Tequila",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Jose Cuervo Reposado",

                type: "Tequila",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Patron XO",

                type: "Tequila",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            // WOLFMAN ------------------------------------------------------- 
            // RHUM   -------------------------------------------------------
            {
                name: "Bacardi",

                type: "Rhum",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Bundaberg",

                type: "Rhum",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },

            {
                name: "Captain Morgan",

                type: "Rhum",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },

            {
                name: "Malibu",

                type: "Rhum",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },

            {
                name: "Ron Zacapa",

                type: "Rhum",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },

            {
                name: "Appleton Estate",

                type: "Rhum",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },

            {
                name: "Sailor Jerry",

                type: "Rhum",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },

            {
                name: "Kraken",

                type: "Rhum",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            // WOLFMAN ------------------------------------------------------- 
            // SCOTCH   -------------------------------------------------------
            {
                name: "Canadian Club",

                type: "Scotch",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Chivas 12yo",

                type: "Scotch",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Fireball",

                type: "Scotch",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Glenfiddich 12yo",

                type: "Scotch",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Jack Daniels",

                type: "Scotch",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Jameson",

                type: "Scotch",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Johnny Red",

                type: "Scotch",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Johnny Black",

                type: "Scotch",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Johnny Blue",

                type: "Scotch",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Lagavulin 16yo",

                type: "Scotch",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Talisker 10yo",

                type: "Scotch",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            // WOLFMAN ------------------------------------------------------- 
            // LIQUEUR   -------------------------------------------------------
            {
                name: "Jim Beam",
                type: "Bourbon",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Maker's Mark",
                type: "Bourbon",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Southern Comfort",
                type: "Bourbon",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Wild Turkey",
                type: "Bourbon",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            // WOLFMAN ------------------------------------------------------- 
            // LIQUEUR   -------------------------------------------------------
            {
                name: "Aperol",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Baileys",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Kahlua",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Tia Maria",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Frangelico",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Drambuie",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Disaronno",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Galliano Black",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Galliano Sambuca",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Galliano Vanilla",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Dom Benedictine",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Grand Marnier",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Cointreau",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Chambord",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Midori Melon",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Soho",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Ouzo",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Arak",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Apricot liqueur",

                type: "Liqueur",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            // WOLFMAN ------------------------------------------------------- 
            // FORTIFIED   -------------------------------------------------------
            {
                name: "Penfold Club",

                type: "Fortified",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Chambers Muscat",

                type: "Fortified",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Galway Pipe",

                type: "Fortified",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Penfold Grand Father",

                type: "Fortified",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            // WOLFMAN ------------------------------------------------------- 
            // COGNAC   -------------------------------------------------------
            {
                name: "Sempe VSOP",

                type: "Cognac",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Courvoisier VSOP",

                type: "Cognac",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Remy Martin",

                type: "Cognac",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Martell Cordon Bleu",

                type: "Cognac",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Hennessey Xo",

                type: "Cognac",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            // WOLFMAN ------------------------------------------------------- 
            // DIGESTIVE   -------------------------------------------------------
            {
                name: "Averna Amaro",

                type: "Digestive",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Villa Massa Limoncello",

                type: "Digestive",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Antinori Grappa",

                type: "Digestive",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            // WOLFMAN ------------------------------------------------------- 
            // OTHERS   -------------------------------------------------------
            {
                name: "Angostura bitter",

                type: "Others",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Grenadine",

                type: "Others",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Overproof Rhum",

                type: "Others",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Jagermeister",

                type: "Others",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Apple Schnapps",

                type: "Others",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Peach Schnapps",

                type: "Others",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "Triple Sec",

                type: "Others",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            },
            {
                name: "White Creme De Cacao",

                type: "Others",
                pack: "btl",
                qty: 0,
                id: uuidv4()
            }
        ]
    }
}



export default suppliers;
