import './index.css'

const EmojiCArd = props => {
  const {eachEmoji, getClickedEmoji} = props
  const {emojiName, id, emojiUrl} = eachEmoji
  const emojiCard = () => {
    getClickedEmoji(id)
  }
  return (
    <li className="eachEmojiCard">
      <button type="button" className="button-style" onClick={emojiCard}>
        <img src={emojiUrl} alt={emojiName} className="emojiSize" />
      </button>
    </li>
  )
}

export default EmojiCArd
