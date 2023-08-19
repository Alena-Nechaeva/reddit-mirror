import React from 'react';
import styles from './sortblock.css';
import { Dropdown } from '../../Dropdown';
import { generateId } from '../../utils/react/generateRandomString';
import { GenericList } from '../../GenericList';
import { merge } from '../../utils/js/merge';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { EColors } from '../../Text/EColors';
import { EIcons } from '../../Icon/EIcons';
import { useCloseDropOnResize } from '../../../hooks/useCloseDropOnResize';

let LIST = [
  { value: 'Лучшие', action: 'best' },
  { value: 'Жаркие', action: 'hot' },
  { value: 'Новые', action: 'new' },
  { value: 'Топовые', action: 'top' },
  { value: 'Длительные', action: 'long' },
]
  .map((item) => generateId(item))
  .map((item) => merge(item)({ As: 'li' as const, className: `${styles.dropdownElem} ${styles[item.action]}` }));

export function SortBlock() {
  const [index, setIndex] = React.useState(0);
  const [list, setList] = React.useState(LIST);
  const [isListOpened, setIsListOpened] = React.useState(false);
  const parent = React.useRef<HTMLDivElement>(null);
  const toggleDropByClick = () => setIsListOpened(!isListOpened);
  const openDropByClick = () => setIsListOpened(true);
  const closeDropByClick = () => setIsListOpened(false);

  function handleItemClick(id: string) {
    let index = list.findIndex((item) => item.id === id);
    setIndex(index);
    closeDropByClick();
  }

  useOutsideClick(parent, closeDropByClick);
  useCloseDropOnResize(closeDropByClick);

  return (
    <div
      className={styles.sortBlock}
      ref={parent}
    >
      <Dropdown
        button={
          <button
            className={styles.selectBtn}
            onClick={toggleDropByClick}
          >
            {list[index].value}
          </button>
        }
        isOpen={isListOpened}
      >
        <ul className={styles.sortList}>
          <GenericList
            list={list.map((item) => {
              const currentIcon = item.action as EIcons;
              return merge(item)({
                As: 'li' as const,
                size: 14,
                mobileSize: 12,
                color: EColors.grey99,
                onClick: handleItemClick,
                className: styles.dropdownElem,
                isIcon: true,
                iconName: currentIcon,
                iconSize: 16,
              });
            })}
          />
        </ul>
      </Dropdown>
    </div>
  );
}
