import './Sneakers.scss'
import ListItem  from './ListItem.jsx'
import { Component } from 'react'


class Sneakers extends Component {
    
    render() {
        return (
          <div className="container">
              <main>
                  <div className="top">
                      <div className="rightside">
                          <h1>Все кроссовки</h1>
                      </div>
                      <div className="leftside">
                          <div className="input">
                              <input type="text" placeholder='Поиск...'/>
                          </div>
                      </div>
                  </div>
                  <div className="cards">
                      <ul>
                          <ListItem/>
                      </ul>
                  </div>
              </main>
          </div>
        )
    }
}

export default Sneakers