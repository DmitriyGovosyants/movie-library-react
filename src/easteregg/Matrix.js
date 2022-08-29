import error from '../easteregg/data/images/404.png';

const canvasRef = document.querySelector('canvas');

const $ = canvasRef.getContext('2d');
const W = (canvasRef.width = window.innerWidth);
const H = (canvasRef.height = window.innerHeight);

const str = 'A+B0C-D1E=F2G H3З I4G K5L M6N O7P Q8R S9T U!V W?X Y.Z,A Q:G0;F';
const matrix = str.split('');

const font = 20;
const col = W / font;
const arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;

export function goMatrix() {
  $.fillStyle = 'rgba(0, 0, 0, .05)';
  $.fillRect(0, 0, W, H);
  $.fillStyle = '#0f0';
  $.font = font + 'px system-ui';

  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)];
    $.fillText(txt, i * font, arr[i] * font);

    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;

    arr[i]++;
  }

  canvasRef.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.cursor = `url(${error}), auto`;
}

// window.addEventListener('resize', () => window.location.reload())