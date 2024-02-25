import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import Cart from "../Cart"
import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/ResMenuMock.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

it("should load RestaurantMenu Component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
    ))

    const drinksAccordianHeader = screen.getByText("Drinks (9)");
    fireEvent.click(drinksAccordianHeader);

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(9)

    const addBtns = screen.getAllByRole("button", {name: "Add +"})

    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument()
    fireEvent.click(addBtns[0])
    
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument()

    expect(screen.getAllByTestId("foodItems").length).toBe(10)
    
    fireEvent.click(screen.getByText("Clear"))
    
    expect(screen.getAllByTestId("foodItems").length).toBe(9)
    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument()
    
})