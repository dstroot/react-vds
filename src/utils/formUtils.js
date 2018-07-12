export const inputParsers = {
  date(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  trim(input) {
    return input.trim();
  },
  number(input) {
    return parseFloat(input);
  },
};

export const formToJSON = form => {
  let output = {};
  // let inputs = Array.from(new FormData(form));

  new FormData(form).forEach((value, key) => {
    // inputs.forEach((value, key) => {
    // Check if property already exist
    if (Object.prototype.hasOwnProperty.call(output, key)) {
      let current = output[key];
      if (!Array.isArray(current)) {
        // If it's not an array, convert it to an array.
        current = output[key] = [current];
      }
      current.push(value); // Add the new value to the array.
    } else {
      output[key] = value;
    }
  });
  return JSON.stringify(output);
};

export const enumerateFormInputs = form => {
  const data = new FormData(form);
  for (let name of data.keys()) {
    console.log('Key: ' + name);
    console.log('Value: ' + data.get(name));
  }
};

// this version works in IE 11
export const toJSONString = form => {
  var obj = {};
  var elements = form.querySelectorAll('input, select, textarea');
  for (var i = 0; i < elements.length; ++i) {
    var element = elements[i];
    var name = element.name;
    var value = element.value;

    if (name) {
      obj[name] = value;
    }
  }

  return JSON.stringify(obj);
};

export default { enumerateFormInputs, inputParsers, formToJSON, toJSONString };
