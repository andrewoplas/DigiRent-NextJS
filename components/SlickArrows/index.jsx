import cn from 'classnames';

export const NextArrow = ({ onClick }) => (
  <button type="button" className={cn('button btn-next slick-arrow')} onClick={onClick}>
    <img src="/images/icon/icon-caret-right-white.svg" alt="next arrow" />
  </button>
);

export const PrevArrow = ({ onClick }) => (
  <button type="button" className={cn('button btn-prev slick-arrow')} onClick={onClick}>
    <img src="/images/icon/icon-caret-left-white.svg" alt="next arrow" />
  </button>
);
