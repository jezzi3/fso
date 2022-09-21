import React, { useState } from 'react';

const Header = ({ text }) => <h1>{text}</h1>;

const Anecdotes = ({ quote }) => <div>{quote}</div>;

const MostVoted = ({ anecdotes, votes }) => {
    const mostVotedCount = Math.max(...votes);
    const mostVotedQuote = anecdotes[votes.indexOf(mostVotedCount)];
    console.log(mostVotedCount);
    if (mostVotedCount < 1) {
        return <div></div>;
    }

    return (
        <div>
            <Header text="Anecdote with most votes" />
            <Anecdotes quote={mostVotedQuote} />
            <p>has {mostVotedCount} votes</p>
        </div>
    );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    ];

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(Array(7).fill(0));

    const randomAnecdotes = () => {
        let newNum = selected;
        // prevents same anecdotes being shown two times in a row
        do {
            newNum = Math.floor(Math.random() * anecdotes.length);
        } while (newNum === selected);
        setSelected(newNum);
    };

    const addVote = () => {
        const newVotes = [...votes];
        newVotes[selected] += 1;
        setVotes(newVotes);
    };

    return (
        <div>
            <Header text="Anecdote of the day" />
            <Anecdotes quote={anecdotes[selected]} />
            <Button onClick={addVote} text="vote" />
            <Button onClick={randomAnecdotes} text="next anecdote" />
            <MostVoted anecdotes={anecdotes} votes={votes} />
        </div>
    );
};

export default App;
