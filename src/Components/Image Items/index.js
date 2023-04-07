import './index.css'
import {Component} from 'react'

class ImageItems extends Component {
  render() {
    const {imginfo, checkimgfun} = this.props
    const {thumbnailUrl, imageUrl} = imginfo
    const checkimg = () => {
      checkimgfun(imageUrl)
    }

    return (
      <li className="imgItem">
        <button type="button" className="imgbtn" onClick={checkimg}>
          {' '}
          <img src={thumbnailUrl} alt="thumbnail" className="imgs" />
        </button>
      </li>
    )
  }
}
export default ImageItems
