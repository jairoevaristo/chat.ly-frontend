import { forwardRef, HtmlHTMLAttributes, ReactNode, useEffect, useState } from "react"


export type TextInputProps = HtmlHTMLAttributes<HTMLInputElement> & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type?: string;
  name: string;
  label?: string;
  value: string;
  error?: string;
  onClickRightIcon?: () => void;
  onClickLeftIcon?: () => void;
}

export const TextInput: React.ForwardRefExoticComponent<TextInputProps> = forwardRef(({ name, value, error, type = 'text', leftIcon, rightIcon, onClickLeftIcon, onClickRightIcon, label, ...rest }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    if (!error) {
      setIsFocused(true);
    }
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value)
    
  }
  
  return (
    <div className="flex flex-col justify-start w-full">
      {label && <label className="font-bold text-blue-800 text-lg">{label}</label>}
      <div onBlur={handleInputBlur} className={`border w-full border-gray-200 py-3 px-2 rounded-md flex items-center mt-2 ${(isFocused) && 'ring-offset-2 ring-2 border-0 ring-blue-200'} ${error && 'border-2 border-red-600'}`}>
        <div className="mr-2" onClick={onClickLeftIcon}>
          {leftIcon}
        </div>
        <input 
          type={type}
          value={value}
          onFocus={handleInputFocus}
          name={name}
          className="w-full outline-none bg-none" 
          {...rest}
        />
        <div className="cursor-pointer" onClick={onClickRightIcon}>
          {rightIcon}
        </div>
      </div>

    </div>
  )
})