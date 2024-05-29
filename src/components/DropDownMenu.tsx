import { useNavigate } from "react-router-dom";
import useStore from '../stores/globalStore';
import '../styles/dropdown.css';

function DropDownMenu() {
  const { showDropdown, ToggleDropdown } = useStore();
  const navigate = useNavigate();

  const menuItems = [
    { path: "/HomePage/", label: "Home" },
    { path: "/HomePage/CV", label: "CV" },
    { path: "/HomePage/Projects", label: "Projects" },
    { path: "/HomePage/Skills", label: "Skills" },
  ];

  return (
    <div className="dropdownmenu">
      <button className='category-btn' onClick={ToggleDropdown}>
        {showDropdown ? 'Hide menu' : 'Show menu'}
      </button>
      {showDropdown && (
        <div className='dropdown-buttondiv dropdown-animation'>
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className='dropdown-animation dropdown-btn'
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
