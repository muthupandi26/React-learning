import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../components/mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard data={MOCK_DATA} />);

  const name = screen.getByText("Astoria Veg");
  expect(name).toBeInTheDocument();
});
