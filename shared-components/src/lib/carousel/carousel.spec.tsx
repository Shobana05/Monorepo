import {render} from '@testing-library/react'
import NextJsCarousel from '../carousel/index'
import testingData from '../../data/data.json'

describe('carousel',()=>{
    it('should render successfully', () => {
        const { baseElement } = render(<NextJsCarousel cardData={testingData.CarouselData} legendClass=''/>);
        expect(baseElement).toBeTruthy();
      });
})