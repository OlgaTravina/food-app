import { render, screen, fireEvent } from "@testing-library/react";
import AccordionCard from "./AccordeonCard";

test("open accordion", () => {
  const testData = {
    question: "Вопрос",
    answer: "Ответ",
  };	

  render(<AccordionCard {...testData} />);
  
  expect(screen.getByText(testData.question)).toBeInTheDocument();
  expect(
    screen.getByText(testData.answer, {
      selector: ".accordionCard__text_closed",
    })
  ).toBeInTheDocument();

  fireEvent.click(screen.getByText(testData.question));

  expect(
    screen.getByText(testData.answer, {
      selector: ".accordionCard__text_opened",
    })
  ).toBeInTheDocument();
});
