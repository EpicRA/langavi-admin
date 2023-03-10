import { IClient, IOrder, IDiscount, IUser, roleType } from "@/interfaces";

export const seedOrders: IOrder[] = [
  {
    _id: "63bf35734eda33b77a72ef70",
    orderNumber: "T53710248",
    clientId: "63bf35734eda33b77a72ef6d",
    shippingAddress: {
      firstName: "juan alejandro",
      lastName: "flores perez",
      address: "avenida cuauhtemoc 830, narvarte poniente",
      address2: "departamento 603",
      city: "benito juarez",
      estate: "ciudad de méxico",
      country: "méxico",
      zip: "3020",
      phone: "4621651299",
    },
    billingAddress: {
      firstName: "juan alejandro",
      lastName: "flores perez",
      address: "avenida cuauhtemoc 830, narvarte poniente",
      address2: "departamento 603",
      city: "benito juarez",
      estate: "ciudad de méxico",
      country: "méxico",
      zip: "3020",
      phone: "4621651299",
    },
    products: [
      {
        title: "chocolate blanco artesanal",
        variantName: "18g",
        slug: "chocolate_blanco_artesanal",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_blanco_artesanal_18g_1663629800710.png",
        price: 270,
        quantity: 1,
        description: "Caja con 18 barras",
        _id: "63bf35734eda33b77a72ef73",
      },
      {
        title: "chocolate amargo 73% cacao",
        variantName: "18g",
        slug: "chocolate_amargo_73-cacao",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_amargo_73-cacao_18g_1663629227098.png",
        price: 270,
        quantity: 1,
        description: "Caja con 18 barras",
        _id: "63bf35734eda33b77a72ef74",
      },
      {
        title: "chocolate de leche premium",
        variantName: "18g",
        slug: "chocolate_de-leche_premium",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_de-leche_premium_18g_1663628487047.png",
        price: 270,
        quantity: 1,
        description: "Caja con 18 barras",
        _id: "63bf35734eda33b77a72ef75",
      },
      {
        title: "chocolate amargo premium",
        variantName: "18g",
        slug: "chocolate_amargo_premium",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_amargo_premium_18g_1663627587138.png",
        price: 270,
        quantity: 1,
        description: "Caja con 18 barras",
        _id: "63bf35734eda33b77a72ef76",
      },
    ],
    numberOfItems: 4,
    subtotal: 1080,
    tax: {
      percent: "0.16",
      amount: 949.2,
    },
    total: 1080,
    paidAt: "11 de enero de 2023",
    transactionId: "1D903767N30929927",
    orderStatus: "preparando pedido para ser enviado",
    provider: "paypal",
    discounts: [],
    shippingPrice: 50,
  },
  {
    _id: "63c5d89053ca8a8005454393",
    orderNumber: "T44671614",
    clientId: "63c5d88d53ca8a8005454390",
    shippingAddress: {
      firstName: "giancarlo ",
      lastName: "hernández cortés ",
      address: "décima avenida norte entre 23 y 25 calle poniente",
      address2: "número 22 colonia 5 de febrero ",
      city: "tapachula de córdova y ordoñez",
      estate: "chis.",
      country: "méxico",
      zip: "30710",
      phone: "9626225910",
    },
    billingAddress: {
      firstName: "giancarlo ",
      lastName: "hernández cortés ",
      address: "décima avenida norte entre 23 y 25 calle poniente",
      address2: "número 22 colonia 5 de febrero ",
      city: "tapachula de córdova y ordoñez",
      estate: "chis.",
      country: "méxico",
      zip: "30710",
      phone: "9626225910",
    },
    products: [
      {
        title: "chocolate amargo 73% cacao",
        variantName: "35g",
        slug: "chocolate_amargo_73-cacao",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_amargo_73-cacao_35g_1663628932464.png",
        price: 280,
        quantity: 2,
        description: "Caja con 10 barras",
        _id: "63c5d89053ca8a8005454396",
      },
    ],
    numberOfItems: 1,
    subtotal: 560,
    tax: {
      percent: "0.16",
      amount: 512.4,
    },
    total: 560,
    paidAt: "16 de enero de 2023",
    transactionId: "pi_3MR1lRBVNCfvPFNH2bxi0TRL",
    orderStatus: "preparando pedido para ser enviado",
    provider: "stripe",
    discounts: [],
    shippingPrice: 50,
  },
  {
    _id: "63c77bbec9804cb007e89d05",
    orderNumber: "T20887939",
    clientId: "63c77bbbc9804cb007e89cfd",
    shippingAddress: {
      firstName: "alonso",
      lastName: "cazares flores",
      address: "costa rica 229 col. nuevo amanecer 1 sector",
      address2: "negocio (ferretería)",
      city: "apodaca",
      estate: "nuevo león",
      country: "méxico",
      zip: "66636",
      phone: "8124696428",
    },
    billingAddress: {
      firstName: "alonso",
      lastName: "cazares flores",
      address: "costa rica 229 col. nuevo amanecer 1 sector",
      address2: "negocio (ferretería)",
      city: "apodaca",
      estate: "nuevo león",
      country: "méxico",
      zip: "66636",
      phone: "8124696428",
    },
    products: [
      {
        title: "chocolate amargo 73% cacao",
        variantName: "18g",
        slug: "chocolate_amargo_73-cacao",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_amargo_73-cacao_18g_1663629227098.png",
        price: 270,
        quantity: 1,
        description: "Caja con 18 barras",
        _id: "63c77bbec9804cb007e89d08",
      },
      {
        title: "chocolate amargo premium",
        variantName: "18g",
        slug: "chocolate_amargo_premium",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_amargo_premium_18g_1663627587138.png",
        price: 270,
        quantity: 1,
        description: "Caja con 18 barras",
        _id: "63c77bbec9804cb007e89d09",
      },
    ],
    numberOfItems: 2,
    subtotal: 540,
    tax: {
      percent: "0.16",
      amount: 427.56,
    },
    total: 459,
    paidAt: "18 de enero de 2023",
    transactionId: "pi_3MRTgFBVNCfvPFNH1R1DJhpc",
    orderStatus: "preparando pedido para ser enviado",
    provider: "stripe",
    discounts: [
      {
        code: "andres25",
        quantity: 0,
        percentaje: 15,
      },
    ],
    shippingPrice: 50,
  },
  {
    _id: "63c8742cc382947556570339",
    orderNumber: "T93274621",
    clientId: "63c86ff717914e6bdfabcdec",
    shippingAddress: {
      firstName: "ernesto",
      lastName: "garcia",
      address: "valle hermoso 1305 col. revolución obrera ",
      address2: "1305",
      city: "reynosa",
      estate: "tamaulipas ",
      country: "méxico",
      zip: "88759",
      phone: "8992096690",
    },
    billingAddress: {
      firstName: "ernesto",
      lastName: "garcia",
      address: "valle hermoso 1305 col. revolución obrera ",
      address2: "1305",
      city: "reynosa",
      estate: "tamaulipas ",
      country: "méxico",
      zip: "88759",
      phone: "8992096690",
    },
    products: [
      {
        title: "chocolate amargo premium",
        variantName: "18g",
        slug: "chocolate_amargo_premium",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_amargo_premium_18g_1663627587138.png",
        price: 270,
        quantity: 1,
        description: "Caja con 18 barras",
        _id: "63c8742cc38294755657033c",
      },
    ],
    numberOfItems: 1,
    subtotal: 270,
    tax: {
      percent: "0.16",
      amount: 234.78,
    },
    total: 229.5,
    paidAt: "18 de enero de 2023",
    transactionId: "46F70844Y9036582A",
    orderStatus: "preparando pedido para ser enviado",
    provider: "paypal",
    discounts: [
      {
        code: "andres25",
        quantity: 0,
        percentaje: 15,
      },
    ],
    shippingPrice: 50,
  },
  {
    _id: "63caeab78c5eb1a5f10d1dc7",
    orderNumber: "T11450592",
    clientId: "63caeab48c5eb1a5f10d1dc0",
    shippingAddress: {
      firstName: "diego",
      lastName: "carrandi",
      address: "valle de chipinque 114",
      address2: "",
      city: "san pedro garza garcía",
      estate: "nuevo leon",
      country: "méxico",
      zip: "66250",
      phone: "8125672990",
    },
    billingAddress: {
      firstName: "diego",
      lastName: "carrandi",
      address: "valle de chipinque 114",
      address2: "",
      city: "san pedro garza garcía",
      estate: "nuevo leon",
      country: "méxico",
      zip: "66250",
      phone: "8125672990",
    },
    products: [
      {
        title: "chocolate de leche premium",
        variantName: "18g",
        slug: "chocolate_de-leche_premium",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_de-leche_premium_18g_1663628487047.png",
        price: 270,
        quantity: 1,
        description: "Caja con 18 barras",
        _id: "63caeab78c5eb1a5f10d1dca",
      },
      {
        title: "chocolate amargo 73% cacao",
        variantName: "18g",
        slug: "chocolate_amargo_73-cacao",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_amargo_73-cacao_18g_1663629227098.png",
        price: 270,
        quantity: 1,
        description: "Caja con 18 barras",
        _id: "63caeab78c5eb1a5f10d1dcb",
      },
    ],
    numberOfItems: 2,
    subtotal: 540,
    tax: {
      percent: "0.16",
      amount: 427.56,
    },
    total: 459,
    paidAt: "20 de enero de 2023",
    transactionId: "pi_3MSQDYBVNCfvPFNH1FRpeTC7",
    orderStatus: "preparando pedido para ser enviado",
    provider: "stripe",
    discounts: [
      {
        code: "andres25",
        quantity: 0,
        percentaje: 15,
      },
    ],
    shippingPrice: 50,
  },
  {
    _id: "63cc39dfbab5b4a7663c2fde",
    orderNumber: "T66293572",
    clientId: "63cc39dcbab5b4a7663c2fd5",
    shippingAddress: {
      firstName: "alfredo ",
      lastName: "borrego lópez ",
      address: "prolongación obregon 1203 oriente nicolas bravo ",
      address2: "local de vidrios ",
      city: "mante ",
      estate: "tamaulipas ",
      country: "méxico",
      zip: "89860",
      phone: "8311626634",
    },
    billingAddress: {
      firstName: "alfredo ",
      lastName: "borrego lópez ",
      address: "prolongación obregon 1203 oriente nicolas bravo ",
      address2: "local de vidrios ",
      city: "mante ",
      estate: "tamaulipas ",
      country: "méxico",
      zip: "89860",
      phone: "8311626634",
    },
    products: [
      {
        title: "distribuidor pack",
        variantName: ".",
        slug: "distribuidor_pack",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/distribuidor_pack_._1667930517363.png",
        price: 750,
        quantity: 1,
        description: "5 cajas-90 piezas-18pz por caja",
        _id: "63cc39dfbab5b4a7663c2fe1",
      },
    ],
    numberOfItems: 1,
    subtotal: 750,
    tax: {
      percent: "0.16",
      amount: 535.5,
    },
    total: 637.5,
    paidAt: "21 de enero de 2023",
    transactionId: "pi_3MSmXRBVNCfvPFNH2NvlC2ul",
    orderStatus: "preparando pedido para ser enviado",
    provider: "stripe",
    discounts: [
      {
        code: "andres25",
        quantity: 0,
        percentaje: 15,
      },
    ],
    shippingPrice: 0,
  },
  {
    _id: "63d00d65ad1eddba3ca1cc02",
    orderNumber: "T41013775",
    clientId: "63d00d65ad1eddba3ca1cbf9",
    shippingAddress: {
      firstName: "cuauhtemoc",
      lastName: "torres",
      address: "pirul del valle 323a",
      address2: "casa portón café ",
      city: "león de los aldama",
      estate: "gto.",
      country: "méxico",
      zip: "37140",
      phone: "4776476336",
    },
    billingAddress: {
      firstName: "cuauhtemoc",
      lastName: "torres",
      address: "pirul del valle 323a",
      address2: "casa portón café ",
      city: "león de los aldama",
      estate: "gto.",
      country: "méxico",
      zip: "37140",
      phone: "4776476336",
    },
    products: [
      {
        title: "chocolate amargo premium",
        variantName: "35g",
        slug: "chocolate_amargo_premium",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_amargo_premium_35g_1663627038908.png",
        price: 280,
        quantity: 1,
        description: "Caja con 10 barras",
        _id: "63d00d65ad1eddba3ca1cc05",
      },
    ],
    numberOfItems: 1,
    subtotal: 280,
    tax: {
      percent: "0.16",
      amount: 241.92000000000002,
    },
    total: 238,
    paidAt: "24 de enero de 2023",
    transactionId: "71L9147914842954M",
    orderStatus: "preparando pedido para ser enviado",
    provider: "paypal",
    discounts: [
      {
        code: "andres25",
        quantity: 0,
        percentaje: 15,
      },
    ],
    shippingPrice: 50,
  },
  {
    _id: "63d02beee3cc8c801126fe59",
    orderNumber: "T18220784",
    clientId: "63d02bebe3cc8c801126fe53",
    shippingAddress: {
      firstName: "josé",
      lastName: "reyna",
      address: "calle reynosa #206",
      address2: "casa",
      city: "nuevo progreso ",
      estate: "tamaulipas",
      country: "méxico",
      zip: "88810",
      phone: "8993331352",
    },
    billingAddress: {
      firstName: "josé",
      lastName: "reyna",
      address: "calle reynosa #206",
      address2: "casa",
      city: "nuevo progreso ",
      estate: "tamaulipas",
      country: "méxico",
      zip: "88810",
      phone: "8993331352",
    },
    products: [
      {
        title: "distribuidor pack",
        variantName: ".",
        slug: "distribuidor_pack",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/distribuidor_pack_._1667930517363.png",
        price: 750,
        quantity: 1,
        description: "5 cajas-90 piezas-18pz por caja",
        _id: "63d02beee3cc8c801126fe5c",
      },
    ],
    numberOfItems: 1,
    subtotal: 750,
    tax: {
      percent: "0.16",
      amount: 630,
    },
    total: 750,
    paidAt: "24 de enero de 2023",
    transactionId: "pi_3MTrnzBVNCfvPFNH2qp9hGz8",
    orderStatus: "preparando pedido para ser enviado",
    provider: "stripe",
    discounts: [],
    shippingPrice: 0,
  },
  {
    _id: "63d9a344121c025b0d96c51d",
    orderNumber: "T9246107",
    clientId: "63cc39dcbab5b4a7663c2fd5",
    shippingAddress: {
      firstName: "alfredo",
      lastName: "borrego lópez",
      address: "prolongación obregon 1203 oriente nicolas bravo",
      address2: "local de vidrios ",
      city: "mante ",
      estate: "tamaulipas",
      country: "méxico",
      zip: "89860",
      phone: "8311626634",
    },
    billingAddress: {
      firstName: "alfredo",
      lastName: "borrego lópez",
      address: "prolongación obregon 1203 oriente nicolas bravo",
      address2: "local de vidrios ",
      city: "mante ",
      estate: "tamaulipas",
      country: "méxico",
      zip: "89860",
      phone: "8311626634",
    },
    products: [
      {
        title: "distribuidor pack",
        variantName: ".",
        slug: "distribuidor_pack",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/distribuidor_pack_._1667930517363.png",
        price: 750,
        quantity: 2,
        description: "5 cajas-90 piezas-18pz por caja",
        _id: "63d9a344121c025b0d96c520",
      },
    ],
    numberOfItems: 1,
    subtotal: 1500,
    tax: {
      percent: "0.16",
      amount: 1071,
    },
    total: 1275,
    paidAt: "31 de enero de 2023",
    transactionId: "pi_3MWTC2BVNCfvPFNH0xhvBZFL",
    orderStatus: "preparando pedido para ser enviado",
    provider: "stripe",
    discounts: [
      {
        code: "andres15",
        quantity: 0,
        percentaje: 15,
      },
    ],
    shippingPrice: 0,
  },
  {
    _id: "63e7385fb04d74292137449e",
    orderNumber: "T77912425",
    clientId: "63e7385cb04d742921374495",
    shippingAddress: {
      firstName: "ariel ",
      lastName: "guel garcía ",
      address: "privada miguel alessio robles #1207",
      address2: "casa ",
      city: "castaños ",
      estate: "coahuila ",
      country: "méxico",
      zip: "25870",
      phone: "8661347684",
    },
    billingAddress: {
      firstName: "ariel ",
      lastName: "guel garcía ",
      address: "privada miguel alessio robles #1207",
      address2: "casa ",
      city: "castaños ",
      estate: "coahuila ",
      country: "méxico",
      zip: "25870",
      phone: "8661347684",
    },
    products: [
      {
        title: "distribuidor pack",
        variantName: ".",
        slug: "distribuidor_pack",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/distribuidor_pack_._1667930517363.png",
        price: 750,
        quantity: 1,
        description: "5 cajas-90 piezas-18pz por caja",
        _id: "63e7385fb04d7429213744a1",
      },
    ],
    numberOfItems: 1,
    subtotal: 750,
    tax: {
      percent: "0.16",
      amount: 535.5,
    },
    total: 637.5,
    paidAt: "11 de febrero de 2023",
    transactionId: "pi_3MaCl7BVNCfvPFNH26ufl2V8",
    orderStatus: "preparando pedido para ser enviado",
    provider: "stripe",
    discounts: [
      {
        code: "andres15",
        quantity: 0,
        percentaje: 15,
      },
    ],
    shippingPrice: 0,
  },
];

export const seedClients: IClient[] = [
  {
    _id: "634e56ef4742453ddfea018b",
    firstName: "ricardo",
    lastName: "sandoval",
    email: "applebono3@gmail.com",
    addresses: [
      {
        firstName: "ricardo",
        lastName: "sandoval",
        address: "cerrada del amanecer 154. real del country",
        address2: "",
        city: "durango",
        estate: "durango",
        country: "méxico",
        zip: "34162",
        phone: "6183371227",
      },
    ],
  },
  {
    _id: "636eb0233b592e78e310f6c3",
    firstName: "prueba",
    lastName: "langavi",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "prueba",
        lastName: "langavi",
        address: "dirección de la oficina",
        address2: "",
        city: "durango",
        estate: "durango",
        country: "méxico",
        zip: "34000",
        phone: "6181234567",
      },
    ],
  },
  {
    _id: "63bf35734eda33b77a72ef6d",
    firstName: "juan alejandro",
    lastName: "flores perez",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "juan alejandro",
        lastName: "flores perez",
        address: "avenida cuauhtemoc 830, narvarte poniente",
        address2: "departamento 603",
        city: "benito juarez",
        estate: "ciudad de méxico",
        country: "méxico",
        zip: "3020",
        phone: "4621651299",
      },
    ],
  },
  {
    _id: "63c5d88d53ca8a8005454390",
    firstName: "giancarlo ",
    lastName: "hernández cortés ",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "giancarlo ",
        lastName: "hernández cortés ",
        address: "décima avenida norte entre 23 y 25 calle poniente",
        address2: "número 22 colonia 5 de febrero ",
        city: "tapachula de córdova y ordoñez",
        estate: "chis.",
        country: "méxico",
        zip: "30710",
        phone: "9626225910",
      },
    ],
  },
  {
    _id: "63c756200ea6ce6b152c55e8",
    firstName: "sergio alberto",
    lastName: "soto beltrán",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "sergio alberto",
        lastName: "soto beltrán",
        address: "puerto campeche y mexico ",
        address2: "casa color melón, portón y puerta negra, y panga afuera ",
        city: "puerto san carlos",
        estate: "baja california sur",
        country: "méxico",
        zip: "23740",
        phone: "6131242690",
      },
    ],
  },
  {
    _id: "63c77bbbc9804cb007e89cfd",
    firstName: "alonso",
    lastName: "cazares flores",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "alonso",
        lastName: "cazares flores",
        address: "costa rica 229 col. nuevo amanecer 1 sector",
        address2: "negocio (ferretería)",
        city: "apodaca",
        estate: "nuevo león",
        country: "méxico",
        zip: "66636",
        phone: "8124696428",
      },
    ],
  },
  {
    _id: "63c86ff717914e6bdfabcdec",
    firstName: "ernesto",
    lastName: "garcia",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "ernesto",
        lastName: "garcia",
        address: "valle hermoso 1305 col. revolución obrera ",
        address2: "1305",
        city: "reynosa",
        estate: "tamaulipas ",
        country: "méxico",
        zip: "88759",
        phone: "8992096690",
      },
    ],
  },
  {
    _id: "63ca0f1ad58ea47562e4bc63",
    firstName: "tideman ",
    lastName: "scoot",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "tideman ",
        lastName: "scoot",
        address: "diaz varela 88",
        address2: "",
        city: "chiautempan ",
        estate: "tlaxcala",
        country: "méxico",
        zip: "90800",
        phone: "2224402760",
      },
    ],
  },
  {
    _id: "63caeab48c5eb1a5f10d1dc0",
    firstName: "diego",
    lastName: "carrandi",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "diego",
        lastName: "carrandi",
        address: "valle de chipinque 114",
        address2: "",
        city: "san pedro garza garcía",
        estate: "nuevo leon",
        country: "méxico",
        zip: "66250",
        phone: "8125672990",
      },
    ],
  },
  {
    _id: "63cc39dcbab5b4a7663c2fd5",
    firstName: "alfredo ",
    lastName: "borrego lópez ",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "alfredo ",
        lastName: "borrego lópez ",
        address: "prolongación obregon 1203 oriente nicolas bravo ",
        address2: "local de vidrios ",
        city: "mante ",
        estate: "tamaulipas ",
        country: "méxico",
        zip: "89860",
        phone: "8311626634",
      },
    ],
  },
  {
    _id: "63d00d65ad1eddba3ca1cbf9",
    firstName: "cuauhtemoc",
    lastName: "torres",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "cuauhtemoc",
        lastName: "torres",
        address: "pirul del valle 323a",
        address2: "casa portón café ",
        city: "león de los aldama",
        estate: "gto.",
        country: "méxico",
        zip: "37140",
        phone: "4776476336",
      },
    ],
  },
  {
    _id: "63d02bebe3cc8c801126fe53",
    firstName: "josé",
    lastName: "reyna",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "josé",
        lastName: "reyna",
        address: "calle reynosa #206",
        address2: "casa",
        city: "nuevo progreso ",
        estate: "tamaulipas",
        country: "méxico",
        zip: "88810",
        phone: "8993331352",
      },
    ],
  },
  {
    _id: "63e7385cb04d742921374495",
    firstName: "ariel ",
    lastName: "guel garcía ",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "ariel ",
        lastName: "guel garcía ",
        address: "privada miguel alessio robles #1207",
        address2: "casa ",
        city: "castaños ",
        estate: "coahuila ",
        country: "méxico",
        zip: "25870",
        phone: "8661347684",
      },
    ],
  },
  {
    _id: "63eb375d3e41a6321733b137",
    firstName: "david neftalí",
    lastName: "zarzoza carranza",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "david neftalí",
        lastName: "zarzoza carranza",
        address: "manzanilla #240 colonia palma de romero",
        address2: "casa",
        city: "matehuala",
        estate: "san luis potosí",
        country: "méxico",
        zip: "78730",
        phone: "4881226147",
      },
    ],
  },
  {
    _id: "63f3f54d2fd45899fe363fdd",
    firstName: "nicolas alv",
    lastName: "alv",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "nicolas alv",
        lastName: "alv",
        address: "sor juana ines de la cruz 12",
        address2: "",
        city: "san rafael",
        estate: "estado de mexico ",
        country: "méxico",
        zip: "56740",
        phone: "7352334910",
      },
    ],
  },
  {
    _id: "63f3f5502fd45899fe36400b",
    firstName: "hector",
    lastName: "castro",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "hector",
        lastName: "castro",
        address: "santa jacinta 756",
        address2: "cumbres san patricio",
        city: "monterrey",
        estate: "nuevo león",
        country: "méxico",
        zip: "66035",
        phone: "8123649163",
      },
    ],
  },
  {
    _id: "63f3fff887e8af84ac2092fb",
    firstName: "juan pablo ",
    lastName: "nuñez monzonis",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "juan pablo ",
        lastName: "nuñez monzonis",
        address: "calle bogota #2657",
        address2: "",
        city: "guadalajara",
        estate: "jal.",
        country: "méxico",
        zip: "44630",
        phone: "3334537375",
      },
    ],
  },
  {
    _id: "63f4064f87e8af84ac2093e5",
    firstName: "esa",
    lastName: "casas",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "esa",
        lastName: "casas",
        address: "amapolas 210",
        address2: "",
        city: "oaxaca ",
        estate: "oaxaca",
        country: "méxico",
        zip: "68050",
        phone: "9513578646",
      },
    ],
  },
  {
    _id: "63f4090287e8af84ac209431",
    firstName: "samuel ",
    lastName: "hernández bolivar ",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "samuel ",
        lastName: "hernández bolivar ",
        address: "sandinistas 1019",
        address2: "casa",
        city: "chihuahua ",
        estate: "chihuahua ",
        country: "méxico",
        zip: "31126",
        phone: "6144752304",
      },
    ],
  },
  {
    _id: "63f40f0ecd9e7ba23ba1bad7",
    firstName: "emanuel",
    lastName: "vargas",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "emanuel",
        lastName: "vargas",
        address: "bosques de caobas 291",
        address2: "mz 68 lote 28 casa 1",
        city: "tecamac",
        estate: "estado de mexico",
        country: "méxico",
        zip: "55764",
        phone: "5621103181",
      },
    ],
  },
  {
    _id: "63f422c1d9454b0667826a04",
    firstName: "jesus",
    lastName: "ramirez",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "jesus",
        lastName: "ramirez",
        address: "andador toreo 04",
        address2: "casa amarilla",
        city: "altamirano ",
        estate: "guerrero",
        country: "méxico",
        zip: "40660",
        phone: "7321191499",
      },
    ],
  },
  {
    _id: "63f437af9cf4f9720b5ad16b",
    firstName: "daniel",
    lastName: "muñoz pizarro",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "daniel",
        lastName: "muñoz pizarro",
        address: "cedros 4000 paseo del laurel 1b",
        address2: "cedros 4000",
        city: "toluca",
        estate: "méxico",
        country: "méxico",
        zip: "52004",
        phone: "9511698859",
      },
    ],
  },
  {
    _id: "63f505b639ae4e50fef144f7",
    firstName: "naidely",
    lastName: "rosendo madora",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "naidely",
        lastName: "rosendo madora",
        address: "atoyac 20, la paz",
        address2: "oficina",
        city: "puebla",
        estate: "pue.",
        country: "méxico",
        zip: "72160",
        phone: "2431061348",
      },
    ],
  },
  {
    _id: "63f51ba4a7c2cf0b8e602122",
    firstName: "luis",
    lastName: "jimenez",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "luis",
        lastName: "jimenez",
        address: "san antonio del mar ",
        address2: "farallon ",
        city: "rosarito ",
        estate: "tijuana ",
        country: "méxico",
        zip: "22560",
        phone: "6611072056",
      },
    ],
  },
  {
    _id: "63f5481f9fea2115996a3778",
    firstName: "angel ian ",
    lastName: "celaya miranda ",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "angel ian ",
        lastName: "celaya miranda ",
        address: "las lomas, virgilio #9 ",
        address2: "casa",
        city: "hermosillo ",
        estate: "sonora ",
        country: "méxico",
        zip: "83293",
        phone: "6624205823",
      },
    ],
  },
  {
    _id: "63f5d0b9416337fc3e3fa29d",
    firstName: "erick raul",
    lastName: "mendez gonzalez ",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "erick raul",
        lastName: "mendez gonzalez ",
        address: "fracc. hacienda el cortijo, estribo #230",
        address2: "#230",
        city: "saltillo",
        estate: "coahuila",
        country: "méxico",
        zip: "25093",
        phone: "8442990367",
      },
    ],
  },
  {
    _id: "63f914c7eb0f223d171cda8c",
    firstName: "david ",
    lastName: "ramos ",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "david ",
        lastName: "ramos ",
        address: "calle 1 de mayo sn",
        address2: "san miguel buenavista",
        city: "cuaxomulco",
        estate: "tlaxcala",
        country: "méxico",
        zip: "90660",
        phone: "5584193908",
      },
    ],
  },
  {
    _id: "63fa869aa8ac15b7bc56c494",
    firstName: "david ",
    lastName: "herrera ",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "david ",
        lastName: "herrera ",
        address: "ocampo 918 zona centro",
        address2: "súper bodies gym",
        city: "el mande",
        estate: "tamaulipas",
        country: "méxico",
        zip: "89800",
        phone: "8311136421",
      },
    ],
  },
  {
    _id: "63fd2b129ed7ace31654afb4",
    firstName: "jesús ",
    lastName: "herrera ",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "jesús ",
        lastName: "herrera ",
        address: "calle justo sierra",
        address2: "casa verde junto dejavu",
        city: "cardel",
        estate: "veracruz ",
        country: "méxico",
        zip: "91653",
        phone: "2961014528",
      },
    ],
  },
  {
    _id: "63fe73ebec618786b561ce46",
    firstName: "fernando ulises ",
    lastName: "ornelas salgado ",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "fernando ulises ",
        lastName: "ornelas salgado ",
        address: "calle colegio de niñas ",
        address2: "casa ",
        city: "ciudad de méxico ",
        estate: "cdmx ",
        country: "méxico",
        zip: "14387",
        phone: "5562020387",
      },
    ],
  },
  {
    _id: "6400ce62adce550a4a352b0b",
    firstName: "romel",
    lastName: "moreno",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "romel",
        lastName: "moreno",
        address: "calle monte libano 885 colonia montebello",
        address2: "casa ",
        city: "culiacan",
        estate: "sinaloa",
        country: "méxico",
        zip: "80227",
        phone: "6674310361",
      },
    ],
  },
  {
    _id: "640237b5dde823ef97edeade",
    firstName: "aurelio",
    lastName: "boites",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "aurelio",
        lastName: "boites",
        address: "dionisio rodríguez 493",
        address2: "hospital en la esquina",
        city: "guadalajara ",
        estate: "jalisco",
        country: "méxico",
        zip: "44360",
        phone: "3312421062",
      },
    ],
  },
  {
    _id: "64053e5522ad015387e41de9",
    firstName: "gabriel",
    lastName: "rojas",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "gabriel",
        lastName: "rojas",
        address: "buenavista 23",
        address2: "",
        city: "ciudad de méxico",
        estate: "ciudad de méxico",
        country: "méxico",
        zip: "1900",
        phone: "5564780099",
      },
    ],
  },
  {
    _id: "64063957a993a6db9ed156ff",
    firstName: "gabriela maria",
    lastName: "navarro gaehd",
    email: "i.s.ricardo.sandoval@gmail.com",
    addresses: [
      {
        firstName: "gabriela maria",
        lastName: "navarro gaehd",
        address: "grisen 412, puerta de hierro (privada zaragoza)",
        address2: "casa",
        city: "monterrey",
        estate: "nuevo león",
        country: "méxico",
        zip: "64349",
        phone: "8110287635",
      },
    ],
  },
];

export const seedDiscounts: IDiscount[] = [
  {
    _id: "633742b4a5b57bbc25f002ab",
    code: "jorgefox",
    active: false,
    quantity: 50,
    timesUsed: 0,
  },
  {
    _id: "6345faeab53dfb6a5fbf90f9",
    code: "andres15",
    active: true,
    percentaje: 15,
    timesUsed: 0,
  },
  {
    _id: "63fcd862a58ef0fec27a5e22",
    percentaje: 15,
    code: "lasdepollo",
    active: true,
    timesUsed: 0,
  },
];

export const seedUsers: IUser[] = [
  {
    _id: "640290f901eadfd67667307d",
    dispName: "Administración",
    nickname: "admin",
    password: "$2b$10$WME4BVRhiUunqC.LMj2.zeYOrb4n3VBb3XF4JSTkw7XJjaOkSQ.D2",
    role: roleType.admin,
  },
];
