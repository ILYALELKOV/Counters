import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: "Ненужная вещь"},
        {id: 1, value: 0, name: "Ложка"},
        {id: 2, value: 0, name: "Вилка"},
        {id: 3, value: 0, name: "Тарелка"},
        {id: 4, value: 0, name: "Набор минималиста"},
    ]

    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        setCounters(counters.filter(c => c.id !== id))
    }

    const handleReset = () => {
        setCounters(initialState)
    }

    const handleIncrement = (id) => {
        setCounters(counters.map(elem => elem.id === id ? {...elem, value: elem.value + 1} : elem))
    }

    const handleDecrement = (id) => {
        setCounters(counters.map(elem => elem.id === id ? {...elem, value: elem.value - 1} : elem))
    }

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...count}
                />
            ))}
            <button
                className="btn btn-primary m-2 btn-sm"
                onClick={handleReset}
            >
                Сброс
            </button>
        </>
    )
}

export default CountersList


