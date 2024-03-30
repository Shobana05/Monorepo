import { render} from '@testing-library/react';
import BannerFooter from '../bannerFooter/index';
import testData from '../../data/data.json'
describe('Banner', () => {
    
  it('should render successfully', () => {
    const { baseElement } = render(<BannerFooter text={testData.bannerFooter}/>);
    expect(baseElement).toBeTruthy();
  });

 
}); 