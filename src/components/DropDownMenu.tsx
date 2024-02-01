import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function DropDownMenu(){
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="dropdownmenu">
            <button className='category-btn' onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? 'Hide menu' : 'Show menu'}
            </button>
            {showMenu && (
                <div className='dropdown-buttondiv dropdown-animation'>
                    <button onClick={() => navigate("/")} className='dropdown-animation dropdown-btn'>Home</button>
                    <button onClick={() => navigate("/CV")} className='dropdown-animation dropdown-btn'>CV</button>
                    <button onClick={() => navigate("/Projects")} className='dropdown-animation dropdown-btn'>Projects</button>
                    <button onClick={() => navigate("/Skills")} className='dropdown-animation dropdown-btn'>Skills</button>
                </div>
            )}
        </div>
    );
}

export default DropDownMenu;