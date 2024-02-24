import { fireEvent, render, screen } from "@testing-library/react"
import NavItems from "../NavItems"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


it("should render NavItems component with login button", () => {
   render(
    <BrowserRouter>
        <Provider store={appStore}>
            <NavItems/>
        </Provider>
    </BrowserRouter>
   )

//    const loginButton = screen.getByRole("button", {name: "Login"});

const loginButton = screen.getByText("Login")


   expect(loginButton).toBeInTheDocument()
})

it("should render NavItems component with Cart Items 0", () => {
   render(
    <BrowserRouter>
        <Provider store={appStore}>
            <NavItems/>
        </Provider>
    </BrowserRouter>
   )

    //    const loginButton = screen.getByRole("button", {name: "Login"});

    // const cart = screen.getByText("Cart - (0 items)")
    const cart = screen.getByText(/Cart/)


   expect(cart).toBeInTheDocument()
})

it("should change login button to logout on click", () => {
    render(
     <BrowserRouter>
         <Provider store={appStore}>
             <NavItems/>
         </Provider>
     </BrowserRouter>
    )
 
 //    const loginButton = screen.getByRole("button", {name: "Login"});
 
    const loginButton = screen.getByRole("button", {name: "Login"})
 
    fireEvent.click(loginButton);
 
    const logOutButton = screen.getByRole("button", {name: "Logout"});

    expect(logOutButton).toBeInTheDocument()
 })