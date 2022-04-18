import React, { ChangeEventHandler, FormEvent, useState, useEffect } from 'react';
import { IFile, FileType } from '../../types';
import { MAX_SIZE_FILE, EXTENSIONS, ERRORS_INITIAL } from '../../constants';
import ValidationError from '../ValidationError/ValidationError';

function FileLoader(props: IFile) {
  const [isValidFile, setIsValidFile] = useState(true);

  useEffect(() => {
    if (
      EXTENSIONS.some((elem: string) => props.data.name.endsWith(elem)) &&
      props.data.size <= MAX_SIZE_FILE
    ) {
      setIsValidFile(true);
    } else {
      setIsValidFile(false);
    }
  }, []);

  return (
    <label className="form-item file-loader">
      Загрузите фото
      <input
        className={props.className}
        type="file"
        accept=".jpg,.jpeg,.png"
        {...props.register}
        style={props.style}
      />
    </label>
  );
}

export default FileLoader;
