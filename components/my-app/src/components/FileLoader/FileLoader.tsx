import React from 'react';
import { IFile } from '../../types';

class FileLoader extends React.Component<IFile> {
  constructor(props: IFile) {
    super(props);
  }

  render() {
    return (
      <label className="form-item file-loader">
        Загрузите фото
        <input
          className={this.props.className}
          type="file"
          ref={this.props.refFile}
          accept=".jpg,.jpeg,.png"
        />
      </label>
    );
  }
}

export default FileLoader;
