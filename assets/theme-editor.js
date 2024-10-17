function hideProductModal() {
  const productModal = document.querySelectorAll('product-modal[open]');
  productModal && productModal.forEach((modal) => modal.hide());
}

document.addEventListener('shopify:block:select', function (event) {
  hideProductModal();
  const blockSelectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockSelectedIsSlide) return;

  const parentSlideshowComponent = event.target.closest('slideshow-component');
  parentSlideshowComponent.pause();

  setTimeout(function () {
    parentSlideshowComponent.slider.scrollTo({
      left: event.target.offsetLeft,
    });
  }, 200);
});

document.addEventListener('shopify:block:deselect', function (event) {
  const blockDeselectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockDeselectedIsSlide) return;
  const parentSlideshowComponent = event.target.closest('slideshow-component');
  if (parentSlideshowComponent.autoplayButtonIsSetToPlay) parentSlideshowComponent.play();
});

document.addEventListener('shopify:section:load', () => {
  hideProductModal();
  const zoomOnHoverScript = document.querySelector('[id^=EnableZoomOnHover]');
  if (!zoomOnHoverScript) return;
  if (zoomOnHoverScript) {
    const newScriptTag = document.createElement('script');
    newScriptTag.src = zoomOnHoverScript.src;
    zoomOnHoverScript.parentNode.replaceChild(newScriptTag, zoomOnHoverScript);
  }
});

document.addEventListener('shopify:section:unload', (event) => {
  document.querySelectorAll(`[data-section="${event.detail.sectionId}"]`).forEach((element) => {
    element.remove();
    document.body.classList.remove('overflow-hidden');
  });
});

document.addEventListener('shopify:section:reorder', () => hideProductModal());

document.addEventListener('shopify:section:select', () => hideProductModal());

document.addEventListener('shopify:section:deselect', () => hideProductModal());

document.addEventListener('shopify:inspector:activate', () => hideProductModal());

document.addEventListener('shopify:inspector:deactivate', () => hideProductModal());



  document.addEventListener('DOMContentLoaded', function() {
    const dosageRadios = document.querySelectorAll('input[name="Dosage-2"]');
    const description125 = document.querySelector('.product__description .125');
    const description300 = document.querySelector('.product__description .300');

    // Function to update the description based on the selected dosage
    function updateDescription() {
      if (this.value === '125 mg') {
        description125.style.display = 'block'; // Show 125 mg description
        description300.style.display = 'none'; // Hide 300 mg description
      } else {
        description125.style.display = 'none'; // Hide 125 mg description
        description300.style.display = 'block'; // Show 300 mg description
      }
    }

    // Set initial description based on the default checked radio button
    const initialChecked = document.querySelector('input[name="Dosage-2"]:checked');
    if (initialChecked) {
      initialChecked.dispatchEvent(new Event('change')); // Trigger change event to set the initial state
    }

    // Attach change event listeners to dosage radio buttons
    dosageRadios.forEach(function(radio) {
      radio.addEventListener('change', updateDescription);
    });
  });


