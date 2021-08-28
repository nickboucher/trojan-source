import { checkWebPSupport } from 'supports-webp-sync'

var extension = "png";
if (checkWebPSupport()) {
  extension = "webp";
}

export default extension;