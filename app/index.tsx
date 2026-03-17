import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <LinearGradient
      colors={["#0f172a", "#111827", "#020617"]}
      style={styles.container}
    >
      <StatusBar style="light" />

      <View style={styles.card}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>WELCOME</Text>
        </View>

        <Text style={styles.title}>Dylan Shenn</Text>
        <Text style={styles.subtitle}>
          Mabayambang
        </Text>

        <View style={styles.line} />

        
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "rgba(15, 23, 42, 0.88)",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.18)",
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#22c55e",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 18,
  },
  badgeText: {
    color: "#03120a",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#f8fafc",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#94a3b8",
    marginTop: 8,
    textAlign: "center",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(148, 163, 184, 0.18)",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    color: "#cbd5e1",
    textAlign: "center",
    lineHeight: 22,
  },
});