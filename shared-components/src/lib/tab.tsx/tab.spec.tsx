import {render,fireEvent} from '@testing-library/react'
import TabComponent from './index'
import testingData from '../../data/data.json'
describe('tab',()=>{
    const tab:any=testingData.tabData
    it('should render successfully',()=>{
        const {baseElement,getByText}=render(<TabComponent tabs={tab} ClassName=''/>)
        expect(baseElement).toBeTruthy();
   

   
    })
    it('should change the selected tab on click', () => {
        const { getByText } = render(<TabComponent tabs={tab} ClassName='' />);
        const secondTabButton = getByText(tab[1].tabTitle); 
        fireEvent.click(secondTabButton); 
        
      });

   
})
