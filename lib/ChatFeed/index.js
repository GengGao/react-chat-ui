"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var BubbleGroup_1 = __importDefault(require("../BubbleGroup"));
var ChatBubble_1 = __importDefault(require("../ChatBubble"));
var ChatInput_1 = __importDefault(require("../ChatInput"));
var Message_1 = __importDefault(require("../Message"));
var styles_1 = __importDefault(require("./styles"));
var ChatFeed = (function (_super) {
    __extends(ChatFeed, _super);
    function ChatFeed(props) {
        return _super.call(this, props) || this;
    }
    ChatFeed.prototype.componentDidMount = function () {
        this.scrollToBottom();
    };
    ChatFeed.prototype.componentDidUpdate = function () {
        this.scrollToBottom();
    };
    ChatFeed.prototype.scrollToBottom = function () {
        var scrollHeight = this.chat.scrollHeight;
        var height = this.chat.clientHeight;
        var maxScrollTop = scrollHeight - height;
        this.chat.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    };
    ChatFeed.prototype.renderMessages = function (messages) {
        var _a = this.props, isTyping = _a.isTyping, bubbleStyles = _a.bubbleStyles, chatBubble = _a.chatBubble, showSenderName = _a.showSenderName, callback = _a.callback;
        var ChatBubble = chatBubble || ChatBubble_1.default;
        var group = [];
        var messageNodes = messages.map(function (message, index) {
            group.push(message);
            if (index === messages.length - 1 || messages[index + 1].id !== message.id) {
                var messageGroup = group;
                group = [];
                return (React.createElement(BubbleGroup_1.default, { key: index, messages: messageGroup, id: message.id, showSenderName: showSenderName, chatBubble: ChatBubble, bubbleStyles: bubbleStyles, callback: callback }));
            }
            return null;
        });
        if (isTyping) {
            messageNodes.push(React.createElement("div", { key: "isTyping", style: __assign({}, styles_1.default.chatBubbleWrapper) },
                React.createElement(ChatBubble, { message: new Message_1.default({ id: 1, message: '...', senderName: '' }), bubbleStyles: bubbleStyles })));
        }
        return messageNodes;
    };
    ChatFeed.prototype.render = function () {
        var _this = this;
        var inputField = this.props.hasInputField && React.createElement(ChatInput_1.default, null);
        var maxHeight = this.props.maxHeight;
        return (React.createElement("div", { id: "chat-panel", style: styles_1.default.chatPanel },
            React.createElement("div", { ref: function (c) {
                    _this.chat = c;
                }, className: "chat-history", style: __assign(__assign({}, styles_1.default.chatHistory), { maxHeight: maxHeight }) },
                React.createElement("div", { className: "chat-messages" }, this.renderMessages(this.props.messages))),
            inputField));
    };
    return ChatFeed;
}(React.Component));
exports.default = ChatFeed;
//# sourceMappingURL=index.js.map