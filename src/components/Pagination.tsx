import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../hooks/usePagination';

import arrowLeft from '../assets/icons/arrowLeft.svg';

const defaultLiClassName = 'flex items-center justify-center border-r !ml-0 size-8 hover:bg-[#E6EAF5] cursor-pointer';

interface Props {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

const Pagination: React.FC<Props> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}) => {

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames(
        'flex justify-center items-center space-x-2 rounded-md border border-[#E6EAF5] w-fit',
        className
      )}
    >
      <li
        className={classnames(defaultLiClassName, {
          'pointer-events-none': currentPage === 1
        })}
        onClick={onPrevious}
      >
        <img src={arrowLeft} alt="Arrow left" className="h-5" />
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className={classnames(defaultLiClassName, 'pointer-events-none')}>&#8230;</li>;
        }

        return (
          <li
            className={classnames(defaultLiClassName, {
              'bg-[#E6EAF5]': pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames(defaultLiClassName, 'border-r-0', {
          'pointer-events-none': currentPage === lastPage
        })}
        onClick={onNext}
      >
        <img src={arrowLeft} alt="Arrow right" className="rotate-180 h-5" />
      </li>
    </ul>
  );
};

export default Pagination;
