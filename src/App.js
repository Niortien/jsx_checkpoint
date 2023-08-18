import logo from './logo.svg';
import './App.css';
//import Img1 from './icon-memory.svg';


function App() {
  return (
    <div className="App">
     <div class="big_container">
  <div className="container">
    <div className="left">
      <div class="result"> Your Result</div>
      <div class="circle">
        <h1>76</h1>
        <h4> of 100</h4>
      </div>
      <div class="great_box"> Great</div>
      <p class="paragraph1"> You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  
  
    <div class="right">
      <h2> Summary</h2>
      <div className="row_box">
        <div className="box one">
          <div class="box_left">
            <div className="image"><img src='./icon-reaction.svg' alt="" /></div>
            <div className="action">Reaction</div>
          </div>
          <div className="box_right">
            <div className="firt_number"> 80  </div>
            <div className="second_number"> / 100</div>
          </div>
        </div>
  
        <div className="box two">
          <div className="box_left">
            <div className="image"><img src='./icon-memory.svg' alt="" /></div>
            <div className="action">Memory</div>
          </div>
          <div className="box_right">
            <div className="firt_number"> 80  </div>
            <div className="second_number"> / 100</div>
          </div>
        </div>
        <div className="box three">
          <div className="box_left">
            <div className="image"><img src='./icon-verbal.svg' alt="" /></div>
            <div className="action">Verbal</div>
          </div>
          <div className="box_right">
            <div className="firt_number"> 80  </div>
            <div className="second_number"> / 100</div>
          </div>
        </div>
        <div className="box four">
          <div className="box_left">
            <div className="image"><img src='./icon-visual.svg' alt="" /></div>
            <div className="action">Visual</div>
          </div>
          <div className="box_right">
            <div className="firt_number"> 80  </div>
            <div className="second_number"> / 100</div>
          </div>
        </div>
      </div>
  
      <div className="foot">Continue</div>
  
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
