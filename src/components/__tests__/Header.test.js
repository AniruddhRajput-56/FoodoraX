import { render, screen } from "@testing-library/react";
import Header from "../Header.js";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js";


const renderHeader = () => {
  render(
    <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
    </Provider>
  );
};
it ("Header Component",()=>{
    render(
        <Provider store={appStore}>
        <BrowserRouter>
        <Header/>
        </BrowserRouter>
        </Provider>
    ); // inside render we have to wrap the component with BrowserRouter and Provider because Header component is using Link and useSelector hooks which are provided by react-router-dom and react-redux respectively. So we need to wrap our component with these providers to make sure that the tests run without any errors.

    const button = screen.getByRole("button" , {name :/Login/i});
    expect(button).toBeInTheDocument();
});
// test = it is used to define a test case.


describe("Header Component", () => { // describe is used to group related tests together. It helps in organizing the tests and making them more readable. 

     test("renders navigation links", () => {
    renderHeader();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("shows cart items count", () => {
    renderHeader();

    expect(screen.getByText(/Cart - \(0 items\)/)).toBeInTheDocument();
  });

});
 