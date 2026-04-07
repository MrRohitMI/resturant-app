import { render, screen } from "@testing-library/react"
import RestaurantCard, { WithLabelcard } from "../ResturantCard"
// import MOCK_DATA from "../mock/resCardMock"
import mockData from "../mock/resCardMock"

it('Should mock the restaurant card',()=>{
    render(<RestaurantCard resObj={mockData.resObj}/>)

    const name = screen.getByText("Pizza Paradise");

    expect(name).toBeInTheDocument()
})

it('Should mock hoc restaurant card',() =>{
    const ResturantPromotedCard = WithLabelcard(RestaurantCard);

    render(<ResturantPromotedCard resObj={mockData.resObj}/>)

    const promotedLabel = screen.getByText("Promoted");

    expect(promotedLabel).toBeInTheDocument();
})