import * as React from 'react';
import ChatBubbleProps from './interface';
import styles from './styles';

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

    return (
      <div
        style={{
          ...styles.chatBubbleWrapper,
        }}
      >
        <div style={chatBubbleStyles}>
          <p style={{ ...styles.p, ...text }}>{this.props.message.message}</p>
          {this.props.message.files && <ul>{this.props.message.files.map((file) => {
            return <li><a href="#" onClick={(e) => {
              e.preventDefault();
              if(callback) callback(file);
            }}></a>{file.fileName}</li>
          })}</ul>}
        </div>
      </div>
    );
  }
}

export { ChatBubbleProps };
