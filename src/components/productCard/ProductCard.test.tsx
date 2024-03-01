import { render, screen} from "@testing-library/react";
import ProductCard from "./ProductCard";

test("Visible title", () => {
  const testData = {
    imgUrl: "",
    tag: "tag1",
    title: "title",
    time: "10 min",
    rating: "5",
  };

  render(<ProductCard {...testData} />);

  expect(
    screen.getByText(testData.title, {
      selector: ".productCard__title",
    })
  ).toBeInTheDocument();

});
