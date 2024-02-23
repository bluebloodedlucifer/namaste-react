import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Test Cases", () => {

    test("should load contact us component", () => {

        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })
    
    test("should load button inside contact us component", () => {
    
        render(<Contact />);
    
        // Querying
        const button = screen.getByRole("button");
    
        // Assertion
        expect(button).toBeInTheDocument();
    })
})

