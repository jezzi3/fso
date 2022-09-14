import { useState } from 'react';

const Header = ({ text }) => <h1>{text}</h1>;

const StatisticLine = ({ text, value }) => {
    if (text == 'positive')
        return (
            <tr>
                <td>{text}</td>
                <td>{value}%</td>
            </tr>
        );

    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
};

const Statistics = (props) => {
    const { good, neutral, bad } = props.counter;
    const total = good + neutral + bad;
    const average = (good * 1 + bad * -1) / total;
    const positive = (good / total) * 100;

    if (total < 1) {
        return <div>No feedback given</div>;
    }

    return (
        <div>
            <table>
                <tbody>
                    <StatisticLine text="good" value={good} />
                    <StatisticLine text="neutral" value={neutral} />
                    <StatisticLine text="bad" value={bad} />
                    <StatisticLine text="all" value={total} />
                    <StatisticLine text="average" value={average.toFixed(2)} />
                    <StatisticLine
                        text="positive"
                        value={positive.toFixed(2)}
                    />
                </tbody>
            </table>
        </div>
    );
};

const Display = ({ counter, text }) => (
    <div>
        {text} {counter}
    </div>
);

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const addGood = () => setGood(good + 1);
    const addNeutral = () => setNeutral(neutral + 1);
    const addBad = () => setBad(bad + 1);

    return (
        <div>
            <Header text="give feedback" />
            <Button onClick={addGood} text="good" />
            <Button onClick={addNeutral} text="neutral" />
            <Button onClick={addBad} text="bad" />
            <Header text="Statistics" />
            <Statistics counter={{ good, neutral, bad }} />
        </div>
    );
};

export default App;
