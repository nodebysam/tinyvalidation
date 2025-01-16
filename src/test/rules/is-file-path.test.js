/**
 * TINY VALIDATION
 * A minimalistic NodeJS data validation library
 * 
 * By Sam Wilcox <wilcox.sam@gmail.com>
 * 
 * This library is relased under the GNU v3.0 license.
 * For further details, see the LICENSE file.
 */

const test = require('ava');
const isFilePath = require('../../rules/is-file-path');

test('isFilePath › should return true for valid file paths', t => {
    t.true(isFilePath('/file'));                   // Single file with no extension
    t.true(isFilePath('/folder/file'));            // Valid folder/file path
    t.true(isFilePath('/folder/subfolder/file.txt')); // Valid nested file path with extension
    t.true(isFilePath('/folder/file-name.txt'));    // Valid path with a hyphen in the filename
    t.true(isFilePath('/folder/file123.txt'));      // Valid path with numbers in the filename
    t.true(isFilePath('/folder/file-with-dash.txt')); // Valid path with dash in filename
    t.true(isFilePath('/folder/.hiddenfile'));      // Hidden file (dot file)
    t.true(isFilePath('/folder/subfolder/.hiddenfile')); // Nested hidden file
    t.true(isFilePath('/folder/subfolder/123file')); // Valid path with numbers
    t.true(isFilePath('/file.txt')); // Valid file with extension
    t.true(isFilePath('/folder/file.txt')); // Valid file in folder
});

test('isFilePath › should return false for invalid file paths', t => {
    t.false(isFilePath('file'));                   // Missing leading slash
    t.false(isFilePath('/folder/'));                // Path ending with slash without a file
    t.false(isFilePath('/folder/file/'));           // Path with folder ending without extension
    t.false(isFilePath('/folder/fil@e.txt'));       // Invalid special character "@" in the filename
    t.false(isFilePath('/folder/fil#e.txt'));      // Invalid special character "#" in the filename
    t.false(isFilePath('/folder/fil$e.txt'));      // Invalid special character "$" in the filename
    t.false(isFilePath('/folder/fil^e.txt'));      // Invalid special character "^" in the filename
    t.false(isFilePath('/folder/./file.txt'));      // Invalid use of dot (./)
    t.false(isFilePath('/folder/filename/./file.txt')); // Invalid use of dot in the middle
    t.false(isFilePath('/folder/fil..e.txt'));     // Invalid use of double dot
});

test('isFilePath › should handle edge cases correctly', t => {
    t.true(isFilePath('/')); // A single root slash
    t.true(isFilePath('/file.txt')); // Single file with an extension
    t.true(isFilePath('/folder/.hiddenfile')); // Hidden file (starts with dot)
    t.true(isFilePath('/folder/subfolder/123file')); // Valid path with numbers in the filename
    t.false(isFilePath('/folder/./file.txt'));      // Invalid use of dot (./)
    t.false(isFilePath('/folder/filename/./file.txt')); // Invalid use of dot in the middle
});