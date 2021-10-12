import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', ()=> {

  beforeEach(()=>{
    render(<App />);
  })
  // recent versions dont require cleanup after each test 

  test('doc should contain headers', () => {
    const Header = screen.getAllByRole('heading')[0];
    expect(Header).toBeInTheDocument();
  }); 

  test('should contain paragraph with count', ()=> {
    render(<App />);
    const p = screen.getByText('likeCount')
    console.log(p)
    expect(p).toBeInTheDocument();
  })
})