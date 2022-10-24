import { Vue, Component } from 'vue-property-decorator';

@Component({
  depends: ['component.seamlessscroll.SeamlessScroll'],
})
export default class SeamlessScrollPage extends Vue {
  private speed = 60;
  private mode = 'vertical';
  private revese = false;

  public render() {
    return (
      <div class='flex'>
        <div class=''>
          <div>
            <seamless-scroll 
              style= {{width: '800px', height: '500px'}} 
              mode={this.mode} 
              speed={this.speed} 
              reverse={this.revese}
            >
              <header class='header'>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a class='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                  Learn React
                </a>
              </header>
              <div>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a class='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                  Learn React
                </a>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</div>
              </div>
              <div>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a class='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                  Learn React
                </a>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</div>
              </div>
              <div>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a class='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                  Learn React
                </a>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</div>
              </div>
              <div>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a class='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                  Learn React
                </a>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</div>
              </div>
              <div>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a class='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                  Learn React
                </a>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</div>
              </div>
              <div>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a class='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                  Learn React
                </a>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</div>
              </div>
              <div>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a class='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                  Learn React
                </a>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</div>
              </div>
              <div>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a class='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                  Learn React
                </a>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</div>
              </div>
              <div>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a class='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                  Learn React
                </a>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</div>
              </div>
            </seamless-scroll>
          </div>
        </div>
      </div>
    );
  }
}
