
const parent = React.createElement('div', { id: 'parent' },
  [
    React.createElement('div', { id: 'child' }, [
      React.createElement('h1', {}, 'Hello World'),
      React.createElement('h2', {}, 'Hello World2'),
    ]),
    React.createElement('div', { id: 'child2' }, [
      React.createElement('h1', {}, 'Hello World'),
      React.createElement('h2', {}, 'Hello World2'),
    ])
  ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);