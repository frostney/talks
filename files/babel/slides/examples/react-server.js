var React = require('react');

class MyReactComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

var renderedComponent = React.renderToString(<MyReactComponent />);

var html = '';
html += '<!DOCTYPE html>';
html += '<html>';
html += '<head>';
html += '	<title>Babel + React on the server</title>';
html += '</head>';
html += '<body>';
html += '	<div id="container">' + renderedComponent + '</div>';
html += '</body>';
html += '</html>';


var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(html);
  response.end();
}).listen(3333);
