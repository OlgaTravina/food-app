import { render} from "@testing-library/react";
import PurchaseCard from "./PurchaseCard";

test("Snapshot PurchaseCard", () => {
  const testData = {
    imgUrl: "/images/Control Purchase/icon (1).svg",
    title: "Expense",
    text: "Increased By 10%",
    price: "$409.00",
    urlPurchas: "/images/Control Purchase/divider (1).svg",
  };

  const {container} = render(<PurchaseCard {...testData} />);

  expect(container).toMatchSnapshot();
});

