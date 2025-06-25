var editor;



require(["./vs/editor/editor.main"], () => {

    function getDependencyProposals() {
        return [
            {
                label: 'run_secure_function',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'run_secure_function()',
                detail: 'Runs a secure function',
                documentation: 'This function runs with elevated security checks.'
            },
            {
                label: 'validate_input',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'validate_input()',
                detail: 'Validates the input',
                documentation: 'This function checks if the input meets all the validation criteria.'
            },
            {
                label: 'while true do',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'while true do\n\t-- body\nend',
                detail: 'Creates a while loop that runs indefinitely',
                documentation: 'This snippet creates a loop that will run indefinitely. Remember to add a break condition to avoid infinite loops.'
            },
            {
                label: 'if ... then',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'if condition then\n\t-- body\nend',
                detail: 'Creates an if statement',
                documentation: 'This snippet creates a conditional statement. Replace `condition` with your condition and `-- body` with the code to execute if the condition is true.'
            },
            {
                label: 'for i = 1, n do',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: 'for i = 1, n do\n\t-- body\nend',
                detail: 'Creates a for loop',
                documentation: 'This snippet creates a for loop that iterates from 1 to n. Replace `n` with your upper limit and `-- body` with the code to execute on each iteration.'
            },
            {
                label: 'printidentity',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'printidentity()',
                detail: 'Prints the identity of the value',
                documentation: 'This function prints the identity of the provided value, useful for debugging and ensuring that the value is as expected.'
            },
            {
                label: 'function',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'function name(params)\n\t-- body\nend',
                detail: 'Defines a function',
                documentation: 'This snippet creates a function definition. Replace `name` with the function name and `params` with the parameters list.'
            },
            {
                label: 'local variable',
                kind: monaco.languages.CompletionItemKind.Variable,
                insertText: 'local name = value',
                detail: 'Defines a local variable',
                documentation: 'This snippet defines a local variable. Replace `name` with the variable name and `value` with its initial value.'
            },
            {
                label: 'return',
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: 'return value',
                detail: 'Returns a value from a function',
                documentation: 'This snippet returns a value from a function. Replace `value` with the value you want to return.'
            },
            {
                label: 'table.insert',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'table.insert(table, value)',
                detail: 'Inserts a value into a table',
                documentation: 'This function inserts a value into the specified table at the given position.'
            },
            {
                label: 'table.remove',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'table.remove(table, index)',
                detail: 'Removes a value from a table',
                documentation: 'This function removes a value from the specified table at the given index.'
            },
            {
                label: 'string.gsub',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'string.gsub(string, pattern, replace)',
                detail: 'Substitutes occurrences of a pattern in a string',
                documentation: 'This function performs a global search and replace on the string using the specified pattern and replacement.'
            },
            {
                label: 'math.random',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'math.random(low, high)',
                detail: 'Generates a random number',
                documentation: 'This function generates a random number between the specified low and high values.'
            },
            {
                label: 'os.time',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'os.time()',
                detail: 'Returns the current time',
                documentation: 'This function returns the current time as the number of seconds since the epoch (January 1, 1970).'
            },
            {
                label: 'io.open',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'io.open(filename, mode)',
                detail: 'Opens a file',
                documentation: 'This function opens a file with the specified filename and mode (e.g., "r" for read, "w" for write).'
            },
            {
                label: 'Unc()',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'Unc()',
                detail: 'Unc Test',
                documentation: 'Custom func on RezWare'
            },
            {
                label: 'LoadDex()',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'LoadDex()',
                detail: 'Open Dark Dex',
                documentation: 'Custom func on RezWare'
            },
            {
                label: 'true',
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: 'true',
                detail: 'Boolean true value',
                documentation: 'Represents the boolean value true.'
            },
            {
                label: 'false',
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: 'false',
                detail: 'Boolean false value',
                documentation: 'Represents the boolean value false.'
            },
            {
                label: 'nil',
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: 'nil',
                detail: 'Represents a null value',
                documentation: 'The nil value represents the absence of a value.'
            },
            // Additional Lua-specific functions and constructs
            {
                label: 'table.concat',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'table.concat(table, sep)',
                detail: 'Concatenates elements of a table',
                documentation: 'This function concatenates the elements of a table into a string with an optional separator.'
            },
            {
                label: 'string.match',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'string.match(string, pattern)',
                detail: 'Finds the first match of a pattern in a string',
                documentation: 'This function searches for a pattern in a string and returns the first match.'
            },
            {
                label: 'string.find',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'string.find(string, pattern)',
                detail: 'Finds the start and end indices of a pattern in a string',
                documentation: 'This function searches for a pattern in a string and returns the start and end indices of the match.'
            },
            {
                label: 'string.sub',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'string.sub(string, start, [end])',
                detail: 'Extracts a substring',
                documentation: 'This function extracts a substring from the given string, starting from the `start` index and optionally ending at the `end` index.'
            },
            {
                label: 'table.sort',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'table.sort(table, [comp])',
                detail: 'Sorts the elements of a table',
                documentation: 'This function sorts the elements of a table in-place. An optional comparison function can be provided.'
            },
            {
                label: 'debug.getinfo',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'debug.getinfo([thread,] func)',
                detail: 'Retrieves information about a function',
                documentation: 'This function retrieves information about a function or a stack level, such as its name and line number.'
            },
            {
                label: 'debug.getlocal',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'debug.getlocal([thread,] level, index)',
                detail: 'Retrieves the local variable name and value',
                documentation: 'This function retrieves the name and value of a local variable at a specific stack level and index.'
            },
            {
                label: 'coroutine.create',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'coroutine.create(f)',
                detail: 'Creates a coroutine',
                documentation: 'This function creates a new coroutine with the given function `f`.'
            },

            {
                label: 'print',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'print(${0})', // Cursor will move outside the parentheses
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                detail: 'Outputs a message to the console or log.',
                documentation: 'Use this function to print messages to the console. Example: print("Hello, world!").',
            },
            
            
            {
                label: 'coroutine.resume',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'coroutine.resume(co, ...)'
            },
            {
                label: 'coroutine.wrap',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'coroutine.wrap(f)',
                detail: 'Wraps a function into a coroutine',
                documentation: 'This function creates a coroutine from a function and returns a function that can be used to resume the coroutine.'
            },
            {
                label: 'coroutine.yield',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: 'coroutine.yield(...)',
                detail: 'Suspends the coroutine',
                documentation: 'This function suspends the execution of the coroutine, returning control to the coroutine’s caller.'
            },

            // Add more functions and constructs as needed
        ];
    }
    
    const robloxAPI = [
        { label: 'Instance', kind: monaco.languages.CompletionItemKind.Class, insertText: 'Instance', detail: 'Class Instance' },
        { label: 'Part', kind: monaco.languages.CompletionItemKind.Class, insertText: 'Part', detail: 'Class Part' },
        { label: 'workspace', kind: monaco.languages.CompletionItemKind.Variable, insertText: 'workspace', detail: 'Global workspace object' },
        { label: 'new', kind: monaco.languages.CompletionItemKind.Method, insertText: 'new()', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, detail: 'Creates a new instance' },
        { label: 'CFrame', kind: monaco.languages.CompletionItemKind.Class, insertText: 'CFrame', detail: 'CFrame object' },
        { label: 'Vector3', kind: monaco.languages.CompletionItemKind.Class, insertText: 'Vector3', detail: 'Vector3 object' },
        { label: 'wait', kind: monaco.languages.CompletionItemKind.Function, insertText: 'wait(${1})', detail: 'Yields the thread for a certain number of seconds' },
        { label: 'game', kind: monaco.languages.CompletionItemKind.Variable, insertText: 'game', detail: 'Global game object' },
        { label: 'Vector2', kind: monaco.languages.CompletionItemKind.Class, insertText: 'Vector2', detail: 'Vector2 object' },
        { label: 'SaveInstance', kind: monaco.languages.CompletionItemKind.Class, insertText: 'saveinstance()', detail: 'SaveInstance' },
        { label: 'Color3', kind: monaco.languages.CompletionItemKind.Class, insertText: 'Color3', detail: 'Color3 object' },
        { label: 'BrickColor', kind: monaco.languages.CompletionItemKind.Class, insertText: 'BrickColor', detail: 'BrickColor object' },
        { label: 'Model', kind: monaco.languages.CompletionItemKind.Class, insertText: 'Model', detail: 'Class Model' },
        { label: 'Humanoid', kind: monaco.languages.CompletionItemKind.Class, insertText: 'Humanoid', detail: 'Class Humanoid' },
        { label: 'Player', kind: monaco.languages.CompletionItemKind.Class, insertText: 'Player', detail: 'Represents a player in the game' },
        { label: 'LocalPlayer', kind: monaco.languages.CompletionItemKind.Variable, insertText: 'game.Players.LocalPlayer', detail: 'Reference to the local player' },
        { label: 'Touched', kind: monaco.languages.CompletionItemKind.Event, insertText: 'Touched:Connect(function(${1})\n\t${2:-- code}\nend)', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, detail: 'Event for detecting touch' },
        { label: 'TweenService', kind: monaco.languages.CompletionItemKind.Class, insertText: 'TweenService', detail: 'Service for creating tweens' },
        { label: 'RemoteEvent', kind: monaco.languages.CompletionItemKind.Class, insertText: 'RemoteEvent', detail: 'Class RemoteEvent' },
        { label: 'RemoteFunction', kind: monaco.languages.CompletionItemKind.Class, insertText: 'RemoteFunction', detail: 'Class RemoteFunction' },
        { label: 'Players', kind: monaco.languages.CompletionItemKind.Variable, insertText: 'game.Players', detail: 'The Players service' },
        { label: 'Character', kind: monaco.languages.CompletionItemKind.Property, insertText: 'LocalPlayer.Character', detail: 'The character model of a player' },
        { label: 'Backpack', kind: monaco.languages.CompletionItemKind.Property, insertText: 'LocalPlayer.Backpack', detail: 'The player\'s inventory' },
        { label: 'Camera', kind: monaco.languages.CompletionItemKind.Property, insertText: 'workspace.CurrentCamera', detail: 'Reference to the current camera' },
        { label: 'math.random', kind: monaco.languages.CompletionItemKind.Function, insertText: 'math.random(${1}, ${2})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, detail: 'Returns a random number between min and max' },
        { label: 'pairs', kind: monaco.languages.CompletionItemKind.Function, insertText: 'for ${1}, ${2} in pairs(${3}) do\n\t${4:-- code}\nend', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, detail: 'Iterates over a table' },
        { label: 'ipairs', kind: monaco.languages.CompletionItemKind.Function, insertText: 'for ${1}, ${2} in ipairs(${3}) do\n\t${4:-- code}\nend', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, detail: 'Iterates over a table with integer keys' },
        { label: 'table.insert', kind: monaco.languages.CompletionItemKind.Function, insertText: 'table.insert(${1}, ${2})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, detail: 'Inserts a value into a table' },
        { label: 'table.remove', kind: monaco.languages.CompletionItemKind.Function, insertText: 'table.remove(${1}, ${2})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, detail: 'Removes a value from a table' },
        { label: 'table.sort', kind: monaco.languages.CompletionItemKind.Function, insertText: 'table.sort(${1}, ${2:function(a, b) return a < b end})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, detail: 'Sorts a table' },
        { label: 'string.find', kind: monaco.languages.CompletionItemKind.Function, insertText: 'string.find(${1}, ${2})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, detail: 'Finds a pattern in a string' },
        { label: 'string.sub', kind: monaco.languages.CompletionItemKind.Function, insertText: 'string.sub(${1}, ${2}, ${3})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, detail: 'Returns a substring' },
        { label: 'UserInputService', kind: monaco.languages.CompletionItemKind.Class, insertText: 'game:GetService("UserInputService")', detail: 'Service for handling input' },
        { label: 'RunService', kind: monaco.languages.CompletionItemKind.Class, insertText: 'game:GetService("RunService")', detail: 'Service for game loops and running steps' },
        { label: 'ReplicatedStorage', kind: monaco.languages.CompletionItemKind.Variable, insertText: 'game:GetService("ReplicatedStorage")', detail: 'Service for shared objects between client and server' },
        { label: 'StarterGui', kind: monaco.languages.CompletionItemKind.Variable, insertText: 'game:GetService("StarterGui")', detail: 'Service for controlling player GUI elements' },
    ];
    
    
    
    
    
// Flag to toggle Roblox API suggestions
let robloxAPIEnabled = true;

// Function to toggle Roblox API on and off
function toggleRobloxAPI() {
    robloxAPIEnabled = !robloxAPIEnabled;
    console.log(`Roblox API Suggestions ${robloxAPIEnabled ? 'Enabled' : 'Disabled'}`);
}

// Register Monaco completion item provider
monaco.languages.registerCompletionItemProvider('lua', {
    provideCompletionItems: function(model, position) {
        var word = model.getWordUntilPosition(position);
        var range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn
        };

        // Combine suggestions based on robloxAPIEnabled flag
        var suggestions = [
            ...getDependencyProposals().map(suggestion => ({
                ...suggestion,
                range: range
            })),
            ...(robloxAPIEnabled ? robloxAPI.map(item => ({
                ...item,
                range: range
            })) : [])  // Add robloxAPI only if enabled
        ];

        return { suggestions: suggestions };
    }
});


        

monaco.editor.defineTheme('Volt', {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { "token": "", "foreground": "d4d4d4", "background": "272727" }, // Main background
        { "token": "comment", "foreground": "559599" }, // Comments in green
        { "token": "keyword", "foreground": "569cd6" }, // Keywords in blue
        { "token": "number", "foreground": "b5cea8" }, // Numbers in a light greenish color
        { "token": "string", "foreground": "ce9178" }, // Strings in a reddish color
        { "token": "operator", "foreground": "d4d4d4" }, // Operators in white
        { "token": "variable", "foreground": "7e75b2" }, // Variables in purple
        { "token": "function", "foreground": "aad7dc" } // Functions in light yellowish color
    ],
    colors: {
        "editor.foreground": "#d4d4d4",                 // Text color
        "editor.background": "#181a1b",                  // Updated background color
        "editor.selectionBackground": "#3c799a5a",         // Selection background color
        "editor.lineHighlightBackground": "#232729",     // Updated highlighting of the current line
        "editorCursor.foreground": "#aeafad",            // Cursor color
        "editorWhitespace.foreground": "#404040",        // Whitespace markers color
        "editorIndentGuide.background": "#404040",       // Indent guide lines color
        "editorIndentGuide.activeBackground": "#707070", // Active indent guide color

        // Tooltip settings for hover and IntelliSense popups
        "editorHoverWidget.background": "#181a1b",       // Updated background color of the hover widget (tooltips)
        "editorHoverWidget.foreground": "#d4d4d4",       // Foreground color for text in tooltips
        "editorHoverWidget.border": "#3a3d41",           // Border color of the hover widget
        "editorSuggestWidget.background": "#2e2e2e",     // Background for IntelliSense suggestions
        "editorSuggestWidget.foreground": "#d4d4d4",     // Foreground (text color) for IntelliSense suggestions
        "editorSuggestWidget.selectedBackground": "#3a3d41", // Selected suggestion background in IntelliSense
        "editorSuggestWidget.highlightForeground": "#ffffff", // Highlight color in suggestions
        "editorSuggestWidget.border": "#3a3d41",         // Border color for the IntelliSense suggestions popup
    
        // Highlight important text in tooltips and suggestions
        "editorHoverWidget.highlightForeground": "#ffcc00",  // Highlight color for important text in tooltips
        "editorSuggestWidget.selectedForeground": "#ffffff",  // Foreground color for the selected item in IntelliSense
        "editorSuggestWidget.selectedBorder": "#ffcc00" // Highlight selected item border
    }
});


    


editor = monaco.editor.create(document.getElementById("container"), {
    value: `-- getvoltage.xyz`,
    language: 'lua',
    theme: 'Volt', // Default initial theme
    smoothScrolling: true,
    scrollBeyondLastLine: false,
    minimap: { enabled: false },
    renderWhitespace: 'none',
    wordWrap: 'off',
    fontLigatures: false,
    automaticLayout: true,
    lineNumbersMinChars: 2,
    cursorBlinking: 'expand',
    cursorSmoothCaretAnimation: true,
    minimap: {
        enabled: true // Disable the minimap if you want a cleaner look
    },
    scrollbar: {
        vertical: 'visible',
        horizontal: 'hidden'
    },
    suggest: {
        snippetsPreventQuickSuggestions: false,
        showIcons: true
    },
    quickSuggestions: {
        other: true,
        comments: true,
        strings: true
    },
    quickSuggestionsDelay: 10,
    parameterHints: {
        enabled: true
    }
});

});

// Добавляем обработку для видимости окна с подсказками
const suggestWidget = document.querySelector('.monaco-editor .suggest-widget');

// Наблюдатель за изменением стиля окна с подсказками
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
            if (suggestWidget.classList.contains('visible')) {
                suggestWidget.style.opacity = '1'; // Плавное появление
            } else {
                suggestWidget.style.opacity = '0'; // Скрытие
            }
        }
    });
});

      // Добавляем обработчик события на изменение текста
      editor.onDidChangeModelContent((e) => {
        const position = editor.getPosition();
        const model = editor.getModel();
        const currentLine = model.getLineContent(position.lineNumber);

        // Проверяем, есть ли в строке `:sad:`
        const sadIndex = currentLine.indexOf(':sad:');
        if (sadIndex !== -1) {
          // Вычисляем диапазон, который нужно заменить на смайлик
          const range = new monaco.Range(
            position.lineNumber, sadIndex + 1,
            position.lineNumber, sadIndex + 6
          );

          // Заменяем текст на смайлик
          editor.executeEdits("", [{
            range: range,
            text: '😢'
          }]);

          // Возвращаем курсор на правильное место
          editor.setPosition({
            lineNumber: position.lineNumber,
            column: sadIndex + 2 // Смещаем курсор на место после смайлика
          });
        }
      });

// Запуск наблюдателя за подсказками
observer.observe(suggestWidget, { attributes: true });

function getValue() {
    return editor.getValue();
}

function setValue(value) {
    return editor.setValue(value);
}

function clearValue() {
    editor.setValue('');
}

editor.onMouseDown(function (event) {
    if (event.event.ctrlKey) {
        const position = editor.getPosition();
        const model = editor.getModel();
        const word = model.getWordAtPosition(position);

        // Check if the clicked word is a URL
        if (word && isValidUrl(word.word)) {
            window.open(word.word, '_blank'); // Open in default browser
        }
    }
});


// Simple URL validation
function isValidUrl(string) {
    const res = string.match(/^(http|https):\/\/[^ "]+$/);
    return res !== null;
}

