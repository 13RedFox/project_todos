import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { Icon } from '../Icon';

export interface ButtonProps {
  children?: ReactNode;
  value?: string;
  className?: string;
  withIcon?: boolean;
  types: 'folders' | 'notes' | 'cancel';
  type: 'button' | 'submit';
}
export const Button: FC<ButtonProps> = ({
  children,
  className,
  withIcon = false,
  types = 'folders',
  type = 'button',
  value,
}) => {
  return (
    <>
      {type === 'button' ? (
        <button type={type} className={classNames(styles.button, styles[types], className)}>
          {withIcon && <Icon name="add" className={styles.button__icon} />}
          {children}
        </button>
      ) : (
        <input
          className={classNames(styles.button, styles[types], className)}
          type={type}
          value={value}
        />
      )}
    </>
  );
};

export default Button;
