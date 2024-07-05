import {
  Children,
  cloneElement,
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
} from 'react';

import useId from '@/hooks/useId';

interface Props extends ComponentProps<'div'> {
  label?: ReactNode;
  children: ReactElement;
}

export function TextField({ label, children, ...props }: Props) {
  const child = Children.only(children);
  const id = child.props.id ?? useId();

  return (
    <div {...props}>
      <label htmlFor={id}>{label}</label>
      {cloneElement(child, {
        id,
        ...child.props,
      })}
    </div>
  );
}

interface InputProps extends ComponentProps<'input'> {
  className?: string;
}

TextField.Input = forwardRef(
  (
    { className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        className={`w-full p-2 rounded-md border border-gray-300 rounded-md p-2 outline-none focus:border-primary ${className}`}
        {...props}
      />
    );
  },
);

interface TextareaProps extends ComponentProps<'textarea'> {
  className?: string;
}

TextField.Textarea = forwardRef(
  (
    { className, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <textarea
        ref={ref}
        className={`w-full p-2 rounded-md border border-gray-300 rounded-md p-2 outline-none focus:border-primary resize-none ${className}`}
        {...props}
      />
    );
  },
);
