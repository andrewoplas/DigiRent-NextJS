/* eslint-disable jsx-a11y/label-has-associated-control */
import cn from 'classnames';
import DayPickerInput from 'react-day-picker/DayPickerInput';

const InputDatePicker = ({ onDayClick, icon, placeholder, classNames, inputClassNames }) => (
  <div className={cn('Input field-group', classNames)}>
    <div className="field-icon">
      <img src={`/images/icon/${icon}.svg`} alt="icon" />
    </div>
    <span className="field-divider" />
    <DayPickerInput
      placeholder={placeholder}
      classNames={inputClassNames}
      onDayChange={onDayClick}
    />
  </div>
);

InputDatePicker.defaultProps = {
  placeholder: '',
};

export default InputDatePicker;
