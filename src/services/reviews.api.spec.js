import ReviewsAPI from './reviews.api'
import httpClient from './httpClient';

jest.mock('./httpClient', () => ({
  get: jest.fn(),
}))

describe("reviews api",() => {  
  it("should call GET /reviews when call getReviews", () => {
    ReviewsAPI.getReviews();
    
    expect(httpClient.get).toHaveBeenCalledWith('/reviews')
  })
})