import React, { Component } from 'react';
import './App.css';

class Piano extends Component {
  constructor (props) {
    super(props);
      this.state = {
        melody: '',
        creation: ''
      };
    this.handleClick = this.handleClick.bind(this);
    this.clearLog = this.clearLog.bind(this);
    this.pressPlay = this.pressPlay.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  pressPlay(strToPlay, prev) {
    //strToPlay = strToPlay.replace(/[^A-Ga-g]/g,'');
    console.log(strToPlay);
    let notes = document.getElementsByClassName('keyNames');
    for(let i = 0; i < notes.length; i++) {
      if (prev.toUpperCase() === notes[i].textContent) {
        notes[i].parentNode.classList.remove("press"); 
        break;
      }
    }

    if (strToPlay.length === 0) return;

    for(let i = 0; i < notes.length; i++) {
      if (strToPlay[0].toUpperCase() === notes[i].textContent) {
        notes[i].parentNode.classList.add("press");    
        break;
      }
    }

    let p = strToPlay[0];
    let newPlayString = strToPlay.substr(1);

    setTimeout(()=> this.pressPlay(newPlayString, p), 1000);
  }

  handleChange(e) {
    this.setState({ creation: e.target.value });
  }

  handleClick(e) {
    this.setState({ melody: this.state.melody+e.target.textContent});
  }

  clearLog() {
    this.setState({ melody: '' });
  }

  componentDidMount() {
      document.title = 'Piano Simulator';
  }

  render() {
    return (
      <div>
        <ul >  
          <li className="whitekey c" onClick={this.handleClick}><div className="keyNames">C</div></li>
          <li className="blackkey cs"></li>
          <li className="whitekey d" onClick={this.handleClick}><div className="keyNames">D</div></li>
          <li className="blackkey ds"></li>
          <li className="whitekey e" onClick={this.handleClick}><div className="keyNames">E</div></li>
          <li className="whitekey f" onClick={this.handleClick}><div className="keyNames">F</div></li>
          <li className="blackkey fs"></li>
          <li className="whitekey g" onClick={this.handleClick}><div className="keyNames">G</div></li>
          <li className="blackkey gs"></li>          
          <li className="whitekey a" onClick={this.handleClick}><div className="keyNames">A</div></li>
          <li className="blackkey as"></li>
          <li className="whitekey b" onClick={this.handleClick}><div className="keyNames">B</div></li>
        </ul>
        <div className="outer">
          <div className="inner">
            <span className="clr"><div className="icon" onClick={this.clearLog}>&#x1f5d1;</div></span>
            <span className="melody"><div className="m1">Melody: </div><div className="m2">{this.state.melody}</div></span>
          </div>
        </div>
        <div className="outer">
          <div className="inner">
            <span className="play"><div onClick={() => this.pressPlay(this.state.creation.replace(/[^A-Ga-g]/g,''), '')}>▶</div></span>
            <textarea className="createMelody write" placeholder="Write a melody" onChange={this.handleChange}></textarea>
          </div>
        </div>        
      </div>
    );
  }
}
export default Piano;