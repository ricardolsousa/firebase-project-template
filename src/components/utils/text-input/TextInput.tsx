type TextInputProps = {
  label?: string;
  value: string | number;
  onChange?: (data: any) => void;
  placeholder?: string;
  classes?: any;
  styles?: any;
  disabled?: boolean;
};

const TextInput = ({
  label,
  styles,
  classes,
  placeholder,
  value,
  disabled,
  onChange,
}: TextInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-bold">{label}</label>}
      <input
        type="text"
        style={styles}
        className={classes}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
