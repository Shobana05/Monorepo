import { getByText, render} from '@testing-library/react';
import ButtonComponent from '../button/index';
import data from '../../data/data.json';
describe('ButtonComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonComponent/>);
    expect(baseElement).toBeTruthy();
  });
  it('should render with the correct value', () => {
    data.CarouselData.forEach(info => {
      const { queryAllByText } = render(<ButtonComponent value={info.buttonValue} />);
      const buttons=queryAllByText(info.buttonValue)
      expect(buttons.length).toBeGreaterThan(0)
    });
  });
});
