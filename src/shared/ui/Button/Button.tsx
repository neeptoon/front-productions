/* eslint-disable react/button-has-type */
import { type ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';

export const ThemeButton = {
    CLEAR: 'clear',
} as const;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  theme?: string
}

export const Button = ({
    className, children, theme, ...otherProps
}: ButtonProps) => (
    <button className={classNames(cls.button, {}, [className, cls[theme]])} {...otherProps}>
        {children}
    </button>
);
