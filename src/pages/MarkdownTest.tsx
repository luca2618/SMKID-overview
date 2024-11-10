import React from 'react';
import MarkdownRenderer from '../MarkdownRenderer';

const markdownContent = `# Markdown Test Page

This page demonstrates all the features of Markdown rendering.

## Text Formatting

*This text is italicized*
**This text is bold**
***This text is bold and italicized***
~~This text is strikethrough~~

## Lists

### Unordered List
* Item 1
* Item 2
  * Nested Item 1
  * Nested Item 2
* Item 3

### Ordered List
1. First Item
2. Second Item
   1. Nested Item 1
   2. Nested Item 2
3. Third Item

## Links and Images

[Visit SMKID's GitHub](https://github.com/SMKIDRaadet)
The image should be in the /public folder
![The logo](/SMKID-Logo.png)

## Blockquotes

> This is a blockquote
> It can span multiple lines
>> And can be nested

## Code

Code block:
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
\`\`\`

## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data     | Data     |
| Row 2    | Data     | Data     |

## Task Lists

- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task

## Horizontal Rule

---

## Footnotes

Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.

## Emoji Support

:smile: :heart: :rocket:

## Mathematical Expressions

When $a \\ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are 
$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$


## Syntax Highlighting

\`\`\`python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
\`\`\`
`;

export function MarkdownTest() {
  return (
    <MarkdownRenderer content={markdownContent} />
  );
}
