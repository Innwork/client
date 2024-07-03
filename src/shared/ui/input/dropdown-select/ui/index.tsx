import { FC } from "react";
import cls from "@src/shared/ui/input/dropdown-select/styles/DropDown.module.scss";
import { useCombobox } from "downshift";
import { useClass } from "@src/shared/hooks";
import { TextModule } from "@src/shared/scss";
import { CSSTransition } from "react-transition-group";
import { useTranslation } from "react-i18next";
import {IDropDownSelect} from "@src/shared/ui/input/dropdown-select/type/DropDownType";

export const DropDownSelect: FC<IDropDownSelect> = (props) => {
  const {
    placeholder,
    data,
    state,
    setValue,
    icon = false,
    up = false,
    label,
    i18 = true,
  } = props;

  const {
    selectedItem,
    isOpen,
    getMenuProps,
    getItemProps,
    getToggleButtonProps,
    getInputProps,
  } = useCombobox({
    items: data,
    onSelectedItemChange: ({ selectedItem }) => {
      if (setValue) {
        setValue(selectedItem);
      }
    },
  });

  const { t } = useTranslation("main");

  return (
    <div className={cls.drop_container}>
      <label className={TextModule.span}>{label}</label>
      <button
        className={useClass([
          cls.button_toggle,
          icon ? cls["buttonIcon"] : "",
          cls[state],
        ])}
        {...getToggleButtonProps()}
      >
        {selectedItem ? (
          icon ? (
            <img src={selectedItem} alt={selectedItem} />
          ) : (
            <p className={TextModule.paragraph}>
              {i18 ? t(selectedItem) : selectedItem}
            </p>
          )
        ) : icon ? (
          <img src={placeholder} alt={placeholder} />
        ) : (
          <p className={TextModule.paragraph}>
            {i18 ? t(placeholder) : placeholder}
          </p>
        )}

        {!icon && (
          <div className={cls.button_toggle_svg_container}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={
                up
                  ? isOpen
                    ? cls.button_toggle_svg_active__up
                    : cls.button_toggle_svg__up
                  : isOpen
                    ? cls.button_toggle_svg_active
                    : cls.button_toggle_svg
              }
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
        )}
      </button>

      <CSSTransition
        classNames={{
          enter: cls.ul_select__enter,
          enterActive: cls.ul_select__enter_active,
          exit: cls.ul_select__exit,
          exitActive: cls.ul_select__exit_actvie,
        }}
        timeout={300}
        in={isOpen}
        unmountOnExit
      >
        <div>
          <ul
            {...getMenuProps({}, { suppressRefError: true })}
            className={useClass([
              cls[state],
              up ? cls.ul_select_up : cls.ul_select,
              icon
                ? useClass([cls["buttonIcon"], cls["removeScroll"]])
                : "",
            ])}
          >
            {data.map((item, index) => (
              <li {...getItemProps({ item, index })} key={index}>
                {icon ? (
                  <img src={item} alt={item} key={index} />
                ) : (
                  <p className={TextModule.paragraph} key={index}>
                    {i18 ? t(item) : item}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition>

      <input {...getInputProps()} style={{ display: "none" }} />
    </div>
  );
};
