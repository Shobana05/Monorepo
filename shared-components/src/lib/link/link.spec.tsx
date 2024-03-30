import {render} from '@testing-library/react'
import  LinkComponent from './link'
import testingData from '../../data/data.json'
describe('link',()=>{
    it('should render successfully',()=>{
        const {baseElement}=render(<LinkComponent links={testingData.headerLink} className='' navClass=''/>)
        expect(baseElement).toBeTruthy;
    })
})