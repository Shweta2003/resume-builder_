function Toggle() {
  const [on, setOn] = useState(false);

  function handleClick() {
    setOn(!on);
  }

  return (
    <button onClick={handleClick}>
      {on ? <span>ON</span> : <span>OFF</span>}
    </button>
  );
}
