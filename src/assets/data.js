import { images } from "../assets";

// products data
const products = [
  {
    id: "1",
    product: "iphone",
    img: images.product1,
    customer: "omar ali",
    date: "2022 march 1 ",
    amount: 776,
    method: "cash on delivery",
    status: "Approved",
  },
  {
    id: "2",
    product: "android",
    img: images.product2,
    customer: "Bilal muthana",
    date: " 2022 april 30 ",
    amount: 50,
    method: " online payment ",
    status: " pending",
  },
  {
    id: "3",
    product: "Apple-ipad",
    img: images.product3,
    customer: "john smith",
    date: "2022 august",
    amount: 300,
    method: "union western payment  ",
    status: "Approved",
  },
  {
    id: "4",
    product: "Apple-ipad",
    img: images.product2,
    customer: "john smith",
    date: "2022 august",
    amount: 300,
    method: "union western payment  ",
    status: "pending",
  },
  {
    id: "5",
    product: "Apple-ipad",
    img: images.product1,
    customer: "john smith",
    date: "2022 august",
    amount: 300,
    method: "union western payment  ",
    status: "Approved",
  },
];

// users data
const users = [
  {
    id: 1,
    name: "Omar ali",
    email: "omr@gmail.com",
    date: "2022 march 1 ",
    age: 58,
    number: +9647831190204,
    img: images.person1,
    status: "active",
  },
  {
    id: 2,
    name: "Bilal muthana ",
    email: "bil@gmail.com",
    date: " 2022 april 30 ",
    age: 24,
    number: +9647831190204,

    img: images.person1,
    status: "active",
  },
  {
    id: 3,
    name: "john smith ",
    email: "jh997@gmail.com",
    date: "2022 august",
    age: 21,
    number: +9647831190204,
    img: images.person1,
    status: "passive",
  },
  {
    id: 4,
    name: "shamsy islam",
    email: "shams@gmail.com",
    date: "2022 august",
    age: 20,
    number: +9647831190204,
    img: images.person1,
    status: "active",
  },
  {
    id: 5,
    name: "mohammed ebrahim",
    email: "mh@gmail.com",
    date: "2022 august",
    number: +9647831190204,
    img: images.person1,
    status: "active",
    age: 25,
  },
  {
    id: 6,
    name: "john smith ",
    email: "jh997@gmail.com",
    date: "2022 august",
    age: 21,
    number: +9647831190204,
    img: images.person1,
    status: "passive",
  },
  {
    id: 7,
    name: "shamsy islam",
    email: "shams@gmail.com",
    date: "2022 august",
    age: 20,
    number: +9647831190204,
    img: images.person1,
    status: "active",
  },
  {
    id:8,
    name: "mohammed ebrahim",
    email: "mh@gmail.com",
    date: "2022 august",
    number: +9647831190204,
    img: images.person1,
    status: "active",
    age: 25,
  },
  {
    id: 9,
    name: "john smith ",
    email: "jh997@gmail.com",
    date: "2022 august",
    age: 21,
    number: +9647831190204,
    img: images.person1,
    status: "passive",
  },
  {
    id: "10",
    name: "shamsy islam",
    email: "shams@gmail.com",
    date: "2022 august",
    age: 20,
    number: +9647831190204,
    img: images.person1,
    status: "active",
  },
  {
    id: "11",
    name: "mohammed ebrahim",
    email: "mh@gmail.com",
    date: "2022 august",
    number: +9647831190204,
    img: images.person1,
    status: "active",
    age: 25,
  },
];

// Chart data
const chart = [
  {
    name: "Page A",
    uv: 1200,
    pv: 2000,
    amt: 200,
  },
  {
    name: "Page B",
    uv: 1900,
    pv: 1198,
    amt: 210,
  },
  {
    name: "Page C",
    uv: 200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 90,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 140,
    pv: 400,
    amt: 2100,
  },
];
//inputs for form to  add New user
const userForm = [
  { id: 2, label: "Username", type: "text", placeholder: "username" },
  {
    id: 3,
    label: "Name and Surname",
    type: "text",
    placeholder: "name and surname",
  },
  { id: 4, label: "Email", type: "email", placeholder: "email" },
  { id: 5, label: "Password", type: "text", placeholder: "password" },
  { id: 6, label: "Phone", type: "text", placeholder: "+9647831190200" },
  {
    id: 7,
    label: "Address",
    type: "text",
    placeholder: "Said Taib St. 114 Erbil",
  },
  { id: 8, label: "Country", type: "text", placeholder: "Iraq" },
];

//inputs for form to  add New Products
const productForms = [
  { id: 2, label: "Title", type: "text", placeholder: "Title" },
  {
    id: 3,
    label: "Description",
    type: "text",
    placeholder: "product description",
  },
  {
    id: 7,
    label: "Category",
    type: "text",
    placeholder: "Product category",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    placeholder: "100",
  },
  {
    id: 5,
    label: "Stock",
    type: "text",
    placeholder: "in stock",
  },
];

let data = { users, products, chart, productForms, userForm };
export default data;
