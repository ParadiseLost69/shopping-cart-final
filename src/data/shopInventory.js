import brownTable from "../images/brown-table.jpg";
import modernDresser from "../images/modern-dresser.jpg";
import lightBrownDresser from "../images/light-brown-dresser.jpg";
import cabinet from "../images/cabinet.jpeg";

const shopInventory = [
  {
    id: 0,
    name: "Modern Dresser",
    price: 300,
    description:
      "A stylish modern dresser that will lighten up the room and provide the perfect mixture of old-school elegance and new-school modernity.",
    quantity: 0,
    imageSource: modernDresser,
  },
  {
    id: 1,
    name: "Light Brown Dresser",
    price: 200,
    description: "A sleek, compact dresser that is loved for its versatility.",
    quantity: 0,
    imageSource: lightBrownDresser,
  },
  {
    id: 2,
    name: "Wodden Table",
    price: 150,
    description:
      "A white and mahogany table that fits any retro-modernist design space.",
    quantity: 0,
    imageSource: brownTable,
  },
  {
    id: 3,
    name: "Cabinet",
    price: 250,
    description:
      "While we would personally use this to store vintage liquors and wines, it is up to you what you keep in this darkened wood cabinet.",
    quantity: 1,
    imageSource: cabinet,
  },
];

export default shopInventory;
