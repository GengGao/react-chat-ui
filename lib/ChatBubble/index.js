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
var styles_1 = __importDefault(require("./styles"));
var file_alt_svg_1 = __importDefault(require("./file-alt.svg"));
var format_1 = require("date-fns/format");
var defaultBubbleStyles = {
    userBubble: {},
    chatBubble: {},
    text: {},
};
var ChatBubble = (function (_super) {
    __extends(ChatBubble, _super);
    function ChatBubble(props) {
        return _super.call(this, props) || this;
    }
    ChatBubble.prototype.render = function () {
        var _a = this.props, bubblesCentered = _a.bubblesCentered, callback = _a.callback;
        var bubbleStyles = this.props.bubbleStyles;
        bubbleStyles = bubbleStyles || defaultBubbleStyles;
        var userBubble = bubbleStyles.userBubble, chatBubble = bubbleStyles.chatBubble, text = bubbleStyles.text;
        var chatBubbleStyles = this.props.message.id === 0
            ? __assign(__assign(__assign(__assign({}, styles_1.default.chatBubble), bubblesCentered ? {} : styles_1.default.chatBubbleOrientationNormal), chatBubble), userBubble) : __assign(__assign(__assign(__assign(__assign({}, styles_1.default.chatBubble), styles_1.default.recipientChatBubble), bubblesCentered
            ? {}
            : styles_1.default.recipientChatBubbleOrientationNormal), userBubble), chatBubble);
        var chatDateStyles = this.props.message.id === 0
            ? __assign(__assign({}, styles_1.default.date), { float: 'left' }) : __assign(__assign({}, styles_1.default.date), { float: 'left' });
        var chatFileStyles = this.props.message.id === 0 ? styles_1.default.fileIcon : styles_1.default.fileIconAlt;
        return (React.createElement("div", { style: __assign({}, styles_1.default.chatBubbleWrapper) },
            React.createElement("div", { style: chatBubbleStyles },
                this.props.message.senderName && React.createElement("h5", null, this.props.message.senderName),
                React.createElement("p", { style: __assign(__assign({}, styles_1.default.p), text) }, this.props.message.message),
                this.props.message.files && React.createElement("ul", { style: styles_1.default.ul }, this.props.message.files.map(function (file) {
                    return React.createElement("li", { key: file.key },
                        React.createElement("a", { href: "#", onClick: function (e) {
                                e.preventDefault();
                                if (callback) {
                                    callback(file);
                                }
                            } },
                            React.createElement("b", null,
                                React.createElement("img", { src: file_alt_svg_1.default, alt: "File icon", style: chatFileStyles }),
                                " ",
                                file.fileName)));
                })),
                this.props.message.createdAt && React.createElement("p", { style: chatDateStyles }, (0, format_1.format)(this.props.message.createdAt, 'MMM d, yyyy h:mm a')))));
    };
    return ChatBubble;
}(React.Component));
exports.default = ChatBubble;
//# sourceMappingURL=index.js.map