import { useState } from 'react';

function Counter() {

const [count, setCount] = useState(0);

return ( 
<div>

<button onClick={() => setCount(count + 1)}>Increment</button>

<h1>count is {count}</h1>

<button onClick={() => setTimeout(() => setCount(count + 1), 2000)}>Increment after delay</button> 

<button onClick={() => {setCount(count + 1);
setCount(count + 1);
}}>Attempt increment twice</button>

<button onClick={() => {

setCount(prev => prev + 1);
setCount(prev => prev + 1);

}}>Correct increment twice</button>

</div>
);
}
export default Counter;