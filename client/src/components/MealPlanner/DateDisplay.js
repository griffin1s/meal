import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DateToggleArrow from "./DateToggleArrow";
import DatePickerModal from "./DatePickerModal";

const DateDisplay = ({ date, setDate }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleNextDate = () => {
    const currentDate = new Date(date);
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    setDate(nextDay.toISOString().slice(0, 10));
  };

  const handlePrevDate = () => {
    const currentDate = new Date(date);
    const prevDay = new Date(currentDate);
    prevDay.setDate(currentDate.getDate() - 1);
    setDate(prevDay.toISOString().slice(0, 10));
  };

  return (
    <>
      <View style={styles.container}>
        <DateToggleArrow
          size={hp(3.2)}
          color={"black"}
          name="left"
          toggle={handlePrevDate}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={{ fontSize: hp(3) }}>
            {date === new Date().toISOString().slice(0, 10) ? "Today" : date}
          </Text>
        </TouchableOpacity>
        <DateToggleArrow
          size={hp(3.2)}
          color={"black"}
          name="right"
          toggle={handleNextDate}
        />

        {/* {showPicker && (
          <DatePickerComponent
            date={new Date(date)}
            showPicker={showPicker}
            onChange={onChange}
            toggleDatePicker={toggleDatePicker}
          />
        )} */}
        <DatePickerModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          date={date}
          setDate={setDate}
        />
      </View>
    </>
  );
};

export default DateDisplay;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});
