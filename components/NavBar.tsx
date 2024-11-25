import React from 'react';
import { SubmitButton } from './Submit';

export const NavBar = () => {
    return (
        <nav className="bg-[#1a1b1e] px-6 py-3 flex justify-between items-center">
            <div>
                <span className="font-bold text-lg text-white">Pipeline Builder</span>
            </div>
            <SubmitButton />
        </nav>
    );
};
