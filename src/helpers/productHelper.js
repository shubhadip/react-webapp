
export function barcodeToPsid(data) {
  let psid;
  const barcode = data.toLowerCase();
  if (barcode.includes('b')) {
    const parameters = barcode.split('b').reverse();
    if (parameters[0].length === 8) {
      psid = parseInt(parameters[0], 10) - 11111111;
    } else if (parameters[0].length === 6) {
      psid = parameters[0];
    } else {
      return undefined;
    }
  } else if (barcode.length !== 12) {
    return undefined;
  } else {
    psid = barcode
    .split('')
    .reverse()
    .join('')
    .substr(0, 6)
    .split('')
    .reverse()
    .join('');
  }
  return parseInt(psid, 10);
}
