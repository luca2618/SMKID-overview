import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

![Beautiful Nature](https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1080&q=80)

## Blockquotes

> This is a blockquote
> It can span multiple lines
>> And can be nested

## Code

Inline code: \`const greeting = "Hello World";\`

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

## Custom Styling

<div className="bg-custom-slate p-4 rounded-lg mt-4">
  This is a custom styled div using Tailwind CSS classes
</div>

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-invert prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={atomDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            img({node, ...props}) {
              return <img className="rounded-lg shadow-lg my-8" {...props} />;
            },
            table({node, ...props}) {
              return (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-600" {...props} />
                </div>
              );
            },
            th({node, ...props}) {
              return <th className="px-6 py-3 bg-custom-slate" {...props} />;
            },
            td({node, ...props}) {
              return <td className="px-6 py-4 whitespace-nowrap" {...props} />;
            }
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}