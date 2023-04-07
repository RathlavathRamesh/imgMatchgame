import './index.css'
import {Component} from 'react'

class TabItem extends Component {
  render() {
    const {info, fun, activ} = this.props
    const {tabId} = info
    const changetab = () => {
      fun(tabId)
    }
    const style = activ === tabId ? 'stylish' : 'none'
    return (
      <li className="tabitem">
        <button
          className={`tabname ${style}`}
          type="button"
          onClick={changetab}
        >
          {info.displayText}
        </button>
      </li>
    )
  }
}
export default TabItem
