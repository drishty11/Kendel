import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FcCheckmark, BsX } from 'react-icons/all'
import './ModalToggle.css';

const ToggleSwitch = ({id, name, checked, onChange, optionLabels, small, disabled}) => {
  function handleKeyPress(e) {
      if (e.keyCode !== 32) return;
  
      e.preventDefault();
      onChange(!checked);
    }
  
    const [selected, setSelected] = useState(false);
  
    return (
      <div className={"toggle-switch" + (small ? " small-switch" : "")}>
        <input type="checkbox" name={name} className="toggle-switch-checkbox" id={id} checked={checked} onChange={(e) => onChange(e.target.checked)} disabled={disabled} />
        {id ? (
          <label className="toggle-switch-label" onClick={() => setSelected(!selected)} tabIndex={disabled ? -1 : 1} onKeyDown={(e) => handleKeyPress(e)} htmlFor={id}>
              <span className={disabled ? "toggle-switch-inner1 toggle-switch-disabled" : "toggle-switch-inner1" }
                data-yes={optionLabels[0]}
                data-no={optionLabels[1]}
                tabIndex={-1} />
              <span className={`${selected ? " " : "toggle-switch-disabled"} toggle-switch-switch1`} tabIndex={-1}>
               {selected ? <FcCheckmark style={{ color: '#51CC25'}} /> : <BsX style={{ color: '#011B53'}} /> }</span>
          </label>
        ) : null}
      </div>
    );
}  
export default function ModalToggle({id, toggle, setToggle}) {

  // let [toggle, setToggle] = useState(false);
  const Toggling = (checked) => {
    // console.log(toggle);
    setToggle(checked);
  };
    return (
        <div>
        <div>
          <ToggleSwitch id={id} checked={toggle} onChange={Toggling} />
        </div>
      </div>
    )
}


ToggleSwitch.defaultProps = {
    optionLabels: ["present", "absent"]
  };
  
  ToggleSwitch.propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    optionLabels: PropTypes.array,
    small: PropTypes.bool,
    selected: PropTypes.bool.isRequired,
    setSelected: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};