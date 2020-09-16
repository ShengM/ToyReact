import { createElement, render, Component } from './toy-react';

class MyComponent extends Component {
  render() {
    return <div>
      <h1>my component</h1>
      {this.children}
    </div>;
  }
}

render(<MyComponent id="myComponent" class="custom">
  <div>hahaha</div>
  <div></div>
  <div></div>
</MyComponent>, document.body);