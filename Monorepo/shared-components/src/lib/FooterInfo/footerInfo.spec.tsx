import { render } from '@testing-library/react';
import FooterInfo from '../FooterInfo/index';
import testData from '../../data/data.json';

describe('FooterInfo', () => {
  it('should render successfully with correct data', () => {
    const { getByText } = render(<FooterInfo data={testData.footerInfo} />);
    
    testData.footerInfo.forEach(info => {
      expect(getByText(info.heading).textContent).toBeTruthy;
      info.links.forEach(link => {
        expect(getByText(link).textContent).toBeTruthy;
      });
    });
  });
});
