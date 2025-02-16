type NumberInputProps = {
  label?: string;
  value: string | number;
  max?: number;
  min?: number;
  onChange: (data: any) => void;
  placeholder?: string;
  classes?: any;
  styles?: any;
};

const NumberInput = ({
  label,
  value,
  max,
  min,
  styles,
  classes,
  placeholder,
  onChange,
}: NumberInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-bold">{label}</label>}
      <input
        type="number"
        style={styles}
        className={classes}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        max={max}
        min={min}
      />
    </div>
  );
};

export default NumberInput;
