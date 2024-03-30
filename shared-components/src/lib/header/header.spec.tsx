import {render} from '@testing-library/react'
import HeaderMenu from '../header/index'
import testingData from '../../data/data.json'
describe('header',()=>{
    it('should render successfully',()=>{
        const {baseElement}=render(<HeaderMenu links={testingData.headerLink} className='' navClass=''/>)
        expect(baseElement).toBeTruthy;
    })
})