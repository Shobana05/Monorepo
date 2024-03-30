import {render} from '@testing-library/react'
import ImageComponent from './index'
describe('image',()=>{
    it('should render successfully',()=>{
        const {baseElement}=render(<ImageComponent  img='' alt='' className=''/>)
        expect(baseElement).toBeTruthy;
    })
})