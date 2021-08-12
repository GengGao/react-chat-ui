import Message from '../Message';
export default interface ChatBubbleProps {
  message: Message
  bubbleStyles: {
    userBubble: object
    chatBubble: object
    text: object
  }
  bubblesCentered: boolean
  callback?: any
}
