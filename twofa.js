// Polyfill for util.deprecate (if needed)
if (typeof util === 'undefined' || !util.deprecate) {
    util = {
      deprecate: (fn, message) => (x, ...y) => (warned || (warned = true, console.warn(message)), fn.apply(this, [x, ...y]))
    };
  }
  
  import speakeasy from 'speakeasy'; // Import speakeasy library
  import qrcode from 'qrcode'; // Import qrcode library
  
  function generateQRCode(name) {
    // Generate the secret with a name
    const secret = speakeasy.generateSecret({
      name: name
    });
  
    // Generate QR code URL with the secret
    const otpauth_url = secret.otpauth_url;
  
    // Convert URL to data URI for displaying the QR code
    return new Promise((resolve, reject) => {
      qrcode.toDataURL(otpauth_url, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  
  // If you want to export for potential use in other modules
  export default generateQRCode;
  