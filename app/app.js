
var React=require('react');
var React_DOM=require('react-dom');

import Search from './components/search.component';
import Details from './components/details.component';
import Player from './components/player.component';
import Progress from './components/progress.component';
import Footer from './components/footer.component';



var App = React.createClass({
  render: function() {
    return(
        <div>
        <Search />
        <Details title={'Track Title'}/>
        <Player/>
        <Progress
          position={'0.3'}
          elapsed={'00:00'}
          total={'0:40'}/>
        <Footer/>
        </div>
    );
  }
});
React_DOM.render(<App/>,document.getElementById('content'));
