import { render, screen} from "@testing-library/react";
import ProductMiniCard from "./ProductMiniCard";

test("Has red text", () => {
  const testData = {
    imgUrl: "/images/Control Purchase/ChickenHell.png",
    title: "Chicken Hell",
    text: "On The Way",
    time: "3:09 PM",
    isRed: true,
  };

  render(<ProductMiniCard {...testData} />);

  expect(screen.getByText(testData.text)).toHaveStyle({color: "red"});

});
