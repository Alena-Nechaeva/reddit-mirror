import React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { Text } from '../../../Text';
import { EColors } from '../../../Text/EColors';
import { MenuItemsList } from './MenuItemsList';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';
import { useCloseDropOnResize } from '../../../../hooks/useCloseDropOnResize';
import { Icon } from '../../../Icon';
import { EIcons } from '../../../Icon/EIcons';

export function Menu() {
  const [isListOpened, setIsListOpened] = React.useState(false);
  const parentDiv = React.useRef<HTMLDivElement>(null);
  const toggleDropByClick = () => setIsListOpened(!isListOpened);
  const openDropByClick = () => setIsListOpened(true);
  const closeDropByClick = () => setIsListOpened(false);

  useOutsideClick(parentDiv, closeDropByClick);
  useCloseDropOnResize(closeDropByClick);

  return (
    <div
      className={styles.menu}
      ref={parentDiv}
    >
      <Dropdown
        button={
          <button
            className={styles.menuButton}
            onClick={toggleDropByClick}
          >
            <Icon
              name={EIcons.menu}
              size={20}
            />
          </button>
        }
        isOpen={isListOpened}
      >
        <div className={styles.dropdown}>
          <MenuItemsList postId="34" />
          <button
            className={`${styles.closeButton} ${styles.hideElem}`}
            onClick={closeDropByClick}
          >
            <Text
              mobileSize={12}
              size={14}
              color={EColors.grey66}
            >
              Close
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
