
  const isValidElement = element => {
  return element.name && element.value;
  };
  
  
  const isValidValue = element => {
  return !['checkbox', 'radio'].includes(element.type) || element.checked;
  };
  
  
  const isCheckbox = element => element.type === 'checkbox';
  
 
  const isMultiSelect = element => element.options && element.multiple;

  const getSelectValues = options => [].reduce.call(options, (values, option) => {
  return option.selected ? values.concat(option.value) : values;
  }, []);
  

  const formToJSON_deconstructed = elements => {
  
  // This is the function that is called on each element of the array.
  const reducerFunction = (data, element) => {
  
  // Add the current field to the object.
  data[element.name] = element.value;
  
  // For the demo only: show each step in the reducer’s progress.
  console.log(JSON.stringify(data));
  
  return data;
  };
  
  // This is used as the initial value of `data` in `reducerFunction()`.
  const reducerInitialValue = {};
  
  // To help visualize what happens, log the inital value, which we know is `{}`.
  console.log('Initial `data` value:', JSON.stringify(reducerInitialValue));
  
  // Now we reduce by `call`-ing `Array.prototype.reduce()` on `elements`.
  const formData = [].reduce.call(elements, reducerFunction, reducerInitialValue);
  
  // The result is then returned for use elsewhere.
  return formData;
  };
  
 
  const formToJSON = elements => [].reduce.call(elements, (data, element) => {
  
  // Make sure the element has the required properties and should be added.
  if (isValidElement(element) && isValidValue(element)) {
  
  
  if (isCheckbox(element)) {
  data[element.name] = (data[element.name] || []).concat(element.value);
  } else if (isMultiSelect(element)) {
  data[element.name] = getSelectValues(element);
  } else {
  data[element.name] = element.value;
  }
  }
  
  return data;
  }, {});
  
  
  const handleFormSubmit = event => {
  
    // Stop the form from submitting since we’re handling that with AJAX.
    event.preventDefault();
  
    // Call our function to get the form data.
    const data = formToJSON(form.elements);
  
    // Demo only: print the form data onscreen as a formatted JSON object.
    const dataContainer = document.getElementsByClassName('results__display')[0];
  
    // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    dataContainer.textContent = JSON.stringify(data, null, "  ");
  // Write form data to a local file
  const dataJSON = JSON.stringify(data);
 
  };
  
 
  const form = document.getElementsByClassName('contact-form')[0];
  form.addEventListener('submit', handleFormSubmit);
