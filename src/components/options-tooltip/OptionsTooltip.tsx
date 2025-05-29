import { useState, useEffect } from "react";
import { OptionsTooltipProps } from "./OptionsTooltip.interface";
import "./OptionsTooltip.scss";

const OptionsTooltip: React.FC<OptionsTooltipProps> = ({ tooltipItem }) => {
  
  return (
    <div id="options-tooltip" className="options-tooltip">
        {tooltipItem.items?.map((item, index) => (
        <div key={index} className="options-tooltip__element" onClick={item.onClick}>
        <div className="options-tooltip__element__icon">
            {item.icon}
         </div>
         <div className="options-tooltip__element__label">
            {item.name}
        </div>
        </div>
        ))}
    </div>
    
  );
};

export default OptionsTooltip;