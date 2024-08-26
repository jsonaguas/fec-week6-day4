import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink 
                to="/" 
                end 
                style={({ isActive }) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? 'red' : 'black'
                })}
            >
                Home
            </NavLink>
            <NavLink 
                to="/characters" 
                style={({ isActive }) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? 'red' : 'black'
                })}
            >
                Browse Characters
            </NavLink>
            <NavLink 
                to="/comics" 
                style={({ isActive }) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? 'red' : 'black'
                })}
            >
                Comics
            </NavLink>
        </nav>
    );
};

export default Navbar;