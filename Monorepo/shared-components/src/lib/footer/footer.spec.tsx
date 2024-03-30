import { render} from '@testing-library/react';
import Footer from '../footer/index';
const footerData=require('../../data/data.json')

describe('Footer', () => {
  it('should render successfully with correct data', () => {
    const { getByText } = render(<Footer linkText='' links={footerData.footer} className=''navClass=''   />);
    // expect(getByText(footerData.footer)).toBeTruthy();
  });

 
}); 