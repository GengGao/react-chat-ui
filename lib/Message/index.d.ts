interface MessageData {
    id: number | string;
    message: string;
    senderName?: string;
}
interface FileInfo {
    fileName: string;
    contentType: string;
    key: string;
}
export default class Message {
    id: number | string;
    message: string;
    senderName?: string;
    files?: FileInfo[];
    constructor(messageData: MessageData);
}
export {};
