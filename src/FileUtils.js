/**
 * Format number of bytes to String
 * @param {Number} size the number of bytes
 * @returns String of the size with the unit
 */
export function getSizeString (size) {
  if (size < 1024) {
    return `${size}B`;
  } else if (size < 1048576) {
    return `${size / 1024}KB`;
  } else if (size < 1073741824) {
    return `${size / 1048576}MB`;
  } else {
    return `${size / 1073741824}GB`;
  }
}

export function byteArrayToString (uintArray) {
  let str = '';
  uintArray.forEach(e => {
    let hex = e.toString(16);
    if (hex.length < 2) hex = '0' + hex;
    str += hex;
  });
  return str;
}

export function urltoFile (url, filename, mimeType) {
  // convert base64 to raw binary data held in a string
  const byteString = atob(url.split(',')[1]);

  // write the bytes of the string to an ArrayBuffer
  const arrayBuffer = new ArrayBuffer(byteString.length);

  // convert character to byte code
  const byteArray = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i += 1) {
    byteArray[i] = byteString.charCodeAt(i);
  }
  const file = new Blob([arrayBuffer], { type: mimeType });
  file.name = filename;
  return file;
}

export function getExtension (fileName) {
  if (!fileName) throw Error('error.fileNameNotValid');
  const parts = fileName.split('.');
  if (parts.length === 1) return '';
  return parts[parts.length - 1];
}

export function fileNameWithoutExtension (fileName) {
  if (!fileName) return fileName;
  if (fileName.indexOf('.') === -1) return fileName;
  return fileName.split('.').slice(0, -1).join('.');
}

export function readAsText (file) {
  return new Promise((resolve, reject) => {
    if (!file) reject(new Error('must specific file'));
    const reader = new FileReader();
    reader.onload = function (evt) {
      resolve(evt.target.result);
    };
    reader.readAsText(file);
  });
}
