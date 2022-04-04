import React from 'react';

interface IFile {
  refFile: React.RefObject<HTMLInputElement>;
  style: string;
}

class FileLoader extends React.Component<IFile> {
  constructor(props: IFile) {
    super(props);
  }

  render() {
    return (
      <>
        <label className="form-item file-loader">
          Загрузите фото
          <input
            type="file"
            ref={this.props.refFile}
            accept=".jpg,.jpeg,.png"
            style={{ backgroundColor: this.props.style }}
          />
        </label>
        <br />
      </>
    );
  }
}

export default FileLoader;
