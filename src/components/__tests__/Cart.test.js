import { act, fireEvent, render, screen } from "@testing-library/react"
import ResturantCategory from "../ResturantCategory"
import MockData from "../mock/mockMenuList.json"
import { BrowserRouter } from "react-router-dom";
import ResturantInfo from "../ResturantInfo";
import Header from "../Header";
import Cart from "../Cart";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MockData),
    })
);
it('should components in cart', async () => {
    await (act(async () => {
        render(<BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <ResturantInfo />
                <Cart/>
            </Provider>
        </BrowserRouter>)
    }))
    const accordionHeader = screen.getByText("Main Course(2)");

    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId('allFoodItems').length).toBe(2);

    expect(screen.getByText("Cart(0 Items)")).toBeInTheDocument()

    const addToCart = screen.getAllByRole("button", { name: 'Add +' });

    fireEvent.click(addToCart[0]);

    expect(screen.getByText("Cart(1 Items)")).toBeInTheDocument()
    fireEvent.click(addToCart[0]);
    expect(screen.getByText("Cart(2 Items)")).toBeInTheDocument()

    expect(screen.getAllByTestId('allFoodItems').length).toBe(4);

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
    expect(screen.getAllByTestId('allFoodItems').length).toBe(2);
})