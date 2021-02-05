import React, { Component } from 'react';

export class HookClock extends Component {
function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return <div>{date.toString()}</div>;
}export default HookClock;