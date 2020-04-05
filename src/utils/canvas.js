export const downloadCanvasAsPng = canvas => {
  const fileName = "drawing";
  const link = document.createElement('a');
  link.download = fileName + '.png';

  addBackgroundColor(canvas, '#FAFAFA');

  canvas.toBlob(blob => {
    link.href = URL.createObjectURL(blob);
    link.click();
  });
}

export const addBackgroundColor = (canvas, backgroundColor) => {
  var context = canvas.getContext("2d");
  context.globalCompositeOperation = 'destination-over'
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
}
