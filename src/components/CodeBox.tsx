"use client";
import React, { useState } from 'react'
import javascript from 'highlight.js/lib/languages/javascript'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'
import { CodeBoxProps } from '@/types/Sidebar';

hljs.registerLanguage('javascript', javascript);

const CodeBox = ({ codeString }: CodeBoxProps) => {
    const [copied, setCopied] = useState(false);

    const highlightedCode = hljs.highlight(codeString, {
        language: 'javascript'
    }).value;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(codeString);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <>
            <br />
            <div className="mx-auto w-full min-h-[400px] overflow-auto border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-800 relative">
                <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 px-2 py-1 rounded text-sm bg-gray-700 hover:bg-gray-600 text-gray-200 transition-colors duration-200"
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
                <pre className="whitespace-pre m-0">
                    <code 
                        className="language-javascript text-gray-200"
                        dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    />
                </pre>
            </div>
        </>
    )
}

export default CodeBox