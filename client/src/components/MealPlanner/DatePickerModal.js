import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import CalendarPicker from "react-native-calendar-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const DatePickerModal = ({ modalVisible, setModalVisible, date, setDate }) => {
  const [newDate, setNewDate] = useState(new Date(date));
  const [selectedDate, setSelectedDate] = useState(newDate);

  useEffect(() => {
    // Оновлюємо заголовок документа, використовуючи API браузера
    setNewDate(new Date(date));
  }, [date]);

  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      animationType="fade"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <View style={{ alignItems: "center", gap: 10 }}>
            <CalendarPicker
              selectedStartDate={selectedDate}
              initialDate={selectedDate}
              defaultMonth={selectedDate}
              width={wp(90)} // Set a specific width for the calendar
              height={hp(50)} // Set a specific height for the calendar
              textStyle={{ fontSize: hp(1.8) }}
              startFromMonday={true} // Example: customize the calendar
              weekdays={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]} // Example: customize the calendar
              onDateChange={(date) => {
                setNewDate(date);
              }}
            />
          </View>

          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              gap: 25,
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Pressable
                style={styles.modalButton}
                onPress={() => {
                  setDate(newDate.toISOString().slice(0, 10));
                  setSelectedDate(newDate);
                  setModalVisible(false);
                }}
              >
                <Text style={{ fontSize: hp(1.9), color: "#3B71F3" }}>
                  Save
                </Text>
              </Pressable>
            </View>
            <View style={{ flex: 1 }}>
              <Pressable
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ fontSize: hp(1.9) }}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DatePickerModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    justifyContent: "space-between",
    width: wp(95),
    height: hp(48),
    backgroundColor: "white",
    padding: 20,

    borderRadius: 10,
  },
  modalButton: {},
});
