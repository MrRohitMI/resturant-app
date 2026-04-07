import { act, fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import mockData from "../mock/mockResListData.json"
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  })
);
it('Should search res list with burger text', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId('resCard');

  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const inputValue = screen.getByTestId("search-input")

  fireEvent.change(inputValue, { target: { value: "burger" } })

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId('resCard');

  expect(cardsAfterSearch.length).toBe(1);

})

it('Should be return all top rated restaurant', async () => {
  await (act(async () => {
    render(<BrowserRouter><Body /></BrowserRouter>)

  }))
  const cardsBeforeTopRated = screen.getAllByTestId("resCard");

    expect(cardsBeforeTopRated.length).toBe(9);

    const topRatedBtn = screen.getByRole("button", {name : "Top Rated Restaurant"});

    fireEvent.click(topRatedBtn);

    const cardsAfterTopRated = screen.getAllByTestId("resCard");

    expect(cardsAfterTopRated.length).toBe(3);
})