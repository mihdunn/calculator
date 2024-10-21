import React from 'react';
import{ Link} from 'react-router-dom'

function Navbar() {
    return (
            <nav className="flex justify-between items-center p-4">
                <Link to="/" className='hover:underline focus:text-red-600'>Home</Link>
                <div className="space-x-4">
                    <Link to="/about" className='hover:underline focus:text-red-600'>About</Link>
                    <Link to="/contact" className='hover:underline focus:text-red-600'>Contact</Link>
                    <Link to="/calculator" className='hover:underline focus:text-red-600'>Calculator</Link>
                </div>
            </nav>
            
        
    );
}

export default Navbar;