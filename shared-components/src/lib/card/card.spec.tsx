import {render} from '@testing-library/react'
import CardComponent from '../card/index'
describe('CardComponent',()=>{
    it('should render successfully', () => {
        const { baseElement } = render(<CardComponent img=''alt=''className='' content=''buttonValue=''  />);
        expect(baseElement).toBeTruthy();
      });
})