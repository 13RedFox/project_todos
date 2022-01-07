import { FC } from 'react';

export interface IconProps {
  name: string;
  className?: string;
}

export const Icon: FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case 'add': {
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
        </svg>
      );
    }
    default: {
      return null;
    }
  }
};

export default Icon;
