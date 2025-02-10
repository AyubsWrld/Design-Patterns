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
var Test = /** @class */ (function () {
    function Test(fileName, filePath, size, type, fileExtension) {
        this.fileName = fileName;
        this.filePath = filePath;
        this.size = size;
        this.type = type;
        this.fileExtension = fileExtension;
    }
    return Test;
}());
// Step 2: Concrete File classes
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(fileName, filePath, size) {
        return _super.call(this, fileName, filePath, size, "video", "mp4") || this;
    }
    Video.prototype.getFileName = function () {
        return "Video File: ".concat(this.fileName, ".").concat(this.fileExtension);
    };
    return Video;
}(Test));
var Doc = /** @class */ (function (_super) {
    __extends(Doc, _super);
    function Doc(fileName, filePath, size) {
        return _super.call(this, fileName, filePath, size, "document", "pdf") || this;
    }
    Doc.prototype.getFileName = function () {
        return "Document File: ".concat(this.fileName, ".").concat(this.fileExtension);
    };
    return Doc;
}(Test));
// Step 4: Concrete Factories
var VideoFactory = /** @class */ (function () {
    function VideoFactory() {
    }
    VideoFactory.prototype.createFile = function (fileName, filePath, size) {
        return new Video(fileName, filePath, size);
    };
    return VideoFactory;
}());
var DocumentFactory = /** @class */ (function () {
    function DocumentFactory() {
    }
    DocumentFactory.prototype.createFile = function (fileName, filePath, size) {
        return new Doc(fileName, filePath, size);
    };
    return DocumentFactory;
}());
// Step 5: Client Code (Usage)
function clientCode(factory) {
    var file = factory.createFile("example", "/path/to/file", 1024);
    console.log(file.getFileName());
}
// Create a Video file
clientCode(new VideoFactory()); // Output: Video File: example.mp4
// Create a Document file
clientCode(new DocumentFactory()); // Output: Document File: example.pdf
