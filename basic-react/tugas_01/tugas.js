const Operation = () => {
//Function utama
const [count, setCount] = React.useState (0)

//Function untuk penambahan nilai
const incrementCount = () => {
    setCount (count + 1);
    }
    
//Function untuk pengurangan nilai
    const decrementCount = () => {
    setCount (count - 1);
    }
    return (
        <div>
            <h2>{count}</h2>
                <button onClick={incrementCount}>+ 1</button>
                <button onClick={decrementCount}>- 1</button>
        </div>
    )
}

ReactDOM.render(<Operation />, document.getElementById('root'));

