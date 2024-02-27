export const questions = [
  {
    id: 1,
    question:
      "Which of the following is an instruction to the web browser about what version of the markup language the page is written in?",
    options: ["Markup", "meta Tag", "DSS", "doctype"],
    answer: "doctype",
    explanation:
      "The correct answer is 'Doctype' because it is an instruction to the web browser about what version of the markup language the page is written in. The Doctype declaration is placed at the very beginning of an HTML document and informs the browser which version of HTML or XHTML is being used. This helps the browser to render the page correctly and ensures that the page is interpreted and displayed as intended by the developer.",
  },
  {
    id: 2,
    question: "Which of the following is not an HTML tag?",
    options: ["doctype", "p", "table", "style"],
    answer: "Doctype",
    explanation:
      "The Doctype is not an HTML tag. It is used to declare the version of HTML that the webpage is using. It is placed at the very beginning of the HTML document, before the opening tag. The Doctype declaration is important for the browser to correctly interpret and render the webpage.",
  },
  {
    id: 3,
    question: "How many ways can you apply colors in CSS?",
    options: ["1", "2", "3", "7"],
    answer: "7",
    explanation: `In CSS (Cascading Style Sheets), there are several ways to apply colors to elements:

    1. Color Keywords: CSS supports a set of predefined color keywords like "red," "blue," "green," etc.
    
    2. Hexadecimal Notation: Colors can be specified using a hexadecimal notation such as "#RRGGBB," where RR represents the red component, GG represents the green component, and BB represents the blue component.
    
    3. RGB Function: You can use the 'rgb()' function to specify colors using the red, green, and blue values. For example, 'rgb(255, 0, 0)' represents pure red.
    
    4. RGBA Function: Similar to 'rgb()', the 'rgba()' function allows you to specify colors with an additional alpha (transparency) value. For example, 'rgba(255, 0, 0, 0.5)' represents translucent red.
    
    5. HSL Function: The 'hsl()' function lets you define colors using hue, saturation, and lightness values. For example, 'hsl(0, 100%, 50%)' represents pure red.
    
    6. HSLA Function: Similar to 'hsl()', the 'hsla()' function allows you to specify colors with an additional alpha (transparency) value.
    
    7. Color Names: Besides keywords, CSS also supports color names like "aqua," "fuchsia," "yellow," etc.
    
    These various methods provide flexibility in defining colors to meet your design requirements.`,
  },
  {
    id: 4,
    question:
      "A collection of data containing both properties and methods is called...",
    options: ["Tag", "Selector", "Object", "Class"],
    answer: "Object",
    explanation:
      "A collection of data containing both properties and methods is called an object. Objects are fundamental in object-oriented programming and are used to represent real-world entities or concepts. They encapsulate data and behavior together, allowing for modular and reusable code. Objects can have attributes (properties) that describe their state and methods that define their behavior. By combining properties and methods, objects provide a way to organize and manipulate data in a structured manner.",
  },
  {
    id: 5,
    question:
      "In JavaScript, 'this' refers to the object that ____ the object.",
    options: ["Receives", "Depends", "Owns", "Direct"],
    answer: "Owns",
    explanation:
      "In JavaScript, 'this' refers to the object that owns the object. This means that 'this' refers to the current object that is being accessed or manipulated within the code. It is used to refer to the properties and methods of the object itself.",
  },
];
