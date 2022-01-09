import React, { FC, useState } from 'react';
import { Button } from '..';
import styles from './Popup.module.scss';

interface PopupProps {
  placeholder: string;
}

export const Popup: FC<PopupProps> = ({ placeholder }) => {
  const [isSelected, setIsSelected] = useState<string>('#c9d1d3');
  const [folderName, setFolderName] = useState<string>('');

  const radioColor: { color: string; isChecked: boolean }[] = [
    { color: '#c9d1d3', isChecked: true },
    { color: '#42b883', isChecked: false },
    { color: '#64c4ed', isChecked: false },
    { color: '#ffbbcc', isChecked: false },
    { color: '#b6e6bd', isChecked: false },
    { color: '#c355f5', isChecked: false },
    { color: '#09011a', isChecked: false },
    { color: '#ff6464', isChecked: false },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`
    Folder name: ${folderName},
    Folder Color: ${isSelected}
    `);
  };

  return (
    <form className={styles.popup} onSubmit={handleSubmit}>
      <input
        className={styles.popup__input}
        type="text"
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFolderName(e.target.value)}
      />
      <div className={styles.popup__wrapper}>
        {(radioColor || []).map((color) => (
          <div className={styles.popup__wrapper_radio} key={color.color}>
            <input
              className={styles.input}
              type="radio"
              name="radio"
              value={color.color}
              checked={isSelected === color.color}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setIsSelected((prevState) => e.target.value)
              }
            />
            <label
              className={styles.label}
              style={{ backgroundColor: color.color }}
              htmlFor={color.color}
            />
          </div>
        ))}
      </div>
      <Button className={styles.popup__button} type="submit" types="notes" value="Добавить" />
    </form>
  );
};
