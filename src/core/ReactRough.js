import React from 'react';
import rc from 'roughjs';

class RoughWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.domRef = React.createRef();
    this.state = {
      roughInstance: null,
    };
  }

  componentDidMount() {
    const {type} = this.props;
    this.setState({roughInstance: rc[type](this.domRef.current)});
  }

  render() {
    const {type, children, ...others} = this.props;
    const {roughInstance} = this.state;
    const Component = type;
    const roughCallback =
      type === 'svg' ? node => this.domRef.current.appendChild(node) : () => {};

    return (
      <>
        <Component ref={this.domRef} {...others} />
        {React.Children.map(children, child =>
          React.cloneElement(
            child,
            {
              roughInstance,
              roughCallback,
            },
            null,
          ),
        )}
      </>
    );
  }
}

class RoughComponent extends React.Component {
  componentDidUpdate() {
    const {
      roughInstance,
      roughCallback,
      type,
      roughProps,
      options,
    } = this.props;

    if (!roughInstance) return;
    const node = roughInstance[type](...roughProps, options);
    roughCallback(node);
  }

  render() {
    return null;
  }
}

const Canvas = props => <RoughWrapper {...props} type="canvas" />;

const SVG = props => <RoughWrapper {...props} type="svg" />;

const Line = ({x1, y1, x2, y2, options}) => (
  <RoughComponent roughProps={[x1, y1, x2, y2]} type="line" options={options} />
);

const Rectangle = ({x, y, width, height, ...props}) => (
  <RoughComponent
    roughProps={[x, y, width, height]}
    type="rectangle"
    {...props}
  />
);

const Ellipse = ({x, y, width, height, ...props}) => (
  <RoughComponent
    roughProps={[x, y, width, height]}
    type="ellipse"
    {...props}
  />
);

const Circle = ({x, y, diameter, ...props}) => (
  <RoughComponent roughProps={[x, y, diameter]} type="circle" {...props} />
);

export {Canvas, SVG, Line, Rectangle, Ellipse, Circle};
