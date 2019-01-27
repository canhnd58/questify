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
      type === 'svg'
        ? (node, oldNode) => {
            if (!oldNode) this.domRef.current.appendChild(node);
            else this.domRef.current.replaceChild(node, oldNode);
          }
        : () => {};
    const releaseDom =
      type === 'svg'
        ? node => this.domRef.current && this.domRef.current.removeChild(node)
        : () => {};

    return (
      <Component ref={this.domRef} {...others}>
        {React.Children.map(
          children,
          child =>
            child &&
            React.cloneElement(child, {
              roughInstance,
              roughCallback,
              releaseDom,
            }),
        )}
      </Component>
    );
  }
}

class RoughComponent extends React.Component {
  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentWillUnmount() {
    this.props.releaseDom(this.ref);
  }

  render() {
    const {
      roughInstance,
      roughCallback,
      type,
      roughProps,
      options,
    } = this.props;

    if (!roughInstance) return null;
    const node = roughInstance[type](...roughProps, options);
    roughCallback(node, this.ref);
    this.ref = node;

    return null;
  }
}

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.domRef = React.createRef();
  }

  componentDidUpdate() {
    const {roughInstance, roughCallback} = this.props;
    if (!roughInstance) return;
    roughCallback(this.domRef.current);
  }

  componentWillUnmount() {
    this.props.releaseDom(this.ref);
  }

  getBBox() {
    return this.domRef.current.getBBox();
  }

  render() {
    const {
      roughCallback,
      roughInstance,
      releaseDom,
      children,
      ...props
    } = this.props;

    return (
      <text ref={this.domRef} {...props}>
        {children}
      </text>
    );
  }
}

const Canvas = props => <RoughWrapper {...props} type="canvas" />;

const SVG = props => <RoughWrapper {...props} type="svg" />;

const Line = ({x1, y1, x2, y2, ...props}) => (
  <RoughComponent roughProps={[x1, y1, x2, y2]} type="line" {...props} />
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

const LinearPath = ({points, ...props}) => (
  <RoughComponent roughProps={[points]} type="linearPath" {...props} />
);

const Polygon = ({vertices, ...props}) => (
  <RoughComponent roughProps={[vertices]} type="polygon" {...props} />
);

const Arc = ({x, y, width, height, start, stop, closed, ...props}) => (
  <RoughComponent
    roughProps={[x, y, width, height, start, stop, closed]}
    type="arc"
    {...props}
  />
);

const Curve = ({points, ...props}) => (
  <RoughComponent roughProps={[points]} type="curve" {...props} />
);

const Path = ({d, ...props}) => (
  <RoughComponent roughProps={[d]} type="path" {...props} />
);

export {
  Canvas,
  SVG,
  Text,
  Line,
  Rectangle,
  Ellipse,
  Circle,
  LinearPath,
  Polygon,
  Arc,
  Curve,
  Path,
};
