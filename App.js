import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        {/* 목표 입력 */}
        <TextInput placeholder='Your course goal!'/>
        <Button title="Add Goal" />
        </View>
      <View>
        {/* 목표 출력 */}
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  }
});