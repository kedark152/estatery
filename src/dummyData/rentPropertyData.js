const rentPropertyData = [
  {
    id: "O4Ld78YdeeF5",
    name: "3 BHK in Kaushalya nagar",
    imgUrl:
      "https://mediacdn.99acres.com/media1/19007/7/380147728O-1662277979756.jpg",
    address: "kaushalya nagar, Ram Wadi, Nashik",
    rent: 30000,
    isPopular: false,
    bedsQty: 3,
    bathroomQty: 3,
    propertyArea: "100",
    city: "nashik",
    moveInDate: "09/07/2022",
    type: "apartment",
  },
  {
    id: "J3Ld2YdeoH5",
    name: "1 BHK in Sector-19, Kharghar",
    imgUrl:
      "https://is1-2.housingcdn.com/01c16c28/75e0575988d633aa884d77a28f053a27/v0/fs/1_bhk_apartment-for-rent-kharghar-Navi+Mumbai-hall.jpg.webp",
    address: "Rekhi Deffodils, Sector-19, Kharghar, Navi Mumbai",
    rent: 20000,
    isPopular: false,
    bedsQty: 1,
    bathroomQty: 2,
    propertyArea: "980",
    city: "navi-mumbai",
    moveInDate: "09/11/2022",
    type: "apartment",
  },
  {
    id: "I8Lg2YkTH5",
    name: "1 BHK in Lodha Palava, Dombivali",
    imgUrl:
      "https://mediacdn.99acres.com/media1/18669/13/373393578M-1658830743130.jpg",
    address: "Lodha Palava Downtown, Dombivli (East),",
    rent: 20095,
    isPopular: false,
    bedsQty: 1,
    bathroomQty: 2,
    propertyArea: "450",
    city: "mumbai",
    moveInDate: "09/08/2022",
    type: "apartment",
  },
  {
    id: "WK4TYnocIY",
    name: "2 BHK in Lok Darshan, Marol",
    imgUrl:
      "https://is1-3.housingcdn.com/01c16c28/826019585322cf78ff7d32070ceaed07/v0/fs/2_bhk_apartment-for-rent-andheri_east-Mumbai-bedroom.jpg.webp",
    address: "Lok Darshan, Marol, Andheri-East",
    rent: 2095,
    isPopular: false,
    bedsQty: 2,
    bathroomQty: 2,
    propertyArea: "1000",
    city: "mumbai",
    moveInDate: "09/08/2022",
    type: "apartment",
  },
  {
    id: "QAd3HuAbq7",
    name: "3 BHK in Samraat, Gangapur",
    imgUrl:
      "https://newprojects.99acres.com/projects/samraat_group/samraat_apna_ghar/images/yf401drs.jpg",
    address: "Samraat, Gangapur, Nashik",
    rent: 15000,
    isPopular: false,
    bedsQty: 2,
    bathroomQty: 2,
    propertyArea: "1000",
    city: "nashik",
    moveInDate: "09/14/2022",
    type: "apartment",
  },
  {
    id: "Gr2XYzz29c",
    name: "8 BHK Villa for Rent in Pali Hill",
    imgUrl:
      "https://is1-2.housingcdn.com/01c16c28/8560305bc0d9efa0f3529466703ae36c/v0/medium/8_bhk_villa-for-rent-bandra_west-Mumbai-hall.jpg.webp",
    address: "Pali hill, Bandra West, Mumbai",
    rent: 180000,
    isPopular: false,
    bedsQty: 8,
    bathroomQty: 4,
    propertyArea: "15000",
    city: "mumbai",
    moveInDate: "09/10/2022",
    type: "villa",
  },
  {
    id: "wxVqoBWl9u",
    name: "3 BHK Villa for Rent in Panvel",
    imgUrl:
      "https://is1-2.housingcdn.com/01c16c28/e00d6d391a8ffe9dcd29f9a073ee541c/v0/fs/3_bhk_villa-for-sale-panvel-Navi+Mumbai-bedroom.jpg.webp",
    address: "Panvel, Navi Mumbai",
    rent: 150000,
    isPopular: false,
    bedsQty: 3,
    bathroomQty: 3,
    propertyArea: "2000",
    city: "navi-mumbai",
    moveInDate: "09/11/2022",
    type: "villa",
  },
  {
    id: "jxMqoBWl9u",
    name: "RedhomeX Sea Glass Villa",
    imgUrl:
      "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/387441813.jpg?k=371bfed663104d3b727723b67657d5121a666cfca0712f4839d9b7927fb821cf&o=&hp=1",
    address: "Gangapur, Nashik",
    rent: 200000,
    isPopular: false,
    bedsQty: 3,
    bathroomQty: 3,
    propertyArea: "2000",
    city: "nashik",
    moveInDate: "09/12/2022",
    type: "villa",
  },
  {
    id: "dxVqoBgl9u",
    name: "4 BHK Villa for Rent in Panvel",
    imgUrl:
      "https://is1-3.housingcdn.com/01c16c28/3164a9f0818f6a17e98fe3a044f795be/v0/fs/4_bhk_villa-for-sale-panvel-Navi+Mumbai-others.jpg.webp",
    address: "Panvel, Navi Mumbai",
    rent: 1100000,
    isPopular: false,
    bedsQty: 4,
    bathroomQty: 3,
    propertyArea: "2000",
    city: "navi-mumbai",
    moveInDate: "09/13/2022",
    type: "villa",
  },
  {
    id: "KFuCEwE1pN",
    name: "1RK Studio Apartment, Nyati Elysia",
    imgUrl:
      "https://mediacdn.99acres.com/media1/19023/1/380461432M-1662453499597.jpg",
    address: "Kharadi, Pune",
    rent: 15000,
    isPopular: false,
    bedsQty: 1,
    bathroomQty: 1,
    propertyArea: "269",
    city: "pune",
    moveInDate: "09/17/2022",
    type: "studio",
  },
  {
    id: "lFuHEwE1pN",
    name: "1RK Studio Apartment, Satyavihar society",
    imgUrl:
      "https://mediacdn.99acres.com/media1/18860/16/377216582O-1660817463365.jpg",
    address: "Indira Nagar, Nashik",
    rent: 9000,
    isPopular: false,
    bedsQty: 1,
    bathroomQty: 1,
    propertyArea: "249",
    city: "nashik",
    moveInDate: "09/18/2022",
    type: "studio",
  },
  {
    id: "PFuGEwE1pN",
    name: "3BHK Apartment, Panchshil Towers",
    imgUrl:
      "https://mediacdn.99acres.com/media1/18583/14/371674594O-1657947651650.jpg",
    address: "Kharadi, Pune",
    rent: 35000,
    isPopular: false,
    bedsQty: 3,
    bathroomQty: 3,
    propertyArea: "1648",
    city: "pune",
    moveInDate: "09/19/2022",
    type: "apartment",
  },
];

export default rentPropertyData;
