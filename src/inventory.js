import { v4 as uuidv4 } from 'uuid';

const items = [
    //Socrates
    {
        name: "San Pellegrino",
        supplier: "Socrates",
        type: "",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Aqua Panna",
        supplier: "Socrates",
        type: "",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Red Bull",
        supplier: "Socrates",
        type: "",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Ginger Beer",
        supplier: "Socrates",
        type: "",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Bonsoy Milk",
        supplier: "Socrates",
        type: "",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Almond Milk Lab",
        supplier: "Socrates",
        type: "",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    //Juices --------------------------------------------------------------------------
    {
        name: "Apple",
        supplier: "Grove Juices",
        type: "",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Pineapple",
        supplier: "Grove Juices",
        type: "",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Cranberry",
        supplier: "Grove Juices",
        type: "",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Apple Mandarin Passionfruit",
        supplier: "Grove Juices",
        type: "",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },

    //SFP ------------------------------------------------------------
    {
        name: "Limes",
        supplier: "Sfp",
        type: "fruit",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Apples",
        supplier: "Sfp",
        type: "fruit",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Oranges",
        supplier: "Sfp",
        type: "fruit",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Pineapples",
        supplier: "Sfp",
        type: "fruit",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Lime Juice",
        supplier: "Sfp",
        type: "fruit",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Strawberries",
        supplier: "Sfp",
        type: "fruit",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Frozen Passion fruit pulp",
        supplier: "Sfp",
        type: "fruit",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Lychees",
        supplier: "Sfp",
        type: "fruit",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Containers 1000mL",
        supplier: "Sfp",
        type: "dry goods",
        pack: "sleeve",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Containers 500mL",
        supplier: "Sfp",
        type: "dry goods",
        pack: "sleeve",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Rectangular Lids",
        supplier: "Sfp",
        type: "dry goods",
        pack: "sleeve",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Kids cups + Lids",
        supplier: "Sfp",
        type: "dry goods",
        pack: "sleeve",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Coffee cups + Lids",
        supplier: "Sfp",
        type: "dry goods",
        pack: "sleeve",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Dinner napkins",
        supplier: "Sfp",
        type: "dry goods",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Cocktail napkins",
        supplier: "Sfp",
        type: "dry goods",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Chuck Brown",
        supplier: "Sfp",
        type: "dry goods",
        pack: "roll",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Golf skewers 9mm",
        supplier: "Sfp",
        type: "dry goods",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Aluminium foil",
        supplier: "Sfp",
        type: "dry goods",
        pack: "roll",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Long Black Straws",
        supplier: "Sfp",
        type: "dry goods",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Cocktail Black Straws",
        supplier: "Sfp",
        type: "dry goods",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },

    // WOLFMAN ------------------------------------------------------- 
    // BEERS   -------------------------------------------------------
    {
        name: "Almaza",
        supplier: "Wolfman",
        type: "Beer",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Peroni",
        supplier: "Wolfman",
        type: "Beer",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Corona",
        supplier: "Wolfman",
        type: "Beer",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Heineken",
        supplier: "Wolfman",
        type: "Beer",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Guinness",
        supplier: "Wolfman",
        type: "Beer",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Stone & Wood",
        supplier: "Wolfman",
        type: "Beer",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "James Boages",
        supplier: "Wolfman",
        type: "Beer",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "James Squire 150 Lashes",
        supplier: "Wolfman",
        type: "Beer",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Pure Blonde",
        supplier: "Wolfman",
        type: "Beer",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Coopers Light",
        supplier: "Wolfman",
        type: "Beer",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Hillbily Apple cider",
        supplier: "Wolfman",
        type: "Beer",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Hillbily Pear Cider",
        supplier: "Wolfman",
        type: "Beer",
        pack: "box",
        qty: 0,
        id: uuidv4()
    },
    // WOLFMAN ------------------------------------------------------- 
    // HOUSE SPIRITS   -------------------------------------------------------
    {
        name: "House Vodka",
        supplier: "Wolfman",
        type: "House Spirit",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "House Gin",
        supplier: "Wolfman",
        type: "House Spirit",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "House Tequila",
        supplier: "Wolfman",
        type: "House Spirit",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    // WOLFMAN ------------------------------------------------------- 
    // GIN   -------------------------------------------------------
    {
        name: "Beefeater",
        supplier: "Wolfman",
        type: "Gin",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Bombay Sapphire",
        supplier: "Wolfman",
        type: "Gin",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Hendricks",
        supplier: "Wolfman",
        type: "Gin",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Tanqueray",
        supplier: "Wolfman",
        type: "Gin",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Tanqueray No 10",
        supplier: "Wolfman",
        type: "Gin",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    // WOLFMAN ------------------------------------------------------- 
    // VODKA   -------------------------------------------------------
    {
        name: "Absolute Vodka",
        supplier: "Wolfman",
        type: "Vodka",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Absolute Vanilla",
        supplier: "Wolfman",
        type: "Vodka",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Absolute Raspberry",
        supplier: "Wolfman",
        type: "Vodka",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Belvedere",
        supplier: "Wolfman",
        type: "Vodka",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Grey Goose",
        supplier: "Wolfman",
        type: "Vodka",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    // WOLFMAN ------------------------------------------------------- 
    // TEQUILA   -------------------------------------------------------
    {
        name: "Herradurra Plato",
        supplier: "Wolfman",
        type: "Tequila",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Jose Cuervo Silver",
        supplier: "Wolfman",
        type: "Tequila",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Jose Cuervo Reposado",
        supplier: "Wolfman",
        type: "Tequila",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Patron XO",
        supplier: "Wolfman",
        type: "Tequila",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    // WOLFMAN ------------------------------------------------------- 
    // RHUM   -------------------------------------------------------
    {
        name: "Bacardi",
        supplier: "Wolfman",
        type: "Rhum",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Bundaberg",
        supplier: "Wolfman",
        type: "Rhum",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },

    {
        name: "Captain Morgan",
        supplier: "Wolfman",
        type: "Rhum",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },

    {
        name: "Malibu",
        supplier: "Wolfman",
        type: "Rhum",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },

    {
        name: "Ron Zacapa",
        supplier: "Wolfman",
        type: "Rhum",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },

    {
        name: "Appleton Estate",
        supplier: "Wolfman",
        type: "Rhum",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },

    {
        name: "Sailor Jerry",
        supplier: "Wolfman",
        type: "Rhum",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },

    {
        name: "Kraken",
        supplier: "Wolfman",
        type: "Rhum",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    // WOLFMAN ------------------------------------------------------- 
    // SCOTCH   -------------------------------------------------------
    {
        name: "Canadian Club",
        supplier: "Wolfman",
        type: "Scotch",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Chivas 12yo",
        supplier: "Wolfman",
        type: "Scotch",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Fireball",
        supplier: "Wolfman",
        type: "Scotch",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Glenfiddich 12yo",
        supplier: "Wolfman",
        type: "Scotch",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Jack Daniels",
        supplier: "Wolfman",
        type: "Scotch",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Jameson",
        supplier: "Wolfman",
        type: "Scotch",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Johnny Red",
        supplier: "Wolfman",
        type: "Scotch",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Johnny Black",
        supplier: "Wolfman",
        type: "Scotch",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Johnny Blue",
        supplier: "Wolfman",
        type: "Scotch",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Lagavulin 16yo",
        supplier: "Wolfman",
        type: "Scotch",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Talisker 10yo",
        supplier: "Wolfman",
        type: "Scotch",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    // WOLFMAN ------------------------------------------------------- 
    // LIQUEUR   -------------------------------------------------------
    {
        name: "Baileys",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Kahlua",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Tia Maria",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Frangelico",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Drambuie",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Disaronno",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Galliano Black",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Galliano Sambuca",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Galliano Vanilla",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Dom Benedictine",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Grand Marnier",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Cointreau",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Chambord",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Midori Melon",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Soho",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Ouzo",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Arak",
        supplier: "Wolfman",
        type: "Liqueur",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    // WOLFMAN ------------------------------------------------------- 
    // FORTIFIED   -------------------------------------------------------
    {
        name: "Penfold Club",
        supplier: "Wolfman",
        type: "Fortified",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Chambers Muscat",
        supplier: "Wolfman",
        type: "Fortified",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Galway Pipe",
        supplier: "Wolfman",
        type: "Fortified",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Penfold Grand Father",
        supplier: "Wolfman",
        type: "Fortified",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    // WOLFMAN ------------------------------------------------------- 
    // COGNAC   -------------------------------------------------------
    {
        name: "Sempe VSOP",
        supplier: "Wolfman",
        type: "Cognac",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Courvoisier VSOP",
        supplier: "Wolfman",
        type: "Cognac",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Remy Martin",
        supplier: "Wolfman",
        type: "Cognac",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Martell Cordon Bleu",
        supplier: "Wolfman",
        type: "Cognac",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Hennessey Xo",
        supplier: "Wolfman",
        type: "Cognac",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    // WOLFMAN ------------------------------------------------------- 
    // DIGESTIVE   -------------------------------------------------------
    {
        name: "Averna Amaro",
        supplier: "Wolfman",
        type: "Digestive",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Villa Massa Limoncello",
        supplier: "Wolfman",
        type: "Digestive",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Antinori Grappa",
        supplier: "Wolfman",
        type: "Digestive",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    // WOLFMAN ------------------------------------------------------- 
    // OTHERS   -------------------------------------------------------
    {
        name: "Angostura bitter",
        supplier: "Wolfman",
        type: "Others",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Grenadine",
        supplier: "Wolfman",
        type: "Others",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    },
    {
        name: "Overproof Rhum",
        supplier: "Wolfman",
        type: "Others",
        pack: "btl",
        qty: 0,
        id: uuidv4()
    }


];

// const inventory = [
//     {
//         supplier1: {
//             settings: {
//                 shouldSendEmail: false,
//             },
//             items: [
//                 {
//                     name: "Petit Lu",
//                     type: "other",
//                     pack: "btl",
//                     popularity: "",
//                     qty: 0,
//                     id: uuidv4()
//                 },
//             ]
//         }
//     }
// ]

export default items