import React from 'react';
import {SVG, Rectangle} from './ReactRough';

function roughify(Component) {
  return class extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        width: 0,
        height: 0,
      };
      this.updateSize = this.updateSize.bind(this);
    }

    updateSize() {
      if (!this.ref) return;
      this.setState({
        width: this.ref.clientWidth,
        height: this.ref.clientHeight,
      });
    }

    componentDidMount() {
      this.updateSize();
      window.addEventListener('resize', this.updateSize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateSize);
    }

    render() {
      const {width, height} = this.state;

      return (
        <div>
          <SVG
            width={width}
            height={height}
            style={{
              overflow: 'visible',
              position: 'absolute',
            }}>
            <Rectangle
              x={0}
              y={0}
              width={width}
              height={height}
            />
          </SVG>
          <Component ref={e => {this.ref = e}} {...this.props}/>
        </div>
      );
    }
  }
}

export default roughify;
