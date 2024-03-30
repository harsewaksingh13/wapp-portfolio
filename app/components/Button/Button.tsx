import { TextProps } from ".."

export interface ButtonProps extends TextProps, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

/**
 * 
 * @param props 
 * @returns Text Button
 */
export const Button = (props: ButtonProps) => {
    return (
        <button {...props} className="text-primaryText active:text-primaryLight hover:text-primary">{props.children}</button>
    )
}

/**
 * 
 * @param props 
 * @returns Round edges bg-primary button 
 */
export const ButtonPrimary = (props: ButtonProps) => {
    return <button id="button-primary" className="rounded-md bg-primary px-6 py-1 font-medium text-white transition-colors hover:bg-primary active:bg-primaryLight hover:text-white">{props.children}</button>
}

import type { ButtonHTMLAttributes } from 'react';
import React, { useCallback, useState } from 'react';
// import { IconButton } from './index';
// import { Tooltip } from '~/components/UI/tooltip';
// import { CopyClipboardSvg } from '~/components/UI/icons';

interface ButtonCopyClipboardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    id: string;
    title: string;
    className?: string;
    content: string;
}

export const ButtonCopyClipboard: React.FC<ButtonCopyClipboardProps> = ({ id, title, content, className = '', ...props }) => {
    const [text, setText] = useState('Copy');

    const handleClick = useCallback(() => {
        navigator.clipboard.writeText(content);
        setText('Copied!');
        setTimeout(() => {
            setText('Copy');
        }, 1300);
    }, [content]);

    return (
        <div className={`relative inline-flex items-center ${className}`}>
            <Tooltip elementId={id} text={text} width="w-10" />
            <IconButton {...props} onClick={handleClick} title={title} id={id}>
                <svg fill="currentColor" className="mr-4 text-primary" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 324.146 324.146">
                    <path d="M230.645,324.146H25.365c-4.418,0-8-3.582-8-8V69.811c0-4.418,3.582-8,8-8h205.279c4.418,0,8,3.582,8,8v15.766h20.236
                                    c4.418,0,8,3.582,8,8s-3.582,8-8,8h-20.236v20.614h10.01c4.418,0,8,3.582,8,8s-3.582,8-8,8h-10.01v20.615h20.236
                                    c4.418,0,8,3.582,8,8s-3.582,8-8,8h-20.236v20.613h10.01c4.418,0,8,3.582,8,8s-3.582,8-8,8h-10.01v104.727
                                    C238.645,320.564,235.063,324.146,230.645,324.146z M33.365,308.146h189.279V77.811H33.365V308.146z M166.297,293.237
                                    c-20.576,0-37.316-16.739-37.316-37.314s16.74-37.314,37.316-37.314c20.574,0,37.313,16.739,37.313,37.314
                                    S186.871,293.237,166.297,293.237z M166.297,234.609c-11.754,0-21.316,9.562-21.316,21.314s9.562,21.314,21.316,21.314
                                    c11.752,0,21.313-9.562,21.313-21.314S178.049,234.609,166.297,234.609z M298.781,262.335h-36.605c-4.418,0-8-3.582-8-8s3.582-8,8-8
                                    h28.605V16H101.502v25.307c0,4.418-3.582,8-8,8s-8-3.582-8-8V8c0-4.418,3.582-8,8-8h205.278c4.418,0,8,3.582,8,8v246.335
                                    C306.781,258.753,303.198,262.335,298.781,262.335z M105.182,235.255H66.215c-4.418,0-8-3.582-8-8s3.582-8,8-8h38.967
                                    c4.418,0,8,3.582,8,8S109.6,235.255,105.182,235.255z M189.795,199.842H66.215c-4.418,0-8-3.582-8-8s3.582-8,8-8h123.58
                                    c4.418,0,8,3.582,8,8S194.213,199.842,189.795,199.842z M189.795,164.429H66.215c-4.418,0-8-3.582-8-8s3.582-8,8-8h123.58
                                    c4.418,0,8,3.582,8,8S194.213,164.429,189.795,164.429z M105.182,129.016H66.215c-4.418,0-8-3.582-8-8s3.582-8,8-8h38.967
                                    c4.418,0,8,3.582,8,8S109.6,129.016,105.182,129.016z"/>
                </svg>

            </IconButton>
        </div>
    );
};

import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';

export interface TooltipProps {
    className?: string;
    text: string;
    width: string;
    elementId: string;
}

const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({ text, elementId, className = '', children }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const element = document.getElementById(elementId);
        const onMouseEnter = () => setShow(true);
        const onMouseLeave = () => setShow(false);
        if (element) {
            element.addEventListener('mouseenter', onMouseEnter);
            element.addEventListener('mouseleave', () => setShow(false));
        }
        return () => {
            document.removeEventListener('mouseenter', onMouseEnter, false);
            document.removeEventListener('mouseleave', onMouseLeave, false);
        };
    }, [elementId]);

    if (!show) {
        return null;
    }

    return (
        <div className={`absolute transform -translate-y-2 bottom-full ${className}`}>
            <div className="bg-black flex relative shadow-xl text-xs rounded-md py-1">
                <span className={`text-white text-xs font-semibold py-1 px-2 block w-full whitespace-nowrap`}>{text}</span>
                <svg
                    className={`absolute text-gray-900 dark:text-gray-100 transform translate-x-full h-2 top-full shadow-xl`}
                    x="0px"
                    y="0px"
                    viewBox="0 0 255 255"
                    xmlSpace="preserve"
                >
                    <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                </svg>
            </div>
            {children}
        </div>
    );
};

const IconButton: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({
    title,
    children,
    className = '',
    ...props
}) => (
    <button
        type="button"
        className={`transform motion-safe:hover:scale-105 ${className}`}
        {...props}
    >
        {children}
    </button>
);