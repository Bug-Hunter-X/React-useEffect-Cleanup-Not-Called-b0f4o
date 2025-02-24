```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log('Mounted!');
    return () => {
      console.log('Unmounted!');
    };
  }, []);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      )}
    </div>
  );
}
```