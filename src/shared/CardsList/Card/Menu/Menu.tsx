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
import { MenuItemsListPortal } from './MenuItemsListPortal';

export function Menu() {
  const [isListOpened, setIsListOpened] = React.useState(false);
  const [left, setLeft] = React.useState(0);
  const [top, setTop] = React.useState(0);

  const parentDiv = React.useRef<HTMLDivElement>(null);
  const closeDropByClick = () => setIsListOpened(false);

  function handleClickMenuBtn(event: React.SyntheticEvent) {
    setIsListOpened(!isListOpened);
    const buttonRect = event.currentTarget.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    setLeft(buttonRect.left + scrollX - 100);
    setTop(buttonRect.top + scrollY + 60);
  }

  useOutsideClick(parentDiv, closeDropByClick);
  useCloseDropOnResize(closeDropByClick);

  return (
    <div className={styles.menu} ref={parentDiv}>
      <Dropdown
        button={
          <button className={styles.menuButton} onClick={handleClickMenuBtn}>
            <Icon name={EIcons.menu} size={20} />
          </button>
        }
        isOpen={isListOpened}
      >
        <MenuItemsListPortal postId="999" handleClose={closeDropByClick} left={left} top={top} />
      </Dropdown>
    </div>
  );
}

// THIS IS AN ADEQUATE RETURN. PLEASE DON'T TOUCH

// return (
//   <div
//     className={styles.menu}
//     ref={parentDiv}
//   >
//     <Dropdown
//       button={
//         <button
//           className={styles.menuButton}
//           onClick={toggleDropByClick}
//         >
//           <Icon
//             name={EIcons.menu}
//             size={20}
//           />
//         </button>
//       }
//       isOpen={isListOpened}
//     >
//       <div className={styles.dropdown}>
//         <MenuItemsList postId="34" />
//         <button
//           className={`${styles.closeButton} ${styles.hideElem}`}
//           onClick={closeDropByClick}
//         >
//           <Text
//             mobileSize={12}
//             size={14}
//             color={EColors.grey66}
//           >
//             Close
//           </Text>
//         </button>
//       </div>
//     </Dropdown>
//   </div>
// );
