import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { styles } from "./styles";
import { gsap } from "gsap";

const HomeScreen = () => {
  const textAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    gsap.fromTo(
      ".shred-text",
      { opacity: 0, y: 50, skewX: 15 },
      { opacity: 1, y: 0, skewX: 0, duration: 1, stagger: 0.3 }
    );

    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={[styles.title, { opacity: fadeIn }]} className="shred-text">
          Community Development Sierra Leone
        </Text>
        <Text style={[styles.subtitle, { opacity: fadeIn }]} className="shred-text">
          Empowering communities through sustainable growth
        </Text>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={[styles.heroText, { opacity: fadeIn }]} className="shred-text">
          Join Our Mission
        </Text>
        <Text style={[styles.description, { opacity: fadeIn }]} className="shred-text">
          We work to improve education, healthcare, and sustainable projects in our local communities.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Involved</Text>
        </TouchableOpacity>
      </View>

      {/* Feature Cards */}
      <View style={styles.features}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Education Support</Text>
          <Text style={styles.cardText}>Providing scholarships & resources to students in need.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Healthcare Initiatives</Text>
          <Text style={styles.cardText}>Improving access to medical services.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sustainable Development</Text>
          <Text style={styles.cardText}>Empowering communities through self-sustaining projects.</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
