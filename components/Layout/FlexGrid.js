export const FlexGrid = ({ size, children }) => {
    if (size === 'half') {
        return <div className="flex-grid-half">{children}</div>;
    } else {
        return <div className="flex-grid">{children}</div>;
    }
};

export const Col = ({ children }) => {
    return <div className="col">{children}</div>;
};
