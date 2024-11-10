// MarkdownRenderer.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS for math styling

interface MarkdownRendererProps {
    content: string; // Explicitly declare content as a string
  }

export default function MarkdownRenderer({ content } : MarkdownRendererProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-invert prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkEmoji, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            code({ node, inline, className, children, ...props }) {
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
            img({ node, ...props }) {
              return <img className="rounded-lg shadow-lg my-8" {...props} />;
            },
            table({ node, ...props }) {
              return (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-600" {...props} />
                </div>
              );
            },
            th({ node, ...props }) {
              return <th className="px-6 py-3 bg-custom-slate" {...props} />;
            },
            td({ node, ...props }) {
              return <td className="px-6 py-4 whitespace-nowrap" {...props} />;
            }
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
