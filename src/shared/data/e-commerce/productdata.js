const pngs1 = "/assets/img/pngs/1.png"
const pngs01 = "/assets/img/pngs/01.png"
const pngs2 = "/assets/img/pngs/2.png"
const pngs02 = "/assets/img/pngs/02.png"
const pngs3 = "/assets/img/pngs/3.png"
const pngs03 = "/assets/img/pngs/03.png"
const pngs4 = "/assets/img/pngs/4.png"
const pngs04 = "/assets/img/pngs/04.png"
const pngs5 = "/assets/img/pngs/5.png"
const pngs05 = "/assets/img/pngs/05.png"
const pngs6 = "/assets/img/pngs/6.png"
const pngs06 = "/assets/img/pngs/06.png"
const pngs7 = "/assets/img/pngs/7.png"
const pngs07 = "/assets/img/pngs/07.png"
const pngs8 = "/assets/img/pngs/8.png"
const pngs08 = "/assets/img/pngs/08.png"

export const Productdata = [
  {
    id: 1,
    ProductId: "Women's Red Dress",
    Product1: pngs1,
    Product2: pngs01,
    Productpriceold: "$125.00",
    Productdiscountnew: "50.00",
    Productdiscount: "-33%",
    Productdiscounttext: "success",
    quatity: 1
  },
  {
    id: 2,
    ProductId: "Casual Wear Top",
    Product1: pngs2,
    Product2: pngs02,
    Productpriceold: "$125.00",
    Productdiscountnew: "120.00",
    quatity: 1
  },
  {
    id: 3,
    ProductId: "Party Wear Black Top",
    Product1: pngs3,
    Product2: pngs03,
    Productpriceold: "$125.00",
    Productdiscountnew: "110.00",
    Productdiscount: "-50%",
    Productdiscounttext: "info",
    quatity: 1
  },
  {
    id: 4,
    ProductId: "Women's Rayon top",
    Product1: pngs4,
    Product2: pngs04,
    Productpriceold: "$125.00",
    Productdiscountnew: "120.00",
    quatity: 1
  },
  {
    id: 5,
    ProductId: "Long Floral Tunic Tops",
    Product1: pngs5,
    Product2: pngs05,
    Productpriceold: "$125.00",
    Productdiscountnew: "60.00",
    Productdiscount: "-40%",
    Productdiscounttext: "danger",
    quatity: 1
  },
  {
    id: 6,
    ProductId: "Western Skirt & Top",
    Product1: pngs6,
    Product2: pngs06,
    Productpriceold: "$125.00",
    Productdiscountnew: "90.00",
    quatity: 1
  },
  {
    id: 7,
    ProductId: "Party Wear Fancy Top",
    Product1: pngs7,
    Product2: pngs07,
    Productpriceold: "$125.00",
    Productdiscountnew: "104.00",
    Productdiscount: "-43%",
    Productdiscounttext: "warning",
    quatity: 1
  },
  {
    id: 8,
    ProductId: "Long Slit Full Sleeve",
    Product1: pngs8,
    Product2: pngs08,
    Productpriceold: "$125.00",
    Productdiscountnew: "120.00",
    quatity: 1
  },
  {
    id: 9,
    ProductId: "Long Floral Tunic Tops",
    Product1: pngs6,
    Product2: pngs06,
    Productpriceold: "$125.00",
    Productdiscountnew: "110.00",
    quatity: 1
  }]


export const FindeWithId = (id) => {
  const filterdata = Productdata.filter((ele) => {
    return ele.id == id
  })
  return filterdata
}

export const DeleteWithId = (id) => {
  const filterdata = Productdata.filter((ele) => {
    return ele.id != id
  })
  // console.log(filterdata);
  return filterdata
}