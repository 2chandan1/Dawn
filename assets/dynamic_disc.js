// document.addEventListener('DOMContentLoaded', function() {
//     // Function to update the description based on the selected dosage value
//     function updateDescription(selectedValue) {
//         const descriptionElement = document.querySelector('.product__description');

//         if (descriptionElement) {
//             console.log('Updating description for selected value:', selectedValue); // Debug log
//             if (selectedValue === '125 mg') {
//                 descriptionElement.innerHTML = '125 mg - This is the description for the 125 mg dosage.';
//             } else if (selectedValue === '300 mg') {
//                 descriptionElement.innerHTML = '300 mg - This is the description for the 300 mg dosage.';
//             } else {
//                 descriptionElement.innerHTML = 'Please select a valid dosage.';
//             }
//         } else {
//             console.error('Description element not found.'); // Error log
//         }
//     }

//     // Function to get the value of the currently checked radio button
//     function getCheckedVariantValue() {
//         // Selecting the radio buttons based on the correct name attribute
//         const checkedRadio = document.querySelector('input[name="Dosage-2 "]'); // Ensure there's no newline character
//         console.log('Checked radio:', checkedRadio ? checkedRadio.value : 'None selected'); // Log the checked value
//         return checkedRadio ? checkedRadio.value : null;
//     }

//     // Add event listeners to the radio buttons
//     document.querySelectorAll('input[name="Dosage-2 "]').forEach(function(radio) { // Ensure there's no newline character
//         radio.addEventListener('change', function() {
//             const selectedValue = getCheckedVariantValue();
//             updateDescription(selectedValue);
//         });
//     });

//     // On initial load, set the description based on the pre-selected variant
//     const initialCheckedValue = getCheckedVariantValue();
//     if (initialCheckedValue) {
//         updateDescription(initialCheckedValue);
//     } else {
//         console.log('No initial checked radio button found.'); // Debug log
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    // Function to update the description based on the selected dosage value
    function updateDescription(selectedValue) {
        const descriptionElement = document.querySelector('.product__description');

        if (descriptionElement) {
            console.log('Updating description for selected value:', selectedValue); // Debug log
            if (selectedValue === '125 mg') {
                descriptionElement.innerHTML = '125 mg - This is the description for the 125 mg dosage.';
            } else if (selectedValue === '300 mg') {
                descriptionElement.innerHTML = '300 mg - This is the description for the 300 mg dosage.';
            } else {
                descriptionElement.innerHTML = 'Please select a valid dosage.';
            }
        }
    }

    // Function to get the value of the currently checked radio button
    function getCheckedVariantValue() {
        const checkedRadio = document.querySelector('input[name^="Dosage-2"]:checked');
         console.log('Checked radio:', checkedRadio ? checkedRadio.value : 'None selected'); // Log the checked value
        const value = checkedRadio ? checkedRadio.value : null;
        console.log('Checked radio button value:', value); // Debug log
        return value;
    }

    // Add event listeners to the radio buttons
    document.querySelectorAll('input[name^="Dosage-2"]').forEach(function(radio) {
        radio.addEventListener('change', function() {
            const selectedValue = getCheckedVariantValue();
            updateDescription(selectedValue);
        });
    });

    // On initial load, set the description based on the pre-selected variant
    const initialCheckedValue = getCheckedVariantValue();
    if (initialCheckedValue) {
        updateDescription(initialCheckedValue);
    } else {
        console.log('No initial checked radio button found.'); // Debug log
    }
});

// code working for intial load 

// document.addEventListener('DOMContentLoaded', function() {
//     function updateDescription(variant) {
//         if (!variant) return; // Ensure a variant is selected

//         const descriptionElement = document.querySelector('.product__description');

//         if (descriptionElement) {
//             // Check the variant title for the selected dosage and update the description accordingly
//             if (variant.title.includes('125 mg')) {
//                 descriptionElement.innerHTML = '125 mg - This is the description for the 125 mg dosage.';
//             } else if (variant.title.includes('300 mg')) {
//                 descriptionElement.innerHTML = '300 mg - This is the description for the 300 mg dosage.';
//             }
//         }
//     }

//     function getSelectedVariant() {
//         // Fetch the selected variant details from the script tag
//         const variantJson = document.querySelector('script[data-selected-variant]');
//         if (variantJson) {
//             return JSON.parse(variantJson.innerHTML);
//         }
//         return null;
//     }

//     // Bind the change event to the variant picker elements
//     document.querySelectorAll('input[name^="options"]').forEach(function(input) {
//         input.addEventListener('change', function() {
//             // When an option changes, retrieve the selected variant and update the description
//             const selectedVariant = getSelectedVariant();
//             updateDescription(selectedVariant);
//         });
//     });

//     // Initial load: Set the description based on the pre-selected variant
//     const initialVariant = getSelectedVariant();
//     updateDescription(initialVariant);
// });