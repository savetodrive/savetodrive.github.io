// Place this code snippet near the footer of your page before the close of the /body tag
// LEGAL NOTICE: The content of this website and all associated program code are protected under the Digital Millennium Copyright Act. Intentiona$
// Run after all the page elements have loaded
window.onload = function () {
  // This will take care of asynchronous Google ads
  setTimeout(() => {
    // We are targeting the first banner ad of AdSense
    const ad = document.querySelector("ins.adsbygoogle");
    // If the ad contains no innerHTML, ad blockers are at work
    if (ad && ad.innerHTML.replace(/\s/g, "").length == 0) {
      // Since ad blocks hide ads using CSS too
      ad.style.cssText = 'display:block !important;color:red;';
      const begMessage = 'Please consider supporting us' +
        ' by disabling your ad blocker or whitelisting us. ' +
        'You can also help us by Donating any amount of your choice.';
      // You can put any text, image or even IFRAME tags here
      ad.innerHTML = begMessage;
      document.forms.upload[0].setAttribute('readonly', true);
      Object.keys(document.forms.upload).forEach((key) => {
        document.forms.upload[key].disabled = true;
      });
      Object.defineProperty(window, 'isAdsBlocked', {
        value: true,
        enumerable: false,
        configurable: false,
      });
    } else {
      Object.defineProperty(window, 'isAdsBlocked', {
        value: false,
        enumerable: false,
        configurable: false,
      });
    }
  }, 2000); // The ad blocker check is performed 2 seconds after the page load
};
