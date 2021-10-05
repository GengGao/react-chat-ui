import * as React from 'react';
import ChatBubbleProps from './interface';
import styles from './styles';
import fileIcon from './file-alt.svg';
import Moment from 'react-moment';


const defaultBubbleStyles = {
  userBubble: {},
  chatBubble: {},
  text: {},
};

export default class ChatBubble extends React.Component {
  props;

  constructor(props: ChatBubbleProps) {
    super(props);
  }

  public render() {
    const { bubblesCentered, callback } = this.props;
    let { bubbleStyles } = this.props;
    bubbleStyles = bubbleStyles || defaultBubbleStyles;
    const { userBubble, chatBubble, text } = bubbleStyles;

    // message.id 0 is reserved for blue
    const chatBubbleStyles =
      this.props.message.id === 0
        ? {
            ...styles.chatBubble,
            ...bubblesCentered ? {} : styles.chatBubbleOrientationNormal,
            ...chatBubble,
            ...userBubble,
          }
        : {
            ...styles.chatBubble,
            ...styles.recipientChatBubble,
            ...bubblesCentered
              ? {}
              : styles.recipientChatBubbleOrientationNormal,
            ...userBubble,
            ...chatBubble,
          };


    const chatDateStyles = this.props.message.id === 0
    ? {...styles.date, float: 'right'} : {...styles.date, float: 'left'};

    const chatFileStyles = this.props.message.id === 0 ? styles.fileIcon: styles.fileIconAlt;

    return (
      <div
        style={{
          ...styles.chatBubbleWrapper,
        }}
      >
        <div style={chatBubbleStyles}>
        {this.props.message.senderName && <h5>
                {this.props.message.senderName}
              </h5>}
          <p style={{ ...styles.p, ...text }}>{this.props.message.message}</p>
          {this.props.message.files && <ul style={styles.ul}>{this.props.message.files.map((file) => {
            return <li key={file.key}>
              <a href="#" onClick={(e) => {
              e.preventDefault();
              if(callback) {
                callback(file);
              }
            }}><b><img src={fileIcon} alt="File icon" style={chatFileStyles} /> {file.fileName}</b></a>
            </li>;
          })}</ul>}

        {this.props.message.createdAt && <p style={chatDateStyles}>
        <Moment format="lll">{this.props.message.createdAt}</Moment>
        </p>}
        </div>
      </div>
    );
  }
}

export { ChatBubbleProps };
