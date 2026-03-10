import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe('Contact Page Test Cases', () => {

    test('Contact is rendering or not', () => {
        render(<Contact />)

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    })

    test('Button is available in contact page', () => {
        render(<Contact />)

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    })

    test('Input Name is available or nor', () => {
        render(<Contact />)

        const inputName = screen.getByPlaceholderText("Enter Name");

        expect(inputName).toBeInTheDocument();
    })

    test('Should load 2 input in contact page', () => {
        render(<Contact />)

        // Querying
        const inputBoxes = screen.getAllByRole('textbox');
        // Assert
        expect(inputBoxes.length).toBe(2);
    })
})