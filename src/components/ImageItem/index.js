import './index.css'

const ImageItem = props => {
  const {imageDetails, updateScore} = props
  const {thumbnailUrl, imageUrl} = imageDetails

  const onClickThumbnail = () => {
    updateScore(imageUrl)
  }

  return (
    <li className="image-item">
      <button type="submit" onClick={onClickThumbnail}>
        <img className="image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
