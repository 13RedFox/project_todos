import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { Icon } from '../Icon';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  withIcon?: boolean;
  type: 'folders' | 'notes' | 'cancel';
}
export const Button: FC<ButtonProps> = ({
  children,
  className,
  withIcon = false,
  type = 'folders',
}) => {
  return (
    <button className={classNames(styles.button, styles[type], className)}>
      {withIcon && <Icon name="add" className={styles.button__icon} />}
      {children}
    </button>
  );
};

export default Button;
