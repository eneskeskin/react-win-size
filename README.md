### Features

- Contains a HOC (Higher Order Component) and a custom hook to inject browser window size into components.
- Includes 'debounce' and 'throttle' options for an optimized usage.
- Includes optional 'offset' params for modified usage.

### Usage

`$ npm install react-win-size`

```javascript
import { useWinSize, withWinSize } from "react-win-size";
```

##### Basic Usage (HOC: withWinSize)

```javascript
import React, { Component } from "react";
import { withWinSize } from "react-win-size";

class TestComponent extends Component {
  render() {
    return (
      <div>
        <b> Width: </b> {this.props.winWidth}
        <b> Height: </b> {this.props.winHeight}
      </div>
    );
  }
}
export default withWinSize(TestComponent);
```

##### Basic Usage (Hook: useWinSize)

```javascript
import React from "react";
import { useWinSize } from "react-win-size";

const TestComponent = () => {
  const [width, height] = useWinSize();

  return (
    <div>
      <b> Width:</b> {width}
      <b> Height:</b> {height}
    </div>
  );
};

export default TestComponent;
```

##### HOC Parameterized Usages

```javascript
export default withWinSize(YourComponent, { delay: 500 });

export default withWinSize(YourComponent, {
  delay: 500,
  updateMode: "debounce",
});

export default withWinSize(YourComponent, {
  widthOffset: -150,
  heightOffset: -200,
});
```

##### Hook Parameterized Usages

```javascript
const [width, height] = useWinSize({ delay: 500 });

const [width, height] = useWinSize({ delay: 500, updateMode: "debounce" });

const [width, height] = useWinSize({ widthOffset: -150, heightOffset: -200 });
```

### Parameters

| Name           | Description                                                  | Default    |
| -------------- | ------------------------------------------------------------ | ---------- |
| `updateMode`   | Mode of update function. **'throttle'** or **'debounce'**    | 'throttle' |
| `delay`        | Delay of update function. Set **0** to disable optimization. | 500        |
| `widthOffset`  | Custom offset value to window width.                         | 0          |
| `heightOffset` | Custom offset value to window height.                        | 0          |
