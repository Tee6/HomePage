import { useNavigate } from "react-router-dom";
import useStore from '../stores/globalStore'
import '../styles/dropdown.css'

function DropDownMenu(){
    const globalStore = useStore()
    const showDropdown = globalStore.showDropdown

    const navigate = useNavigate()
    return (
        <div className="dropdownmenu">
            <button className='category-btn' onClick={() => globalStore.ToggleDropdown()}>
                {showDropdown ? 'Hide menu' : 'Show menu'}
            </button>
            {showDropdown && (
                <div className='dropdown-buttondiv dropdown-animation'>
                    <button onClick={() => navigate("/HomePage/")} className='dropdown-animation dropdown-btn'>Home</button>
                    <button onClick={() => navigate("/HomePage/CV")} className='dropdown-animation dropdown-btn'>CV</button>
                    <button onClick={() => navigate("/HomePage/Projects")} className='dropdown-animation dropdown-btn'>Projects</button>
                    <button onClick={() => navigate("/HomePage/Skills")} className='dropdown-animation dropdown-btn'>Skills</button>
                </div>
            )}
        </div>
    );
}

export default DropDownMenu;