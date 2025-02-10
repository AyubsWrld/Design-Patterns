abstract class Test {
  protected fileName: string;
  protected filePath: string;
  protected size: number;
  protected type: string;
  protected fileExtension: string;

  constructor(fileName: string, filePath: string, size: number, type: string, fileExtension: string) {
    this.fileName = fileName;
    this.filePath = filePath;
    this.size = size;
    this.type = type;
    this.fileExtension = fileExtension;
  }

  abstract getFileName(): string;
}

// Step 2: Concrete File classes
class Video extends Test {
  constructor(fileName: string, filePath: string, size: number) {
    super(fileName, filePath, size, "video", "mp4");
  }

  getFileName(): string {
    return `Video File: ${this.fileName}.${this.fileExtension}`;
  }
}

class Doc extends Test {
  constructor(fileName: string, filePath: string, size: number) {
    super(fileName, filePath, size, "document", "pdf");
  }

  getFileName(): string {
    return `Document File: ${this.fileName}.${this.fileExtension}`;
  }
}

// Step 3: Abstract Factory
interface FileFactory {
  createFile(fileName: string, filePath: string, size: number): Test ;
}

// Step 4: Concrete Factories
class VideoFactory implements FileFactory {
  createFile(fileName: string, filePath: string, size: number): Test {
    return new Video(fileName, filePath, size);
  }
}

class DocumentFactory implements FileFactory {
  createFile(fileName: string, filePath: string, size: number): Test {
    return new Doc(fileName, filePath, size);
  }
}

// Step 5: Client Code (Usage)
function clientCode(factory: FileFactory) {
  const file = factory.createFile("example", "/path/to/file", 1024);
  console.log(file.getFileName());
}

// Create a Video file
clientCode(new VideoFactory());  // Output: Video File: example.mp4

// Create a Document file
clientCode(new DocumentFactory());  // Output: Document File: example.pdf
