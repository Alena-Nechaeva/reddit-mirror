import React from 'react';
import styles from './menuitemslist.css';
import classNames from 'classnames';
import { LIST as listBase } from './dropdown-data';
import { generateId } from '../../../../utils/react/generateRandomString';
import { merge } from '../../../../utils/js/merge';
import { GenericList } from '../../../../GenericList';
import { EColors } from '../../../../Text/EColors';
import { EIcons } from '../../../../Icon/EIcons';

interface IMenuItemsListProps {
  postId: string;
}

const LIST = listBase.map(generateId);

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  const mobileHiddenList = ['comments', 'share', 'save'];
  const [list, setList] = React.useState(LIST);

  function handleItemClick(id: string) {
    let item = list.find((item) => item.id === id);
    if (item !== undefined) {
      switch (item.action) {
        default:
          console.log(item.action);
          break;
      }
    } else {
      throw new Error('action is undefined!!');
    }
  }

  return (
    <ul className={styles.menuItemsList}>
      <GenericList
        list={list.map((item) => {
          const isHidden = mobileHiddenList.includes(item.action);
          const currentIcon = item.action as EIcons;
          const classes = classNames(styles.menuItem, { [styles.hideElem]: isHidden });
          return merge(item)({
            As: 'li' as const,
            size: 14,
            mobileSize: 12,
            color: EColors.grey99,
            onClick: handleItemClick,
            className: classes,
            dividerClassName: styles.divider,
            isIcon: true,
            iconName: currentIcon,
            iconSize: 16,
          });
        })}
      />
    </ul>
  );
}

//all lis
// return (
//   <ul className={styles.menuItemsList}>
//     <li
//       className={`${styles.menuItem} ${styles.hideElem}`}
//       onClick={() => console.log(postId)}
//     >
//       <CommentIcon />
//       <Text
//         size={12}
//         color={EColors.grey99}
//       >
//         Comments
//       </Text>
//     </li>
//     <div className={`${styles.divider} ${styles.hideElem}`} />
//     <li className={`${styles.menuItem} ${styles.hideElem}`}>
//       <ShareIcon />
//       <Text
//         size={12}
//         color={EColors.grey99}
//       >
//         Share
//       </Text>
//     </li>
//     <div className={`${styles.divider} ${styles.hideElem}`} />
//     <li className={styles.menuItem}>
//       <BlockIcon />
//       <Text
//         size={12}
//         color={EColors.grey99}
//       >
//         Hide
//       </Text>
//     </li>
//     <div className={styles.divider} />
//     <li className={`${styles.menuItem} ${styles.hideElem}`}>
//       <SaveIcon />
//       <Text
//         size={12}
//         color={EColors.grey99}
//       >
//         Save
//       </Text>
//     </li>
//     <div className={`${styles.divider} ${styles.hideElem}`} />
//     <li className={styles.menuItem}>
//       <WarningIcon />
//       <Text
//         size={12}
//         color={EColors.grey99}
//       >
//         Complain
//       </Text>
//     </li>
//   </ul>
// );
