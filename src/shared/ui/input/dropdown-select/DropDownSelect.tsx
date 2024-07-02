import {FC} from "react";
import classes from "@src/shared/ui/input/dropdown-select/DropDown.module.scss";
import {useCombobox} from "downshift";
import {useClass} from "@src/shared/hooks";
import {TextModule} from "@src/shared/scss";
import {CSSTransition} from "react-transition-group";
import {useTranslation} from "react-i18next";

export interface IDropDownSelect {
  data: Array<string>;
  placeholder: string;
  state: "dark" | "white";
  setValue?: (i: string) => void;
  icon?: boolean
  up?: boolean
  label?: string
  i18?: boolean
}

export const DropDownSelect: FC<IDropDownSelect> = (props) => {
  const {
    placeholder,
    data,
    state,
    setValue,
    icon = false,
    up = false,
    label,
    i18 = true
  } = props;

  const {
    selectedItem, isOpen, getMenuProps, getItemProps, getToggleButtonProps
  } = useCombobox({
    items: data, onSelectedItemChange: ({selectedItem}) => {
      if (setValue) {
        setValue(selectedItem)
      }
    }
  })

  const {t} = useTranslation('main')

  return (
    <div className={classes.drop_container}>
      <label className={TextModule.span}>
        {label}
      </label>
      <button className={
        useClass([
          classes.button_toggle, icon ? classes['buttonIcon'] : '', classes[state]
        ])
      } {...getToggleButtonProps()}>
        {selectedItem ?
          (icon ? <img src={selectedItem} alt={selectedItem}/>
            : <p className={TextModule.paragraph}>{i18 ? t(selectedItem) : selectedItem}</p>)
          : (icon ? <img src={placeholder} alt={placeholder}/>
            : <p className={TextModule.paragraph}>{i18 ? t(placeholder) : placeholder}</p>)
        }

        {!icon &&
          <div className={classes.button_toggle_svg_container}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className={
                   up ? isOpen ? classes.button_toggle_svg_active__up : classes.button_toggle_svg__up
                     : isOpen ? classes.button_toggle_svg_active : classes.button_toggle_svg
                 }
                 viewBox="0 0 16 16">
              <path fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
        }
      </button>

      <CSSTransition
        classNames={{
          enter: classes.ul_select__enter,
          enterActive: classes.ul_select__enter_active,
          exit: classes.ul_select__exit,
          exitActive: classes.ul_select__exit_actvie
        }} timeout={300} in={isOpen} unmountOnExit>
        {
          <ul className={useClass(
            [classes[state], up ? classes.ul_select_up : classes.ul_select,
              icon ? useClass([classes['buttonIcon'], classes['removeScroll']]) : '',]
          )} {...getMenuProps()}>
            {data.map((item, index) => (
              <li {...getItemProps({item, index})} key={index}>
                {icon ? <img src={item} alt={item} key={index}/> :
                  <p className={TextModule.paragraph} key={index}>{i18 ? t(item) : item}</p>}
              </li>
            ))}
          </ul>
        }
      </CSSTransition>
    </div>
  );
};