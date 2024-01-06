// integration testing it will come here!

import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../components/mocks/mockRestaurantListData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Body Component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Nandhana" } });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("restCard");
  console.log(cards);

  expect(cards.length).toBe(1);
});
