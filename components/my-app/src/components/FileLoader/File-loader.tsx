import React from 'react';

interface IFile {
  refFile: React.RefObject<HTMLInputElement>;
}

class FileLoader extends React.Component<IFile> {
  constructor(props: IFile) {
    super(props);
  }

  render() {
    return (
      <>
        <input type="file" ref={this.props.refFile} />
        <br />
      </>
    );
  }
}

export default FileLoader;
