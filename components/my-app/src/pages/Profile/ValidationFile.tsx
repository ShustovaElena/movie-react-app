import { EXTENSIONS, FIRST_ELEMENT, MAX_SIZE_FILE } from '../../constants';
import { FileType } from '../../types';

export function validationFile(file: FileType[]) {
  if (
    EXTENSIONS.some((elem: string) => file[FIRST_ELEMENT].name.endsWith(elem)) &&
    file[FIRST_ELEMENT].size <= MAX_SIZE_FILE
  ) {
    return true;
  } else {
    return 'Добавьте файл .jpg, .jpeg, .png и менее 5mb';
  }
}
