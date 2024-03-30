import {render} from '@testing-library/react'
import SelectWithSearch from './index'
describe('searchBar',()=>{
    it('should render successfully',()=>{
        const {baseElement}=render(<SelectWithSearch/>)
        expect(baseElement).toBeTruthy;
    })
})