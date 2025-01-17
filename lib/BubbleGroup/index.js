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
var ChatBubble_1 = __importDefault(require("../ChatBubble"));
var styles_1 = __importDefault(require("./styles"));
var BubbleGroup = (function (_super) {
    __extends(BubbleGroup, _super);
    function BubbleGroup(props) {
        return _super.call(this, props) || this;
    }
    BubbleGroup.prototype.renderGroup = function (messages, id) {
        var _a = this.props, bubblesCentered = _a.bubblesCentered, bubbleStyles = _a.bubbleStyles, showSenderName = _a.showSenderName, chatBubble = _a.chatBubble, senderName = _a.senderName, callback = _a.callback;
        var ChatBubble = chatBubble || ChatBubble_1.default;
        var sampleMessage = messages[0];
        var messageNodes = messages.map(function (message, i) {
            return (React.createElement(ChatBubble, { key: i, message: message, bubblesCentered: bubblesCentered, bubbleStyles: bubbleStyles, callback: callback }));
        });
        return (React.createElement("div", { style: styles_1.default.chatBubbleWrapper }, messageNodes));
    };
    BubbleGroup.prototype.render = function () {
        var _a = this.props, messages = _a.messages, id = _a.id;
        return this.renderGroup(messages, id);
    };
    return BubbleGroup;
}(React.Component));
exports.default = BubbleGroup;
//# sourceMappingURL=index.js.map