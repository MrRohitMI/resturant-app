import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("Should render Login button in header component", () => {
    render(<BrowserRouter><Provider store={appStore}><Header /></Provider></BrowserRouter>);

    const loginBtn = screen.getByRole('button', { name: 'Login' })

    expect(loginBtn).toBeInTheDocument();
})

it("Should render cart items 0 in header component", () => {
    render(<BrowserRouter><Provider store={appStore}><Header /></Provider></BrowserRouter>);

    const cartItem = screen.getByText('Cart(0 Items)')

    // regex will also work for not matching exact string
    // const cartItem = screen.getByText(/Cart/);

    expect(cartItem).toBeInTheDocument();
})

it("Should be able to click Login button in header component", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>);

    const loginBtn = screen.getByRole('button', { name: 'Login' })

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole('button',{name: 'Logout'})

    expect(logoutBtn).toBeInTheDocument();
})