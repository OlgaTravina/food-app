import { render, screen, fireEvent } from "@testing-library/react";
import BlogCard from "./BlogCard";

const mockCallback = jest.fn(() => {});

test("fill blogCard", async () => {	

  const testData = {
    title: "title",
    body: "body",
    tags: ["tag1", "tag2"],
    user: {
      firstName: "firstName",
      lastName: "lastName",
      image: "",
    },
    reactions: 5,
    onClick: (e: React.MouseEvent<HTMLDivElement>) => mockCallback(),
  };

  render(<BlogCard {...testData} />);

  expect(
    screen.getByText(testData.title, {
      selector: ".blogCard__header",
    })
  ).toBeInTheDocument();

   expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
     testData.title
   );

   expect(
     screen.getByText(testData.body, {
       selector: "p",
     })
   ).toBeInTheDocument();

   expect(
     screen.getByText(testData.tags.map((tag) => "#" + tag).join(), {
       selector: ".blogCard__tags",
     })
   ).toBeInTheDocument();

   expect(
     screen.getByText(testData.user.firstName + " " + testData.user.lastName, {
       selector: ".blogCard__name",
     })
   ).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("root-blog-card"));

    expect(mockCallback.mock.calls).toHaveLength(1);
});
