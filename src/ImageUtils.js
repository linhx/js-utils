import { isNull } from './ObjectUtils';
import Queue from './Queue';
import { urltoFile } from './FileUtil';

const queues = {};

/**
 * draw image to canvas
 * @param {Object} param file: the image file; witdh: the canvas width; height: the canvas height; canvas: HTMLElement of the canvas use to draw, if not specific the canvas, create a new one
 * @returns the canvas
 */
export function drawImageToCanvas ({ file, width, height, canvas } = { width: 100, height: 100 }) {
  return new Promise((resolve, reject) => {
    const _canvas = canvas || document.createElement('canvas');
    _canvas.width = width;
    _canvas.height = height;
    const ctx = _canvas.getContext('2d');
    const img = new Image();
    img.onload = function () {
      const wrh = img.width / img.height;
      let newWidth = canvas.width;
      let newHeight = newWidth / wrh;
      if (newHeight > canvas.height) {
        newHeight = canvas.height;
        newWidth = newHeight * wrh;
      }
      ctx.drawImage(img, (canvas.width - newWidth) / 2, (canvas.height - newHeight) / 2, newWidth, newHeight);
      URL.revokeObjectURL(img.src);
      resolve(_canvas);
    };
    img.onerror = function (e) {
      reject(e);
    };
    img.src = URL.createObjectURL(file);
  });
}

/**
 * draw image to canvas with queue.
 * @param {Object} param file: the image file; witdh: the canvas width; height: the canvas height; canvas: HTMLElement of the canvas use to draw, if not specific the canvas, create a new one; queueId: the queue id
 * @returns the canvas
 */
export function drawImageToCanvasQueue ({ file, width, height, canvas, queueId }) {
  if (isNull(queueId)) return Promise.reject(new Error('queueId can not be null'));
  if (!queues[queueId]) queues[queueId] = new Queue();
  const queue = queues[queueId];
  return new Promise((resolve, reject) => {
    queue.push(() =>
      drawImageToCanvas({ file, width, height, canvas }).then((canvas) => {
        resolve(canvas);
      }).catch(e => reject(e))
    );
    queue.run();
  });
}

export class ImageResizer {
  fileReader = new FileReader()
  image = new Image()
  file = null
  constructor (file) {
    this.file = file;
    this.name = 'thumbnail-' + file.name;
    this.type = file.type;
  }

  resize ({ width, height } = { width: 200, height: 200 }) {
    const $this = this;
    return new Promise((resolve, reject) => {
      this.onReader((result) => resolve(result), err => reject(err), width, height);
      this.fileReader.readAsDataURL($this.file);
    });
  }

  onReader (callback, failCallback, MAX_WIDTH = 200, MAX_HEIGHT = 200) {
    const $this = this;
    $this.image.onload = async function (e) {
      const canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      ctx.drawImage(e.target, 0, 0);

      let width = e.target.width;
      let height = e.target.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');
      ctx.drawImage(e.target, 0, 0, width, height);

      const dataUrl = canvas.toDataURL($this.file.type);

      const imageResized = await urltoFile(dataUrl, $this.name, $this.type);
      callback(imageResized);
    };
    $this.fileReader.onload = function (e) {
      $this.image.src = e.target.result;
    };
  }
}
