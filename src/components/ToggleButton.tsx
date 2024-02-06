function ToggleButton({isDescending, handleClick}: {isDescending: boolean, handleClick: () => void}) {
    const classProps = isDescending ? "h-fit px-3 py-1.5 bg-slate-300 border border-black" : "h-fit px-3 py-1.5 bg-slate-300";
    const buttonValue = isDescending ? 'Descending' : 'Ascending';

    return (
        <button className={classProps} onClick={handleClick}>Order: {buttonValue}</button>
    );
}

export default ToggleButton;