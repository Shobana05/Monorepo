import {render} from '@testing-library/react'
import SubHeaderMenu from './index'
import testingData from '../../data/data.json'
describe('subHeader',()=>{
    it('should render successfully',()=>{
        const {baseElement}=render(<SubHeaderMenu links={testingData.subHeader} className='' navClass=''/>)
        expect(baseElement).toBeTruthy;
    })
})