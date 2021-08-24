/**
 * A standardized message object for use
 * in rendering messages in the chat feed.
 */

interface MessageData {
  id: number | string;
  message: string;
  createdAt?: string;
  senderName?: string;
  files?: FileInfo[]
}

interface FileInfo {
  fileName: string;
  contentType: string;
  key: string;
  section: string;
}
export default class Message {
  /**
   * Message object for organizing and storing current message data.
   */
  id: number | string;
  message: string;
  senderName?: string;
  files?: FileInfo[]
  createdAt?: string;
  constructor(messageData: MessageData) {
    this.id = messageData.id; // id of the sender (0 is reserved for "blue bubble")
    this.message = messageData.message;
    this.senderName = messageData.senderName || undefined;
    this.files = messageData.files || undefined;
    this.createdAt = messageData.createdAt || undefined;
  }
}
