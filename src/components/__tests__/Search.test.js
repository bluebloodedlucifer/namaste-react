import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantContainer from "../RestaurantContainer"
import MOCK_DATA from "../mocks/ResContainerMock.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render the RestaurantContainer Component with search input pizza", async () => {

    await act(async () => render(
    <BrowserRouter>
        <RestaurantContainer />
    </BrowserRouter>
    ))
    const resCardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(resCardsBeforeSearch.length).toBe(9);

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, {target: {value: "pizza"}});

    fireEvent.click(searchBtn);

    const resCardsAfterSearch = screen.getAllByTestId("resCard");

    expect(resCardsAfterSearch.length).toBe(1);
})