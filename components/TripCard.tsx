
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { Image, Pressable, StyleSheet, Text, View, } from "react-native";
export default function TripCard({ trip }: { trip: any }) {
  
  const departure = parseISO(trip.date + "T" + trip.time);

  const dateLabel = format(
    departure,
    "EEEE d MMMM 'à' HH'h'mm",
    { locale: fr }
  );

  return (
    <Pressable
      onPress={() =>
        console.log(
          "Trajet sélectionné : " +
            trip.departure +
            " → " +
            trip.arrival
        )
      }
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
    >
      <View style={styles.row}>
        <Text style={styles.route}>
          {trip.departure} → {trip.arrival}
        </Text>

        <Text style={styles.price}>{trip.price} €</Text>
      </View>

      <Text style={styles.info}>
        {dateLabel}
      </Text>


      <Text style={styles.info}>
        {trip.seatsAvailable} places disponibles
      </Text>

      {trip.seatsAvailable <= 1 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            Dernières places
          </Text>
        </View>
      )}

      <View style={styles.driverRow}>
        <Image
          source={{ uri: trip.driver.avatarUrl }}
          style={styles.avatar}
        />

        <Text style={styles.driver}>
          {trip.driver.name}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  cardPressed: {
    opacity: 0.7,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  route: {
    fontSize: 18,
    fontWeight: "600",
    color: "#161B33",
    marginTop: 8,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3ED9C4",
  },

  info: {
    fontSize: 14,
    marginTop: 8,
    color: "#555555",
  },

  badge: {
    backgroundColor: "#FF6B3D",
    padding: 6,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 8,
  },

  badgeText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
  },

  driverRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  driver: {
    fontSize: 14,
    color: "#555555",
  },
});
