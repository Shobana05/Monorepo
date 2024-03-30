import { render} from '@testing-library/react';
import Banner from '../banner/index';
describe('Banner', () => {
    
  it('should render successfully', () => {
    const { baseElement } = render(<Banner headingText=''alt='' img='' className=''/>);
    expect(baseElement).toBeTruthy();
  });

 
}); 