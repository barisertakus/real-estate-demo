import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Dropdown as RnDropdown } from "react-native-element-dropdown";
import Text from "./Text";
import Colors from "../../constants/Colors";
import rf from "../../utils/responsiveFont";
import { IProps } from "react-native-element-dropdown/src/components/Dropdown/model";

interface IDropdownProps {
  data: {
    label: string;
    value: string;
  }[];
  label?: string;
  handleChange?: (text: string) => void;
}

const Dropdown = ({ data, label, handleChange }: IDropdownProps) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const onChange = (item: React.RefAttributes<any> & IProps) => {
    setValue(item.value);
    setIsFocus(false);
    if (handleChange) {
      handleChange(item.value);
    }
  };

  return (
    <>
      <Text title={label} p style={{ color: Colors.primaryText }} />
      <RnDropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChange}
      />
    </>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    backgroundColor: "transparent",
    borderBottomColor: Colors.primaryText,
    borderBottomWidth: 2,
  },
  placeholderStyle: {
    fontSize: rf(14),
  },
  selectedTextStyle: {
    fontSize: rf(14),
  },
  iconStyle: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: rf(14),
  },
});
