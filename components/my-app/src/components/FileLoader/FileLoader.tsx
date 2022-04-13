import React from 'react';
import { IFile } from '../../types';

function FileLoader(props: IFile) {
  return (
    <label className="form-item file-loader">
      Загрузите фото
      <input className={props.className} type="file" ref={props.refFile} accept=".jpg,.jpeg,.png" />
    </label>
  );
}

export default FileLoader;
