import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'

import Hero from '././home/Hero';
 
/// Test Suite
describe("Hero Component", ()=>{
    test( "renders hero section", ()=>{
        render(<Hero />);
        const heroimg = screen.getByAltText('home-hero');
        expect(heroimg).toBeInTheDocument();
        expect(heroimg).toHaveAttribute('src', './media/homehero.png');
    });
})