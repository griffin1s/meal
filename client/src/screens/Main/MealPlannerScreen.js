import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");

import DateDisplay from "../../components/MealPlanner/DateDisplay";
import MealCard from "../../components/MealPlanner/MealCard";

const MealPlannerScreen = () => {
  const data = {
    "2024-05-02": {
      breakfast: [
        {
          dish: "eggs",
          nutrients: { protein: 6, fat: 5, carbohydrates: 1, calories: 78 },
        },
        {
          dish: "bacon",
          nutrients: { protein: 3, fat: 12, carbohydrates: 0, calories: 125 },
        },
        // Add more breakfast dishes here...
      ],
      lunch: [
        {
          dish: "chicken salad",
          nutrients: { protein: 15, fat: 10, carbohydrates: 8, calories: 200 },
        },
        {
          dish: "eggs",
          nutrients: { protein: 6, fat: 5, carbohydrates: 1, calories: 78 },
        },
        {
          dish: "bacon",
          nutrients: { protein: 3, fat: 12, carbohydrates: 0, calories: 125 },
        },
      ],
    },
    "2024-05-06": {
      breakfast: [
        {
          dish: "eggs",
          nutrients: { protein: 6, fat: 5, carbohydrates: 1, calories: 78 },
        },
        {
          dish: "bacon",
          nutrients: { protein: 3, fat: 12, carbohydrates: 0, calories: 125 },
        },
        // Add more breakfast dishes here...
      ],
      lunch: [
        {
          dish: "chicken salad",
          nutrients: { protein: 15, fat: 10, carbohydrates: 8, calories: 200 },
        },
      ],
    },
  };

  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [meals, setMeals] = useState((data[date] && data[date]) || []);

  useEffect(() => {
    // Оновлюємо заголовок документа, використовуючи API браузера
    if (data[date]) {
      setMeals(data[date]);
    } else {
      setMeals([]);
    }
  }, [date]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <DateDisplay date={date} setDate={setDate} />
      </View>
      <View style={styles.main}>
        <View style={{ flex: 1, paddingHorizontal: 10, gap: 10 }}>
          <FlatList
            data={Object.entries(meals) || []}
            renderItem={({ item }) => (
              <View style={{ gap: 10 }}>
                <Text style={styles.mealTitle}>{item[0]}</Text>

                {item[1].map((meal, index) => {
                  return (
                    <MealCard
                      key={index}
                      dish={meal.dish}
                      nutrients={meal.nutrients}
                      textSize={hp(2.5)}
                    />
                  );
                })}
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
};

export default MealPlannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  mealTitle: {
    fontSize: hp(3),
  },
  top: {
    flex: 0.5,
    justifyContent: "center",
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  main: {
    flex: 6,
  },
});
