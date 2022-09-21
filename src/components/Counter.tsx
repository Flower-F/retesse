import type { FC } from 'react'

interface CounterProps {
  initial: number
}

const Counter: FC<CounterProps> = ({ initial }) => {
  const [count, { inc, dec }] = useCounter(initial)

  return (
    <div>
      {count}
      <button px-1 onClick={() => inc()}>
        +
      </button>
      <button px-1 onClick={() => dec()}>
        -
      </button>
    </div>
  )
}

export default Counter
