import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Switch } from 'react-native';

export default function App() {
  const [consent, setConsent] = useState(false);
  const [step, setStep] = useState('home');

  if (step === 'home') {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>🕊️ PeacePad</Text>
        <Text style={styles.tagline}>One voice at a time</Text>
        <Button title="Start Session" onPress={() => setStep('consent')} />
      </View>
    );
  }

  if (step === 'consent') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Consent Required</Text>
        <Text style={styles.text}>PeacePad only records with consent from both parents.</Text>
        <View style={styles.checkboxRow}>
          <Switch value={consent} onValueChange={setConsent} />
          <Text style={styles.text}>I agree to be recorded.</Text>
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: consent ? '#FFA726' : '#ccc' }]}
          disabled={!consent}
          onPress={() => alert('Session would start now!')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF8EE' },
  logo: { fontSize: 36, fontWeight: 'bold', color: '#253858', marginBottom: 10 },
  tagline: { fontSize: 18, color: '#FFA726', marginBottom: 40 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#253858', marginBottom: 15 },
  text: { fontSize: 16, color: '#253858' },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  button: { padding: 12, borderRadius: 7, marginTop: 20, width: 150, alignItems: 'center' },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});
