const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <div>
            <strong>total of {total} exercises</strong>
        </div>
    );
};

export default Total;
