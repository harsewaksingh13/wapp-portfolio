import type { FC, HTMLAttributes, Key, ReactElement } from 'react';
import { Children, useId } from 'react';
import invariant from 'tiny-invariant';
import type { Language } from 'prism-react-renderer';
import { Highlight } from 'prism-react-renderer';
import { Button, ButtonCopyClipboard } from '..';

function getLanguageFromClassName(className: string) {
    const match = className.match(/language-(\w+)/);
    return match ? match[1] : '';
}

function isLanguageSupported(lang: string): lang is Language {
    return (
        lang === 'markup' ||
        lang === 'bash' ||
        lang === 'clike' ||
        lang === 'c' ||
        lang === 'cpp' ||
        lang === 'css' ||
        lang === 'javascript' ||
        lang === 'jsx' ||
        lang === 'coffeescript' ||
        lang === 'actionscript' ||
        lang === 'css-extr' ||
        lang === 'diff' ||
        lang === 'git' ||
        lang === 'go' ||
        lang === 'graphql' ||
        lang === 'handlebars' ||
        lang === 'json' ||
        lang === 'less' ||
        lang === 'makefile' ||
        lang === 'markdown' ||
        lang === 'objectivec' ||
        lang === 'ocaml' ||
        lang === 'python' ||
        lang === 'reason' ||
        lang === 'sass' ||
        lang === 'scss' ||
        lang === 'sql' ||
        lang === 'stylus' ||
        lang === 'tsx' ||
        lang === 'typescript' ||
        lang === 'wasm' ||
        lang === 'yaml' ||
        lang ===  ''
    );
}

export const CodeBlock: FC<HTMLAttributes<HTMLPreElement>> = ({ children }) => {
    invariant(!!children, 'children is required');
    const id = useId();
    const childrenArray = Children.toArray(children);
    const codeElement = childrenArray[0] as ReactElement;
    const className = codeElement?.props?.className || '';
    const code = codeElement.props.children || '';
    const lang = getLanguageFromClassName(className);
    invariant(isLanguageSupported(lang), `lang is required for codeblock ${code}`);
    return (
        <div>
            <Highlight code={code} language={lang || 'bash'}>
                {({ className, tokens, getLineProps, getTokenProps } = code) => (
                    <div className="p-2 lg:p-4 rounded font-normal text-sm md:text-base w-full bg-[#2b2b2b] text-white">
                        <div className="flex justify-between">
                            <span className="text-sm">{lang || 'text'}</span>
                            <ButtonCopyClipboard content={code} id={id} title={'Copy'}></ButtonCopyClipboard>
                        </div>
                        <pre className={`overflow-scroll ${className}`} style={{}}>
                            <code className={className} style={{}}>
                                {tokens.map((line: any[], i: Key | null | undefined) => (
                                    <div key={i} {...getLineProps({ line, key: i })} style={{}}>
                                        {line.map((token: any, key: Key | null | undefined) => (
                                            <span key={key} {...getTokenProps({ token, key })} style={{}} />
                                        ))}
                                    </div>
                                ))}
                            </code>
                        </pre>
                    </div>
                )}
            </Highlight>
        </div>
    );
};

