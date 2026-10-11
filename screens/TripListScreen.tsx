
import { FlatList, StyleSheet, Text, View } from "react-native";
import TripCard from "../components/TripCard";
import { mockTrips } from "../data/mockTrips";

export default function TripListScreen() {
  return (
    <FlatList
      data={mockTrips}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TripCard trip={item} />}
      contentContainerStyle={{ padding: 16, gap: 12 }}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.headerText}>
            {mockTrips.length} trajets disponibles
          </Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
