interface MessageData {
    id: number | string;
    message: string;
    createdAt?: string;
    senderName?: string;
    files?: FileInfo[];
}
interface FileInfo {
    fileName: string;
    contentType: string;
    key: string;
    section: string;
}
export default class Message {
    id: number | string;
    message: string;
    senderName?: string;
    files?: FileInfo[];
    constructor(messageData: MessageData);
}
export {};
