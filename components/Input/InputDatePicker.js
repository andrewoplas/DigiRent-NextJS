/* eslint-disable jsx-a11y/label-has-associated-control */
import cn from 'classnames';
import DayPickerInput from 'react-day-picker/DayPickerInput';

const InputDatePicker = ({ onDayClick, icon, classNames, inputClassNames }) => (
  <div className={cn('Input field-group', classNames)}>
    <div className="field-icon">
      <img src={`/images/icon/${icon}.svg`} alt="icon" />
    </div>
    <span className="field-divider" />
    <DayPickerInput classNames={inputClassNames} onDayChange={onDayClick} />
  </div>
);

InputDatePicker.defaultProps = {
  placeholder: '',
};

export default InputDatePicker;
