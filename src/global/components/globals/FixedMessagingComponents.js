import { Avatar } from "@material-ui/core"


const UserToMessage = (props) => {

  return (
    <div className="user-to-message" onClick={e => props.click()}>
      <div className="user-to-message-avatar">
        <Avatar className="capitalize">
          {props.name[0]}
        </Avatar>
      </div>
      <div className="user-to-message-details">
        <div className="user-to-message-details-head">
          <h3>
            {props.name}
          </h3>
          <span>
            {
              props.hashtag.length > 6 &&
              `${props.hashtag.substring(0, 6)}...`
            }
            {
              props.hashtag.length < 7 &&
              props.hashtag
            }
          </span>
          <span>
            Jul 17, 2020
          </span>
        </div>
        <div className="user-to-message-details-text">
          {
            props.text.length > 40 &&
            `${props.text.substring(0, 40)}...`
          }
          {
            props.text.length < 40 &&
            props.text
          }
        </div>
      </div>
    </div>
  )
}

export { UserToMessage }