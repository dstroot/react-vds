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

// use input parsers above
// https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
export const formDataParser = form => {
  const data = new FormData(form);

  for (let name of data.keys()) {
    const input = form.elements[name];
    const parserName = input.dataset.parse;

    if (parserName) {
      const parser = inputParsers[parserName];
      const parsedValue = parser(data.get(name));
      data.set(name, parsedValue);
    }
  }

  return data;
};

// works great, non ie11 compliant
export const formToJSON = form => {
  let output = {};
  new FormData(form).forEach((value, key) => {
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

// this version works in IE 11 but doesn't handle array elements
export const formToJSONString = form => {
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

// https://reactjs.org/docs/forms.html

// `Textarea` does not implement pattern validation like `text` does.
// A "required" value passes validation with *only* spaces. This function
// will enable the pattern attribute on a textarea and trigger
// HTML5 validation. Cool right!å
export const matchPattern = event => {
  const errorMessage = 'input does not match the required pattern';
  const pattern = event.target.getAttribute('pattern');
  const input = event.target.value;

  // Handles patterns that have the ^ or $ operators and does
  // a global match using the g Regex flag:
  if (typeof pattern !== typeof undefined && pattern !== false) {
    var patternRegex = new RegExp(
      '^' + pattern.replace(/^\^|\$$/g, '') + '$',
      'g'
    );

    const hasError = !input.match(patternRegex);
    if (typeof event.target.setCustomValidity === 'function') {
      event.target.setCustomValidity(hasError ? errorMessage : '');
    }
  }
};

export default {
  enumerateFormInputs,
  inputParsers,
  formDataParser,
  formToJSON,
  formToJSONString,
  matchPattern,
};
