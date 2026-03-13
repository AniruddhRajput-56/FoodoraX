import { render , screen} from "@testing-library/react";
import Contactus from "../Contactus.js";
import "@testing-library/jest-dom";

test("Should load header component" ,()=> { 

    render(<Contactus/>);

const heading = screen.getByRole("heading"); //It finds elements using their ARIA role (semantic meaning). In this case, it looks for an element that is designated as a heading (like <h1>, <h2>, etc.) and retrieves it from the rendered output.

expect(heading).toBeInTheDocument();

});

test("Should load input component" ,()=> {

    render(<Contactus/>);

    const input = screen.getByPlaceholderText("Enter your name");
    // const inputbox= screen.getAllByRole("textbox"); //It finds all input elements that have the ARIA role of "textbox" (which typically includes input fields and textareas) and retrieves them as an array from the rendered output.
    expect(input).toBeInTheDocument();
});
