// app/components/TipTapContent.tsx
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { useEffect, useState } from "react";

interface TipTapContentProps {
  content: string;
  className?: string;
}

export default function TipTapContent({ content, className = "" }: TipTapContentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Configuración limpia para solo lectura
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          target: "_blank",
          rel: "noopener noreferrer",
          class: "text-blue-600 hover:text-blue-800 underline transition-colors",
        },
      }),
    ],
    content: content || "",
    editable: false, // IMPORTANTE: Solo lectura
    immediatelyRender: false,
  });

  if (!mounted || !editor) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div className={`tiptap-content ${className}`}>
      <EditorContent editor={editor} />
      <style jsx global>{`
        .tiptap-content .ProseMirror {
          outline: none;
        }
        
        .tiptap-content h1 {
          font-size: 2.25rem; /* text-4xl */
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .tiptap-content h2 {
          font-size: 1.875rem; /* text-3xl */
          font-weight: bold;
          margin-top: 1.75rem;
          margin-bottom: 0.875rem;
        }
        
        .tiptap-content h3 {
          font-size: 1.5rem; /* text-2xl */
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        
        .tiptap-content p {
          margin-bottom: 1rem;
          line-height: 1.7;
        }
        
        .tiptap-content strong {
          font-weight: bold;
        }
        
        .tiptap-content em {
          font-style: italic;
        }
        
        .tiptap-content s, .tiptap-content strike {
          text-decoration: line-through;
        }
        
        .tiptap-content ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .tiptap-content ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .tiptap-content li {
          margin-bottom: 0.5rem;
        }
        
        .tiptap-content li > p {
          margin-bottom: 0.25rem;
        }
        
        .tiptap-content a {
          color: #2563eb; /* text-blue-600 */
          text-decoration: underline;
          transition: color 0.2s;
        }
        
        .tiptap-content a:hover {
          color: #1d4ed8; /* text-blue-700 */
          text-decoration: none;
        }
        
        .tiptap-content blockquote {
          border-left: 4px solid #e5e7eb; /* border-gray-300 */
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #6b7280; /* text-gray-500 */
        }
        
        .tiptap-content code {
          background-color: #f3f4f6; /* bg-gray-100 */
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.875rem;
        }
        
        .tiptap-content pre {
          background-color: #1f2937; /* bg-gray-800 */
          color: #f9fafb; /* text-gray-50 */
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        
        .tiptap-content pre code {
          background-color: transparent;
          color: inherit;
          padding: 0;
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
}