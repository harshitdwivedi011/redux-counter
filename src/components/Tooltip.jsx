import PropTypes from 'prop-types';

const Tooltip = ({ text, children }) => {
    return (
        <div className="tooltip-container">
            <div className="tooltip">
                {children}
                <span className="tooltiptext">{text}</span>
            </div>
        </div>
    );
};

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

export default Tooltip;
