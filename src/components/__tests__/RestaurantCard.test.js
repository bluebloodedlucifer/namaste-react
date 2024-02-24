import { render, screen } from "@testing-library/react"
import RestaurantCard ,{withDiscountedLabel} from "../RestaurantCard"
import MOCK_DATA from "../mocks/ResCardMock.json"
import "@testing-library/jest-dom"


it("should render the RestaurantCard Component with Props Data", () => {
    render(<RestaurantCard resData = {MOCK_DATA}/>)

    const resName = screen.getByText("Chinese Wok")

    expect(resName).toBeInTheDocument();

})

it("should render the RestaurantCard Component with Props Data and discounted label", () => {

    const RestaurantCardWithDiscountedLabel = withDiscountedLabel(RestaurantCard);

    render(<RestaurantCardWithDiscountedLabel resData = {MOCK_DATA}/>)

    const resName = screen.getByText("Discounted")

    expect(resName).toBeInTheDocument();

})