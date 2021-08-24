"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message(messageData) {
        this.id = messageData.id;
        this.message = messageData.message;
        this.senderName = messageData.senderName || undefined;
        this.files = messageData.files || undefined;
        this.createdAt = messageData.createdAt || undefined;
    }
    return Message;
}());
exports.default = Message;
//# sourceMappingURL=index.js.map