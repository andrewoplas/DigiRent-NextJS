/* eslint-disable jsx-a11y/label-has-associated-control */
import cn from 'classnames';

export const Input = ({ value, onChange, placeholder, icon, classNames, inputClassNames }) => (
  <div className={cn('field-group', classNames)}>
    <div className="field-icon">
      <img src={`/images/icon/${icon}.svg`} alt="icon" />
    </div>
    <span className="field-divider" />
    <input
      className={inputClassNames}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => (onChange ? onChange(e.target.value) : null)}
    />
  </div>
);

Input.defaultProps = {
  placeholder: '',
  onValue: 'true',
  offValue: 'false',
};
