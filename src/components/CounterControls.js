
export const CounterControls = ({ onIncrement, onDecrement }) => {
    return (
        <>
            <button
                type='button'
                onClick={onIncrement}>
            Increment
            </button>
            <button
                type='button'
                onClick={onDecrement}>
            Decrement
            </button>
        </>
    );
}