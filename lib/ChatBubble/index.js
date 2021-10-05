"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = __importDefault(require("./styles"));
var file_alt_svg_1 = __importDefault(require("./file-alt.svg"));
var react_moment_1 = __importDefault(require("react-moment"));
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
            ? __assign({}, styles_1.default.chatBubble, bubblesCentered ? {} : styles_1.default.chatBubbleOrientationNormal, chatBubble, userBubble) : __assign({}, styles_1.default.chatBubble, styles_1.default.recipientChatBubble, bubblesCentered
            ? {}
            : styles_1.default.recipientChatBubbleOrientationNormal, userBubble, chatBubble);
        var chatDateStyles = this.props.message.id === 0
            ? __assign({}, styles_1.default.date, { float: 'left' }) : __assign({}, styles_1.default.date, { float: 'left' });
        var chatFileStyles = this.props.message.id === 0 ? styles_1.default.fileIcon : styles_1.default.fileIconAlt;
        return (React.createElement("div", { style: __assign({}, styles_1.default.chatBubbleWrapper) },
            React.createElement("div", { style: chatBubbleStyles },
                this.props.message.senderName && React.createElement("h5", null, this.props.message.senderName),
                React.createElement("p", { style: __assign({}, styles_1.default.p, text) }, this.props.message.message),
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
                this.props.message.createdAt && React.createElement("p", { style: chatDateStyles },
                    React.createElement(react_moment_1.default, { format: "lll" }, this.props.message.createdAt))),
            React.createElement("br", null)));
    };
    return ChatBubble;
}(React.Component));
exports.default = ChatBubble;
//# sourceMappingURL=index.js.map