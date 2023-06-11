import React from 'react'
import Login from "../../src/screens/Auth/Login";
import { shallow , ShallowWrapper } from "enzyme";

describe("testing the tests",()=>{
    const LoginWrapper: ShallowWrapper = shallow(<Login/>)

    test("Should render login block",()=>{
        expect(LoginWrapper).toBeTruthy()
    })

})